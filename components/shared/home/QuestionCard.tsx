import React, { FC } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import RenderTag from '../navbar/RenderTag'
import { Metric } from '../Metric'

interface QuestionCardProps {
  question: {
    _id: string;
    title: string;
    tags: {
      _id: string;
      name: string;
    }[];
    author: {
      _id: string;
      name: string;
      picture: string;
      clerkId: string;
    };
    upvotes: string[];
    views: number;
    answers: Array<object>;
    createdAt: Date;
    clerkId?: string | null;
  };
}

export const QuestionCard: FC<QuestionCardProps> = ({ question }) => {
  return (
    <div className="background-light900_dark200 flex flex-col gap-5 rounded-3xl border px-12 py-6 shadow-current dark:border-none">
      <Link href={`/questions/${question._id}`}>
        <p className="base-semibold text-dark500_light700 break-words">
          {question.title}
        </p>
      </Link>
      <div className="flex gap-4">
        {question.tags.map((tag) => (
          <RenderTag key={tag._id} id={parseInt(tag._id)} name={tag.name} />
        ))}
      </div>
      <div className="flex flex-wrap  justify-between max-md:flex-col  max-md:gap-3">
        <div className="flex items-center gap-2">
          <Image
            src="/assets/icons/account.svg"
            alt="vote"
            width={18}
            height={18}
            className="active-theme"
          />
          <span className="small-bigger text-dark200_light800">
            {question.author.name}
          </span>
          <span className="small-medium text-dark200_light800 ">
            • asked {question.createdAt.toString().slice(0, 10)}
          </span>
        </div>
        <div className="flex items-center gap-5">
          <Metric
            title="Votes"
            value={question.upvotes.length}
            icon="/assets/icons/like.svg"
            alt="vote"
          />

          <Metric
            title="Answers"
            value={question.answers.length}
            icon="/assets/icons/message.svg"
            alt="comment"
          />
          <Metric
            title="Views"
            value={question.views}
            icon="/assets/icons/eye.svg"
            alt="view"
          />
        </div>
      </div>
    </div>
  )
}
