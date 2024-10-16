import { profile } from "../data";
import { Link } from "react-router-dom";
import { Dropdown, DropdownItem, Navbar } from "flowbite-react";

export default function Header() 
{

    return (
        <>
            <header className="fixed top-0 left-0 w-full py-8 px-[9%] flex justify-between items-center z-50 transition-[.3s] rounded-[16px] [box-shadow:0_4px_30px_rgba(0,_0,_0,_0.1)] backdrop-filter backdrop-blur-[10.2px]" id="header">
                <Link
                    to={"/"}
                    className="relative text-2xl font-semibold text-white hover:text-primary"
                >
                    {profile.name}.<span className="animate"></span>
                </Link>
                <Navbar className="md:!hidden">
                    <Navbar.Toggle className="relative text-2xl text-white hover:text-primary cursor-pointer"/>
                    <Navbar.Collapse>
                        <div className="text-lg text-white font-medium ml-14 transition-[.3s] hover:text-primary">
                            <Dropdown label="Projects 1/3">
                                <Dropdown.Item>
                                    Blog:
                                    <DropdownItem as={Link} to={'/blog'}>All</DropdownItem>
                                    <DropdownItem as={Link} to={"/blog/content/1"}>Article 1</DropdownItem>
                                    <DropdownItem as={Link} to={"/blog/content/2"}>Article 2</DropdownItem>
                                    <DropdownItem as={Link} to={"/blog/content/3"}>Article 3</DropdownItem>
                                    <DropdownItem as={Link} to={"/blog/content/4"}>Article 4</DropdownItem>
                                </Dropdown.Item>
                                <Dropdown.Item as={Link} to={"/booking"}>Booking</Dropdown.Item>
                                <Dropdown.Item as={Link} to={"/calculator"}>Calculator</Dropdown.Item>
                                <Dropdown.Item>
                                    Clone:
                                    <Dropdown.Item as={Link} to={"/clone/discord"}>Discord</Dropdown.Item>
                                    <Dropdown.Item as={Link} to={"/clone/hbo"}>HBO</Dropdown.Item>
                                    <Dropdown.Item as={Link} to={"/clone/youtube"}>YouTube</Dropdown.Item>
                                </Dropdown.Item>
                                <Dropdown.Item as={Link} to={"/cms"}>CMS</Dropdown.Item>
                                <Dropdown.Item as={Link} to={"/crud"}>CRUD</Dropdown.Item>
                            </Dropdown>
                        </div>
                        <div className="text-lg text-white font-medium ml-14 transition-[.3s] hover:text-primary">
                            <Dropdown label="Projects 2/3">
                                <Dropdown.Item as={Link} to={"/dashboard"}>Dashboard</Dropdown.Item>
                                <Dropdown.Item as={Link} to={"/delivery"}>Delivery</Dropdown.Item>
                                <Dropdown.Item as={Link} to={"/ecommerce"}>E-commerce</Dropdown.Item>
                                <Dropdown.Item as={Link} to={"/gallery"}>Gallery</Dropdown.Item>
                                <Dropdown.Item as={Link} to={"/playlist"}>Playlist</Dropdown.Item>
                                <Dropdown.Item as={Link} to={"/portfolio"}>Portfolio</Dropdown.Item>
                            </Dropdown>
                        </div>
                        <div className="text-lg text-white font-medium ml-14 transition-[.3s] hover:text-primary">
                            <Dropdown label="Projects 3/3">
                                <Dropdown.Item as={Link} to={"/quiz"}>Quiz</Dropdown.Item>
                                <Dropdown.Item as={Link} to={"/ranking"}>Ranking</Dropdown.Item>
                                <Dropdown.Item as={Link} to={"/schedule"}>Schedule</Dropdown.Item>
                                <Dropdown.Item as={Link} to={"/siteapi"}>Site API</Dropdown.Item>
                                <Dropdown.Item as={Link} to={"/socialmedia"}>Social Media</Dropdown.Item>
                                <Dropdown.Item as={Link} to={"/template"}>Template</Dropdown.Item>
                                <Dropdown.Item as={Link} to={"/tictactoe"}>Tic Tac Toe</Dropdown.Item>
                                <Dropdown.Item as={Link} to={"/weather"}>Weather</Dropdown.Item>
                            </Dropdown>
                        </div>
                    </Navbar.Collapse>
                </Navbar>

                <nav className="relative md:flex hidden">
                    <div className="text-lg text-white font-medium ml-14 transition-[.3s] hover:text-primary">
                        <Dropdown label="Projects 1/3">
                            <Dropdown.Item>
                                Blog:
                                <DropdownItem as={Link} to={'/blog'}>All</DropdownItem>
                                <DropdownItem as={Link} to={"/blog/content/1"}>Article 1</DropdownItem>
                                <DropdownItem as={Link} to={"/blog/content/2"}>Article 2</DropdownItem>
                                <DropdownItem as={Link} to={"/blog/content/3"}>Article 3</DropdownItem>
                                <DropdownItem as={Link} to={"/blog/content/4"}>Article 4</DropdownItem>
                            </Dropdown.Item>
                            <Dropdown.Item as={Link} to={"/booking"}>Booking</Dropdown.Item>
                            <Dropdown.Item as={Link} to={"/calculator"}>Calculator</Dropdown.Item>
                            <Dropdown.Item>
                                Clone:
                                <Dropdown.Item as={Link} to={"/clone/discord"}>Discord</Dropdown.Item>
                                <Dropdown.Item as={Link} to={"/clone/hbo"}>HBO</Dropdown.Item>
                                <Dropdown.Item as={Link} to={"/clone/youtube"}>YouTube</Dropdown.Item>
                            </Dropdown.Item>
                            <Dropdown.Item as={Link} to={"/cms"}>CMS</Dropdown.Item>
                            <Dropdown.Item as={Link} to={"/crud"}>CRUD</Dropdown.Item>
                        </Dropdown>
                    </div>
                    <div className="text-lg text-white font-medium ml-14 transition-[.3s] hover:text-primary">
                        <Dropdown label="Projects 2/3">
                            <Dropdown.Item as={Link} to={"/dashboard"}>Dashboard</Dropdown.Item>
                            <Dropdown.Item as={Link} to={"/delivery"}>Delivery</Dropdown.Item>
                            <Dropdown.Item as={Link} to={"/ecommerce"}>E-commerce</Dropdown.Item>
                            <Dropdown.Item as={Link} to={"/gallery"}>Gallery</Dropdown.Item>
                            <Dropdown.Item as={Link} to={"/playlist"}>Playlist</Dropdown.Item>
                            <Dropdown.Item as={Link} to={"/portfolio"}>Portfolio</Dropdown.Item>
                        </Dropdown>
                    </div>
                    <div className="text-lg text-white font-medium ml-14 transition-[.3s] hover:text-primary">
                        <Dropdown label="Projects 3/3">
                            <Dropdown.Item as={Link} to={"/quiz"}>Quiz</Dropdown.Item>
                            <Dropdown.Item as={Link} to={"/ranking"}>Ranking</Dropdown.Item>
                            <Dropdown.Item as={Link} to={"/schedule"}>Schedule</Dropdown.Item>
                            <Dropdown.Item as={Link} to={"/siteapi"}>Site API</Dropdown.Item>
                            <Dropdown.Item as={Link} to={"/socialmedia"}>Social Media</Dropdown.Item>
                            <Dropdown.Item as={Link} to={"/template"}>Template</Dropdown.Item>
                            <Dropdown.Item as={Link} to={"/tictactoe"}>Tic Tac Toe</Dropdown.Item>
                            <Dropdown.Item as={Link} to={"/weather"}>Weather</Dropdown.Item>
                        </Dropdown>
                    </div>
                    <span className="active-nav"></span>
                    <span className="animate"></span>
                </nav>
            </header>
        </>
    );
}
