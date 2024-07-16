import Site from "../../../Layouts/SiteLayout";

export default function Discord()
{
    return(<>
        <Site>
            <div className="mt-24 pb-0 box-border flex flex-col bg-white items-center justify-center font-sans">
                <header className="py-2 w-full flex flex-col text-white items-center justify-evenly">
                    <picture className="relative cover h-screen w-full">
                        <source className="relative cover h-screen w-full" media="(min-width: 429px)" srcSet="https://naejshaw.github.io/discord-clone/assets/img/desk-HBg.png"/>
                        <source className="relative cover h-screen w-full" srcSet="https://naejshaw.github.io/discord-clone/assets/img/HBg.png"/>
                        <img className="relative cover h-screen w-full" src="https://naejshaw.github.io/discord-clone/assets/img/HBg.png" alt=""/>
                    </picture>
                    <h1 className="font-luckiestGuy absolute top-28 mt-20 text-3xl font-extrabold uppercase">Imagine um lugar...</h1>
                    <p className="absolute my-auto text-base text-wrap font-normal text-center">…onde você possa pertencer a um clube escolar, um grupo de gamers, ou uma comunidade artística mundial. Onde você e alguns amigos possam passar um tempo juntos. Um lugar que torna fácil conversar todos os dias e socializar com mais frequência.</p>
                    <div className="absolute bottom-10 flex items-center gap-4">
                        <button className="font-luckiestGuy border-none rounded-3xl w-fit p-4 flex items-center mt-1 text-base font-normal text-center bg-white text-[#23272A]">Baixar para Windows</button>
                        <button className="font-luckiestGuy border-none rounded-3xl w-fit p-4 flex items-center mt-1 text-base font-normal text-center bg-[#23272A]">Abra o Discord no seu navegador</button>
                    </div>
                </header>
                <section className="flex justify-center items-center py-10 w-full px-4" id="section-1">
                    <picture className="w-1/2 block">
                        <source media="(min-width: 429px)" srcSet="https://naejshaw.github.io/discord-clone/assets/img/desk-sec-img-1.png"/>
                        <source srcSet="https://naejshaw.github.io/discord-clone/assets/img/sec-img-1.png"/>
                        <img src="https://naejshaw.github.io/discord-clone/assets/img/sec-img-1.png" alt=""/>
                    </picture>
                    <div className="w-5/12 flex flex-col gap-4 justify-between">
                        <h2 className="text-2xl font-luckiestGuy font-extrabold text-left text-[#23272A]">Crie um espaço controlado por convite onde você se sinta em casa</h2>
                        <p className="text-base font-normal text-left text-[#23272A]">Os servidores Discord são organizados em canais com assuntos para vocês colaborarem, compartilharem ou simplesmente falarem do dia sem entupir um chat geral.</p>
                    </div>
                </section>
                <section className="flex flex-row-reverse justify-center items-center bg-[#f6f6f6] py-10 w-full px-4" id="section-2">
                    <picture className="w-1/2 block">
                        <source media="(min-width: 429px)" srcSet="https://naejshaw.github.io/discord-clone/assets/img/desk-sec-img-2.png"/>
                        <source srcSet="https://naejshaw.github.io/discord-clone/assets/img/sec-img-2.png"/>
                        <img src="https://naejshaw.github.io/discord-clone/assets/img/sec-img-2.png" alt=""/>
                    </picture>
                    <div className="w-5/12 flex flex-col gap-4 justify-between">
                        <h2 className="text-2xl font-luckiestGuy font-extrabold text-right text-[#23272A]">Aqui é fácil se encontrar</h2>
                        <p className="text-base font-normal text-right text-[#23272A]">Entre no canal de voz quando estiver à toa. Amigos no mesmo servidor podem te ver e entrar imediatamente, sem nem ter que fazer a chamada.</p>
                    </div>
                </section>
                <section className="flex justify-center items-center py-10 w-full px-4" id="section-3">
                    <picture className="w-1/2 block">
                        <source media="(min-width: 429px)" srcSet="https://naejshaw.github.io/discord-clone/assets/img/desk-sec-img-3.png"/>
                        <source srcSet="https://naejshaw.github.io/discord-clone/assets/img/sec-img-3.png"/>
                        <img src="https://naejshaw.github.io/discord-clone/assets/img/sec-img-3.png" alt=""/>
                    </picture>
                    <div className="w-5/12 flex flex-col gap-4 justify-between">
                        <h2 className="text-2xl font-luckiestGuy font-extrabold text-left text-[#23272A]">Para poucos e para muitos</h2>
                        <p className="text-base font-normal text-left text-[#23272A]">Organize qualquer comunidade com ferramentas de moderação e acesso personalizado a membros. Dê poderes especiais aos membros, monte canais privados e muito mais.</p>
                    </div>
                </section>
                <section className="flex flex-col gap-2 justify-center items-center bg-[#f6f6f6] py-10 w-full px-4" id="section-4">
                    <div className="w-5/12 flex flex-col gap-4 justify-between">
                        <h1 className="font-luckiestGuy text-3xl font-normal uppercase text-font-extrabold2A] text-center">tecnologia de conexão confiável</h1>
                        <p className="text-base font-normal text-center text-[#23272A]">Voz e vídeo de baixa latência, para você conversar como se estivesse na mesma sala. Dê um joinha por vídeo, veja amigos transmitirem a jogatina do dia ou junte uma galera pra desenhar na tela compartilhada.</p>
                    </div>
                    <picture className="w-7/12 block">
                        <source media="(min-width: 429px)" srcSet="https://naejshaw.github.io/discord-clone/assets/img/desk-sec-img-4.png"/>
                        <source srcSet="https://naejshaw.github.io/discord-clone/assets/img/sec-img-4.png"/>
                        <img src="https://naejshaw.github.io/discord-clone/assets/img/sec-img-4.png" alt=""/>
                    </picture>
                </section>
                <footer className="bg-[#23272A] py-5 px-10 flex justify-center w-full">
                    <picture className="max-w-full block">
                        <source media="(min-width: 429px)" srcSet="https://naejshaw.github.io/discord-clone/assets/img/svgexport-15-1.png"/>
                        <source srcSet="https://naejshaw.github.io/discord-clone/assets/img/svgexport-15.png"/>
                        <img src="https://naejshaw.github.io/discord-clone/assets/img/svgexport-15.png" alt=""/>
                    </picture>
                </footer>
            </div>
        </Site>
    </>);
}
