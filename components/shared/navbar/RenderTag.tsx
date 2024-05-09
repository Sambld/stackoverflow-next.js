import { Badge } from '@/components/ui/badge'
import Link from 'next/link'
import React, { FC } from 'react'

type RenderTagType = {
  id?: number;
  name: string;
  totalQuestions?: number;
  showCount?: boolean;
  additionalContent?: React.ReactNode;
};

const RenderTag: FC<RenderTagType> = ({
  id,
  name,
  totalQuestions,
  additionalContent
}) => {
  const tagContent = (
    <div className=" flex justify-between">
      <Badge className="subtle-large text-dark500_light500 background-light800_dark300 flex gap-2 rounded-full border-gray-500 px-4 py-1.5">
        <div>{name} </div>
        <>{additionalContent}</>
      </Badge>
      <>
      <span className="subtle-large text-dark200_light800">
        {totalQuestions}
      </span>
      </>
    </div>
  )
  return <>{id ? <Link href={`/tag/${id}`}>{tagContent}</Link> : tagContent}</>
}

export default RenderTag
