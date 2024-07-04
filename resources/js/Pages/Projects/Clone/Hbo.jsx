import { Head, Link } from "@inertiajs/react";
import Home from "./Home";

export default function Hbo()
{
    return(<>
        <Head title="HBO Clone" />
        <Home>
            <div className="flex flex-col justify-center items-center">
                <img className="bg-no-repeat relative" src="https://raw.githubusercontent.com/naejshaw/hbomax/master/assets/images/background-movies-series.png"/>
                <header className="mt-8 pt-16 px-12 after:content after:w-full after:h-64 absolute bottom-0 header">
                    <div className="m-auto flex flex-col items-center gap-8 py-0 px-10 header__content">
                        <div className="flex flex-wrap justify-center gap-6 header__channels">
                            <img className="object-contain header__channel" src="https://raw.githubusercontent.com/naejshaw/hbomax/master/https://raw.githubusercontent.com/naejshaw/hbomax/master/assets/images/hbo.png" alt=""/>
                            <img className="object-contain header__channel" src="https://raw.githubusercontent.com/naejshaw/hbomax/master/assets/images/dc.png" alt=""/>
                            <img className="object-contain header__channel" src="https://raw.githubusercontent.com/naejshaw/hbomax/master/assets/images/wb.png" alt=""/>
                            <img className="object-contain header__channel" src="https://raw.githubusercontent.com/naejshaw/hbomax/master/assets/images/cartoon-network_neutral.png" alt=""/>
                            <img className="object-contain header__channel" src="https://raw.githubusercontent.com/naejshaw/hbomax/master/assets/images/max_originals.png" alt=""/>
                        </div>
                        <h1 className="uppercase text-center text-5xl header__title">
                            <span className="block font-extralight text-3xl header__titleLight">Curta as melhores histórias</span>
                        Para todo mundo
                        </h1>
                        <div className="w-3/4 max-w-2xl h-1 bg-tertiary divider"></div>
                        <div className="text-center text-xl offer">
                            <p className="font-quicksand ">Assinaturas a partir de</p>
                            <p className="font-raleway text-4xl font-bold offer__price">
                                R$14,15
                                <span className="text-base font-light offer__price-small">/mês*</span>
                            </p>
                        </div>
                        <Link href="#subscription" className="py-2 px-6 rounded-2xl bg-primary outline-3 outline-transparent hover:bg-cover hover:outline-2 hover:outline-secondary hover:scale-125  button button-gradient header__button"> Assine Agora </Link>
                        <p className="font-quicksand text-sm top-0 font-light max-w-80 text-center text-small"> *aplicável ao plano anual com o<br/>pagamento antecipado. </p>
                    </div>
                </header>
                <main className="bg-cover bg-primary">
                    <section id="subscription" className="relative subscription">
                        <div className="max-w-7xl m-auto p-6 text-center container">
                        <h2 className="text-3xl font-medium title">Conheça nossos planos e economize na assinatura trimestral ou anual com o<br/>pagamento antecipado.</h2>
                        <div className="flex justify-around gap-20 my-10 mx-0 row-cards">
                            <div className="bg-flipCardBg rounded-lg flex flex-col justify-between gap-8 py-16 px-8 card">
                                <div className="flex flex-col gap-4">
                                    <div className="flex px-8 text-xl mb-4 justify-between card-header">
                                        <h3>Mobile</h3>
                                        <p className="font-raleway text-secondary font-bold text-3xl subscription__price">R$ 19,90 <span className="text-white text-base font-light text-small">/mês</span></p>
                                    </div>
                                    <ul className="flex flex-col gap-4 text-left card-benefits">
                                        <li className="text-left list-none text-xl mb-3.5 pl-3.5 marker:content-['+'] marker:text-3xl marker:my-0 marker:ml-0 marker:mr-2 benefits-description">Aproveite em smartphones e tablets, onde quiser.</li>
                                        <li className="text-left list-none text-xl mb-3.5 pl-3.5 marker:content-['+'] marker:text-3xl marker:my-0 marker:ml-0 marker:mr-2 benefits-description">Assista em 1 tela por vez.</li>
                                        <li className="text-left list-none text-xl mb-3.5 pl-3.5 marker:content-['+'] marker:text-3xl marker:my-0 marker:ml-0 marker:mr-2 benefits-description">Tenha conteúdo em resolução adaptada para cada dispositivo.</li>
                                        <li className="text-left list-none text-xl mb-3.5 pl-3.5 marker:content-['+'] marker:text-3xl marker:my-0 marker:ml-0 marker:mr-2 benefits-description">Baixe suas séries e filmes favoritos, assista onde e quando quiser.</li>
                                    </ul>
                                </div>
                                <button className="outline-3 outline-transparent hover:bg-transparent hover:bg-cover hover:outline-2 hover:outline-secondary hover:scale-125  button button-gradient py-2 px-10 bg-tertiary rounded-3xl">Escolher o plano Mobile</button>
                            </div>
                            <div className="bg-flipCardBg rounded-lg flex flex-col justify-between gap-8 py-16 px-8 card">
                                <div className="flex flex-col gap-4">
                                    <div className="flex px-8 text-xl mb-4 justify-between card-header">
                                        <h3>Multitelas</h3>
                                        <p className="font-raleway text-secondary font-bold text-3xl subscription__price">R$ 27,90 <span className="text-white text-base font-light text-small">/mês</span></p>
                                    </div>
                                    <ul className="flex flex-col gap-4 text-left card-benefits">
                                        <li className="text-left list-none text-xl mb-3.5 pl-3.5 marker:content-['+'] marker:text-3xl marker:my-0 marker:ml-0 marker:mr-2 benefits-description">Aproveite em todos os seus dispositivos.</li>
                                        <li className="text-left list-none text-xl mb-3.5 pl-3.5 marker:content-['+'] marker:text-3xl marker:my-0 marker:ml-0 marker:mr-2 benefits-description">Chromecast e Airplay disponíveis.</li>
                                        <li className="text-left list-none text-xl mb-3.5 pl-3.5 marker:content-['+'] marker:text-3xl marker:my-0 marker:ml-0 marker:mr-2 benefits-description">Assista em até 3 telas ao mesmo tempo.</li>
                                        <li className="text-left list-none text-xl mb-3.5 pl-3.5 marker:content-['+'] marker:text-3xl marker:my-0 marker:ml-0 marker:mr-2 benefits-description">Tenha conteúdo em alta definição, com qualidade 4K.</li>
                                        <li className="text-left list-none text-xl mb-3.5 pl-3.5 marker:content-['+'] marker:text-3xl marker:my-0 marker:ml-0 marker:mr-2 benefits-description">Baixe suas séries e filmes favoritos, assista onde e quando quiser.</li>
                                        <li className="text-left list-none text-xl mb-3.5 pl-3.5 marker:content-['+'] marker:text-3xl marker:my-0 marker:ml-0 marker:mr-2 benefits-description">Crie até 5 perfis diferentes.</li>
                                    </ul>
                                </div>
                                <button className="outline-3 outline-transparent hover:bg-transparent hover:bg-cover hover:outline-2 hover:outline-secondary hover:scale-125  button button-gradient py-2 px-10 bg-tertiary rounded-3xl">Escolher o plano Multitelas</button>
                            </div>
                        </div>
                        </div>
                    </section>
                    <section id="content" className="bg-cover content max-w-7xl w-full m-auto p-6 text-center container">
                        <h2 className="text-3xl font-medium title">Descubra novos universos</h2>
                        <div className="mt-10 grid grid-cols-3 gap-10 content__container">
                            <div className="rounded-2xl bg-no-repeat bg-cover bg-center border-spacing-0.5 border-solid border-transparent hover:border-tertiary content__card">
                                <img src="https://raw.githubusercontent.com/naejshaw/hbomax/master/assets/images/hbo-default_0.webp" alt="" className="w-full object-cover object-center content__img"/>
                            </div>
                            <div className="rounded-2xl bg-no-repeat bg-cover bg-center border-spacing-0.5 border-solid border-transparent hover:border-tertiary content__card">
                                <img src="https://raw.githubusercontent.com/naejshaw/hbomax/master/assets/images/MAX-Default.webp" alt="" className="w-full object-cover object-center content__img"/>
                            </div>
                            <div className="rounded-2xl bg-no-repeat bg-cover bg-center border-spacing-0.5 border-solid border-transparent hover:border-tertiary content__card">
                                <img src="https://raw.githubusercontent.com/naejshaw/hbomax/master/assets/images/DC_Default.webp" alt="" className="w-full object-cover object-center content__img"/>
                            </div>
                            <div className="rounded-2xl bg-no-repeat bg-cover bg-center border-spacing-0.5 border-solid border-transparent hover:border-tertiary content__card">
                                <img src="https://raw.githubusercontent.com/naejshaw/hbomax/master/assets/images/WB-Default.webp" alt="" className="w-full object-cover object-center content__img"/>
                            </div>
                            <div className="rounded-2xl bg-no-repeat bg-cover bg-center border-spacing-0.5 border-solid border-transparent hover:border-tertiary content__card">
                                <img src="https://raw.githubusercontent.com/naejshaw/hbomax/master/assets/images/CN-Default.webp" alt="" className="w-full object-cover object-center content__img"/>
                            </div>
                            <div className="rounded-2xl bg-no-repeat bg-cover bg-center border-spacing-0.5 border-solid border-transparent hover:border-tertiary content__card">
                                <img src="https://raw.githubusercontent.com/naejshaw/hbomax/master/assets/images/UCL-Default.webp" alt="" className="w-full object-cover object-center content__img"/>
                            </div>
                        </div>
                    </section>
                </main>
            </div>
        </Home>
    </>);
}
