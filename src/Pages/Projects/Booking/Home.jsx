import Site from "../../../Layouts/SiteLayout";
import {Accordion, Carousel, Datepicker, Navbar} from 'flowbite-react';
import { Link } from "react-router-dom";
export default function Booking()
{
    const title = "Nome da Empresa";
    //TODO: Pesquisar e estruturar
    return(<>
    <Site>
        <div id="header" className="mt-24 py-6 px-4 w-full">
            <Navbar rounded className="flex justify-between w-full gap-8">
                <Navbar.Brand as={Link} href="https://flowbite-react.com">
                    <img src="https://img.freepik.com/vetores-gratis/logotipo-detalhado-da-viagem_23-2148616611.jpg?w=740&t=st=1722001140~exp=1722001740~hmac=af528988d0faae8dfaa07fdaee51bf0702cda154c7f6767614fa9063c15f2c4e" className="mr-3 h-6 sm:h-9" alt="Flowbite React Logo" />
                    <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">{title}</span>
                </Navbar.Brand>
                <Navbar.Toggle className="md:hidden"/>
                <div className="hidden list-none md:flex md:items-center">
                    <Navbar.Link className="px-2 border-none">Sobre Nós</Navbar.Link>
                    <Navbar.Link className="px-2 border-none">Acomodações</Navbar.Link>
                    <Navbar.Link className="px-2 border-none">Passagens Aéreas</Navbar.Link>
                    <Navbar.Link className="px-2 border-none">Pacotes</Navbar.Link>
                    <Navbar.Link className="px-2 border-none">Contato</Navbar.Link>
                </div>
                <Navbar.Collapse className="md:hidden">
                    <Navbar.Link>Sobre Nós</Navbar.Link>
                    <Navbar.Link>Acomodações</Navbar.Link>
                    <Navbar.Link>Passagens Aéreas</Navbar.Link>
                    <Navbar.Link>Pacotes</Navbar.Link>
                    <Navbar.Link>Contato</Navbar.Link>
                </Navbar.Collapse>
            </Navbar>
        </div>
        <div id="main" className="mt-4 py-6 px-auto h-screen w-full">
            <main className="flex flex-col w-full mx-4 p-4">
                <div className="flex justify-evenly px-4 gap-4 max-h-8 w-full">
                    <img className="flex-1" src="" alt="Logo"></img>
                    <input className="flex-1"></input>
                    <Datepicker className="flex-1"></Datepicker>
                </div>
            </main>
        </div>
        <div id="content" className="mt-4 py-6 px-4 h-screen w-full">
            <Carousel className="flex flex-col columns-1">
                <div className="flex h-full items-center justify-center bg-gray-400 dark:bg-gray-700 dark:text-white">
                Slide 1
                </div>
                <div className="flex h-full items-center justify-center bg-gray-400 dark:bg-gray-700 dark:text-white">
                Slide 2
                </div>
                <div className="flex h-full items-center justify-center bg-gray-400 dark:bg-gray-700 dark:text-white">
                Slide 3
                </div>
            </Carousel>
        </div>
        <div id="footer" className="mt-4 py-6 px-4 h-screen w-full">
            <Accordion collapseAll>
                <Accordion.Panel>
                    <Accordion.Title>What is Flowbite?</Accordion.Title>
                    <Accordion.Content>
                    <p className="mb-2 text-gray-500 dark:text-gray-400">
                        Flowbite is an open-source library of interactive components built on top of Tailwind CSS including buttons,
                        dropdowns, modals, navbars, and more.
                    </p>
                    <p className="text-gray-500 dark:text-gray-400">
                        Check out this guide to learn how to&nbsp;
                        <a
                        href="https://flowbite.com/docs/getting-started/introduction/"
                        className="text-cyan-600 hover:underline dark:text-cyan-500"
                        >
                        get started&nbsp;
                        </a>
                        and start developing websites even faster with components on top of Tailwind CSS.
                    </p>
                    </Accordion.Content>
                </Accordion.Panel>
                <Accordion.Panel>
                    <Accordion.Title>Is there a Figma file available?</Accordion.Title>
                    <Accordion.Content>
                    <p className="mb-2 text-gray-500 dark:text-gray-400">
                        Flowbite is first conceptualized and designed using the Figma software so everything you see in the library
                        has a design equivalent in our Figma file.
                    </p>
                    <p className="text-gray-500 dark:text-gray-400">
                        Check out the
                        <a href="https://flowbite.com/figma/" className="text-cyan-600 hover:underline dark:text-cyan-500">
                        Figma design system
                        </a>
                        based on the utility classes from Tailwind CSS and components from Flowbite.
                    </p>
                    </Accordion.Content>
                </Accordion.Panel>
                <Accordion.Panel>
                    <Accordion.Title>What are the differences between Flowbite and Tailwind UI?</Accordion.Title>
                    <Accordion.Content>
                    <p className="mb-2 text-gray-500 dark:text-gray-400">
                        The main difference is that the core components from Flowbite are open source under the MIT license, whereas
                        Tailwind UI is a paid product. Another difference is that Flowbite relies on smaller and standalone
                        components, whereas Tailwind UI offers sections of pages.
                    </p>
                    <p className="mb-2 text-gray-500 dark:text-gray-400">
                        However, we actually recommend using both Flowbite, Flowbite Pro, and even Tailwind UI as there is no
                        technical reason stopping you from using the best of two worlds.
                    </p>
                    <p className="mb-2 text-gray-500 dark:text-gray-400">Learn more about these technologies:</p>
                    <ul className="list-disc pl-5 text-gray-500 dark:text-gray-400">
                        <li>
                        <a href="https://flowbite.com/pro/" className="text-cyan-600 hover:underline dark:text-cyan-500">
                            Flowbite Pro
                        </a>
                        </li>
                        <li>
                        <a
                            href="https://tailwindui.com/"
                            rel="nofollow"
                            className="text-cyan-600 hover:underline dark:text-cyan-500"
                        >
                            Tailwind UI
                        </a>
                        </li>
                    </ul>
                    </Accordion.Content>
                </Accordion.Panel>
            </Accordion>
        </div>
    </Site>
    </>);
}
