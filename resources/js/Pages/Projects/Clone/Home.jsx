import Site from "@/Layouts/SiteLayout";
import { Head, Link } from "@inertiajs/react";
import Youtube from "./Youtube";
import Discord from "./Discord";
import { Switch } from "@headlessui/react";

export default function Home()
{
    const primaryColor = "#020228";
    const secondaryColor = "#ff00e5";
    const tertiaryColor = "#b535f6";
    const btnLinkBgColor = "#fff";
    const btnLinkColor = "#000";
    const flipCardBgColor = "#3b1e63";
    const navBgColor = "rgba(0, 0, 0, 0.3)";
    const textColor = "#fff";
    const linkColor = "#9e86ff";
    const formBgColor = "rgba(211, 211, 211, 0.06)";
    const formFieldBgColor = "rgba(0, 0, 0, 0.2)";
    const formFieldBorder = "1px solid rgba(255, 255, 255, 0.7)";
    const formFieldPlaceholder = "rgba(255, 255, 255, 0.7)";
    const formFieldError = "rgb(255, 76, 76)";
    return(<>
        <Head title="HBO Clone" />
        <Site>
            <div className="mt-24 mb-2 box-border mx-2 px-2">
                <nav className="w-full pt-2 px-8 fixed flex items-center justify-between bg-[rgba(0,0,0,0.3)]">
                    <Link href="index.html" className="menu__logo">
                        <img src="https://raw.githubusercontent.com/naejshaw/hbomax/master/assets/images/hbo.png" alt="Logo" className="menu__logo-image"/>
                    </Link>
                    <div className="flex gap-6">
                        <Link href="signIn.html" className="menu__item">Entrar</Link>
                        <Link href="#subscription" className="menu__item menu__item-button button"> Assine Agora </Link>
                    </div>
                </nav>
                <header className="mt-8 pt-16 px-12 header">
                    <div className="header__content">
                        <div className="header__channels">
                        <img className="header__channel" src="assets/images/hbo.png" alt=""/>
                        <img className="header__channel" src="assets/images/dc.png" alt=""/>
                        <img className="header__channel" src="assets/images/wb.png" alt=""/>
                        <img className="header__channel" src="assets/images/cartoon-network_neutral.png" alt=""/>
                        <img className="header__channel" src="assets/images/max_originals.png" alt=""/>
                        </div>
                        <h1 className="header__title">
                        <span className="header__titleLight">Curta as melhores histórias</span>
                        Para todo mundo
                        </h1>
                        <div className="divider"></div>
                        <div className="offer">
                        <p>Assinaturas a partir de</p>
                        <p className="offer__price">
                            R$14,15
                            <span className="offer__price-small">/mês*</span>
                        </p>
                        </div>
                        <Link href="#subscription" className="button button-gradient header__button"> Assine Agora </Link>
                        <p className="text-small"> *aplicável ao plano anual com o<br/>pagamento antecipado. </p>
                    </div>
                </header>
                <main>
                    <section id="subscription" className="subscription">
                        <div className="container">
                        <h2 className="title">Conheça nossos planos e economize na assinatura trimestral ou anual com o<br/>pagamento antecipado.</h2>
                        <div className="row-cards">
                            <div className="card">
                            <div>
                                <div className="card-header">
                                <h3>Mobile</h3>
                                <p className="subscription__price">R$ 19,90 <span className="text-small">/mês</span></p>
                                </div>
                                <ul className="card-benefits">
                                <li className="benefits-description">Aproveite em smartphones e tablets, onde quiser.</li>
                                <li className="benefits-description">Assista em 1 tela por vez.</li>
                                <li className="benefits-description">Tenha conteúdo em resolução adaptada para cada dispositivo.</li>
                                <li className="benefits-description">Baixe suas séries e filmes favoritos, assista onde e quando quiser.</li>
                                </ul>
                            </div>
                            <button className="button button-gradient">Escolher o plano Mobile</button>
                            </div>
                            <div className="card">
                            <div>
                                <div className="card-header">
                                <h3>Multitelas</h3>
                                <p className="subscription__price">R$ 27,90 <span className="text-small">/mês</span></p>
                                </div>
                                <ul className="card-benefits">
                                <li className="benefits-description">Aproveite em todos os seus dispositivos.</li>
                                <li className="benefits-description">Chromecast e Airplay disponíveis.</li>
                                <li className="benefits-description">Assista em até 3 telas ao mesmo tempo.</li>
                                <li className="benefits-description">Tenha conteúdo em alta definição, com qualidade 4K.</li>
                                <li className="benefits-description">Baixe suas séries e filmes favoritos, assista onde e quando quiser.</li>
                                <li className="benefits-description">Crie até 5 perfis diferentes.</li>
                                </ul>
                            </div>
                            <button className="button button-gradient">Escolher o plano Multitelas</button>
                            </div>
                        </div>
                        </div>
                    </section>
                    <section id="content" className="content container">
                        <h2 className="title">Descubra novos universos</h2>
                        <div className="content__container">
                        <div className="content__card"><img src="assets/images/hbo-default_0.webp" alt="" className="content__img"/></div>
                        <div className="content__card"><img src="assets/images/MAX-Default.webp" alt="" className="content__img"/></div>
                        <div className="content__card"><img src="assets/images/DC_Default.webp" alt="" className="content__img"/></div>
                        <div className="content__card"><img src="assets/images/WB-Default.webp" alt="" className="content__img"/></div>
                        <div className="content__card"><img src="assets/images/CN-Default.webp" alt="" className="content__img"/></div>
                        <div className="content__card"><img src="assets/images/UCL-Default.webp" alt="" className="content__img"/></div>
                        </div>
                    </section>
                </main>
                <footer className="footer container">
                    <ul>
                        <Link href="" className="footer__link">Agora na HBO Max</Link>
                        <Link href="" className="footer__link">Em breve</Link>
                        <Link href="" className="footer__link">filme em destaque</Link>
                        <Link href="" className="footer__link">séries</Link>
                        <Link href="" className="footer__link">ajuda</Link>
                    </ul>
                    <p className="footer_legal text-small">© 2022 WarnerMedia Direct Latin America, LLC. Todos os direitos reservados. HBO Max é usado sob licença.</p>
                    <div className="footer__social">
                        <Link href="https://www.facebook.com/HBOMaxBr/" className="footer__social-link"><img src="assets/images/fb_0.png" alt=""/></Link>
                        <Link href="https://twitter.com/HBOMaxBR" className="footer__social-link"><img src="assets/images/twitter_0.png" alt=""/></Link>
                        <Link href="https://www.instagram.com/hbomaxbr/" className="footer__social-link"><img src="assets/images/instagram_0/.png" alt="" /></Link>
                        <Link href="https://www.youtube.com/c/hbomaxbr" className="footer__social-link"><img src="assets/images/youtube_0/.png" alt="" /></Link>
                    </div>
                </footer>
            </div>
        </Site>
    </>);
}
