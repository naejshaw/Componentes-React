import { ISection } from "./types";

export default function Section({ children, className, id, title, titleSpan }:ISection)
{
    return(<>
        <section className={className} id={id}>
            <h2 className="relative text-7xl mb-12 text-center heading">
                {title} <span className="text-primary">{titleSpan}</span>
                <span className="animate scroll" />
            </h2>
            {children}
        </section>
    </>);
}
