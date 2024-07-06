import Site from "@/Layouts/SiteLayout";
import { Head, Link, router } from "@inertiajs/react";

export default function Home({id})
{
    return(<>
        <Head title="Quiz" />
        <Site>
            <div className="flex flex-col mt-24 h-auto items-center justify-center">
                <h1 className="text-3xl font-bold underline">Quiz</h1>
                <div className="flex items-center justify-center container">
                    {id ?
                    <div className="testes w-11/12 py-8 px-8 flex flex-col justify-center items-center gap-8 lg:flex-row lg:flex-wrap">
                    <div className="flex flex-col items-center justify-end w-auto lg:w-5/12 teste" id="1">
                        <img className="" src="https://img.freepik.com/fotos-premium/arvores-que-crescem-na-floresta_1048944-30368869.jpg?w=740"/>
                        <div className=" py-4 flex flex-col gap-2 texto">
                            <h3 className="title">Titulo</h3>
                            <p className="description">Teste</p>
                        </div>
                    </div>
                </div>

                    :
                    <div className="testes w-11/12 py-8 px-8 flex flex-col justify-center items-center gap-8 lg:flex-row lg:flex-wrap">
                        <Link href={`/quiz#${id}`} className="flex flex-col items-center justify-end w-auto lg:w-5/12 teste" id={id}>
                            <img className="relative" src="https://img.freepik.com/fotos-premium/arvores-que-crescem-na-floresta_1048944-30368869.jpg?w=740"/>
                            <div className="absolute py-4 flex flex-col gap-2 texto">
                                <h3 className="title">Titulo</h3>
                                <p className="description">Teste</p>
                            </div>
                        </Link>
                        <Link href={`/quiz#${id}`} className="flex flex-col items-center justify-end w-auto lg:w-5/12 teste" id={id}>
                            <img className="relative" src="https://img.freepik.com/fotos-premium/arvores-que-crescem-na-floresta_1048944-30368869.jpg?w=740"/>
                            <div className="absolute py-4 flex flex-col gap-2 texto">
                                <h3 className="title">Titulo</h3>
                                <p className="description">Teste</p>
                            </div>
                        </Link>
                    </div>

                    }
                </div>
            </div>
        </Site>
    </>);
}
