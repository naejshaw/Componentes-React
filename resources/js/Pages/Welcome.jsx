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
            <div className="bg-[#081b29] p-0 m-0 box-border text-decoration-none border-none outline-none scroll-smooth font-sans overflow-x-hidden">
                <header className="fixed top-0 left-0 w-full py-8 px-[9%] bg-transparent flex justify-between items-center z-100 transition-[.3s] bg-[#081b29]">
                    <a href="#" className="relative text-sm text-[#ededed]">
                        Jean.<span className="animate"></span>
                    </a>

                    <div className="relative text-md text-[#ededed] cursor-pointer d-none">
                        <span className="animate"></span>
                        <i className="bx bx-menu"></i>
                    </div>

                    <nav className="relative">
                        <a href="#home" className="text-sm text-[#ededed] font-medium ml-14 transition-[.3s] hover:text-[#00abf0]">
                            Home
                        </a>
                        <a href="#about" className="text-sm text-[#ededed] font-medium ml-14 transition-[.3s] hover:text-[#00abf0]">About</a>
                        <a href="#education" className="text-sm text-[#ededed] font-medium ml-14 transition-[.3s] hover:text-[#00abf0]">Education</a>
                        <a href="#skills" className="text-sm text-[#ededed] font-medium ml-14 transition-[.3s] hover:text-[#00abf0]">Skills</a>
                        <a href="#contact" className="text-sm text-[#ededed] font-medium ml-14 transition-[.3s] hover:text-[#00abf0]">Contact</a>

                        <span className="active-nav"></span>
                        <span className="animate"></span>
                    </nav>
                </header>
                <section classname="min-h-screen py-40 px-[9%] flex items-center bg-cover bg-center show-animate" id="home">
                    <div classname="max-w-5xl z-90 home-content">
                        <h1 className="relative inline-block text-7xl font-bold">
                            Hi, I'm <span>Jean Felipe</span>
                            <span classname="text-[#ededed] animate" />
                        </h1>
                        <div classname="relative max-w-lg text-animate">
                            <h3 className="text-5xl font-bold text-transparent bg-no-repeat before:absolute before:top-0 before:left-0 before:w-0 before:h-full before:border-r-2 before:border-solid before:border-r-[#00abf0]">Frontend Developer</h3>
                            <span classname="animate" />
                        </div>
                        <p className="relative text-2xl my-8 mx-16">
                            Lorem ipsum dolor, sit amet consectetur adipisicing
                            elit. Tempora perferendis commodi illum atque a soluta
                            libero et quas placeat, molestiae possimus sunt ut.
                            Sint, sapiente velit! Ullam sapiente veniam minus!
                            <span classname="animate" />
                        </p>
                        <div classname="relative flex justify-between w-[34.5rem] h-[5rem] hover:text-[#00abf0]">
                            <a href="#" classname="relative inline-flex justify-center items-center w-[15rem] h-full bg-[#00abf0] border-[.2rem] border-solid border-[#00abf0] text-3xl font-semibold text-[#081b29] z-1 overflow-hidden transition-[.5s] btn">
                                Hire Me
                            </a>
                            <a href="#" classname="relative inline-flex justify-center items-center w-[15rem] h-full bg-[#00abf0] border-[.2rem] border-solid border-[#00abf0] text-3xl font-semibold text-[#081b29] z-1 overflow-hidden transition-[.5s] btn">
                                Let's Talk
                            </a>
                            <span classname="animate" />
                        </div>
                    </div>
                    <div classname="home-sci">
                        <a href="#">
                            <i classname="bx bxl-facebook" />
                        </a>
                        <a href="#">
                            <i classname="bx bxl-whatsapp" />
                        </a>
                        <a href="#">
                            <i classname="bx bxl-linkedin" />
                        </a>
                        <span classname="animate" />
                    </div>
                    <div classname="home-imgHover" />
                    <span classname="animate home-img" />
                </section>
                <section classname="min-h-screen pt-40 px-[9%] about" id="about">
                    <h2 classname="heading">
                        About <span>Me</span>
                        <span classname="animate scroll" />{" "}
                    </h2>
                    <div classname="about-img">
                        <img src="images/about.jpg" alt="" />
                        <span classname="circle-spin" />
                        <span classname="animate scroll" />
                    </div>
                    <div classname="about-content">
                        <h3>
                            Frontend Developer
                            <span classname="animate scroll" />
                        </h3>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Expedita veritatis distinctio, modi iste nostrum labore
                            autem. Soluta repellendus accusamus, doloremque ratione
                            nam tempora hic pariatur, ad quae expedita, sapiente
                            nisi!
                            <span classname="animate scroll" />
                        </p>
                        <div classname="btn-box btns">
                            <a href="#" classname="btn">
                                Read More
                            </a>
                            <span classname="animate scroll" />
                        </div>
                    </div>
                </section>
                <section classname="min-h-screen pt-40 px-[9%] education" id="education">
                    <h2 classname="heading">
                        My <span>Journey</span>
                        <span classname="animate scroll" />
                    </h2>
                    <div classname="education-row">
                        <div classname="education-column">
                            <h3 classname="title">
                                Education
                                <span classname="animate scroll" />
                            </h3>
                            <div classname="education-box">
                                <div classname="education-content">
                                    <div classname="content">
                                        <div classname="year">
                                            <i classname="bx bxs-calendar" />{" "}
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
                                <div classname="education-content">
                                    <div classname="content">
                                        <div classname="year">
                                            <i classname="bx bxs-calendar" />{" "}
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
                                <div classname="education-content">
                                    <div classname="content">
                                        <div classname="year">
                                            <i classname="bx bxs-calendar" />{" "}
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
                                <span classname="animate scroll" />
                            </div>
                        </div>
                        <div classname="education-column">
                            <h3 classname="title">
                                Experience
                                <span classname="animate scroll" />
                            </h3>
                            <div classname="education-box">
                                <div classname="education-content">
                                    <div classname="content">
                                        <div classname="year">
                                            <i classname="bx bxs-calendar" />{" "}
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
                                <div classname="education-content">
                                    <div classname="content">
                                        <div classname="year">
                                            <i classname="bx bxs-calendar" />{" "}
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
                                <div classname="education-content">
                                    <div classname="content">
                                        <div classname="year">
                                            <i classname="bx bxs-calendar" />{" "}
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
                                <span classname="animate scroll" />
                            </div>
                        </div>
                    </div>
                </section>
                <section classname="min-h-screen pt-40 px-[9%] skills" id="skills">
                    <h2 classname="heading">
                        My <span>Skills</span>
                        <span classname="animate scroll" />
                    </h2>
                    <div classname="skills-row">
                        <div classname="skills-column">
                            <h3 classname="title">
                                Coding Skills
                                <span classname="animate scroll" />
                            </h3>
                            <div classname="skills-box">
                                <div classname="skills-content">
                                    <div classname="progress">
                                        <h3>
                                            HTML <span>90%</span>
                                        </h3>
                                        <div classname="bar">
                                            <span />
                                        </div>
                                    </div>
                                    <div classname="progress">
                                        <h3>
                                            CSS <span>80%</span>
                                        </h3>
                                        <div classname="bar">
                                            <span />
                                        </div>
                                    </div>
                                    <div classname="progress">
                                        <h3>
                                            JavaScript <span>65%</span>
                                        </h3>
                                        <div classname="bar">
                                            <span />
                                        </div>
                                    </div>
                                    <div classname="progress">
                                        <h3>
                                            Python <span>75%</span>
                                        </h3>
                                        <div classname="bar">
                                            <span />
                                        </div>
                                    </div>
                                </div>
                                <span classname="animate scroll" />
                            </div>
                        </div>
                        <div classname="skills-column">
                            <h3 classname="title">
                                Professional Skills
                                <span classname="animate scroll" />
                            </h3>
                            <div classname="skills-box">
                                <div classname="skills-content">
                                    <div classname="progress">
                                        <h3>
                                            Web Design <span>95%</span>
                                        </h3>
                                        <div classname="bar">
                                            <span />
                                        </div>
                                    </div>
                                    <div classname="progress">
                                        <h3>
                                            Web Development <span>80%</span>
                                        </h3>
                                        <div classname="bar">
                                            <span />
                                        </div>
                                    </div>
                                    <div classname="progress">
                                        <h3>
                                            Graphic Design <span>65%</span>
                                        </h3>
                                        <div classname="bar">
                                            <span />
                                        </div>
                                    </div>
                                    <div classname="progress">
                                        <h3>
                                            SEO Marketing <span>75%</span>
                                        </h3>
                                        <div classname="bar">
                                            <span />
                                        </div>
                                    </div>
                                </div>
                                <span classname="animate scroll" />
                            </div>
                        </div>
                    </div>
                </section>
                <section classname="min-h-screen pt-40 px-[9%] contact" id="contact">
                    <h2 classname="heading">
                        Contact <span>Me!</span>
                        <span classname="animate scroll" />
                    </h2>
                    <form action="#">
                        <div classname="input-box">
                            <div classname="input-field">
                                <input
                                    type="text"
                                    placeholder="Full Name"
                                    required=""
                                />
                                <span classname="focus" />
                            </div>
                            <div classname="input-field">
                                <input
                                    type="text"
                                    placeholder="Email Adress"
                                    required=""
                                />
                                <span classname="focus" />
                            </div>
                            <span classname="animate scroll" />
                        </div>
                        <div classname="input-box">
                            <div classname="input-field">
                                <input
                                    type="number"
                                    placeholder="Mobile Number"
                                    required=""
                                />
                                <span classname="focus" />
                            </div>
                            <div classname="input-field">
                                <input
                                    type="text"
                                    placeholder="Email Subject"
                                    required=""
                                />
                                <span classname="focus" />
                            </div>
                            <span classname="animate scroll" />
                        </div>
                        <div classname="textarea-field">
                            <textarea
                                name=""
                                id=""
                                cols={30}
                                rows={10}
                                placeholder="Your Message"
                                required=""
                                defaultValue={""}
                            />
                            <span classname="focus" />
                            <span classname="animate scroll" />
                        </div>
                        <div classname="btn-box btns">
                            <button type="submit" classname="btn">
                                Submit
                            </button>
                            <span classname="animate scroll" />
                        </div>
                    </form>
                </section>
                <footer classname="footer">
                    <div classname="footer-text">
                        <p>Copyright © 2023 by NaejShaw | All Rights Reserved.</p>
                        <span classname="animate scroll" />
                    </div>
                    <div classname="footer-iconTop">
                        <a href="#">
                            <i classname="bx bx-up-arrow-alt" />
                        </a>
                        <span classname="animate scroll" />
                    </div>
                </footer>
            </div>
        </>
    );
}
