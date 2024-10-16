import { Link } from "react-router-dom";
import { useState } from "react";
import { IBlogCard } from "./types";

interface BlogCardProps extends IBlogCard {
  className?: string;
  content?:string, 
    date: string, 
    id: string, 
    imgPath: string, 
    height?: string, 
    title: string
}

export default function BlogCard({
  className,
  content,
  date,
  id,
  imgPath,
  height,
  title,
}: BlogCardProps) {
  const [data, setData] = useState({
    path: `/blog/content/${id}`,
  });

  return (
    <Link className={className} id={id} to={data.path}>
      <div className="big-card__photo">
        <img
          className="w-full"
          src={imgPath}
          alt=""
          height={height}
        />
      </div>
      <div className="big-card__date">
        <p className="text-xs md:text-sm">{date}</p>
      </div>
      <div className="big-card__title">
        <h1 className="text-lg md:text-xl font-bold text-left">{title}</h1>
      </div>
      {content ? (
        <div className="big-card__description">
          <p className="text-sm md:text-base">{content}</p>
        </div>
      ) : (
        <hr className="w-full" />
      )}
    </Link>
  );
}