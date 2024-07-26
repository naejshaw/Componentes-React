import Site from "../../../Layouts/SiteLayout";
import {Navbar} from 'flowbite-react';
import { Link } from "react-router-dom";
export default function Booking()
{
    //TODO: Pesquisar e estruturar
    return(<>
    <Site>
        <div id="header" className="mt-24 py-6 px-4 w-full">
            <Navbar rounded className="flex justify-between w-full gap-8">
                <Navbar.Brand as={Link} href="https://flowbite-react.com">
                    <img src="https://img.freepik.com/vetores-gratis/logotipo-detalhado-da-viagem_23-2148616611.jpg?w=740&t=st=1722001140~exp=1722001740~hmac=af528988d0faae8dfaa07fdaee51bf0702cda154c7f6767614fa9063c15f2c4e" className="mr-3 h-6 sm:h-9" alt="Flowbite React Logo" />
                    <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">Flowbite React</span>
                </Navbar.Brand>
                <Navbar.Toggle className="md:hidden"/>
                <div className="hidden md:flex">
                    <Navbar.Link>Sobre Nós</Navbar.Link>
                    <Navbar.Link>Acomodações</Navbar.Link>
                    <Navbar.Link>Passagens Aéreas</Navbar.Link>
                    <Navbar.Link>Pacotes</Navbar.Link>
                    <Navbar.Link>Contato</Navbar.Link>
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
    </Site>
    </>);
}
