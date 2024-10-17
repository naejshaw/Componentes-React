import { Link, useParams } from "react-router-dom";
import Site from "../../../Layouts/SiteLayout";
import { IContent } from "./types";
import imgPathGallery1 from '../../../assets/service1.jpg';
import imgPathGallery2 from '../../../assets/service2.jpg';
import imgPathGallery3 from '../../../assets/service3.jpg';
import imgPathGallery4 from '../../../assets/profile1.jpg';
import imgPathGallery5 from '../../../assets/profile2.jpg';
import imgPathGallery6 from '../../../assets/profile3.jpg';

const imgPathGallery = [
    {
        img: imgPathGallery1,
        title: 'Portifólio 1',
        description: 'Lorem ipsum dolor sit amet, 1 consectetur adipiscing elit. Sed sit amet nulla auctor.'
    },
    {
        img: imgPathGallery2,
        title: 'Portifólio 2',
        description: 'Lorem ipsum dolor sit amet, 2 consectetur adipiscing elit. Sed sit amet nulla auctor.'
    },
    {
        img: imgPathGallery3,
        title: 'Portifólio 3',
        description: 'Lorem ipsum dolor sit amet, 3 consectetur adipiscing elit. Sed sit amet nulla auctor.'
    },
    {
        img: imgPathGallery4,
        title: 'Portifólio 4',
        description: 'Lorem ipsum dolor sit amet, 4 consectetur adipiscing elit. Sed sit amet nulla auctor.'
    },
    {
        img: imgPathGallery5,
        title: 'Portifólio 5',
        description: 'Lorem ipsum dolor sit amet, 5 consectetur adipiscing elit. Sed sit amet nulla auctor.'
    },
    {
        img: imgPathGallery6,
        title: 'Portifólio 6',
        description: 'Lorem ipsum dolor sit amet, 6 consectetur adipiscing elit. Sed sit amet nulla auctor.'
    },
];

export default function Content({ contentDescription, contentTitle }: IContent) {
    const { id } = useParams();
    const index = id ? parseInt(id) - 1 : null;
    const path = index !== null && index >= 0 && index < imgPathGallery.length ? imgPathGallery[index] : null;

    return (
        <Site>
            <div className="container__content pt-32 w-full md:px-10 flex flex-col items-center justify-center gap-4">
                {path ? (
                    <>
                        <div className="content_cover">
                            <img src={path.img} alt={path.title} className="w-full h-auto rounded-lg" />
                        </div>
                        <div className="w-full flex flex-col items-start justify-center gap-8">
                            <div className="content_title">
                                <h1 className="text-2xl font-bold">{path.title}</h1>
                                <hr className="my-2" />
                            </div>
                            <div className="content_description">
                                <p>{path.description}</p>
                            </div>
                        </div>
                    </>
                ) : (
                    <div className="text-center">
                        <h2 className="text-xl font-semibold">Content Not Found</h2>
                        <p>Please check the URL or return to the gallery.</p>
                    </div>
                )}
                <Link className="mt-8 text-site-bg bg-white rounded-md p-2 hover:text-primary" to="/gallery">VOLTAR</Link>
            </div>
        </Site>
    );
}