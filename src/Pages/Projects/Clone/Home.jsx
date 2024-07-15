import Site from "@/Layouts/SiteLayout";
import { Head, Link } from "@inertiajs/react";

export default function Home({children})
{
    return(<>
        <Head title="HBO Clone" />
        <Site>
            <div className="mt-24 mb-2 box-border px-1 font-raleway bg-primary text-text block">
                <nav className="w-full py-0.5 px-4 fixed flex items-center justify-between bg-navBg z-10">
                    <Link href="/clone/hbo" className="max-w-40 menu__logo">
                        <img src="https://raw.githubusercontent.com/naejshaw/hbomax/master/assets/images/hbo.png" alt="Logo" className="w-full menu__logo-image"/>
                    </Link>
                    <div className="flex gap-6 items-center">
                        <Link href="/clone/hbo/sign" className="mr-6 font-bold text-sm text-text uppercase menu__item">Entrar</Link>
                        <Link href="#subscription" className="mr-6 text-sm py-2 px-10 bg-tertiary rounded-3xl font-bold text-text uppercase border-none cursor-pointer hover:bg-btnLinkBg hover:text-btnLink menu__item menu__item-button button"> Assine Agora </Link>
                    </div>
                </nav>
                {children}
                <footer className="footer max-w-7xl m-auto p-6 text-center container">
                    <ul>
                        <Link href="" className="font-raleway font-bold text-link uppercase my-0 mx-3 text-sm hover:text-text footer__link">Agora na HBO Max</Link>
                        <Link href="" className="font-raleway font-bold text-link uppercase my-0 mx-3 text-sm hover:text-text footer__link">Em breve</Link>
                        <Link href="" className="font-raleway font-bold text-link uppercase my-0 mx-3 text-sm hover:text-text footer__link">filme em destaque</Link>
                        <Link href="" className="font-raleway font-bold text-link uppercase my-0 mx-3 text-sm hover:text-text footer__link">séries</Link>
                        <Link href="" className="font-raleway font-bold text-link uppercase my-0 mx-3 text-sm hover:text-text footer__link">ajuda</Link>
                    </ul>
                    <p className="font-quicksand text-xs my-4 mx-0 text-link footer_legal font-light text-small">© 2022 WarnerMedia Direct Latin America, LLC. Todos os direitos reservados. HBO Max é usado sob licença.</p>
                    <div className="footer__social flex justify-center gap-8">
                        <Link href="https://www.facebook.com/HBOMaxBr/" className="block items-center justify-center gap-10 mb-4 sm:flex sm:mt-20 footer__social-link"><i className="text-link scale-150 fa fa-facebook"></i></Link>
                        <Link href="https://twitter.com/HBOMaxBR" className="block items-center justify-center gap-10 mb-4 sm:flex sm:mt-20 footer__social-link"><i className="text-link scale-150 fa fa-twitter"></i></Link>
                        <Link href="https://www.instagram.com/hbomaxbr/" className="block items-center justify-center gap-10 mb-4 sm:flex sm:mt-20 footer__social-link"><i className="text-link scale-150 fa fa-instagram"></i></Link>
                        <Link href="https://www.youtube.com/c/hbomaxbr" className="block items-center justify-center gap-10 mb-4 sm:flex sm:mt-20 footer__social-link"><i className="text-link scale-150 fa fa-youtube"></i></Link>
                    </div>
                </footer>
            </div>
        </Site>
    </>);
}
