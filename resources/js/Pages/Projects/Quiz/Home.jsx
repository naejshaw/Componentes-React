import QuizCard from "@/Components/MyComponents/QuizCard";
import Site from "@/Layouts/SiteLayout";
import { Head } from "@inertiajs/react";

export default function Home({id})
{
    return(<>
        <Head title="Quiz" />
        <Site>
            <div className="flex flex-col mt-24 h-auto items-center justify-center">
                <h1 className="text-3xl font-bold underline">Quiz</h1>
                <div className="flex items-center justify-center container">
                    {id ?
                    <div className="testes w-11/12 py-8 px-8 flex flex-col justify-center items-center gap-8 lg:flex-row lg:flex-wrap">
                        <div className="flex flex-col items-center justify-end w-auto lg:w-5/12 teste" id={QuizCard.id}>
                            <img className="" src={QuizCard.img}/>
                            <div className=" py-4 flex flex-col gap-2 texto">
                                <h3 className="title">{QuizCard.title}</h3>
                                <p className="description">{QuizCard.description}</p>
                            </div>
                        </div>
                    </div>
                    :
                    <div className="testes w-11/12 py-8 px-8 flex flex-col justify-center items-center gap-8 lg:flex-row lg:flex-wrap">
                        <QuizCard description={"Teste"} id={"1"} img={"https://img.freepik.com/fotos-gratis/familia-jovem-com-seus-filhos-em-casa-se-divertindo_1303-20999.jpg?t=st=1720789510~exp=1720793110~hmac=9be714d02324ab30485435efaa28fec1196b3e1da3c4259092594dad7eb40fa7&w=740"} title={"Titulo"}/>
                        <QuizCard description={"Teste"} id={"2"} img={"https://img.freepik.com/fotos-gratis/carro-luxuoso-estacionado-na-estrada-com-um-farol-iluminado-ao-por-do-sol_181624-60607.jpg?t=st=1720789390~exp=1720792990~hmac=dbb2138803c8928a678a0ee2b0edff5df87b2547c3a831e0657f36cf4219a524&w=740"} title={"Titulo"}/>
                        <QuizCard description={"Teste"} id={"3"} img={"https://img.freepik.com/fotos-gratis/villa-com-piscina-de-luxo-espetacular-design-contemporaneo-arte-digital-imoveis-casa-casa-e-propriedade-ge_1258-150749.jpg?t=st=1720789399~exp=1720792999~hmac=1f4093a8c178460e635446d36916297615575b6cc1ae86489a82ecb9e629c6b1&w=740"} title={"Titulo"}/>
                        <QuizCard description={"Teste"} id={"4"} img={"https://img.freepik.com/fotos-gratis/grupo-de-pessoas-diversas-tendo-uma-reuniao-de-negocios_53876-25060.jpg?t=st=1720789354~exp=1720792954~hmac=3322100a14047f64d3d41855ce67363ab3bf7b7bcacc1c3e2e0a3e01396495ca&w=826"} title={"Titulo"}/>
                    </div>
                    }
                </div>
            </div>
        </Site>
    </>);
}
