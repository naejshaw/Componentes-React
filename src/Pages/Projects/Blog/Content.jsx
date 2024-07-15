import Site from "@/Layouts/SiteLayout";
import { Head, Link } from "@inertiajs/react";

export default function Content(){

    return(
        <div class="container__content">
            <div class="content_cover">
                <img src="{{photoCover}}" alt="imagem"/>
            </div>
            <Link href="blog"> VOLTAR </Link>
            <div class="content_title">
                <h1>{{contentTitle}}</h1>
                <hr/>
            </div>
            <div class="content_description">
                <p>{{contentDescription}}</p>
            </div>
        </div>
    );
}
