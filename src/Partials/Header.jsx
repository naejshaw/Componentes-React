import { Link } from "react-router-dom";
import { Dropdown, DropdownItem } from "flowbite-react";

export default function Header() 
{

    return (
        <>
            <header className="fixed top-0 left-0 w-full py-8 px-[9%] flex justify-between items-center z-50 transition-[.3s] bg-[#081b29] bg-opacity-95" id="header">
                <a
                    href="/"
                    className="relative text-2xl font-semibold text-[#ededed] hover:text-[#00abf0]"
                >
                    Jean.<span className="animate"></span>
                </a>

                <div className="relative text-2xl text-[#ededed] hover:text-[#00abf0] cursor-pointer md:!hidden">
                    <span className="animate"></span>
                    <i className="bx bx-menu">X</i>
                </div>

                <nav className="relative md:flex hidden">
                    <div className="text-lg text-[#ededed] font-medium ml-14 transition-[.3s] hover:text-[#00abf0]">
                        <Dropdown label="Home Sections">
                            <Dropdown.Item href={"/#about"}>About</Dropdown.Item>
                            <Dropdown.Item href={"/#education"}>Education</Dropdown.Item>
                            <Dropdown.Item href={"/#skills"}>Skills</Dropdown.Item>
                            <Dropdown.Item href={"/#contact"}>Contact</Dropdown.Item>
                        </Dropdown>
                    </div>
                    <div className="text-lg text-[#ededed] font-medium ml-14 transition-[.3s] hover:text-[#00abf0]">
                        <Dropdown label="Projects 1/3">
                            <Dropdown.Item>
                                Blog:
                                <DropdownItem href={'/blog'}>All</DropdownItem>
                                <DropdownItem href={"/blog/content/1"}>Article 1</DropdownItem>
                                <DropdownItem href={"/blog/content/2"}>Article 2</DropdownItem>
                                <DropdownItem href={"/blog/content/3"}>Article 3</DropdownItem>
                                <DropdownItem href={"/blog/content/4"}>Article 4</DropdownItem>
                            </Dropdown.Item>
                            <Dropdown.Item href="/booking">Booking</Dropdown.Item>
                            <Dropdown.Item href={"/calculator"}>Calculator</Dropdown.Item>
                            <Dropdown.Item>
                                Clone:
                                <Dropdown.Item href="/clone/discord">Discord</Dropdown.Item>
                                <Dropdown.Item href="/clone/hbo">HBO</Dropdown.Item>
                                <Dropdown.Item href="/clone/youtube">YouTube</Dropdown.Item>
                            </Dropdown.Item>
                            <Dropdown.Item href="/cms">CMS</Dropdown.Item>
                            <Dropdown.Item href="/crud">CRUD</Dropdown.Item>
                        </Dropdown>
                    </div>
                    <div className="text-lg text-[#ededed] font-medium ml-14 transition-[.3s] hover:text-[#00abf0]">
                        <Dropdown label="Projects 2/3">
                            <Dropdown.Item href="dashboard">Dashboard</Dropdown.Item>
                            <Dropdown.Item href="/delivery">Delivery</Dropdown.Item>
                            <Dropdown.Item href="/ecommerce">E-commerce</Dropdown.Item>
                            <Dropdown.Item href="/gallery">Gallery</Dropdown.Item>
                            <Dropdown.Item href="/playlist">Playlist</Dropdown.Item>
                            <Dropdown.Item href="/portfolio">Portfolio</Dropdown.Item>
                        </Dropdown>
                    </div>
                    <div className="text-lg text-[#ededed] font-medium ml-14 transition-[.3s] hover:text-[#00abf0]">
                        <Dropdown label="Projects 3/3">
                            <Dropdown.Item href="/quiz">Quiz</Dropdown.Item>
                            <Dropdown.Item href="/ranking">Ranking</Dropdown.Item>
                            <Dropdown.Item href="/schedule">Schedule</Dropdown.Item>
                            <Dropdown.Item href="/siteapi">Site API</Dropdown.Item>
                            <Dropdown.Item href="/socialmedia">Social Media</Dropdown.Item>
                            <Dropdown.Item href="/tictactoe">Tic Tac Toe</Dropdown.Item>
                            <Dropdown.Item href="/weather">Weather</Dropdown.Item>
                        </Dropdown>
                    </div>
                    <span className="active-nav"></span>
                    <span className="animate"></span>
                </nav>
            </header>
        </>
    );
}
