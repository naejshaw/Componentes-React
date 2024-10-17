import { Link, useParams } from "react-router-dom";
import Site from "../../../Layouts/SiteLayout";
import { IContent } from "./types";
import imgPathQuiz1 from '../../../assets/blog1.jpg';
import imgPathQuiz2 from '../../../assets/blog2.jpg';
import imgPathQuiz3 from '../../../assets/blog3.png';
import imgPathQuiz4 from '../../../assets/blog4.webp';

const imgPathQuiz = [
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
];

export default function Content({ contentDescription, contentTitle }: IContent) {
    const { id } = useParams();
    const quizIndex = id ? parseInt(id) - 1 : null;
    const quizData = quizIndex !== null && quizIndex >= 0 && quizIndex < imgPathQuiz.length ? imgPathQuiz[quizIndex] : null;

    return (
        <Site>
            <div className="container__content pt-32 w-full md:px-10 flex flex-col items-center justify-center gap-4">
                {quizData ? (
                    <>
                        <div className="content_cover">
                            <img src={quizData.img} alt={quizData.title} />
                        </div>
                        <div className="w-full flex flex-col items-start justify-center gap-8">
                            <div className="content_title">
                                <h1>{quizData.title}</h1>
                                <hr />
                            </div>
                            <div className="content_description">
                                <p>{quizData.description}</p>
                            </div>
                        </div>
                    </>
                ) : (
                    <div className="w-full flex flex-col items-center justify-center">
                        <h2 className="text-lg text-red-500">Quiz not found</h2>
                    </div>
                )}
                <Link className="mt-8 text-site-bg bg-white rounded-md p-2 hover:text-primary" to="/quiz">VOLTAR</Link>
            </div>
        </Site>
    );
}