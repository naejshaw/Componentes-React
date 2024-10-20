import QuizCard from "../../../Components/MyComponents/QuizCard";
import Site from "../../../Layouts/SiteLayout";
import { IQuiz } from "./types";

const quizData = [
    {
        id: "1",
        title: "Titulo 1",
        description: "Teste 1",
        img: "https://img.freepik.com/fotos-gratis/familia-jovem-com-seus-filhos-em-casa-se-divertindo_1303-20999.jpg?t=st=1720789510~exp=1720793110~hmac=9be714d02324ab30485435efaa28fec1196b3e1da3c4259092594dad7eb40fa7&w=740",
    },
    {
        id: "2",
        title: "Titulo 2",
        description: "Teste 2",
        img: "https://img.freepik.com/fotos-gratis/carro-luxuoso-estacionado-na-estrada-com-um-farol-iluminado-ao-por-do-sol_181624-60607.jpg?t=st=1720789390~exp=1720792990~hmac=dbb2138803c8928a678a0ee2b0edff5df87b2547c3a831e0657f36cf4219a524&w=740",
    },
    {
        id: "3",
        title: "Titulo 3",
        description: "Teste 3",
        img: "https://img.freepik.com/fotos-gratis/villa-com-piscina-de-luxo-espetacular-design-contemporaneo-arte-digital-imoveis-casa-casa-e-propriedade-ge_1258-150749.jpg?t=st=1720789399~exp=1720792999~hmac=1f4093a8c178460e635446d36916297615575b6cc1ae86489a82ecb9e629c6b1&w=740",
    },
    {
        id: "4",
        title: "Titulo 4",
        description: "Teste 4",
        img: "https://img.freepik.com/fotos-gratis/grupo-de-pessoas-diversas-tendo-uma-reuniao-de-negocios_53876-25060.jpg?t=st=1720789354~exp=1720792954~hmac=3322100a14047f64d3d41855ce67363ab3bf7b7bcacc1c3e2e0a3e01396495ca&w=826",
    },
];

export default function Quiz({ id }: IQuiz) {
    return (
        <Site>
            <div className="flex flex-col mt-24 h-auto items-center justify-center">
                <h1 className="text-3xl font-bold underline">Quiz</h1>
                <div className="flex items-center justify-center container">
                    <div className="testes w-11/12 py-8 px-8 flex flex-col justify-center items-center gap-8 lg:flex-row lg:flex-wrap">
                        {quizData.map((quiz) => (
                            <QuizCard
                                key={quiz.id}
                                description={quiz.description}
                                id={quiz.id}
                                img={quiz.img}
                                title={quiz.title}
                                alt={quiz.title}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </Site>
    );
}