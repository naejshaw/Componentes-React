import { Link } from "react-router-dom";
import Site from "../../../Layouts/SiteLayout";

export default function Home() {
    return (
        <>
            <head title="Blog" />
            <Site>
                <div className="w-full px-10 pt-24 flex justify-start">
                    <div className="w-7/12 mx-2 mt-4">
                        <div className="w-full" id="1">
                            <div className="big-card__photo">
                                <img
                                className="w-full"
                                src="https://wallpapers.com/images/featured/angular-85vhooptaw06gumk.jpg"
                                alt=""
                                height="240px"
                                />
                            </div>
                            <div className="big-card__date">
                                <p>09 de Setembro, 2023</p>
                            </div>
                            <div className="big-card__title">
                                <h1><Link href="blog/content/1">Bem vindo ao Angular</Link></h1>
                            </div>
                            <div className="big-card__description">
                                <p>
                                <Link href="blog/content/1">"O Angular é uma estrutura de conceção de aplicações e uma plataforma de desenvolvimento para criar aplicações de página única eficientes e sofisticadas."</Link>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="w-5/12 mx-2 flex flex-col items-center justify-evenly">
                        <div className="flex flex-col flex-nowrap gap-4 w-7/12 my-4" id="2">
                        <div className="w-full">
                            <div className="small-card__photo">
                                <img
                                className="w-full"
                                src="https://rare-gallery.com/thumbs/920628-macro-depth-of-field-programming-language-code-pixels.jpg"
                                alt=""
                                />
                                </div>
                                <div className="small-card__content">
                                    <div className="small-card__date">
                                        <p>15 de Janeiro, 2023</p>
                                    </div>
                                    <div className="small-card__title">
                                        <h1><Link href="blog/content/2">Aprenda a programar do zero</Link></h1>
                                    </div>
                                </div>
                            </div>

                            <div className="container__small-card__separator">
                                <hr/>
                            </div>
                        </div>
                        <div className="flex flex-col flex-nowrap gap-4 w-7/12 my-4" id="3">
                            <div className="w-full">
                                <div className="small-card__photo">
                                <img
                                className="w-full"
                                src="https://sujeitoprogramador.com/wp-content/uploads/2023/05/coverfrt.png"
                                alt=""
                                />
                                </div>
                                <div className="small-card__content">
                                <div className="small-card__date">
                                    <p>09 de Setembro, 2023</p>
                                </div>
                                <div className="small-card__title">
                                    <h1><Link href="blog/content/3">Roadmap Completo para se Tornar um Desenvolvedor Frontend do Zero</Link></h1>
                                </div>
                                </div>
                            </div>

                            <div className="container__small-card__separator">
                                <hr/>
                            </div>
                        </div>
                        <div className="flex flex-col flex-nowrap gap-4 w-7/12 my-4" id="4">
                            <div className="w-full">
                                <div className="small-card__photo">
                                <img
                                className="w-full"
                                src="https://devporai.com.br/wp-content/uploads/2021/05/Frontend-Entendendo-Conceitos-Basicos-1.png"
                                alt=""
                                />
                                </div>
                                <div className="small-card__content">
                                <div className="small-card__date">
                                    <p>29 de Setembro, 2022</p>
                                </div>
                                <div className="small-card__title">
                                    <h1><Link href="blog/content/4">Frontend - Entendendo Conceitos Básicos</Link></h1>
                                </div>
                                </div>
                            </div>

                            <div className="container__small-card__separator">
                                <hr/>
                            </div>
                        </div>
                    </div>
                </div>
            </Site>
        </>
    );
}