import { Link } from "react-router-dom";
import { useState } from "react";
import { IQuizCard } from "./types";

export default function QuizCard({ description, id, img, title }: IQuizCard) {
  const [data, setData] = useState({
    path: `/quiz/${id}`,
  });

  return (
    <Link
      to={data.path}
      className="flex flex-col items-center justify-end w-auto lg:w-5/12"
      id={id}
      aria-label={title}
    >
      <img
        className="relative w-10/12 lg:h-52"
        src={img}
        alt={title}
        loading="lazy"
      />
      <div className="absolute py-4 flex flex-col gap-2">
        <h3 className="title drop-shadow-[2px_2px_var(--tw-shadow-color)] shadow-black">
          {title}
        </h3>
        <p className="description drop-shadow-[2px_2px_var(--tw-shadow-color)] shadow-black">
          {description}
        </p>
      </div>
    </Link>
  );
}