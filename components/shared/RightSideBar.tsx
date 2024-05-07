import Image from "next/image";
import Link from "next/link";
import React from "react";
import RenderTag from "./navbar/RenderTag";
function RightSideBar() {
  const hotQuestions = [
    {
      id: 1,
      title: "How to use React Query with TypeScript?",
    },
    {
      id: 2,
      title: "How to change the color of the button on hover in Tailwind CSS?",
    },
    {
      id: 3,
      title: "What are the best practices for error handling in Node.js?",
    },
    {
      id: 4,
      title: "How to implement authentication using JWT in Express.js?",
    },
    {
      id: 5,
      title:
        "What are the differences between var, let, and const in JavaScript?",
    },
  ];

  const hotTags = [
    {
      id: 1,
      name: "React",
      totalQuestions: 1,
    },
    {
      id: 2,
      name: "TypeScript",
      totalQuestions: 2,
    },
    {
      id: 3,
      name: "Node.js",
      totalQuestions: 45,
    },
    {
      id: 4,
      name: "Express.js",
      totalQuestions: 41,
    },
    {
      id: 5,
      name: "JavaScript",
      totalQuestions: 43,
    },
  ];
  return (
    <section className="custom-scrollbar background-light900_dark200  sticky right-0 top-0 h-screen w-[350px] overflow-y-auto p-8 pt-28 shadow-light-300 dark:shadow-none max-xl:hidden ">
      <h3 className="h3-bold text-dark200_light900">Top Questions</h3>

      {hotQuestions.map((question) => (
        <Link key={question.id} href={`/questions/${question.id}`}>
          <div
            key={question.id}
            className="mt-7 flex cursor-pointer justify-between gap-7"
          >
            <p className="small-bigger text-dark500_light700">
              {question.title}
            </p>
            <Image
              src="/assets/icons/chevron-right.svg"
              alt="fire"
              width={20}
              height={20}
              className="invert-colors"
            />
          </div>
        </Link>
      ))}

      <div className="text-dark200_light900  h3-bold mb-4 mt-12 flex w-full flex-col gap-7">
        Related Tags
      </div>

      <div>
        {hotTags.map((tag) => (
          <div className="py-1.5">
            <RenderTag
              key={tag.id}
              id={tag.id}
              name={tag.name}
              totalQuestions={tag.totalQuestions}
            />
          </div>
        ))}
      </div>
    </section>
  );
}

export default RightSideBar;
