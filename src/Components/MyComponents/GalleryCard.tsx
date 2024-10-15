import { useState } from "react";
import { Link } from "react-router-dom";
import { IGalleryCard } from "./types";

export default function GalleryCard({imgPath, id, text, title}:IGalleryCard)
{
    const [data, setData] = useState({
        path: "/gallery/content/" + id
    })
    return(<>
        <div className="relative rounded-3xl overflow-hidden flex portfolio-box" id={id}>
            <img className="w-full ease-linear duration-500 hover:scale-110" src={"https://raw.githubusercontent.com/naejshaw/Portfolio-5/main/images/" + imgPath + ".jpg"} alt=""/>
            <div className="absolute bottom-0 left-0 w-full h-full flex justify-evenly items-center flex-col text-center py-0 px-16 translate-y-48 duration-500 hover:translate-y-0 bg-aux portfolio-layer">
                <Link className="inline-flex justify-center items-center w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 bg-text-w rounded-full" to={data.path}><i className="text-site-bg fa fa-arrow-right"></i></Link>
                <h4 className="text-3xl md:text-4xl lg:text-5xl">{title}</h4>
                <p className="text-lg md:text-xl lg:text-2xl my-1 mx-4">{text}</p>
            </div>
        </div>
    </>)
}
