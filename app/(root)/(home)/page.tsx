import Filter from "@/components/shared/Filter";
import LocalSearchBar from "@/components/shared/search/LocalSearchBar";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";
import { HomePageFilters } from "@/constants/Filters";
import { HomeFilters } from "@/components/shared/home/HomeFilters";
import RenderTag from "@/components/shared/navbar/RenderTag";
import Image from "next/image";
import { QuestionCard } from "@/components/shared/home/QuestionCard";
import { getQuestions } from "@/lib/actions/question.actions";

// const questions = [
//   {
//     id: 2,
//     title:
//       "How to deploy a Next.js app to Vercel? How to deploy a Next.js app to Vercel? How to deploy a Next.js app to Vercel?",
//     tags: [
//       {
//         id: 1,
//         name: "javascript",
//       },
//       {
//         id: 2,
//         name: "vercel",
//       },
//     ],
//     votes: 3,
//     answers: 1,
//     views: 700000,
//     askedBy: "Jane Doe",
//     askedAt: "2022-05-12T15:30:00.000Z",
//   },
//   {
//     id: 3,
//     title: "Next.js vs Gatsby: Which framework to choose?",
//     tags: [
//       {
//         id: 1,
//         name: "javascript",
//       },
//       {
//         id: 3,
//         name: "gatsby",
//       },
//     ],
//     votes: 8,
//     answers: 4,
//     views: 25,
//     askedBy: "John Smith",
//     askedAt: "2023-08-21T09:00:00.000Z",
//   },
//   {
//     id: 4,
//     title: "Next.js API routes: How to fetch data?",
//     tags: [
//       {
//         id: 1,
//         name: "javascript",
//       },
//       {
//         id: 4,
//         name: "api",
//       },
//     ],
//     votes: 2,
//     answers: 0,
//     views: 4,
//     askedBy: "Alice Johnson",
//     askedAt: "2023-11-23T18:15:00.000Z",
//   },
//   {
//     id: 5,
//     title: "Next.js dynamic routing: How to create blog posts?",
//     tags: [
//       {
//         id: 1,
//         name: "javascript",
//       },
//       {
//         id: 5,
//         name: "routing",
//       },
//     ],
//     votes: 5,
//     answers: 2,
//     views: 12,
//     askedBy: "Bob Williams",
//     askedAt: "2024-01-10T12:00:00.000Z",
//   },
//   {
//     id: 6,
//     title: "Next.js authentication: How to implement user login?",
//     tags: [
//       {
//         id: 1,
//         name: "javascript",
//       },
//       {
//         id: 6,
//         name: "authentication",
//       },
//     ],
//     votes: 10,
//     answers: 3,
//     views: 30,
//     askedBy: "Emily Jones",
//     askedAt: "2024-03-14T08:30:00.000Z",
//   },
// ];

const Home = async () => {
  const questions = await getQuestions({});
  console.log(questions);
  return (
    <>
      <div className="flex  justify-between px-4 max-sm:flex-col-reverse ">
        <h1 className="h2-bold text-dark200_light900 items-center">
          All Questions
        </h1>
        <Link href="/ask-question" className="flex justify-end max-sm:w-full">
          <Button
            variant={"outline"}
            className="primary-gradient rounded-none p-4 text-light-900 "
          >
            Ask a question
          </Button>
        </Link>
      </div>

      <div className="flex justify-between gap-5 px-4 pt-6 max-sm:flex-col sm:items-center md:flex-row lg:flex-col ">
        <LocalSearchBar
          imgSrc="/assets/icons/search.svg"
          route="/"
          placeholder="localSearch"
          className=""
        />

        <Filter
          filters={HomePageFilters}
          className="min-h-[56px] sm:min-w-[170px]"
          containerClassNames="hidden max-md:flex"
        />
      </div>
      <HomeFilters />

      <div className="mt-5 flex w-full flex-col gap-3">
        {questions.map((question) => (
          <QuestionCard key={question._id} question={question} />
        ))}
      </div>
    </>
  );
};

export default Home;
