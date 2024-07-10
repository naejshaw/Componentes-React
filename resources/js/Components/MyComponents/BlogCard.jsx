import { Link } from "@inertiajs/react";

export default function BlogCard({className, content, date, id, imgPath, height, title}) {
    return (
        <>
            <Link className={className} id={id} href={"blog/content/" + id}>
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
                    <h1 className="text-lg md:text-xl font-bold text-left">
                        {title}
                    </h1>
                </div>
                {content ? <div className="big-card__description">
                    <p className="text-sm md:text-base">
                            {content}
                    </p>
                </div> :
                <hr className="w-full"/>
                }
            </Link>
        </>
    );
}
