import Site from "../../../Layouts/SiteLayout";
import BlogCard from "../../../Components/MyComponents/BlogCard";
import imgPathBlog1 from '../../../assets/blog1.jpg';
import imgPathBlog2 from '../../../assets/blog2.jpg';
import imgPathBlog3 from '../../../assets/blog3.png';
import imgPathBlog4 from '../../../assets/blog4.webp';

export default function Home() {
    return (
        <>
            <Site>
                <div className="w-full md:px-10 pt-4 flex flex-col items-center md:flex-row md:items-start md:justify-start">
                    <div className="w-11/12 md:w-7/12 md:mx-2 mt-4">
                        <BlogCard
                            className={"w-full flex flex-col justify-between gap-1 py-1"}
                            content={"O Angular é uma estrutura de conceção de aplicações e uma plataforma de desenvolvimento para criar aplicações de página única eficientes e sofisticadas."}
                            date={"09 de Setembro, 2023"}
                            height={"240px"}
                            id={"1"}
                            imgPath={imgPathBlog1}
                            title={"Bem vindo ao Angular"}
                        />
                    </div>
                    <div className="w-full md:w-5/12 md:mx-2 flex flex-col items-center justify-evenly">
                        <BlogCard
                            className={"flex flex-col flex-nowrap gap-2 w-7/12 my-4 py-1"}
                            date={"15 de Janeiro, 2023"}
                            id={"2"}
                            imgPath={imgPathBlog2}
                            title={"Aprenda a programar do zero"}
                        />
                        <BlogCard
                            className={"flex flex-col flex-nowrap gap-2 w-7/12 my-4 py-1"}
                            date={"09 de Setembro, 2023"}
                            id={"3"}
                            imgPath={imgPathBlog3}
                            title={"Roadmap Completo para se Tornar um Desenvolvedor Frontend do Zero"}
                        />
                        <BlogCard
                            className={"flex flex-col flex-nowrap gap-2 w-7/12 my-4 py-1"}
                            date={"29 de Setembro, 2022"}
                            id={"4"}
                            imgPath={imgPathBlog4}
                            title={"Frontend - Entendendo Conceitos Básicos"}
                        />
                    </div>
                </div>
            </Site>
        </>
    );
}