import { IYoutubeRow } from "./types";

export default function YoutubeRow({children}:IYoutubeRow){
    return(<>
        <div className="flex flex-wrap justify-center gap-12 lg:gap-6 row">
            {children}
        </div>
    </>)
}
