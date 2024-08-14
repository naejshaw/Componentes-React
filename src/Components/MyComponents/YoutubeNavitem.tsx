import { Link } from "react-router-dom";
import { useState } from "react";
import { IYoutubeNavitem } from "./types";

export default function YoutubeNavitem({navIcon, path, title}:IYoutubeNavitem)
{
    const [data, setData] = useState({
        path: "/youtube/" + title
    })
    return(<>
        <Link to={data.path}>
            <section className="flex items-center">
                <img className="ml-1 h-5 w-5 lg:h-6 lg:w-6" src={"https://raw.githubusercontent.com/naejshaw/youtube-clone-grid/main/assets/" + navIcon + ".png"} alt={`${navIcon} icon`}/>
                <p className="ml-4 text-xs lg:text-sm">{title}</p>
            </section>
        </Link>
    </>)
}
