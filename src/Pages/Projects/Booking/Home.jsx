import Site from "../../../Layouts/SiteLayout";
import {Accordion, Datepicker, Navbar} from 'flowbite-react';
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
            <div id="animation-carousel" class="relative w-full" data-carousel="static">
                <div class="relative h-56 overflow-hidden rounded-lg md:h-96">
                    <div class="hidden duration-200 ease-linear" data-carousel-item>
                        <img src="/docs/images/carousel/carousel-1.svg" class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..." />
                    </div>
                    <div class="hidden duration-200 ease-linear" data-carousel-item>
                        <img src="/docs/images/carousel/carousel-2.svg" class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..." />
                    </div>
                    <div class="hidden duration-200 ease-linear" data-carousel-item="active">
                        <img src="/docs/images/carousel/carousel-3.svg" class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..." />
                    </div>
                    <div class="hidden duration-200 ease-linear" data-carousel-item>
                        <img src="/docs/images/carousel/carousel-4.svg" class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..." />
                    </div>
                    <div class="hidden duration-200 ease-linear" data-carousel-item>
                        <img src="/docs/images/carousel/carousel-5.svg" class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..." />
                    </div>
                </div>
                <button type="button" class="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-prev>
                    <span class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                        <svg class="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 1 1 5l4 4"/>
                        </svg>
                        <span class="sr-only">Previous</span>
                    </span>
                </button>
                <button type="button" class="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-next>
                    <span class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                        <svg class="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4"/>
                        </svg>
                        <span class="sr-only">Next</span>
                    </span>
                </button>
            </div>
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
