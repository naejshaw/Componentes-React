import Button from "../../../Components/MyComponents/Button";
import Site from "../../../Layouts/SiteLayout";
import logo from '../../../assets/hboLogo.png';
import { IHome } from "./types";

export default function Home({ children }: IHome) {
    return (
        <Site>
            <div className="mt-24 mb-2 box-border px-1 font-raleway bg-[#5323ac] text-text block">
                <nav className="w-[81.5%] md:pt-5 lg:pt-0 py-0.5 px-4 fixed flex items-center justify-between bg-navBg z-10 bg-[rgba(255,255,255,0.2)] rounded-[16px] shadow-lg backdrop-filter backdrop-blur-[5px] border border-[rgba(255,255,255,0.3)]">
                    <Button className="max-w-40 menu__logo" link="/clone/hbo">
                        <img src={logo} alt="HBO Logo" className="w-full menu__logo-image" />
                    </Button>
                    <div className="flex gap-6 items-center">
                        <Button className="mr-6 font-bold text-sm text-text uppercase menu__item" link="/clone/hbo/sign" title="Entrar" />
                        <Button className="mr-6 text-sm py-2 px-10 bg-tertiary rounded-3xl font-bold text-text uppercase border-none cursor-pointer hover:bg-btnLinkBg hover:text-btnLink menu__item menu__item-button button" link="/clone/hbo/#subscription" title="Assine Agora" />
                    </div>
                </nav>

                {children}

                <footer className="footer max-w-7xl m-auto p-6 text-center container">
                    <ul className="flex flex-wrap justify-center">
                        {["Agora na HBO Max", "Em breve", "Filme em destaque", "Séries", "Ajuda"].map((title, index) => (
                            <Button key={index} className="font-raleway font-bold text-link uppercase my-0 mx-3 text-sm hover:text-text footer__link" link="" title={title} />
                        ))}
                    </ul>
                    <p className="font-quicksand text-xs my-4 mx-0 text-link footer_legal font-light text-small">© 2022 WarnerMedia Direct Latin America, LLC. Todos os direitos reservados. HBO Max é usado sob licença.</p>
                    <div className="footer__social flex justify-center gap-8">
                        {[
                            { link: "https://www.facebook.com/HBOMaxBr/", icon: "fa-facebook" },
                            { link: "https://twitter.com/HBOMaxBR", icon: "fa-twitter" },
                            { link: "https://www.instagram.com/hbomaxbr/", icon: "fa-instagram" },
                            { link: "https://www.youtube.com/c/hbomaxbr", icon: "fa-youtube" }
                        ].map((social, index) => (
                            <Button key={index} className="block items-center justify-center gap-10 mb-4 sm:flex sm:mt-20 footer__social-link" link={social.link}>
                                <i className={`text-link scale-150 fa ${social.icon} hover:text-text`}></i>
                            </Button>
                        ))}
                    </div>
                </footer>
            </div>
        </Site>
    );
}