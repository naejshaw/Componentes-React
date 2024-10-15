import { Link, useParams } from "react-router-dom";
import Site from "../../../Layouts/SiteLayout";
import { IContent } from "./types";
import imgPathQuiz1 from '../../../assets/blog1.jpg';
import imgPathQuiz2 from '../../../assets/blog2.jpg';
import imgPathQuiz3 from '../../../assets/blog3.png';
import imgPathQuiz4 from '../../../assets/blog4.webp';


export default function Content({contentDescription, contentTitle}:IContent)
{
    let {id} = useParams();
    let imgPathQuiz = [
        {
            img: imgPathQuiz1,
            title: 'Quiz 1',
            description: 'Lorem ipsum dolor sit amet, 1 consectetur adipiscing elit. Sed sit amet nulla auctor'
        },
        {
            img: imgPathQuiz2,
            title: 'Quiz 2',
            description: 'Lorem ipsum dolor sit amet, 2 consectetur adipiscing elit. Sed sit amet nulla auctor'
        },
        {
            img: imgPathQuiz3,
            title: 'Quiz 3',
            description: 'Lorem ipsum dolor sit amet, 3 consectetur adipiscing elit. Sed sit amet nulla auctor'
        },
        {
            img: imgPathQuiz4,
            title: 'Quiz 4',
            description: 'Lorem ipsum dolor sit amet, 4 consectetur adipiscing elit. Sed sit amet nulla auctor'
        },
    ]
    
    let path = id ? imgPathQuiz[parseInt(id) - 1] : null

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
                <Link className="mt-8 text-site-bg bg-white rounded-md p-2 hover:text-primary" to="/quiz"> VOLTAR </Link>
            </div>
        </Site>
    );
}
