import dbConnect from '../mongoose'
import User from '../../database/user.model'
import {
  CreateUserParams,
  DeleteUserParams,
  GetAllUsersParams,
  UpdateUserParams
} from './shared.types'
import { revalidatePath } from 'next/cache'
import Question from '@/database/question.model'

export const getUserById = async (params: any) => {
  try {
    dbConnect()
    const { fakeId } = params
    const user = User.findOne({ clerkId: fakeId })
    return user
  } catch (error) {
    console.log(error)
    throw error
  }
}

export const createUser = async (userParams: CreateUserParams) => {
  try {
    dbConnect()
    const { clerkId, name, username, email, picture } = userParams
    const user = new User({
      clerkId,
      name,
      username,
      email,
      picture
    })
    await user.save()
    return user
  } catch (error) {
    console.log(error)
    throw error
  }
}

export const updateUser = async (userParams: UpdateUserParams) => {
  try {
    dbConnect()
    const { clerkId, updateData, path } = userParams
    await User.findOneAndUpdate({ clerkId }, updateData, {
      new: true
    })

    revalidatePath(path)
  } catch (error) {
    console.log(error)
    throw error
  }
}

export const deleteUser = async (params: DeleteUserParams) => {
  try {
    dbConnect()
    const { clerkId } = params
    const user = await User.findOneAndDelete({ clerkId })
    if (!user) {
      throw new Error('User not found')
    }

    // get user questions and delete them
    const userQuestions = Question.find({ userId: user._id }).distinct('_id')
    userQuestions.deleteMany({ author: user._id })
  } catch (error) {
    console.log(error)
    throw error
  }
}

export const getAllUsers = async (params: GetAllUsersParams) => {
  try {
    dbConnect()
    const { page = 1, pageSize = 10, searchQuery = '' } = params
    const users = await User.find({ name: { $regex: searchQuery, $options: 'i' } })
      .skip((page - 1) * pageSize)
      .limit(pageSize)
      .sort({ createdAt: -1 })

    return users
  } catch (error) {
    console.log(error)
    throw error
  }
}
