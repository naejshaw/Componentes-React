export default function Button({className, children, link, social, title, type}) {
    return (
        <>
            <a
                href={link}
                className={className}
                type={type}
            >
                {title}
                {social ? <i className={"border border-solid border-[#00abf0] w-8 h-8 rounded-full pt-1.5 pl-1.5 hover:bg-[#00abf0] hover:text-[#081b29] duration-700 hover:duration-700 fa fa-" + social} /> : null}
                {children}
            </a>
        </>
    );
}
