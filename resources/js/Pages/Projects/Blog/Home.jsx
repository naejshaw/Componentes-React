import BlogCard from "@/Components/MyComponents/BlogCard";
import Site from "@/Layouts/SiteLayout";
import { Head, Link } from "@inertiajs/react";

export default function Home() {
    return (
        <>
            <Head title="Blog" />
            <Site>
                <div className="w-full  md:px-10 pt-24 flex flex-col items-center md:flex-row md:items-start md:justify-start">
                    <div className="w-11/12 md:w-7/12 md:mx-2 mt-4">
                        <BlogCard
                            className={"w-full flex flex-col justify-between gap-1 py-1"}
                            content={"O Angular é uma estrutura de conceção de aplicações e uma plataforma de desenvolvimento para criar aplicações de página única eficientes e sofisticadas."}
                            date={"09 de Setembro, 2023"}
                            height={"240px"}
                            id={"1"}
                            imgPath={"https://wallpapers.com/images/featured/angular-85vhooptaw06gumk.jpg"}
                            title={"Bem vindo ao Angular"}
                        />
                    </div>
                    <div className="w-full md:w-5/12 md:mx-2 flex flex-col items-center justify-evenly">
                        <BlogCard
                            className={"flex flex-col flex-nowrap gap-2 w-7/12 my-4 py-1"}
                            date={"15 de Janeiro, 2023"}
                            id={"2"}
                            imgPath={"https://rare-gallery.com/thumbs/920628-macro-depth-of-field-programming-language-code-pixels.jpg"}
                            title={"Aprenda a programar do zero"}
                        />
                        <BlogCard
                            className={"flex flex-col flex-nowrap gap-2 w-7/12 my-4 py-1"}
                            date={"09 de Setembro, 2023"}
                            id={"3"}
                            imgPath={"https://sujeitoprogramador.com/wp-content/uploads/2023/05/coverfrt.png"}
                            title={"Roadmap Completo para se Tornar um Desenvolvedor Frontend do Zero"}
                        />
                        <BlogCard
                            className={"flex flex-col flex-nowrap gap-2 w-7/12 my-4 py-1"}
                            date={"29 de Setembro, 2022"}
                            id={"3"}
                            imgPath={"https://devporai.com.br/wp-content/uploads/2021/05/Frontend-Entendendo-Conceitos-Basicos-1.png"}
                            title={"Frontend - Entendendo Conceitos Básicos"}
                        />
                    </div>
                </div>
            </Site>
        </>
    );
}
