import { Link } from "@inertiajs/react";

export default function Button({className, link, px, py, social, title, type}) {
    return (
        <>
            <Link
                href={link}
                className={className}
                type={type}
            >
                {title}
                {social ? <i className={"border border-solid border-[#00abf0] w-8 h-8 rounded-full hover:bg-[#00abf0] hover:text-[#081b29] duration-700 hover:duration-700 fa fa-" + social + " py-" + py + " px-" + px} /> : null}
            </Link>
        </>
    );
}
