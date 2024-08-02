import Site from "../../../Layouts/SiteLayout";

export default function Playlist()
{
//TODO: Pesquisar e estruturar
   const api = fetch()
    return (<>
      <Site>
        <div className="container mt-12 min-h-screen py-20 px-[9%] flex items-center">
          <div id="player" className="flex flex-col w-10/12 h-96 items-center justify-between p-4 mx-auto border border-black">
            <div id="thumb" className="p-4 w-full h-5/6 border border-white">
              <img src ="" alt="" className="w-full h-full"/>
            </div>
            <div id="controls" className="flex gap-4">
              <div id="previous"><i className="fa fa-arrow-circle-left cursor-pointer scale-150" aria-hidden="true"></i></div>
              <div id="playpause"><i class="fa fa-pause-circle cursor-pointer scale-150" aria-hidden="true"></i></div>
              <div id="next"><i className="fa fa-arrow-circle-right cursor-pointer scale-150" aria-hidden="true"></i></div>
            </div>
          </div>
        </div>
      </Site>
    </>);
  }