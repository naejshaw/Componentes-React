import Site from "@/Layouts/SiteLayout";
import { Head, Link } from "@inertiajs/react";

export default function Youtube()
{
    return(<>
        <Head title="Youtube Clone" />
        <Site>
            <div className="mt-24 box-border bg-white text-black h-auto w-auto px-2 py-4 flex flex-col">
                <header className="flex justify-between items-center mt-8">
                    <section className="justify-self-start flex items-center" id="menu-area">
                        <img className="cursor-pointer p-1 max-h-8" src="https://raw.githubusercontent.com/naejshaw/youtube-clone-grid/main/assets/menu.png" alt="Menu"/>
                        <img className="mt-0 mr-0 mb-1 ml-3 max-h-8" id="logo" src="https://raw.githubusercontent.com/naejshaw/youtube-clone-grid/main/assets/youtube 1.png" alt="Logo"/>
                    </section>
                    <section className="justify-self-center flex items-center" id="search-area">
                        <input className="w-96 h-9" type="search" name="" id=""/>
                        <Link className="cursor-pointer text-decoration-none text-bold">
                            <div className="bg-gray-400 border border-solid border-black rounded-sm h-9 w-9 flex items-center justify-center">
                                <img className="m-0" src="https://raw.githubusercontent.com/naejshaw/youtube-clone-grid/main/assets/search.png" alt=""/>
                            </div>
                        </Link>
                    </section>
                    <section className="justify-self-end flex items-center" id="user-area">
                        <img className="cursor-pointer ml-5 max-w-6 max-h-6" src="https://raw.githubusercontent.com/naejshaw/youtube-clone-grid/main/assets/video.png" alt="Create"/>
                        <img className="cursor-pointer ml-5 max-w-6 max-h-6" src="https://raw.githubusercontent.com/naejshaw/youtube-clone-grid/main/assets/bell.png" alt="Bell"/>
                        <img className="cursor-pointer ml-5 max-w-8 max-h-8" src="https://raw.githubusercontent.com/naejshaw/youtube-clone-grid/main/assets/Avatar.png" alt="Profile"/>
                    </section>
                </header>
                <div className="flex gap-6">
                    <aside className="flex flex-col gap-4 justify-start mt-10">
                        <Link href=""><section className="flex items-center"><img className="ml-1 h-6 w-6" src="https://raw.githubusercontent.com/naejshaw/youtube-clone-grid/main/assets/home.png" alt=""/><p className="ml-4 text-sm">Início</p></section></Link>
                        <Link href=""><section className="flex items-center"><img className="ml-1 h-6 w-6" src="https://raw.githubusercontent.com/naejshaw/youtube-clone-grid/main/assets/compass.png" alt=""/><p className="ml-4 text-sm">Explorar</p></section></Link>
                        <Link href=""><section className="flex items-center"><img className="ml-1 h-6 w-6" src="https://raw.githubusercontent.com/naejshaw/youtube-clone-grid/main/assets/youtube.png" alt=""/><p className="ml-4 text-sm">Inscrições</p></section></Link>
                        <Link href=""><section className="flex items-center"><img className="ml-1 h-6 w-6" src="https://raw.githubusercontent.com/naejshaw/youtube-clone-grid/main/assets/disc.png" alt=""/><p className="ml-4 text-sm">YouTube Music</p></section></Link>
                        <Link href=""><section className="flex items-center"><img className="ml-1 h-6 w-6" src="https://raw.githubusercontent.com/naejshaw/youtube-clone-grid/main/assets/thumbs-up.png" alt=""/><p className="ml-4 text-sm">Vídeos que gostei</p></section></Link>
                        <Link href=""><section className="flex items-center"><img className="ml-1 h-6 w-6" src="https://raw.githubusercontent.com/naejshaw/youtube-clone-grid/main/assets/clock.png" alt=""/><p className="ml-4 text-sm">Assistir mais tarde</p></section></Link>
                        <Link href=""><section className="flex items-center"><img className="ml-1 h-6 w-6" src="https://raw.githubusercontent.com/naejshaw/youtube-clone-grid/main/assets/download.png" alt=""/><p className="ml-4 text-sm">Downloads</p></section></Link>
                        <Link href=""><section className="flex items-center"><img className="ml-1 h-6 w-6" src="https://raw.githubusercontent.com/naejshaw/youtube-clone-grid/main/assets/film.png" alt=""/><p className="ml-4 text-sm">Filmes</p></section></Link>
                        <Link href=""><section className="flex items-center"><img className="ml-1 h-6 w-6" src="https://raw.githubusercontent.com/naejshaw/youtube-clone-grid/main/assets/book.png" alt=""/><p className="ml-4 text-sm">Aprender</p></section></Link>
                        <Link href=""><section className="flex items-center"><img className="ml-1 h-6 w-6" src="https://raw.githubusercontent.com/naejshaw/youtube-clone-grid/main/assets/award.png" alt=""/><p className="ml-4 text-sm">Esportes</p></section></Link>
                    </aside>
                    <main className="flex flex-wrap justify-evenly ml-10 mt-10 pb-8 gap-y-12">
                        <div className="flex gap-9 row">
                            <div className="flex flex-col items-center justify-between cursor-pointer card item-1">
                                <img src="https://raw.githubusercontent.com/naejshaw/youtube-clone-grid/main/assets/image 16.png" alt=""/>
                                <div className="h-20 grid details">
                                    <img src="https://raw.githubusercontent.com/naejshaw/youtube-clone-grid/main/assets/Channel Avatar.png" alt="" className="mt-4 profile"/>
                                    <h5 className="text-xs font-bold title">Geração Tech Unimed - BH - Ciência de Dados</h5>
                                    <p className="text-xs infos">2,1 mil visualizações<br/>Transmitido há 2 dias</p>
                                </div>
                            </div>
                            <div className="flex flex-col items-center justify-between cursor-pointer card item-2">
                                <img src="https://raw.githubusercontent.com/naejshaw/youtube-clone-grid/main/assets/image 15.png" alt=""/>
                                <div className="h-20 grid details">
                                    <img src="https://raw.githubusercontent.com/naejshaw/youtube-clone-grid/main/assets/Channel Avatar.png" alt="" className="mt-4 profile"/>
                                    <h5 className="text-xs font-bold title">Scrum Talks</h5>
                                    <p className="text-xs infos">1,6 mil visualizações<br/>Transmitido há 3 dias</p>
                                </div>
                            </div>
                            <div className="flex flex-col items-center justify-between cursor-pointer card item-3">
                                <img src="https://raw.githubusercontent.com/naejshaw/youtube-clone-grid/main/assets/image 14.png" alt=""/>
                                <div className="h-20 grid details">
                                    <img src="https://raw.githubusercontent.com/naejshaw/youtube-clone-grid/main/assets/Channel Avatar.png" alt="" className="mt-4 profile"/>
                                    <h5 className="text-xs font-bold title">Machine Learning Avançado - Fast Track</h5>
                                    <p className="text-xs infos">1,7 mil visualizações<br/>Transmitido há 4 dias</p>
                                </div>
                            </div>
                            <div className="flex flex-col items-center justify-between cursor-pointer card item-4">
                                <img src="https://raw.githubusercontent.com/naejshaw/youtube-clone-grid/main/assets/image 13.png" alt=""/>
                                <div className="h-20 grid details">
                                    <img src="https://raw.githubusercontent.com/naejshaw/youtube-clone-grid/main/assets/Channel Avatar.png" alt="" className="mt-4 profile"/>
                                    <h5 className="text-xs font-bold title">Global Skills #2 - Project Planning</h5>
                                    <p className="text-xs infos">2,1 mil visualizações<br/>Transmitido há 2 dias</p>
                                </div>
                            </div>
                        </div>
                        <div className="flex gap-9 row">
                            <div className="flex flex-col items-center justify-between cursor-pointer card item-5">
                                <img src="https://raw.githubusercontent.com/naejshaw/youtube-clone-grid/main/assets/image 12.png" alt=""/>
                                <div className="h-20 grid details">
                                    <img src="https://raw.githubusercontent.com/naejshaw/youtube-clone-grid/main/assets/Channel Avatar.png" alt="" className="mt-4 profile"/>
                                    <h5 className="text-xs font-bold title">Como aprender a programar Python do ZERO</h5>
                                    <p className="text-xs infos">711 visualizações<br/>Transmitido há 2 dias</p>
                                </div>
                            </div>
                            <div className="flex flex-col items-center justify-between cursor-pointer card item-6">
                                <img src="https://raw.githubusercontent.com/naejshaw/youtube-clone-grid/main/assets/image 16.png" alt=""/>
                                <div className="h-20 grid details">
                                    <img src="https://raw.githubusercontent.com/naejshaw/youtube-clone-grid/main/assets/Channel Avatar.png" alt="" className="mt-4 profile"/>
                                    <h5 className="text-xs font-bold title">Geração Tech Unimed - BH - Ciência de Dados</h5>
                                    <p className="text-xs infos">2,1 mil visualizações<br/>Transmitido há 2 dias</p>
                                </div>
                            </div>
                            <div className="flex flex-col items-center justify-between cursor-pointer card item-7">
                                <img src="https://raw.githubusercontent.com/naejshaw/youtube-clone-grid/main/assets/image 15.png" alt=""/>
                                <div className="h-20 grid details">
                                    <img src="https://raw.githubusercontent.com/naejshaw/youtube-clone-grid/main/assets/Channel Avatar.png" alt="" className="mt-4 profile"/>
                                    <h5 className="text-xs font-bold title">Scrum Talks</h5>
                                    <p className="text-xs infos">1,6 mil visualizações<br/>Transmitido há 3 dias</p>
                                </div>
                            </div>
                            <div className="flex flex-col items-center justify-between cursor-pointer card item-8">
                                <img src="https://raw.githubusercontent.com/naejshaw/youtube-clone-grid/main/assets/image 14.png" alt=""/>
                                <div className="h-20 grid details">
                                    <img src="https://raw.githubusercontent.com/naejshaw/youtube-clone-grid/main/assets/Channel Avatar.png" alt="" className="mt-4 profile"/>
                                    <h5 className="text-xs font-bold title">Machine Learning Avançado - Fast Track</h5>
                                    <p className="text-xs infos">1,7 mil visualizações<br/>Transmitido há 4 dias</p>
                                </div>
                            </div>
                        </div>
                        <div className="flex gap-9 row">
                            <div className="flex flex-col items-center justify-between cursor-pointer card item-9">
                                <img src="https://raw.githubusercontent.com/naejshaw/youtube-clone-grid/main/assets/image 13.png" alt=""/>
                                <div className="h-20 grid details">
                                    <img src="https://raw.githubusercontent.com/naejshaw/youtube-clone-grid/main/assets/Channel Avatar.png" alt="" className="mt-4 profile"/>
                                    <h5 className="text-xs font-bold title">Global Skills #2 - Project Planning</h5>
                                    <p className="text-xs infos">2,1 mil visualizações<br/>Transmitido há 2 dias</p>
                                </div>
                            </div>
                            <div className="flex flex-col items-center justify-between cursor-pointer card item-10">
                                <img src="https://raw.githubusercontent.com/naejshaw/youtube-clone-grid/main/assets/image 12.png" alt=""/>
                                <div className="h-20 grid details">
                                    <img src="https://raw.githubusercontent.com/naejshaw/youtube-clone-grid/main/assets/Channel Avatar.png" alt="" className="mt-4 profile"/>
                                    <h5 className="text-xs font-bold title">Como aprender a programar Python do ZERO</h5>
                                    <p className="text-xs infos">711 visualizações<br/>Transmitido há 2 dias</p>
                                </div>
                            </div>
                            <div className="flex flex-col items-center justify-between cursor-pointer card item-11">
                                <img src="https://raw.githubusercontent.com/naejshaw/youtube-clone-grid/main/assets/image 16.png" alt=""/>
                                <div className="h-20 grid details">
                                    <img src="https://raw.githubusercontent.com/naejshaw/youtube-clone-grid/main/assets/Channel Avatar.png" alt="" className="mt-4 profile"/>
                                    <h5 className="text-xs font-bold title">Geração Tech Unimed - BH - Ciência de Dados</h5>
                                    <p className="text-xs infos">2,1 mil visualizações<br/>Transmitido há 2 dias</p>
                                </div>
                            </div>
                            <div className="flex flex-col items-center justify-between cursor-pointer card item-12">
                                <img src="https://raw.githubusercontent.com/naejshaw/youtube-clone-grid/main/assets/image 15.png" alt=""/>
                                <div className="h-20 grid details">
                                    <img src="https://raw.githubusercontent.com/naejshaw/youtube-clone-grid/main/assets/Channel Avatar.png" alt="" className="mt-4 profile"/>
                                    <h5 className="text-xs font-bold title">Scrum Talks</h5>
                                    <p className="text-xs infos">1,6 mil visualizações<br/>Transmitido há 3 dias</p>
                                </div>
                            </div>
                        </div>
                    </main>
                </div>
            </div>
        </Site>
    </>);
}
