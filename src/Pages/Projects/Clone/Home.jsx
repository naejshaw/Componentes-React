import Site from "../../../Layouts/SiteLayout";

export default function Clone({children})
{
    return(<>
        <Site>
            <div className="mt-24 mb-2 box-border px-1 font-raleway bg-primary text-text block">
                <nav className="w-full py-0.5 px-4 fixed flex items-center justify-between bg-navBg z-10">
                    <a href="/clone/hbo" className="max-w-40 menu__logo">
                        <img src="https://raw.githubusercontent.com/naejshaw/hbomax/master/assets/images/hbo.png" alt="Logo" className="w-full menu__logo-image"/>
                    </a>
                    <div className="flex gap-6 items-center">
                        <a href="/clone/hbo/sign" className="mr-6 font-bold text-sm text-text uppercase menu__item">Entrar</a>
                        <a href="#subscription" className="mr-6 text-sm py-2 px-10 bg-tertiary rounded-3xl font-bold text-text uppercase border-none cursor-pointer hover:bg-btnaBg hover:text-btna menu__item menu__item-button button"> Assine Agora </a>
                    </div>
                </nav>
                {children}
                <footer className="footer max-w-7xl m-auto p-6 text-center container">
                    <ul>
                        <a href="" className="font-raleway font-bold text-a uppercase my-0 mx-3 text-sm hover:text-text footer__a">Agora na HBO Max</a>
                        <a href="" className="font-raleway font-bold text-a uppercase my-0 mx-3 text-sm hover:text-text footer__a">Em breve</a>
                        <a href="" className="font-raleway font-bold text-a uppercase my-0 mx-3 text-sm hover:text-text footer__a">filme em destaque</a>
                        <a href="" className="font-raleway font-bold text-a uppercase my-0 mx-3 text-sm hover:text-text footer__a">séries</a>
                        <a href="" className="font-raleway font-bold text-a uppercase my-0 mx-3 text-sm hover:text-text footer__a">ajuda</a>
                    </ul>
                    <p className="font-quicksand text-xs my-4 mx-0 text-a footer_legal font-light text-small">© 2022 WarnerMedia Direct Latin America, LLC. Todos os direitos reservados. HBO Max é usado sob licença.</p>
                    <div className="footer__social flex justify-center gap-8">
                        <a href="https://www.facebook.com/HBOMaxBr/" className="block items-center justify-center gap-10 mb-4 sm:flex sm:mt-20 footer__social-a"><i className="text-a scale-150 fa fa-facebook"></i></a>
                        <a href="https://twitter.com/HBOMaxBR" className="block items-center justify-center gap-10 mb-4 sm:flex sm:mt-20 footer__social-a"><i className="text-a scale-150 fa fa-twitter"></i></a>
                        <a href="https://www.instagram.com/hbomaxbr/" className="block items-center justify-center gap-10 mb-4 sm:flex sm:mt-20 footer__social-a"><i className="text-a scale-150 fa fa-instagram"></i></a>
                        <a href="https://www.youtube.com/c/hbomaxbr" className="block items-center justify-center gap-10 mb-4 sm:flex sm:mt-20 footer__social-a"><i className="text-a scale-150 fa fa-youtube"></i></a>
                    </div>
                </footer>
            </div>
        </Site>
    </>);
}
