import { Link } from "react-router-dom";
import { useMemo } from "react";
import { IYoutubeCard } from "./types";

export default function YoutubeCard({
    avatar,
    thumb,
    title,
    transmission,
    views,
}: IYoutubeCard) {
    // Generate a unique ID only once per component instance
    const id = useMemo(() => Math.random().toString(36).slice(2), []);

    // Construct image URLs
    const avatarUrl = `https://raw.githubusercontent.com/naejshaw/youtube-clone-grid/main/assets/${avatar}.png`;
    const thumbUrl = `https://raw.githubusercontent.com/naejshaw/youtube-clone-grid/main/assets/${thumb}.png`;

    return (
        <Link
            className="flex flex-col items-left justify-between cursor-pointer card item-5"
            id={id}
            to={`/youtube/watch?v=${id}`}
            aria-label={`Watch ${title} on YouTube`}
        >
            <img
                src={thumbUrl}
                alt={`${title} thumbnail`}
                className="thumbnail"
            />
            <div className="h-20 grid details">
                <img
                    src={avatarUrl}
                    alt={`${title}'s avatar`}
                    className="mt-4 profile"
                />
                <h5 className="text-xs font-bold title">{title}</h5>
                <p className="text-xs infos" title="infos">
                    {views}
                    <br />
                    {transmission}
                </p>
            </div>
        </Link>
    );
}