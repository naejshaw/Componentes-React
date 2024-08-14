import { useParams } from "react-router-dom";
import Site from "../../../Layouts/SiteLayout";
import { IContent } from "./types";


export default function Content({contentDescription, contentTitle}:IContent)
{
    let {id} = useParams();

    return(
        <Site>
            <div className="container__content">
                <div className="content_cover">
                    <img src="{{photoCover}}" alt="imagem"/>
                </div>
                <a href="blog"> VOLTAR </a>
                <div className="content_title">
                    <h1>{contentTitle}</h1>
                    <hr/>
                </div>
                <div className="content_description">
                    <p>{contentDescription}</p>
                </div>
            </div>
        </Site>
    );
}
