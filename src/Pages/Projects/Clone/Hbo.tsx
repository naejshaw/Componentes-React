import Home from "./Home";
import Button from "../../../Components/MyComponents/Button";
import HboCard from "../../../Components/MyComponents/HboCard";
import bg from '../../../assets/hboBG.png';
import hbo from '../../../assets/hbo.png';
import dc from '../../../assets/dc.png';
import wb from '../../../assets/wb.png';
import cn from '../../../assets/cartoon-network_neutral.png';
import max from '../../../assets/max_originals.png';
import cardHbo from '../../../assets/hbo-default_0.webp';
import cardDc from '../../../assets/DC_Default.webp';
import cardMax from '../../../assets/MAX-Default.webp';
import cardWb from '../../../assets/WB-Default.webp';
import cardCn from '../../../assets/CN-Default.webp';
import cardUcl from '../../../assets/UCL-Default.webp';

export default function Hbo() {
    return (
        <Home>
            <div className="flex flex-col justify-between items-center">
                <img className="bg-cover h-full bg-no-repeat relative" src={bg} alt="Background" />
                <header className="px-12 relative bottom-0 sm:-mt-24 md:-mt-36 lg:-mt-80 header">
                    <div className="flex flex-col items-center gap-8 pb-0 px-10 header__content">
                        <div className="flex flex-wrap justify-center gap-6 header__channels">
                            <img className="object-contain header__channel" src={hbo} alt="HBO" />
                            <img className="object-contain header__channel" src={dc} alt="DC" />
                            <img className="object-contain header__channel" src={wb} alt="WB" />
                            <img className="object-contain header__channel" src={cn} alt="CN" />
                            <img className="object-contain header__channel" src={max} alt="MAX" />
                        </div>
                        <h1 className="uppercase text-center text-5xl header__title">
                            <span className="block font-extralight text-3xl header__titleLight">Curta as melhores histórias</span>
                            Para todo mundo
                        </h1>
                        <div className="w-3/4 max-w-2xl h-1 bg-tertiary divider"></div>
                        <div className="text-center text-xl offer">
                            <p className="font-quicksand ">Assinaturas a partir de</p>
                            <p className="font-raleway text-4xl font-bold offer__price">
                                R$14,15
                                <span className="text-base font-light offer__price-small">/mês*</span>
                            </p>
                        </div>
                        <Button 
                            className={"py-2 px-6 rounded-2xl bg-tertiary outline-3 outline-transparent hover:bg-white hover:text-black hover:bg-cover hover:outline-2 hover:outline-secondary hover:scale-125  button button-gradient header__button"} 
                            link={"#subscription"} 
                            title={"Assine Agora"} 
                        />
                        <p className="font-quicksand text-sm top-0 font-light max-w-80 text-center text-small"> *aplicável ao plano anual com o<br/>pagamento antecipado. </p>
                    </div>
                </header>
                <main className="bg-cover bg-[#5323ac] mt-24 pt-12">
                    <section id="subscription" className="relative subscription">
                        <div className="max-w-7xl m-auto p-6 text-center container">
                            <h2 className="text-3xl font-medium title">Conheça nossos planos e economize na assinatura trimestral ou anual com o<br/>pagamento antecipado.</h2>
                            <div className="flex flex-col md:flex-row justify-around gap-20 my-10 mx-0 row-cards">
                                <HboCard 
                                    buttonTitle={"Escolher o plano Mobile"} 
                                    cardValue={"R$ 19,90"} 
                                    title={"Mobile"}
                                >
                                    <li className="text-left list-none text-xl mb-3.5 pl-3.5 marker:content-['+'] marker:text-3xl marker:my-0 marker:ml-0 marker: mr-2 benefits-description">Aproveite em smartphones e tablets, onde quiser.</li>
                                    <li className="text-left list-none text-xl mb-3.5 pl-3.5 marker:content-['+'] marker:text-3xl marker:my-0 marker:ml-0 marker:mr-2 benefits-description">Assista em 1 tela por vez.</li>
                                    <li className="text-left list-none text-xl mb-3.5 pl-3.5 marker:content-['+'] marker:text-3xl marker:my-0 marker:ml-0 marker:mr-2 benefits-description">Tenha conteúdo em resolução adaptada para cada dispositivo.</li>
                                    <li className="text-left list-none text-xl mb-3.5 pl-3.5 marker:content-['+'] marker:text-3xl marker:my-0 marker:ml-0 marker:mr-2 benefits-description">Baixe suas séries e filmes favoritos, assista onde e quando quiser.</li>
                                </HboCard>
                                <HboCard 
                                    buttonTitle={"Escolher o plano Multitelas"} 
                                    cardValue={"R$ 27,90"} 
                                    title={"Multitelas"}
                                >
                                    <li className="text-left list-none text-xl mb-3.5 pl-3.5 marker:content-['+'] marker:text-3xl marker:my-0 marker:ml-0 marker:mr-2 benefits-description">Aproveite em todos os seus dispositivos.</li>
                                    <li className="text-left list-none text-xl mb-3.5 pl-3.5 marker:content-['+'] marker:text-3xl marker:my-0 marker:ml-0 marker:mr-2 benefits-description">Chromecast e Airplay disponíveis.</li>
                                    <li className="text-left list-none text-xl mb-3.5 pl-3.5 marker:content-['+'] marker:text-3xl marker:my-0 marker:ml-0 marker:mr-2 benefits-description">Assista em até 3 telas ao mesmo tempo.</li>
                                    <li className="text-left list-none text-xl mb-3.5 pl-3.5 marker:content-['+'] marker:text-3xl marker:my-0 marker:ml-0 marker:mr-2 benefits-description">Tenha conteúdo em alta definição, com qualidade 4K.</li>
                                    <li className="text-left list-none text-xl mb-3.5 pl-3.5 marker:content-['+'] marker:text-3xl marker:my-0 marker:ml-0 marker:mr-2 benefits-description">Baixe suas séries e filmes favoritos, assista onde e quando quiser.</li>
                                    <li className="text-left list-none text-xl mb-3.5 pl-3.5 marker:content-['+'] marker:text-3xl marker:my-0 marker:ml-0 marker:mr-2 benefits-description">Crie até 5 perfis diferentes.</li>
                                </HboCard>
                            </div>
                        </div>
                    </section>
                    <section id="content" className="bg-cover content max-w-7xl w-full m-auto p-6 text-center container">
                        <h2 className="text-3xl font-medium title">Descubra novos universos</h2>
                        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 content__container">
                            <HboCard imgPath={cardHbo} />
                            <HboCard imgPath={cardMax} />
                            <HboCard imgPath={cardDc} />
                            <HboCard imgPath={cardWb} />
                            <HboCard imgPath={cardCn} />
                            <HboCard imgPath={cardUcl} />
                        </div>
                    </section>
                </main>
            </div>
        </Home>
    );
}