import { Link, Head } from "@inertiajs/react";

export default function Welcome({ auth, laravelVersion, phpVersion }) {
    const handleImageError = () => {
        document
            .getElementById("screenshot-container")
            ?.classNameList.add("!hidden");
        document.getElementById("docs-card")?.classNameList.add("!row-span-1");
        document
            .getElementById("docs-card-content")
            ?.classNameList.add("!flex-row");
        document.getElementById("background")?.classNameList.add("!hidden");
    };

    return (
        <>
            <Head title="Welcome" />
            <div className="bg-[#081b29] text-[#ededed] p-0 m-0 box-border text-decoration-none border-none outline-none scroll-smooth font-sans overflow-x-hidden">
                <header className="fixed top-0 left-0 w-full py-8 px-[9%] bg-transparent flex justify-between items-center z-50 transition-[.3s] bg-[#081b29]">
                    <a href="#" className="relative text-2xl font-semibold text-[#ededed]">
                        Jean.<span className="animate"></span>
                    </a>

                    <div className="relative text-2xl text-[#ededed] cursor-pointer d-none">
                        <span className="animate"></span>
                        <i className="bx bx-menu"></i>
                    </div>

                    <nav className="relative">
                        <a href="#home" className="text-lg text-[#ededed] font-medium ml-14 transition-[.3s] hover:text-[#00abf0]">
                            Home
                        </a>
                        <a href="#about" className="text-lg text-[#ededed] font-medium ml-14 transition-[.3s] hover:text-[#00abf0]">About</a>
                        <a href="#education" className="text-lg text-[#ededed] font-medium ml-14 transition-[.3s] hover:text-[#00abf0]">Education</a>
                        <a href="#skills" className="text-lg text-[#ededed] font-medium ml-14 transition-[.3s] hover:text-[#00abf0]">Skills</a>
                        <a href="#contact" className="text-lg text-[#ededed] font-medium ml-14 transition-[.3s] hover:text-[#00abf0]">Contact</a>

                        <span className="active-nav"></span>
                        <span className="animate"></span>
                    </nav>
                </header>
                <section className="min-h-screen py-40 px-[9%] flex items-center bg-cover bg-center show-animate" id="home">
                    <div className="max-w-5xl z-40 home-content">
                        <h1 className="relative inline-block text-6xl text-white font-extrabold">
                            Hi, I'm <span>Jean Felipe</span>
                            <span className="text-[#ededed] animate" />
                        </h1>
                        <div className="relative max-w-lg text-animate">
                            <h3 className="text-5xl font-bold text-transparent bg-no-repeat before:absolute before:top-0 before:left-0 before:w-0 before:h-full before:border-r-2 before:border-solid before:border-r-[#00abf0]">Frontend Developer</h3>
                            <span className="animate" />
                        </div>
                        <p className="relative text-2xl my-8 mx-16">
                            Lorem ipsum dolor, sit amet consectetur adipisicing
                            elit. Tempora perferendis commodi illum atque a soluta
                            libero et quas placeat, molestiae possimus sunt ut.
                            Sint, sapiente velit! Ullam sapiente veniam minus!
                            <span className="animate" />
                        </p>
                        <div className="relative flex justify-between w-[34.5rem] h-[5rem] hover:text-[#00abf0]">
                            <a href="#" className="relative inline-flex justify-center items-center w-[15rem] h-full bg-[#00abf0] border-[.2rem] border-solid border-[#00abf0] text-3xl font-semibold text-[#081b29] z-10 overflow-hidden transition-[.5s] hover:bg-[#00abf0] before:absolute before:top-0 before:left-0 before:w-0 before:h-full before:bg-[#081b29] before:-z-10 before:transition-[.5s] hover:before:w-full btn">
                                Hire Me
                            </a>
                            <a href="#" className="relative inline-flex justify-center items-center w-[15rem] h-full bg-[#00abf0] border-[.2rem] border-solid border-[#00abf0] text-3xl font-semibold text-[#081b29] z-10 overflow-hidden transition-[.5s] hover:bg-[#00abf0] before:absolute before:top-0 before:left-0 before:w-0 before:h-full before:bg-[#081b29] before:-z-10 before:transition-[.5s] before:hover:w-full btn">
                                Let's Talk
                            </a>
                            <span className="animate" />
                        </div>
                    </div>
                    <div className="absolute bottom-[4rem] w-44 flex justify-between home-sci">
                        <a className="relative inline-flex justify-center items-center w-10 h-10 bg-transparent border-spacing-1 border-[#00abf0] rounded-lg text-xl text-[#00abf0] z-10 overflow-hidden transition-[.5s] hover:bg-[#081b29] before:absolute before:top-0 before:left-0 before:w-0 before:h-full before:bg-[#00abf0] before:-z-10" href="#">
                            <i className="fa fa-facebook" />
                        </a>
                        <a className="relative inline-flex justify-center items-center w-10 h-10 bg-transparent border-spacing-1 border-[#00abf0] rounded-lg text-xl text-[#00abf0] z-10 overflow-hidden transition-[.5s] hover:bg-[#081b29] before:absolute before:top-0 before:left-0 before:w-0 before:h-full before:bg-[#00abf0] before:-z-10" href="#">
                            <i className="fa fa-whatsapp" />
                        </a>
                        <a className="relative inline-flex justify-center items-center w-10 h-10 bg-transparent border-spacing-1 border-[#00abf0] rounded-lg text-xl text-[#00abf0] z-10 overflow-hidden transition-[.5s] hover:bg-[#081b29] before:absolute before:top-0 before:left-0 before:w-0 before:h-full before:bg-[#00abf0] before:-z-10" href="#">
                            <i className="fas fa-linkedin" />
                        </a>
                        <span className="animate" />
                    </div>
                    <div className="absolute top-0 right-0 w-5/12 h-full bg-transparent hover:bg-[#081b29] home-imgHover" />
                    <span className="animate home-img" />
                </section>
                <section className="min-h-screen pt-40 px-[9%] flex items-center justify-center flex-col gap-8 bg-[#112e42] pb-24 about" id="about">
                    <h2 className="relative text-7xl mb-12 text-center heading">
                        About <span>Me</span>
                        <span className="bg-[#00abf0] animate scroll" />{" "}
                    </h2>
                    <div className="relative w-96 h-96 rounded-lg flex justify-center items-center about-img">
                        <img className="w-[90%] rounded-lg border-spacing-1 border-solid border-[#00abf0]" src="images/about.jpg" alt="" />
                        <span className="bg-[#00abf0] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full rounded-lg border[.2rem] border-y-[#112e42] border-x-[#00abf0] circle-spin" />
                        <span className="bg-[#00abf0] animate scroll" />
                    </div>
                    <div className="text-center about-content">
                        <h3 className="relative inline-block text-4xl">
                            Frontend Developer
                            <span className="bg-[#00abf0] animate scroll" />
                        </h3>
                        <p className="relative text-2xl m-9">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Expedita veritatis distinctio, modi iste nostrum labore
                            autem. Soluta repellendus accusamus, doloremque ratione
                            nam tempora hic pariatur, ad quae expedita, sapiente
                            nisi!
                            <span className="bg-[#00abf0] animate scroll" />
                        </p>
                        <div className="inline-block w-60 btn-box btns">
                            <a href="#" className="before:bg-[#112e42] btn">
                                Read More
                            </a>
                            <span className="bg-[#00abf0] animate scroll" />
                        </div>
                    </div>
                </section>
                <section className="min-h-screen pt-40 px-[9%] education" id="education">
                    <h2 className="heading">
                        My <span>Journey</span>
                        <span className="animate scroll" />
                    </h2>
                    <div className="education-row">
                        <div className="education-column">
                            <h3 className="title">
                                Education
                                <span className="animate scroll" />
                            </h3>
                            <div className="education-box">
                                <div className="education-content">
                                    <div className="content">
                                        <div className="year">
                                            <i className="bx bxs-calendar" />{" "}
                                            2017-2018
                                        </div>
                                        <h3>Master Degree - University </h3>
                                        <p>
                                            Lorem ipsum dolor sit, amet consectetur
                                            adipisicing elit. Placeat reprehenderit
                                            quidem quia eos dolor possimus cumque.
                                            Molestias tenetur odit dolorum.
                                        </p>
                                    </div>
                                </div>
                                <div className="education-content">
                                    <div className="content">
                                        <div className="year">
                                            <i className="bx bxs-calendar" />{" "}
                                            2018-2019
                                        </div>
                                        <h3>Master Degree - University </h3>
                                        <p>
                                            Lorem ipsum dolor sit, amet consectetur
                                            adipisicing elit. Placeat reprehenderit
                                            quidem quia eos dolor possimus cumque.
                                            Molestias tenetur odit dolorum.
                                        </p>
                                    </div>
                                </div>
                                <div className="education-content">
                                    <div className="content">
                                        <div className="year">
                                            <i className="bx bxs-calendar" />{" "}
                                            2019-2020
                                        </div>
                                        <h3>Master Degree - University </h3>
                                        <p>
                                            Lorem ipsum dolor sit, amet consectetur
                                            adipisicing elit. Placeat reprehenderit
                                            quidem quia eos dolor possimus cumque.
                                            Molestias tenetur odit dolorum.
                                        </p>
                                    </div>
                                </div>
                                <span className="animate scroll" />
                            </div>
                        </div>
                        <div className="education-column">
                            <h3 className="title">
                                Experience
                                <span className="animate scroll" />
                            </h3>
                            <div className="education-box">
                                <div className="education-content">
                                    <div className="content">
                                        <div className="year">
                                            <i className="bx bxs-calendar" />{" "}
                                            2017-2018
                                        </div>
                                        <h3>Web Developer - Company</h3>
                                        <p>
                                            Lorem ipsum dolor sit, amet consectetur
                                            adipisicing elit. Placeat reprehenderit
                                            quidem quia eos dolor possimus cumque.
                                            Molestias tenetur odit dolorum.
                                        </p>
                                    </div>
                                </div>
                                <div className="education-content">
                                    <div className="content">
                                        <div className="year">
                                            <i className="bx bxs-calendar" />{" "}
                                            2018-2019
                                        </div>
                                        <h3>Web Developer - Company</h3>
                                        <p>
                                            Lorem ipsum dolor sit, amet consectetur
                                            adipisicing elit. Placeat reprehenderit
                                            quidem quia eos dolor possimus cumque.
                                            Molestias tenetur odit dolorum.
                                        </p>
                                    </div>
                                </div>
                                <div className="education-content">
                                    <div className="content">
                                        <div className="year">
                                            <i className="bx bxs-calendar" />{" "}
                                            2019-2020
                                        </div>
                                        <h3>Web Developer - Company</h3>
                                        <p>
                                            Lorem ipsum dolor sit, amet consectetur
                                            adipisicing elit. Placeat reprehenderit
                                            quidem quia eos dolor possimus cumque.
                                            Molestias tenetur odit dolorum.
                                        </p>
                                    </div>
                                </div>
                                <span className="animate scroll" />
                            </div>
                        </div>
                    </div>
                </section>
                <section className="min-h-screen pt-40 px-[9%] skills" id="skills">
                    <h2 className="heading">
                        My <span>Skills</span>
                        <span className="animate scroll" />
                    </h2>
                    <div className="skills-row">
                        <div className="skills-column">
                            <h3 className="title">
                                Coding Skills
                                <span className="animate scroll" />
                            </h3>
                            <div className="skills-box">
                                <div className="skills-content">
                                    <div className="progress">
                                        <h3>
                                            HTML <span>90%</span>
                                        </h3>
                                        <div className="bar">
                                            <span />
                                        </div>
                                    </div>
                                    <div className="progress">
                                        <h3>
                                            CSS <span>80%</span>
                                        </h3>
                                        <div className="bar">
                                            <span />
                                        </div>
                                    </div>
                                    <div className="progress">
                                        <h3>
                                            JavaScript <span>65%</span>
                                        </h3>
                                        <div className="bar">
                                            <span />
                                        </div>
                                    </div>
                                    <div className="progress">
                                        <h3>
                                            Python <span>75%</span>
                                        </h3>
                                        <div className="bar">
                                            <span />
                                        </div>
                                    </div>
                                </div>
                                <span className="animate scroll" />
                            </div>
                        </div>
                        <div className="skills-column">
                            <h3 className="title">
                                Professional Skills
                                <span className="animate scroll" />
                            </h3>
                            <div className="skills-box">
                                <div className="skills-content">
                                    <div className="progress">
                                        <h3>
                                            Web Design <span>95%</span>
                                        </h3>
                                        <div className="bar">
                                            <span />
                                        </div>
                                    </div>
                                    <div className="progress">
                                        <h3>
                                            Web Development <span>80%</span>
                                        </h3>
                                        <div className="bar">
                                            <span />
                                        </div>
                                    </div>
                                    <div className="progress">
                                        <h3>
                                            Graphic Design <span>65%</span>
                                        </h3>
                                        <div className="bar">
                                            <span />
                                        </div>
                                    </div>
                                    <div className="progress">
                                        <h3>
                                            SEO Marketing <span>75%</span>
                                        </h3>
                                        <div className="bar">
                                            <span />
                                        </div>
                                    </div>
                                </div>
                                <span className="animate scroll" />
                            </div>
                        </div>
                    </div>
                </section>
                <section className="min-h-screen pt-40 px-[9%] contact" id="contact">
                    <h2 className="heading">
                        Contact <span>Me!</span>
                        <span className="animate scroll" />
                    </h2>
                    <form action="#">
                        <div className="input-box">
                            <div className="input-field">
                                <input
                                    type="text"
                                    placeholder="Full Name"
                                    required=""
                                />
                                <span className="focus" />
                            </div>
                            <div className="input-field">
                                <input
                                    type="text"
                                    placeholder="Email Adress"
                                    required=""
                                />
                                <span className="focus" />
                            </div>
                            <span className="animate scroll" />
                        </div>
                        <div className="input-box">
                            <div className="input-field">
                                <input
                                    type="number"
                                    placeholder="Mobile Number"
                                    required=""
                                />
                                <span className="focus" />
                            </div>
                            <div className="input-field">
                                <input
                                    type="text"
                                    placeholder="Email Subject"
                                    required=""
                                />
                                <span className="focus" />
                            </div>
                            <span className="animate scroll" />
                        </div>
                        <div className="textarea-field">
                            <textarea
                                name=""
                                id=""
                                cols={30}
                                rows={10}
                                placeholder="Your Message"
                                required=""
                                defaultValue={""}
                            />
                            <span className="focus" />
                            <span className="animate scroll" />
                        </div>
                        <div className="btn-box btns">
                            <button type="submit" className="btn">
                                Submit
                            </button>
                            <span className="animate scroll" />
                        </div>
                    </form>
                </section>
                <footer className="footer">
                    <div className="footer-text">
                        <p>Copyright © 2023 by NaejShaw | All Rights Reserved.</p>
                        <span className="animate scroll" />
                    </div>
                    <div className="footer-iconTop">
                        <a href="#">
                            <i className="bx bx-up-arrow-alt" />
                        </a>
                        <span className="animate scroll" />
                    </div>
                </footer>
            </div>
        </>
    );
}
