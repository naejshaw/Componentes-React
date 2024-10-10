import Button from "../../../Components/MyComponents/Button";
import Site from "../../../Layouts/SiteLayout";
import logo from '../../../assets/hboLogo.png';
import { IHome } from "./types";

export default function Home({children}:IHome)
{
    return(<>
        <Site>
            <div className="mt-24 mb-2 box-border px-1 font-raleway bg-primary text-text block">
                <nav className="w-[81%] md:pt-5 lg:pt-0 py-0.5 px-4 fixed flex items-center justify-between bg-navBg z-10 bg-[rgba(255,_255,_255,_0.2)] rounded-[16px] [box-shadow:0_4px_30px_rgba(0,_0,_0,_0.1)] backdrop-filter backdrop-blur-[5px] border-[1px] border-solid border-[rgba(255,255,255,0.3)]">
                    <Button className={"max-w-40 menu__logo"} link={"/clone/hbo"}>
                        <img src={logo} alt="Logo" className="w-full menu__logo-image"/>
                    </Button>
                    <div className="flex gap-6 items-center">
                        <Button className={"mr-6 font-bold text-sm text-text uppercase menu__item"} link={"/clone/hbo/sign"} title={"Entrar"}/>
                        <Button className={"mr-6 text-sm py-2 px-10 bg-tertiary rounded-3xl font-bold text-text uppercase border-none cursor-pointer hover:bg-btnLinkBg hover:text-btnLink menu__item menu__item-button button"} link={"/clone/hbo/#subscription"} title={"Assine Agora"}/>
                    </div>
                </nav>
                {children}
                <footer className="footer max-w-7xl m-auto p-6 text-center container">
                    <ul>
                        <Button className={"font-raleway font-bold text-link uppercase my-0 mx-3 text-sm hover:text-text footer__link"} link={""} title={"Agora na HBO Max"}/>
                        <Button className={"font-raleway font-bold text-link uppercase my-0 mx-3 text-sm hover:text-text footer__link"} link={""} title={"Em breve"}/>
                        <Button className={"font-raleway font-bold text-link uppercase my-0 mx-3 text-sm hover:text-text footer__link"} link={""} title={"filme em destaque"}/>
                        <Button className={"font-raleway font-bold text-link uppercase my-0 mx-3 text-sm hover:text-text footer__link"} link={""} title={"séries"}/>
                        <Button className={"font-raleway font-bold text-link uppercase my-0 mx-3 text-sm hover:text-text footer__link"} link={""} title={"ajuda"}/>
                    </ul>
                    <p className="font-quicksand text-xs my-4 mx-0 text-link footer_legal font-light text-small">© 2022 WarnerMedia Direct Latin America, LLC. Todos os direitos reservados. HBO Max é usado sob licença.</p>
                    <div className="footer__social flex justify-center gap-8">
                        <Button className={"block items-center justify-center gap-10 mb-4 sm:flex sm:mt-20 footer__social-link"} link={"https://www.facebook.com/HBOMaxBr/"}>
                            <i className="text-link scale-150 fa fa-facebook hover:text-text"></i>
                        </Button>
                        <Button className={"block items-center justify-center gap-10 mb-4 sm:flex sm:mt-20 footer__social-link"} link={"https://twitter.com/HBOMaxBR"}>
                            <i className="text-link scale-150 fa fa-twitter hover:text-text"></i>
                        </Button>
                        <Button className={"block items-center justify-center gap-10 mb-4 sm:flex sm:mt-20 footer__social-link"} link={"https://www.instagram.com/hbomaxbr/"}>
                            <i className="text-link scale-150 fa fa-instagram hover:text-text"></i>
                        </Button>
                        <Button className={"block items-center justify-center gap-10 mb-4 sm:flex sm:mt-20 footer__social-link"} link={"https://www.youtube.com/c/hbomaxbr"}>
                            <i className="text-link scale-150 fa fa-youtube hover:text-text"></i>
                        </Button>
                    </div>
                </footer>
            </div>
        </Site>
    </>);
}