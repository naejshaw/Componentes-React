import Button from "@/Components/MyComponents/Button";
import Site from "@/Layouts/SiteLayout";
import { Head, Link } from "@inertiajs/react";

export default function Home({children})
{
    return(<>
        <Head title="HBO Clone" />
        <Site>
            <div className="mt-24 mb-2 box-border px-1 font-raleway bg-primary text-text block">
                <nav className="w-full md:pt-5 lg:pt-0 py-0.5 px-4 fixed flex items-center justify-between bg-navBg z-10">
                    <Button className={"max-w-40 menu__logo"} link={"/clone/hbo"}>
                        <img src="https://raw.githubusercontent.com/naejshaw/hbomax/master/assets/images/hbo.png" alt="Logo" className="w-full menu__logo-image"/>
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
