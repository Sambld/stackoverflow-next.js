// import User from '@/database/user.model'
import { GetTopInteractedTagsParams } from './shared.types'

export const getTopInteractedTags = async (params : GetTopInteractedTagsParams) => {
//   const { userId, limit } = params
//   const user = User.findById(userId)
  //   if (!user) return []
  return [
    { name: 'tag1', _id: '1' },
    { name: 'tag2', _id: '2' },
    { name: 'tag3', _id: '3' }
  ]
}
