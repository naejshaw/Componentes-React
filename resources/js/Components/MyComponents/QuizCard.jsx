import { Link } from "@inertiajs/react";
import { useState } from "react";

export default function QuizCard({description, id, img, title}) 
{
    return (
        <>
            <Link
                href={`/quiz#${id}`}
                className="flex flex-col items-center justify-end w-auto lg:w-5/12 teste"
                id={id}
            >
                <img
                    className="relative"
                    src={img}
                />
                <div className="absolute py-4 flex flex-col gap-2 texto">
                    <h3 className="title">{title}</h3>
                    <p className="description">{description}</p>
                </div>
            </Link>
        </>
    );
}
