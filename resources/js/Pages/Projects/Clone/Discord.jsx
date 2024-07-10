import Button from "@/Components/MyComponents/Button";
import DiscordSection from "@/Components/MyComponents/DiscordSection";
import Site from "@/Layouts/SiteLayout";
import { Head, Link } from "@inertiajs/react";

export default function Discord()
{
    return(<>
        <Head title="Discord Clone" />
        <Site>
            <div className="mt-24 pb-0 box-border flex flex-col bg-white items-center justify-center font-sans">
                <header className="py-2 w-full flex flex-col text-white items-center justify-evenly">
                    <picture className="relative cover h-screen w-full">
                        <source className="relative cover h-screen w-full" media="(min-width: 429px)" srcSet="https://naejshaw.github.io/discord-clone/assets/img/desk-HBg.png"/>
                        <source className="relative cover h-screen w-full" srcSet="https://naejshaw.github.io/discord-clone/assets/img/HBg.png"/>
                        <img className="relative cover h-screen w-full" src="https://naejshaw.github.io/discord-clone/assets/img/HBg.png" alt=""/>
                    </picture>
                    <h1 className="font-luckiestGuy absolute top-28 mt-20 text-xl md:text-3xl font-extrabold uppercase">Imagine um lugar...</h1>
                    <p className="absolute w-3/4 my-auto text-sm md:text-base text-wrap font-normal text-center">…onde você possa pertencer a um clube escolar, um grupo de gamers, ou uma comunidade artística mundial. Onde você e alguns amigos possam passar um tempo juntos. Um lugar que torna fácil conversar todos os dias e socializar com mais frequência.</p>
                    <div className="absolute bottom-10 flex items-center gap-4">
                        <Button link={"#"} title={"Baixar para Windows"} className={"font-luckiestGuy border-none rounded-3xl w-fit p-4 flex items-center mt-1 text-xs md:text-base font-normal text-center bg-white text-[#23272A]"} />
                        <Button link={"#"} title={"Abra o Discord no seu navegador"} className={"font-luckiestGuy border-none rounded-3xl w-fit p-4 flex items-center mt-1 text-xs md:text-base font-normal text-center bg-[#23272A]"} />
                    </div>
                </header>
                <DiscordSection className={"flex justify-center items-center py-10 w-full px-4"} content={"Os servidores Discord são organizados em canais com assuntos para vocês colaborarem, compartilharem ou simplesmente falarem do dia sem entupir um chat geral."} contentClass={"text-sm md:text-base font-normal text-left text-[#23272A]"} id={"1"} title={"Crie um espaço controlado por convite onde você se sinta em casa"} titleClass={"text-lg md:text-2xl font-luckiestGuy font-extrabold text-left text-[#23272A]"}/>
                <DiscordSection className={"flex flex-row-reverse justify-center items-center bg-[#f6f6f6] py-10 w-full px-4"} content={"Entre no canal de voz quando estiver à toa. Amigos no mesmo servidor podem te ver e entrar imediatamente, sem nem ter que fazer a chamada."} contentClass={"text-sm md:text-base font-normal text-right text-[#23272A]"} id={"2"} title={"Aqui é fácil se encontrar"} titleClass={"text-lg md:text-2xl font-luckiestGuy font-extrabold text-right text-[#23272A]"}/>
                <DiscordSection className={"flex justify-center items-center py-10 w-full px-4"} content={"Organize qualquer comunidade com ferramentas de moderação e acesso personalizado a membros. Dê poderes especiais aos membros, monte canais privados e muito mais."} contentClass={"text-sm md:text-base font-normal text-left text-[#23272A]"} id={"3"} title={"Para poucos e para muitos"} titleClass={"text-lg md:text-2xl font-luckiestGuy font-extrabold text-left text-[#23272A]"}/>
                <DiscordSection className={"flex flex-col-reverse gap-2 justify-center items-center bg-[#f6f6f6] py-10 w-full px-4"} content={"Voz e vídeo de baixa latência, para você conversar como se estivesse na mesma sala. Dê um joinha por vídeo, veja amigos transmitirem a jogatina do dia ou junte uma galera pra desenhar na tela compartilhada."} contentClass={"text-sm md:text-base font-normal text-center text-[#23272A]"} id={"4"} title={"tecnologia de conexão confiável"} titleClass={"font-luckiestGuy text-xl md:text-3xl font-extrabold uppercase text-[#23272A] text-center"}/>
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
