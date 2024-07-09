export default function Section({ children, className, id, title, titleSpan })
{
    return(<>
        <section className={className} id={id}>
            <h2 className="relative text-5xl md:text-6xl lg:text-7xl mb-12 text-center heading">
                {title} <span className="text-[#00abf0]">{titleSpan}</span>
                <span className="animate scroll" />
            </h2>
            {children}
        </section>
    </>);
}
