import { Link, useParams } from "react-router-dom";
import Site from "../../../Layouts/SiteLayout";
import { IContent } from "./types";
import { blogImages } from './data'; // Import the blog images data

export default function Content({ contentDescription, contentTitle }: IContent) {
    const { id } = useParams<{ id: string }>(); // Specify id type
    const index = id ? parseInt(id) - 1 : -1; // Calculate index

    // Validate index to avoid accessing undefined
    const path = (index >= 0 && index < blogImages.length) ? blogImages[index] : null;

    return (
        <Site>
            <div className="container__content pt-8 w-full md:px-10 flex flex-col items-center justify-center gap-4">
                {path ? (
                    <>
                        <div className="content_cover">
                            <img src={path.img} alt={path.title} className="w-full h-auto" />
                        </div>
                        <div className="w-full flex flex-col items-start justify-center gap-8">
                            <div className="content_title">
                                <h1 className="text-2xl font-bold">{path.title}</h1>
                                <hr />
                            </div>
                            <div className="content_description">
                                <p>{path.description}</p>
                            </div>
                        </div>
                    </>
                ) : (
                    <p className="text-red-500">Blog post not found.</p>
                )}
                <Link className="mt-8 text-site-bg bg-white rounded-md p-2 hover:text-primary" to="/blog">
                    VOLTAR
                </Link>
            </div>
        </Site>
    );
}