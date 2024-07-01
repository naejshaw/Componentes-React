import Dropdown from "@/Components/Dropdown";
import { Link } from "@inertiajs/react";

export default function Header({ children }) {
    return (
        <>
            <header className="fixed top-0 left-0 w-full py-8 px-[9%] flex justify-between items-center z-50 transition-[.3s] bg-[#081b29] bg-opacity-95">
                <Link
                    href="/"
                    className="relative text-2xl font-semibold text-[#ededed] hover:text-[#00abf0]"
                >
                    Jean.<span className="animate"></span>
                </Link>

                <div className="relative text-2xl text-[#ededed] cursor-pointer d-none">
                    <span className="animate"></span>
                    <i className="bx bx-menu"></i>
                </div>

                <nav className="relative">
                    <Dropdown>
                        <Dropdown.Link href="blog">
                            Blog
                        </Dropdown.Link>
                        <Dropdown.Link href="booking">
                            Booking
                        </Dropdown.Link>
                    </Dropdown>
                    <Link
                        href="#about"
                        className="text-lg text-[#ededed] font-medium ml-14 transition-[.3s] hover:text-[#00abf0]"
                    >
                        About
                    </Link>
                    <Link
                        href="#education"
                        className="text-lg text-[#ededed] font-medium ml-14 transition-[.3s] hover:text-[#00abf0]"
                    >
                        Education
                    </Link>
                    <Link
                        href="#skills"
                        className="text-lg text-[#ededed] font-medium ml-14 transition-[.3s] hover:text-[#00abf0]"
                    >
                        Skills
                    </Link>
                    <Link
                        href="#contact"
                        className="text-lg text-[#ededed] font-medium ml-14 transition-[.3s] hover:text-[#00abf0]"
                    >
                        Contact
                    </Link>

                    <span className="active-nav"></span>
                    <span className="animate"></span>
                </nav>
            </header>
        </>
    );
}
