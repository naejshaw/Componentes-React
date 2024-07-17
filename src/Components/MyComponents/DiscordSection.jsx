export default function DiscordSection({className, content, contentClass, id, title, titleClass}) {
    return (
        <>
            <section
                className={className}
                id={"section-" + id}
            >
                <picture className="w-1/2 block">
                    <source
                        media="(min-width: 429px)"
                        srcSet={"https://naejshaw.github.io/discord-clone/assets/img/desk-sec-img-"+id+".png"}
                    />
                    <source srcSet={"https://naejshaw.github.io/discord-clone/assets/img/sec-img-"+id+".png"} />
                    <img
                        src={"https://naejshaw.github.io/discord-clone/assets/img/sec-img-"+id+".png"}
                        alt=""
                    />
                </picture>
                <div className="w-5/12 flex flex-col gap-4 justify-between">
                    <h2 className={titleClass}>
                        {title}
                    </h2>
                    <p className={contentClass}>
                        {content}
                    </p>
                </div>
            </section>
        </>
    );
}
