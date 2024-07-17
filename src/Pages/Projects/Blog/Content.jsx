import { useParams } from "react-router-dom";
import Site from "../../../Layouts/SiteLayout";


export default function Content({contentDescription, contentTitle})
{
    let {id} = useParams();

    return(
        <Site>
            <div class="container__content">
                <div class="content_cover">
                    <img src="{{photoCover}}" alt="imagem"/>
                </div>
                <a href="blog"> VOLTAR </a>
                <div class="content_title">
                    <h1>{contentTitle}</h1>
                    <hr/>
                </div>
                <div class="content_description">
                    <p>{contentDescription}</p>
                </div>
            </div>
        </Site>
    );
}
