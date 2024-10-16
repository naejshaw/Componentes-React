import { ICard } from "./types";

interface CardProps extends ICard {}

export default function Card({ cardDate, cardText, cardTitle }: CardProps) {
  return (
    <div className="relative pl-8 before:absolute before:top-0 before:-left-[1.1rem] before:w-8 before:h-8 before:bg-primary before:rounded-[50%] education-content">
      <div className="relative p-[1.5rem] border-[.2rem] border-solid border-primary rounded-[.6rem] mb-8 overflow-hidden content">
        <div className="text-lg md:text-xl lg:text-2xl text-primary pb-2 year flex items-center">
          <i className="pr-2 fa fa-calendar" />
          {cardDate}
        </div>
        <h3 className="text-2xl md:text-3xl lg:text-4xl">{cardTitle}</h3>
        <p className="text-lg md:text-xl lg:text-2xl pt-2">{cardText}</p>
      </div>
    </div>
  );
}