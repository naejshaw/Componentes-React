import { useParams } from "react-router-dom";
import Site from "../../../Layouts/SiteLayout";
import { IContent } from "./types";
import imgPathBlog1 from '../../../assets/blog1.jpg';
import imgPathBlog2 from '../../../assets/blog2.jpg';
import imgPathBlog3 from '../../../assets/blog3.png';
import imgPathBlog4 from '../../../assets/blog4.webp';


export default function Content({contentDescription, contentTitle}:IContent)
{
    let {id} = useParams();
    let imgPathBlog = [
        {
            img: imgPathBlog1,
            title: 'Blog 1',
            description: 'Lorem ipsum dolor sit amet, 1 consectetur adipiscing elit. Sed sit amet nulla auctor'
        },
        {
            img: imgPathBlog2,
            title: 'Blog 2',
            description: 'Lorem ipsum dolor sit amet, 2 consectetur adipiscing elit. Sed sit amet nulla auctor'
        },
        {
            img: imgPathBlog3,
            title: 'Blog 3',
            description: 'Lorem ipsum dolor sit amet, 3 consectetur adipiscing elit. Sed sit amet nulla auctor'
        },
        {
            img: imgPathBlog4,
            title: 'Blog 4',
            description: 'Lorem ipsum dolor sit amet, 4 consectetur adipiscing elit. Sed sit amet nulla auctor'
        },
    ]
    
    let path = imgPathBlog[id-1]
    console.log(id)

    return(
        <Site>
            <div className="container__content pt-8 w-full md:px-10 flex flex-col items-center justify-center gap-4">
                <div className="content_cover">
                    <img src={path?.img} alt="imagem"/>
                </div>
                <div className="w-full flex flex-col items-start justify-center gap-8">
                    <div className="content_title">
                        <h1>{path?.title}</h1>
                        <hr/>
                    </div>
                    <div className="content_description">
                        <p>{path?.description}</p>
                    </div>
                </div>
                <a className="mt-8 text-site-bg bg-white rounded-md p-2 hover:text-primary" href="/blog"> VOLTAR </a>
            </div>
        </Site>
    );
}
