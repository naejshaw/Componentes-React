import { Link } from "@inertiajs/react";

export default function ResumeSection({children, title}) {
    return (
        <>
            <section className="flex flex-col w-full my-4 mx-0 border border-solid border-[#fff] acordeon">
                <button
                    className="flex justify-between items-center text-2xl font-bold py-4 px-8 bg-transparent text-[#fff] border-none after:content after:inline-block after:w-6 after:h-6 after:bg-no-repeat after:bg-contain after:bg-[url('https://raw.githubusercontent.com/naejshaw/portfolio/1f9b9a79206d5bc0ffeb9c714cc6594ff935eba5/assets/img/icons/arrow-down.svg')] trigger"
                    type="button"
                >
                    <h2 className="m-0 text-2xl text-start">{title}</h2>
                </button>
                {children}
            </section>
        </>
    );
}
