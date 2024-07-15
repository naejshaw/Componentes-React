import { profile } from "@/data";
import { Link } from "@inertiajs/react";
import { Dropdown, DropdownItem } from "flowbite-react";

export default function Header() {
    return (
        <>
            <header className="fixed top-0 left-0 w-full py-8 px-[9%] flex justify-between items-center z-50 transition-[.3s] bg-[#081b29] bg-opacity-95" id="header">
                <Link
                    href="/"
                    className="relative text-2xl font-semibold text-[#ededed] hover:text-[#00abf0]"
                >
                    {profile.name}.<span className="animate"></span>
                </Link>

                <div className="relative text-2xl text-[#ededed] hover:text-[#00abf0] cursor-pointer md:!hidden">
                    <i className="fa fa-bars"></i>
                </div>

                <nav className="relative md:flex hidden">
                    <div className="text-lg text-[#ededed] font-medium ml-14 transition-[.3s] hover:text-[#00abf0]">
                        <Dropdown label="Home Sections">
                            <Dropdown.Item as={Link} href={"/#about"}>About</Dropdown.Item>
                            <Dropdown.Item as={Link} href={"/#education"}>Education</Dropdown.Item>
                            <Dropdown.Item as={Link} href={"/#skills"}>Skills</Dropdown.Item>
                            <Dropdown.Item as={Link} href={"/#contact"}>Contact</Dropdown.Item>
                        </Dropdown>
                    </div>
                    <div className="text-lg text-[#ededed] font-medium ml-14 transition-[.3s] hover:text-[#00abf0]">
                        <Dropdown label="Projects 1/3">
                            <Dropdown.Item>
                                Blog:
                                <DropdownItem as={Link} href={"/blog"}>All</DropdownItem>
                                <DropdownItem as={Link} href={"/blog/content/1"}>Article 1</DropdownItem>
                                <DropdownItem as={Link} href={"/blog/content/2"}>Article 2</DropdownItem>
                                <DropdownItem as={Link} href={"/blog/content/3"}>Article 3</DropdownItem>
                                <DropdownItem as={Link} href={"/blog/content/4"}>Article 4</DropdownItem>
                            </Dropdown.Item>
                            <Dropdown.Item as={Link} href={"/booking"}>Booking</Dropdown.Item>
                            <Dropdown.Item as={Link} href={"/calculator"}>Calculator</Dropdown.Item>
                            <Dropdown.Item>
                                Clone:
                                <Dropdown.Item as={Link} href={"/clone/discord"}>Discord</Dropdown.Item>
                                <Dropdown.Item as={Link} href={"/clone/hbo"}>HBO</Dropdown.Item>
                                <Dropdown.Item as={Link} href={"/clone/youtube"}>YouTube</Dropdown.Item>
                            </Dropdown.Item>
                            <Dropdown.Item as={Link} href={"/cms"}>CMS</Dropdown.Item>
                            <Dropdown.Item as={Link} href={"/crud"}>CRUD</Dropdown.Item>
                        </Dropdown>
                    </div>
                    <div className="text-lg text-[#ededed] font-medium ml-14 transition-[.3s] hover:text-[#00abf0]">
                        <Dropdown label="Projects 2/3">
                            <Dropdown.Item as={Link} href={"/dashboard"}>Dashboard</Dropdown.Item>
                            <Dropdown.Item as={Link} href={"/delivery"}>Delivery</Dropdown.Item>
                            <Dropdown.Item as={Link} href={"/ecommerce"}>E-commerce</Dropdown.Item>
                            <Dropdown.Item as={Link} href={"/gallery"}>Gallery</Dropdown.Item>
                            <Dropdown.Item as={Link} href={"/playlist"}>Playlist</Dropdown.Item>
                            <Dropdown.Item as={Link} href={"/portfolio"}>Portfolio</Dropdown.Item>
                        </Dropdown>
                    </div>
                    <div className="text-lg text-[#ededed] font-medium ml-14 transition-[.3s] hover:text-[#00abf0]">
                        <Dropdown label="Projects 3/3">
                            <Dropdown.Item as={Link} href={"/quiz"}>Quiz</Dropdown.Item>
                            <Dropdown.Item as={Link} href={"/ranking"}>Ranking</Dropdown.Item>
                            <Dropdown.Item as={Link} href={"/schedule"}>Schedule</Dropdown.Item>
                            <Dropdown.Item as={Link} href={"/siteapi"}>Site API</Dropdown.Item>
                            <Dropdown.Item as={Link} href={"/social"}>Social Media</Dropdown.Item>
                            <Dropdown.Item as={Link} href={"/tictactoe"}>Tic Tac Toe</Dropdown.Item>
                            <Dropdown.Item as={Link} href={"/weather"}>Weather</Dropdown.Item>
                        </Dropdown>
                    </div>
                </nav>
            </header>
        </>
    );
}
