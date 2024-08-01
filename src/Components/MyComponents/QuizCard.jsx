import { Link } from "react-router-dom";
import { useState } from "react";

export default function QuizCard({description, id, img, title}) 
{
    const [data, setData] = useState({
        path: "/quiz#" + id
    })
    return (
        <>
            <Link
                to={data.path}
                className="flex flex-col items-center justify-end w-auto lg:w-5/12 teste"
                id={id}
            >
                <img
                    className="relative w-10/12 lg:h-52"
                    src={img}
                    alt=""
                />
                <div className="absolute py-4 flex flex-col gap-2 texto">
                    <h3 className="title">{title}</h3>
                    <p className="description shadow-black">{description}</p>
                </div>
            </Link>
        </>
    );
}
