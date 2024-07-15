import Button from "@/Components/MyComponents/Button";
import Card from "@/Components/MyComponents/Card";
import SkillsCard from "@/Components/MyComponents/SkillsCard";
import SkillsContainer from "@/Components/MyComponents/SkillsContainer";
import Subject from "@/Components/MyComponents/Subject";
import Site from "@/Layouts/SiteLayout";
import Section from "@/Partials/Section";
import { Head } from "@inertiajs/react";
import { profile } from "../data";

export default function Welcome() {
    return (
        <>
            <Head title="Welcome" />
            <Site>
                <Section
                    className={
                        "min-h-screen py-20 px-[9%] flex items-center bg-cover bg-center show-animate"
                    }
                    id={"home"}
                >
                    <div className="absolute flex flex-col items-center justify-center">
                        <div className="max-w-5xl z-40 home-content flex flex-col">
                            <h1 className="relative inline-block text-4xl md:text-5xl lg:text-6xl text-white font-extrabold">
                                Hi, I'm <span>{profile.name}</span>
                                <span className="text-[#ededed] animate" />
                            </h1>
                            <h3 className="max-w-lg text-3xl md:text-4xl lg:text-5xl font-bold text-[#00abf0] animate-bounce">
                                {profile.role}
                            </h3>
                            <p className="relative text-lg md:text-xl lg:text-2xl my-8 mr-16">
                                Lorem ipsum dolor, sit amet consectetur adipisicing
                                elit. Tempora perferendis commodi illum atque a
                                soluta libero et quas placeat, molestiae possimus
                                sunt ut. Sint, sapiente velit! Ullam sapiente veniam
                                minus!
                            </p>
                            <div className="relative flex gap-4 md:justify-between w-[22rem] h-[5rem] hover:text-[#00abf0]">
                                <Button className={"relative inline-flex justify-center items-center w-[8rem] md:w-[9rem] lg:w-[10rem] max-h-12 rounded-lg bg-[#00abf0] border-[.2rem] border-solid border-[#00abf0] text-base md:text-lg lg:text-xl font-semibold text-[#081b29] z-10 overflow-hidden duration-500 hover:text-[#00abf0] hover:bg-[#00abf0] before:absolute before:top-0 before:left-0 before:w-0 before:h-full before:bg-[#081b29] before:-z-10 before:duration-500 hover:before:w-full btn"} link={"#"} title={"Hire Me"}/>
                                <Button
                                    link={"#"}
                                    className={"relative inline-flex justify-center items-center w-[8rem] md:w-[9rem] lg:w-[10rem] max-h-12 rounded-lg bg-[#081b29] border-[.2rem] border-solid border-[#00abf0] text-base md:text-lg lg:text-xl font-semibold text-[#00abf0] z-10 overflow-hidden duration-500 hover:text-[#081b29] hover:bg-[#00abf0] before:absolute before:top-0 before:left-0 before:w-0 before:h-full before:bg-[#00abf0] before:-z-10 before:duration-500 before:hover:w-full btn"}
                                    title={"Let's Talk"}
                                />
                            </div>
                            <div className="w-52 ml-0 flex justify-between home-sci">
                                <Button className={"relative inline-flex justify-center items-center w-10 h-10 bg-transparent border-spacing-1 border-[#00abf0] rounded-lg text-xl text-[#00abf0] z-10 overflow-hidden duration-500 "} link={media.facebook} social={"facebook"}/>
                                <Button className={"relative inline-flex justify-center items-center w-10 h-10 bg-transparent border-spacing-1 border-[#00abf0] rounded-lg text-xl text-[#00abf0] z-10 overflow-hidden duration-500 "} link={media.instagram} social={"instagram"}/>
                                <Button className={"relative inline-flex justify-center items-center w-10 h-10 bg-transparent border-spacing-1 border-[#00abf0] rounded-lg text-xl text-[#00abf0] z-10 overflow-hidden duration-500 "} link={media.whatsapp} social={"whatsapp"}/>
                                <Button className={"relative inline-flex justify-center items-center w-10 h-10 bg-transparent border-spacing-1 border-[#00abf0] rounded-lg text-xl text-[#00abf0] z-10 overflow-hidden duration-500 "} link={media.linkedin} social={"linkedin"}/>
                                <Button className={"relative inline-flex justify-center items-center w-10 h-10 bg-transparent border-spacing-1 border-[#00abf0] rounded-lg text-xl text-[#00abf0] z-10 overflow-hidden duration-500 "} link={media.github} social={"github"}/>
                            </div>
                        </div>

                    </div>
                        <img className="min-h-screen min-w-screen scale-x-150 md:scale-x-125 lg:scale-x-100 mr-0 relative" src="https://raw.githubusercontent.com/naejshaw/Portfolio-1/main/images/home.jpg"/>
                        <div className="absolute top-0 right-0 w-5/12 h-full bg-[#081b29] bg-opacity-80 hover:bg-opacity-10 animate-pulse home-imgHover" />

                </Section>
                <Section
                    className={
                        "min-h-screen pt-40 px-[9%] flex items-center justify-center flex-col gap-8 bg-[#112e42] pb-24 about"
                    }
                    id={"about"}
                    title={"About"}
                    titleSpan={"Me"}
                >
                    <div className="relative w-96 h-96 rounded-lg flex justify-center items-center about-img">
                        <img
                            className="z-10 w-[90%] rounded-full border-spacing-1 border-solid border-[#00abf0]"
                            src="https://raw.githubusercontent.com/naejshaw/Portfolio-1/main/images/about.jpg"
                            alt=""
                        />
                        <span className="absolute  w-full h-full rounded-full border-[.2rem] border-y-[#112e42] border-x-[#00abf0] animate-spin transition-transform" />
                        <span className="bg-[#00abf0] animate scroll" />
                    </div>
                    <div className="text-center about-content">
                        <h3 className="relative inline-block text-4xl">
                            Frontend Developer
                            <span className="bg-[#00abf0] animate scroll" />
                        </h3>
                        <p className="relative text-lg md:text-xl lg:text-2xl m-9">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Expedita veritatis distinctio, modi iste
                            nostrum labore autem. Soluta repellendus accusamus,
                            doloremque ratione nam tempora hic pariatur, ad quae
                            expedita, sapiente nisi!
                            <span className="bg-[#00abf0] animate scroll" />
                        </p>
                        <div className="inline-block w-60 btn-box btns">
                            <Button className={"relative justify-center items-center bg-[#00abf0] text-xl font-normal text-[#081b29] z-10 overflow-hidden duration-500 hover:text-[#00abf0] hover:bg-[#00abf0] before:absolute before:top-0 before:left-0 before:w-0 before:h-full before:bg-[#081b29] before:-z-10 before:duration-500 before:hover:w-full cursor-pointer btn inline-block w-60 mt-4 py-2 border-[#00abf0] border-solid border-2 rounded-md"} link={"#"} title={"Read More"}/>
                        </div>
                    </div>
                </Section>
                <Section
                    className={
                        "min-h-screen pt-40 px-[9%] flex justify-center items-center flex-col min-h-auto pb-20 education"
                    }
                    id={"education"}
                    title={"My"}
                    titleSpan={"Journey"}
                >
                    <div className="flex flex-wrap gap-20 education-row">
                        <Subject containerClass={"relative border-l-[.2rem] border-solid border-[#00abf0] education-box"} title={"Education"}>
                            <Card cardDate={"2017-2018"} cardText={"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Placeat reprehenderit quidem quia eos dolor possimus cumque. Molestias tenetur odit dolorum."} cardTitle={"Master Degree - University"}/>
                            <Card cardDate={"2018-2019"} cardText={"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Placeat reprehenderit quidem quia eos dolor possimus cumque. Molestias tenetur odit dolorum."} cardTitle={"Master Degree - University"}/>
                            <Card cardDate={"2019-2020"} cardText={"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Placeat reprehenderit quidem quia eos dolor possimus cumque. Molestias tenetur odit dolorum."} cardTitle={"Master Degree - University"}/>
                        </Subject>
                        <Subject containerClass={"relative border-l-[.2rem] border-solid border-[#00abf0] education-box"} title={"Experience"}>
                            <Card cardDate={"2017-2018"} cardText={"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Placeat reprehenderit quidem quia eos dolor possimus cumque. Molestias tenetur odit dolorum."} cardTitle={"Web Developer - Company"}/>
                            <Card cardDate={"2018-2019"} cardText={"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Placeat reprehenderit quidem quia eos dolor possimus cumque. Molestias tenetur odit dolorum."} cardTitle={"Web Developer - Company"}/>
                            <Card cardDate={"2019-2020"} cardText={"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Placeat reprehenderit quidem quia eos dolor possimus cumque. Molestias tenetur odit dolorum."} cardTitle={"Web Developer - Company"}/>
                        </Subject>
                    </div>
                </Section>
                <Section
                    className={
                        "min-h-screen pt-40 px-[9%] max-h-auto pb-28 bg-[#112e42] skills"
                    }
                    id={"skills"}
                    title={"My"}
                    titleSpan={"Skills"}
                >
                    <div className="flex flex-wrap gap-20 skills-row">
                        <Subject title={"Coding Skills"}>
                            <SkillsContainer>
                                <SkillsCard cardText={"90%"} cardTitle={"HTML"} />
                                <SkillsCard cardText={"80%"} cardTitle={"CSS"} />
                                <SkillsCard cardText={"65%"} cardTitle={"JavaScript"} />
                                <SkillsCard cardText={"70%"} cardTitle={"PHP"} />
                            </SkillsContainer>
                        </Subject>
                        <Subject title={"Professional Skills"}>
                            <SkillsContainer>
                                <SkillsCard cardText={"90%"} cardTitle={"Web Development"} />
                                <SkillsCard cardText={"80%"} cardTitle={"Web Design"} />
                                <SkillsCard cardText={"65%"} cardTitle={"Scrum Master"} />
                                <SkillsCard cardText={"70%"} cardTitle={"Product Owner"} />
                            </SkillsContainer>
                        </Subject>
                    </div>
                </Section>
                <Section
                    className={
                        "min-h-screen pt-40 px-[9%] min-h-auto pb-28 contact"
                    }
                    id={"contact"}
                    title={"Contact"}
                    titleSpan={"Me!"}
                >
                    <form
                        className="max-w-[70rem] my-0 mx-auto text-center"
                        action="#"
                    >
                        <div className="relative flex justify-between flex-wrap input-box">
                            <div className="relative w-[49%] my-3 mx-0 input-field">
                                <input
                                    className="w-full h-full p-6 text-lg md:text-xl lg:text-2xl bg-transparent rounded-lg border-spacing-1 border-solid border-[#00abf0] placeholder:text-[#ededed]"
                                    type="text"
                                    placeholder="Full Name"
                                    required=""
                                />
                                <span className="absolute top-0 left-0 w-0 h-full bg-[#112e42] rounded-lg -z-10 focus" />
                            </div>
                            <div className="relative w-[49%] my-3 mx-0 input-field">
                                <input
                                    className="w-full h-full p-6 text-lg md:text-xl lg:text-2xl bg-transparent rounded-lg border-spacing-1 border-solid border-[#00abf0] placeholder:text-[#ededed]"
                                    type="text"
                                    placeholder="Email Adress"
                                    required=""
                                />
                                <span className="absolute top-0 left-0 w-0 h-full bg-[#112e42] rounded-lg -z-10 focus" />
                            </div>
                            <span className="animate scroll" />
                        </div>
                        <div className="relative flex justify-between flex-wrap input-box">
                            <div className="relative w-[49%] my-3 mx-0 input-field">
                                <input
                                    className="w-full h-full p-6 text-lg md:text-xl lg:text-2xl bg-transparent rounded-lg border-spacing-1 border-solid border-[#00abf0] placeholder:text-[#ededed]"
                                    type="number"
                                    placeholder="Mobile Number"
                                    required=""
                                />
                                <span className="absolute top-0 left-0 w-0 h-full bg-[#112e42] rounded-lg -z-10 focus" />
                            </div>
                            <div className="relative w-[49%] my-3 mx-0 input-field">
                                <input
                                    className="w-full h-full p-6 text-lg md:text-xl lg:text-2xl bg-transparent rounded-lg border-spacing-1 border-solid border-[#00abf0] placeholder:text-[#ededed]"
                                    type="text"
                                    placeholder="Email Subject"
                                    required=""
                                />
                                <span className="absolute top-0 left-0 w-0 h-full bg-[#112e42] rounded-lg -z-10 focus" />
                            </div>
                            <span className="animate scroll" />
                        </div>
                        <div className="relative flex textarea-field">
                            <textarea
                                className="w-full h-full p-6 text-lg md:text-xl lg:text-2xl bg-transparent rounded-lg border-spacing-1 border-solid border-[#00abf0] placeholder:text-[#ededed] resize-none"
                                name=""
                                id=""
                                cols={30}
                                rows={10}
                                placeholder="Your Message"
                                required=""
                                defaultValue={""}
                            />
                            <span className="absolute top-0 left-0 w-0 h-full bg-[#112e42] rounded-lg -z-10 focus" />
                            <span className="animate scroll" />
                        </div>
                        <div className="btn-box btns">
                            <Button className={"relative justify-center items-center bg-[#00abf0] text-base md:text-lg lg:text-xl font-normal text-[#081b29] z-10 overflow-hidden duration-500 hover:text-[#00abf0] hover:bg-[#00abf0] before:absolute before:top-0 before:right-0 before:w-0 before:h-full before:bg-[#081b29] before:-z-10 before:duration-500 before:hover:w-full cursor-pointer btn inline-block w-60 mt-4 py-2 border-[#00abf0] border-solid border-2 rounded-md"} title={"Submit"} type={"submit"}/>
                        </div>
                    </form>
                </Section>
            </Site>
        </>
    );
}
