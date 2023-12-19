import HomeFilters from "@/components/home/HomeFilters";
import QuestionCard from "@/components/cards/QuestionCard";
import Filter from "@/components/shared/Filter";
import NoResult from "@/components/shared/NoResult";
import LocalSearchBar from "@/components/shared/search/LocalSearchBar";
import { Button } from "@/components/ui/button";
import { HomePageFilters } from "@/constants/filters";
import Link from "next/link";

const QuestionProps = [
  {
    _id: 1,
    title: "How to use TypeScript with React?",
    tags: [
      { _id: "tag1", name: "TypeScript" },
      { _id: "tag2", name: "React" },
    ],
    author: {
      _id: "author123",
      name: "John Doe",
      picture: "avatar.jpg",
    },
    upvotes: 42,
    views: 1200,
    answers: [
      {
        text: "You can use the 'create-react-app' TypeScript template.",
        author: "Jane Smith",
      },
      {
        text: "Make sure to install types for React using '@types/react'.",
        author: "Bob Johnson",
      },
    ],
    createdAt: new Date("2023-01-15T08:00:00Z"),
  },
  {
    _id: 2,
    title: "Best practices for writing clean code?",
    tags: [
      { _id: "tag3", name: "Clean Code" },
      { _id: "tag4", name: "Programming" },
    ],
    author: {
      _id: "author456",
      name: "Alice Brown",
      picture: "avatar2.jpg",
    },
    upvotes: 35,
    views: 800,
    answers: [
      {
        text: "Follow the SOLID principles for better code structure.",
        author: "Charlie Green",
      },
      {
        text: "Use meaningful variable and function names.",
        author: "Eve White",
      },
    ],
    createdAt: new Date("2023-02-20T10:30:00Z"),
  },
  {
    _id: 3,
    title: "How to deploy a Node.js application on Heroku?",
    tags: [
      { _id: "tag5", name: "Node.js" },
      { _id: "tag6", name: "Heroku" },
    ],
    author: {
      _id: "author789",
      name: "Robert Black",
      picture: "avatar3.jpg",
    },
    upvotes: 28,
    views: 950,
    answers: [
      {
        text: "Heroku provides a simple deployment process. Just follow their documentation.",
        author: "Grace Grey",
      },
      {
        text: "Make sure to include a 'start' script in your package.json.",
        author: "Daniel Brown",
      },
    ],
    createdAt: new Date("2023-03-10T15:45:00Z"),
  },
];
export default function Home() {
  return (
    <>
      <div className="flex w-full flex-col-reverse justify-between gap-4 sm:flex-row sm:items-center">
        <h1 className="h1-bold text-dark100_light900">All Questions</h1>
        <Link href="/ask-question" className="flex justify-end max-sm:w-full">
          <Button className="primary-gradient min-h-[46px] px-4 py-3 !text-light-900">
            Ask a Question
          </Button>
        </Link>
      </div>
      <div className="mt-11 flex justify-between gap-5 max-sm:flex-col sm:items-center">
        <LocalSearchBar
          route="/"
          iconPosition="left"
          imgSrc="/assets/icons/search.svg"
          placeholder="Search for questions"
          otherClasses="flex-1"
        />
        <Filter
          filters={HomePageFilters}
          otherClasses="min-h-[56px] sm:min-w-[170px]"
          containerClasses="hidden max-md:flex"
        />
      </div>
      <HomeFilters />
      <div className="mt-10 flex w-full flex-col gap-6">
        {QuestionProps.length > 0 ? (
          QuestionProps.map((question) => (
            <QuestionCard
              key={question._id}
              _id={question._id}
              title={question.title}
              tags={question.tags}
              author={question.author}
              upvotes={question.upvotes}
              views={question.views}
              answers={question.answers}
              createdAt={question.createdAt}
            />
          ))
        ) : (
          <NoResult
            title="Theres no question to show"
            description="Be the first to break the silence! 🚀 
      Ask a Question and kickstart the discussion. 
      our query could be the next big thing others learn from. Get involved!"
            link="/ask-question"
            LinkTitle="ask a question"
          />
        )}
      </div>
    </>
  );
}
