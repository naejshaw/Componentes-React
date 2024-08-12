import { Link } from "react-router-dom";
import { useState } from "react";

export default function YoutubeCard({avatar, thumb, title, transmission, views})
{
    const id =  Math.random().toString(36).slice(2)
    const [data, setData] = useState({
        path: "/youtube/watch?v=" + id
    })
    return (
        <>
            <Link className="flex flex-col items-left justify-between cursor-pointer card item-5" id={id} to={data.path}>
                <img
                    src={"https://raw.githubusercontent.com/naejshaw/youtube-clone-grid/main/assets/" + thumb + ".png"}
                    alt={`${thumb} thumb`}
                />
                <div className="h-20 grid details">
                    <img
                        src={"https://raw.githubusercontent.com/naejshaw/youtube-clone-grid/main/assets/" + avatar + ".png"}
                        alt={`${avatar} avatar`}
                        className="mt-4 profile"
                    />
                    <h5 className="text-xs font-bold title">
                        {title}
                    </h5>
                    <p className="text-xs infos" title="infos">
                        {views}
                        <br />
                        {transmission}
                    </p>
                </div>
            </Link>
        </>
    );
}
