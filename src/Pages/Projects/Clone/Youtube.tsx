import YoutubeCard from "../../../Components/MyComponents/YoutubeCard";
import YoutubeNavitem from "../../../Components/MyComponents/YoutubeNavitem";
import YoutubeRow from "../../../Components/MyComponents/YoutubeRow";
import Site from "../../../Layouts/SiteLayout";
import { Link } from "react-router-dom";

const videoData = [
    {
        avatar: "Channel Avatar",
        thumb: "image 16",
        title: "Geração Tech Unimed - BH - Ciência de Dados",
        transmission: "Transmitido há 2 dias",
        views: "2,1 mil visualizações"
    },
    {
        avatar: "Channel Avatar",
        thumb: "image 15",
        title: "Scrum Talks",
        transmission: "Transmitido há 3 dias",
        views: "1,6 mil visualizações"
    },
    {
        avatar: "Channel Avatar",
        thumb: "image 14",
        title: "Machine Learning Avançado - Fast Track",
        transmission: "Transmitido há 4 dias",
        views: "1,7 mil visualizações"
    },
    {
        avatar: "Channel Avatar",
        thumb: "image 13",
        title: "Global Skills #2 - Project Planning",
        transmission: "Transmitido há 2 dias",
        views: "2,1 mil visualizações"
    },
    // Add more video data as needed
];

export default function Youtube() {
    return (
        <Site>
            <div className="mt-24 box-border bg-white text-black h-auto w-auto px-2 py-4 flex flex-col">
                <header className="border-b pb-4 flex justify-between items-center mt-8">
                    <section className="flex items-center" id="menu-area">
                        <img className="cursor-pointer p-1 max-h-8" src="https://raw.githubusercontent.com/naejshaw/youtube-clone-grid/main/assets/menu.png" alt="Menu" />
                        <Link to="" className="mt-0 mr-0 mb-1 ml-3 max-h-8">
                            <img id="logo" src="https://raw.githubusercontent.com/naejshaw/youtube-clone-grid/main/assets/youtube 1.png" alt="YouTube Logo" />
                        </Link>
                    </section>
                    <section className="flex items-center" id="search-area">
                        <input className="w-96 h-9" type="search" name="search" id="search" placeholder="Buscar" />
                        <Link className="cursor-pointer text-decoration-none text-bold" to={"youtube/search="}>
                            <img className="m-0 bg-gray-400 border border-solid border-black p-1.5 rounded-sm flex items-center justify-center" src="https://raw.githubusercontent.com/naejshaw/youtube-clone-grid/main/assets/search.png" alt="Search" />
                        </Link>
                    </section>
                    <section className="flex items-center" id="user-area">
                        <img className="cursor-pointer ml-5 max-w-6 max-h-6" src="https://raw.githubusercontent.com/naejshaw/youtube-clone-grid/main/assets/video.png" alt="Create" />
                        <img className="cursor-pointer ml-5 max-w-6 max-h-6" src="https://raw.githubusercontent.com/naejshaw/youtube-clone-grid/main/assets/bell.png" alt="Notifications" />
                        <img className="cursor-pointer ml-5 max-w-8 max-h-8 rounded-full" src="https://avatars.githubusercontent.com/u/89807593?s=96&v=4" alt="Profile" />
                    </section>
                </header>
                <div className="flex gap-6">
                    <aside className="flex flex-col gap-4 justify-start pt-10 border-r pr-7 lg:pr-12">
                        {["home", "compass", "youtube", "disc", "thumbs-up", "clock", "download", "film", "book", "award"].map((icon, index) => (
                            <YoutubeNavitem key={index} navIcon={icon} title={icon.charAt(0).toUpperCase() + icon.slice(1)} />
                        ))}
                    </aside>
                    <main className="flex flex-wrap justify-evenly ml -6 lg:ml-10 mt-10 pr-8 pb-12 gap-y-16">
                        {videoData.map((video, index) => (
                            <YoutubeRow key={index}>
                                {videoData.slice(index, index + 4).map((video) => (
                                    <YoutubeCard
                                        key={video.title}
                                        avatar={video.avatar}
                                        thumb={video.thumb}
                                        title={video.title}
                                        transmission={video.transmission}
                                        views={video.views}
                                    />
                                ))}
                            </YoutubeRow>
                        ))}
                    </main>
                </div>
            </div>
        </Site>
    );
}