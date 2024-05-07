"use server";

import Tag, { ITag } from "@/database/tag.model";
import dbConnect from "../mongoose";
import Question from "@/database/question.model";
import { CreateQuestionParams, GetQuestionsParams } from "./shared.types";
import User from "@/database/user.model";
import { revalidatePath } from "next/cache";

export const getQuestions = async ({
  page,
  filter,
  pageSize,
  searchQuery,
}: GetQuestionsParams) => {
  try {
    dbConnect();

    const questions = await Question.find()
      .populate({ path: "tags", model: Tag })
      .populate({ path: "author", model: User })
      .sort({ createdAt: -1 })
      .limit(10)
      .exec();
    return questions;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const createQuestion = async ({
  title,
  content,
  tags,
  author,
  path,
}: CreateQuestionParams) => {
  try {
    dbConnect();

    // Create a new question
    const tagDocuments = [];

    const question = await Question.create({
      title,
      content,
      author,
    });

    for (const tag of tags) {
      const tagDocument = await Tag.findOneAndUpdate(
        {
          name: {
            $regex: new RegExp(`^${tag}$`, "i"),
          },
        },
        {
          $setOnInsert: { name: tag },
          $push: {
            questions: question._id,
          },
        },
        { upsert: true, new: true },
      );
      tagDocuments.push(tagDocument._id);
    }

    await Question.findByIdAndUpdate(question._id, {
      $push: { tags: { $each: tagDocuments } },
    });

    revalidatePath("/");
  } catch (error) {}
};
