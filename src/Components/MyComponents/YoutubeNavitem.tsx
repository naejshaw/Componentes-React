import { Link } from "react-router-dom";
import { IYoutubeNavitem } from "./types";

export default function YoutubeNavitem({
    navIcon,
    title,
}: IYoutubeNavitem) {
    // Construct the path directly from the title
    const path = `/youtube/${title}`;

    // Construct the image URL
    const iconUrl = `https://raw.githubusercontent.com/naejshaw/youtube-clone-grid/main/assets/${navIcon}.png`;

    return (
        <Link to={path} aria-label={`Navigate to ${title}`}>
            <section className="flex items-center">
                <img
                    className="ml-1 h-5 w-5 lg:h-6 lg:w-6"
                    src={iconUrl}
                    alt={`${navIcon} icon`}
                />
                <p className="ml-4 text-xs lg:text-sm">{title}</p>
            </section>
        </Link>
    );
}