import styled from "styled-components";
import GalleryCard from "../../../Components/MyComponents/GalleryCard";
import Site from "../../../Layouts/SiteLayout";

const Teste = styled.button`
    background-color: #f0f0f0;
    color: #000000;
    border: none;
    padding: 10px;
`

export default function Gallery()
{
    return(<>
        <Site>
            <section className="min-h-screen py-40 px-8 portfolio" id="portfolio">
                <h2 className="mb-16 text-center text-4xl md:text-5xl lg:text-7xl heading">Latest <span className="text-[#0ef]">Project</span></h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center gap-10 portfolio-container">
                    <GalleryCard imgPath={"portfolio1"} id={"1"} text={"Descrição do projeto de Portfolio número 1"} title={"Portfolio 1"}/>
                    <GalleryCard imgPath={"portfolio2"} id={"2"} text={"Descrição do projeto de Portfolio número 2"} title={"Portfolio 2"}/>
                    <GalleryCard imgPath={"portfolio3"} id={"3"} text={"Descrição do projeto de Portfolio número 3"} title={"Portfolio 3"}/>
                    <GalleryCard imgPath={"portfolio4"} id={"4"} text={"Descrição do projeto de Portfolio número 4"} title={"Portfolio 4"}/>
                    <GalleryCard imgPath={"portfolio5"} id={"5"} text={"Descrição do projeto de Portfolio número 5"} title={"Portfolio 5"}/>
                    <GalleryCard imgPath={"portfolio6"} id={"6"} text={"Descrição do projeto de Portfolio número 6"} title={"Portfolio 6"}/>
                    <Teste title="1">Testando 1 2 3</Teste>
                </div>
            </section>
        </Site>
    </>);
}