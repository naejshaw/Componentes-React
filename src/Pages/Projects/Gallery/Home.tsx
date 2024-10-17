import GalleryCard from "../../../Components/MyComponents/GalleryCard";
import Site from "../../../Layouts/SiteLayout";

const galleryItems = [
    { id: "1", imgPath: "portfolio1", title: "Portfolio 1", text: "Descrição do projeto de Portfolio número 1" },
    { id: "2", imgPath: "portfolio2", title: "Portfolio 2", text: "Descrição do projeto de Portfolio número 2" },
    { id: "3", imgPath: "portfolio3", title: "Portfolio 3", text: "Descrição do projeto de Portfolio número 3" },
    { id: "4", imgPath: "portfolio4", title: "Portfolio 4", text: "Descrição do projeto de Portfolio número 4" },
    { id: "5", imgPath: "portfolio5", title: "Portfolio 5", text: "Descrição do projeto de Portfolio número 5" },
    { id: "6", imgPath: "portfolio6", title: "Portfolio 6", text: "Descrição do projeto de Portfolio número 6" },
];

export default function Gallery() {
    return (
        <Site>
            <section className="min-h-screen py-40 px-8 portfolio" id="portfolio">
                <h2 className="mb-16 text-center text-4xl md:text-5xl lg:text-7xl heading">
                    Latest <span className="text-[#0ef]">Project</span>
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center gap-10 portfolio-container">
                    {galleryItems.map(item => (
                        <GalleryCard 
                            key={item.id} 
                            imgPath={item.imgPath} 
                            id={item.id} 
                            text={item.text} 
                            title={item.title} 
                        />
                    ))}
                </div>
            </section>
        </Site>
    );
}