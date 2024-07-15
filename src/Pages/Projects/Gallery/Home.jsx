import Site from "@/Layouts/SiteLayout";
import { Head, Link } from "@inertiajs/react";

export default function Home()
{
    return(<>
        <Head title="Gallery" />
        <Site>
            <section className="min-h-screen py-40 px-8 portfolio" id="portfolio">
                <h2 className="mb-16 text-center text-7xl heading">Latest <span className="text-[#0ef]">Project</span></h2>

                <div className="grid grid-cols-3 items-center gap-10 portfolio-container">
                    <div className="relative rounded-3xl overflow-hidden flex portfolio-box">
                        <img className="w-full ease-linear duration-500 hover:scale-110" src="https://raw.githubusercontent.com/naejshaw/Portfolio-5/main/images/portfolio1.jpg" alt=""/>
                        <div className="absolute bottom-0 left-0 w-full h-full flex justify-center items-center flex-col text-center py-0 px-16 translate-y-48 duration-500 hover:translate-y-0 bg-[#00eeff1f] portfolio-layer">
                            <h4 className="text-5xl">Web Design</h4>
                            <p className="text-2xl my-1 mx-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt, eaque!</p>
                            <Link className="inline-flex justify-center items-center w-12 h-12 bg-[#fff] rounded-full" href="#"><i className="text-[#081b29] fa fa-arrow-right"></i></Link>
                        </div>
                    </div>

                    <div className="relative rounded-3xl overflow-hidden flex portfolio-box">
                        <img className="w-full ease-linear duration-500 hover:scale-110" src="https://raw.githubusercontent.com/naejshaw/Portfolio-5/main/images/portfolio2.jpg" alt=""/>
                        <div className="absolute bottom-0 left-0 w-full h-full flex justify-center items-center flex-col text-center py-0 px-16 translate-y-48 duration-500 hover:translate-y-0 bg-[#00eeff1f] portfolio-layer">
                            <h4 className="text-5xl">Web Design</h4>
                            <p className="text-2xl my-1 mx-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt, eaque!</p>
                            <Link className="inline-flex justify-center items-center w-12 h-12 bg-[#fff] rounded-full" href="#"><i className="text-[#081b29] fa fa-arrow-right"></i></Link>
                        </div>
                    </div>

                    <div className="relative rounded-3xl overflow-hidden flex portfolio-box">
                        <img className="w-full ease-linear duration-500 hover:scale-110" src="https://raw.githubusercontent.com/naejshaw/Portfolio-5/main/images/portfolio3.jpg" alt=""/>
                        <div className="absolute bottom-0 left-0 w-full h-full flex justify-center items-center flex-col text-center py-0 px-16 translate-y-48 duration-500 hover:translate-y-0 bg-[#00eeff1f] portfolio-layer">
                            <h4 className="text-5xl">Web Design</h4>
                            <p className="text-2xl my-1 mx-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt, eaque!</p>
                            <Link className="inline-flex justify-center items-center w-12 h-12 bg-[#fff] rounded-full" href="#"><i className="text-[#081b29] fa fa-arrow-right"></i></Link>
                        </div>
                    </div>

                    <div className="relative rounded-3xl overflow-hidden flex portfolio-box">
                        <img className="w-full ease-linear duration-500 hover:scale-110" src="https://raw.githubusercontent.com/naejshaw/Portfolio-5/main/images/portfolio4.jpg" alt=""/>
                        <div className="absolute bottom-0 left-0 w-full h-full flex justify-center items-center flex-col text-center py-0 px-16 translate-y-48 duration-500 hover:translate-y-0 bg-[#00eeff1f] portfolio-layer">
                            <h4 className="text-5xl">Web Design</h4>
                            <p className="text-2xl my-1 mx-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt, eaque!</p>
                            <Link className="inline-flex justify-center items-center w-12 h-12 bg-[#fff] rounded-full" href="#"><i className="text-[#081b29] fa fa-arrow-right"></i></Link>
                        </div>
                    </div>

                    <div className="relative rounded-3xl overflow-hidden flex portfolio-box">
                        <img className="w-full ease-linear duration-500 hover:scale-110" src="https://raw.githubusercontent.com/naejshaw/Portfolio-5/main/images/portfolio5.jpg" alt=""/>
                        <div className="absolute bottom-0 left-0 w-full h-full flex justify-center items-center flex-col text-center py-0 px-16 translate-y-48 duration-500 hover:translate-y-0 bg-[#00eeff1f] portfolio-layer">
                            <h4 className="text-5xl">Web Design</h4>
                            <p className="text-2xl my-1 mx-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt, eaque!</p>
                            <Link className="inline-flex justify-center items-center w-12 h-12 bg-[#fff] rounded-full" href="#"><i className="text-[#081b29] fa fa-arrow-right"></i></Link>
                        </div>
                    </div>

                    <div className="relative rounded-3xl overflow-hidden flex portfolio-box">
                        <img className="w-full ease-linear duration-500 hover:scale-110" src="https://raw.githubusercontent.com/naejshaw/Portfolio-5/main/images/portfolio6.jpg" alt=""/>
                        <div className="absolute bottom-0 left-0 w-full h-full flex justify-center items-center flex-col text-center py-0 px-16 translate-y-48 duration-500 hover:translate-y-0 bg-[#00eeff1f] portfolio-layer">
                            <h4 className="text-5xl">Web Design</h4>
                            <p className="text-2xl my-1 mx-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt, eaque!</p>
                            <Link className="inline-flex justify-center items-center w-12 h-12 bg-[#fff] rounded-full" href="#"><i className="text-[#081b29] fa fa-arrow-right"></i></Link>
                        </div>
                    </div>
                </div>
            </section>
        </Site>
    </>);
}
