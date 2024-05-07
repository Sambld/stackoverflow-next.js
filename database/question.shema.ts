import { Schema, model, models, Document } from "mongoose";

export interface QuestionDocument extends Document {
  title: string;
  content: string;
  tags: Schema.Types.ObjectId[];
  autor: Schema.Types.ObjectId;
  views: number;
  upvotes: Schema.Types.ObjectId[];
  downvotes: Schema.Types.ObjectId[];
  answers: Schema.Types.ObjectId[];
  createdAt: Date;
  updatedAt: Date;
}

export const QuestionSchema = new Schema<QuestionDocument>({
  title: {
    type: String,
    required: true,
    trim: true,
    maxlength: 150,
  },
  content: {
    type: String,
    required: true,
    trim: true,
    maxlength: 5000,
  },
  tags: {
    type: [Schema.Types.ObjectId],
    ref: "Tag",
    required: true,
  },
  autor: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  views: {
    type: Number,
    default: 0,
  },
  upvotes: {
    type: [Schema.Types.ObjectId],
    ref: "User",
    default: [],
  },
  downvotes: {
    type: [Schema.Types.ObjectId],
    ref: "User",
    default: [],
  },
  answers: {
    type: [Schema.Types.ObjectId],
    ref: "Answer",
    default: [],
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

export default models.Question ||
  model<QuestionDocument>("Question", QuestionSchema);
