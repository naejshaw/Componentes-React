import { Link } from "react-router-dom";
import Site from "../../../Layouts/SiteLayout";

const playlists = [
  {
    id: "1",
    name: "Playlist 1",
    description: "This is the first playlist",
    tracks: [
      {
        id: "1",
        name: "Track 1",
        artist: "Artist 1",
        duration: 300,
      },
      {
        id: "2",
        name: "Track 2",
        artist: "Artist 2",
        duration: 300,
      },
      {
        id: "3",
        name: "Track 3",
        artist: "Artist 3",
        duration: 300,
      },
    ],
  },
  {
    id: "2",
    name: "Playlist 2",
    description: "This is the second playlist",
    tracks: [
      {
        id: "4",
        name: "Track 4",
        artist: "Artist 4",
        duration: 300,
      },
      {
        id: "5",
        name: "Track 5",
        artist: "Artist 5",
        duration: 300,
      },
      {
        id: "6",
        name: "Track 6",
        artist: "Artist 6",
        duration: 300,
      },
    ],
  },
];

export default function Playlist() {
  let currentTime = 0.0;
  let maxTime = 5.48;
  const playlistId = "1"

  const renderPlaylists = (playlist, index:number) => {
    return (
      <li key={`playlist-${playlist.id}`} draggable="true">
        <div className="border rounded-2xl flex w-full gap-1 items-center justify-between p-2">
              <div className="w-1/3">
                <img className="w-4 h-4 rounded flex-1" src="" alt="thumb" />
              </div>
              <div className="flex items-start justify-between">
                <div className="flex flex-col w-2/3 items-start justify-center gap-0.5">
                  <Link to="#">
                    <h5 className="text-sm">{playlist.name}</h5>
                  </Link>
                  <a href="Artist Page">
                    <p className="text-xs">{playlist.description}</p>
                  </a>
                </div>
              </div>
            </div>
      </li>
    )
  }
  const renderContentPlaylists = (playlist, index:number) => {
    return (
      <li key={`playlist-${playlist.id}`} className="w-full flex flex-col gap-4">
        {playlist.id === playlistId &&
        <>
          <div className="border rounded-2xl flex w-full gap-1 items-center justify-between p-2">
            <div className="w-1/3">
              <img className="w-4 h-4 rounded flex-1" src="" alt="thumb" />
            </div>
            <div className="flex items-start justify-between">
              <div className="flex flex-col w-2/3 items-start justify-center gap-0.5">
                <a href="Album Page">
                  <h5>{playlist.name}</h5>
                </a>
                <a href="Artist Page">
                  <p>{playlist.description}</p>
                </a>
              </div>
            </div>      
          </div>
          <div className="w-full flex flex-col border rounded-2xl gap-1 justify-between p-2">
            <ul>
                {playlists.map(renderTracks)}
            </ul>
          </div>
        </>
        }
      </li>
    )
  }

  const renderTracks = (playlist, index:number) => {
    return (
      <li key={`playlist-${playlist.id}`} className="w-full flex flex-col gap-4">
        {playlist.id === playlistId &&
        <>
          <div className="flex w-full gap-1 items-center justify-evenly p-2 bg-gray-500 rounded-2xl">
            <div className="w-1/6">
              <img className="w-4 h-4 rounded flex-1" src="" alt="thumb" />
            </div>
            <div className="flex items-center justify-between w-4/6">
              <div className="flex flex-col w-full items-start justify-center gap-0.5">
                <a href="Album Page">
                  <h5>{playlist.tracks.name}</h5>
                </a>
                <a href="Artist Page">
                  <p>{playlist.tracks.artist}</p>
                </a>
              </div>
            </div>      
            <div className="w-1/6 flex flex-col gap-1 justify-between p-2">
              <p>{playlist.tracks.duration}</p>
            </div>
          </div>
        </>
        }
      </li>
    )
  }

  return (
    <>
      <Site>
        <div id="spotify" className="p-8 mt-24 flex flex-col min-h-screen">
          <div id="container" className="flex">
            <aside className="flex flex-col px-2 gap- min-h-96 w-fit">
              <div
                id="menu"
                className="bg-gray-900 border border-transparent rounded-2xl p-4 h-fit gap-1"
              >
                <div className="flex w-fit justify-between gap-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="24px"
                    viewBox="0 -960 960 960"
                    width="24px"
                    fill="#e8eaed"
                  >
                    <path d="M240-200h120v-240h240v240h120v-360L480-740 240-560v360Zm-80 80v-480l320-240 320 240v480H520v-240h-80v240H160Zm320-350Z" />
                  </svg>
                  <h5>Home</h5>
                </div>
                <div className="flex w-fit justify-between gap-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="24px"
                    viewBox="0 -960 960 960"
                    width="24px"
                    fill="#e8eaed"
                  >
                    <path d="M784-120 532-372q-30 24-69 38t-83 14q-109 0-184.5-75.5T120-580q0-109 75.5-184.5T380-840q109 0 184.5 75.5T640-580q0 44-14 83t-38 69l252 252-56 56ZM380-400q75 0 127.5-52.5T560-580q0-75-52.5-127.5T380-760q-75 0-127.5 52.5T200-580q0 75 52.5 127.5T380-400Z" />
                  </svg>
                  <h5>Search</h5>
                </div>
              </div>
              <div
                id="Library"
                className="bg-gray-900 border border-transparent rounded-2xl p-2 w-full h-full flex flex-col justify-between gap-1"
              >
                <div className="flex w-full justify-between">
                  <nav className="flex justify-between gap-1 flex-wrap">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      height="24px"
                      viewBox="0 -960 960 960"
                      width="24px"
                      fill="#e8eaed"
                    >
                      <path d="M80-160v-80h800v80H80Zm80-160v-320h80v320h-80Zm160 0v-480h80v480h-80Zm160 0v-480h80v480h-80Zm280 0L600-600l70-40 160 280-70 40Z" />
                    </svg>
                    <button>Your Library</button>
                  </nav>
                  <nav className="flex justify-between list-none">
                    <li>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        height="24px"
                        viewBox="0 -960 960 960"
                        width="24px"
                        fill="#e8eaed"
                      >
                        <path d="M440-440H200v-80h240v-240h80v240h240v80H520v240h-80v-240Z" />
                      </svg>
                    </li>
                    <li>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        height="24px"
                        viewBox="0 -960 960 960"
                        width="24px"
                        fill="#e8eaed"
                      >
                        <path d="M647-440H160v-80h487L423-744l57-56 320 320-320 320-57-56 224-224Z" />
                      </svg>
                    </li>
                  </nav>
                </div>
                <div className="flex flex-wrap justify-between gap-1">
                  <nav className="flex justify-between gap-1 flex-wrap">
                    <button className="bg-gray-800 rounded-full py-1 px-1.5">
                      Playlists
                    </button>
                    <button className="bg-gray-800 rounded-full py-1 px-1.5">
                      Albums
                    </button>
                    <button className="bg-gray-800 rounded-full py-1 px-1.5">
                      Artists
                    </button>
                    <button></button>
                  </nav>
                  <nav className="flex w-full justify-between list-none">
                    <li>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        height="24px"
                        viewBox="0 -960 960 960"
                        width="24px"
                        fill="#e8eaed"
                      >
                        <path d="M784-120 532-372q-30 24-69 38t-83 14q-109 0-184.5-75.5T120-580q0-109 75.5-184.5T380-840q109 0 184.5 75.5T640-580q0 44-14 83t-38 69l252 252-56 56ZM380-400q75 0 127.5-52.5T560-580q0-75-52.5-127.5T380-760q-75 0-127.5 52.5T200-580q0 75 52.5 127.5T380-400Z" />
                      </svg>
                    </li>
                    <li>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        height="24px"
                        viewBox="0 -960 960 960"
                        width="24px"
                        fill="#e8eaed"
                      >
                        <path d="M80-160v-160h160v160H80Zm240 0v-160h560v160H320ZM80-400v-160h160v160H80Zm240 0v-160h560v160H320ZM80-640v-160h160v160H80Zm240 0v-160h560v160H320Z" />
                      </svg>
                    </li>
                  </nav>
                </div>
                <ul className="flex flex-col list-none overflow-y-scroll h-full gap-2 p-1">
                  {playlists.map(renderPlaylists)}
                </ul>
              </div>
            </aside>
            <section className="flex flex-col w-full min-h-96 bg-gray-900 bg-gradient-to-t border border-transparent rounded-2xl">
              <header className="flex justify-between p-4 bg-transparent">
                <ul className="flex justify-evenly w-auto gap-1">
                  <button>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      height="24px"
                      viewBox="0 -960 960 960"
                      width="24px"
                      fill="#e8eaed"
                    >
                      <path d="M400-80 0-480l400-400 71 71-329 329 329 329-71 71Z" />
                    </svg>
                  </button>
                  <button>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      height="24px"
                      viewBox="0 -960 960 960"
                      width="24px"
                      fill="#e8eaed"
                    >
                      <path d="m321-80-71-71 329-329-329-329 71-71 400 400L321-80Z" />
                    </svg>
                  </button>
                </ul>
                <ul className="flex justify-between gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="24px"
                    viewBox="0 -960 960 960"
                    width="24px"
                    fill="#e8eaed"
                  >
                    <path d="M160-200v-80h80v-280q0-83 50-147.5T420-792v-28q0-25 17.5-42.5T480-880q25 0 42.5 17.5T540-820v28q80 20 130 84.5T720-560v280h80v80H160Zm320-300Zm0 420q-33 0-56.5-23.5T400-160h160q0 33-23.5 56.5T480-80ZM320-280h320v-280q0-66-47-113t-113-47q-66 0-113 47t-47 113v280Z" />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="24px"
                    viewBox="0 -960 960 960"
                    width="24px"
                    fill="#e8eaed"
                  >
                    <path d="M40-160v-112q0-34 17.5-62.5T104-378q62-31 126-46.5T360-440q66 0 130 15.5T616-378q29 15 46.5 43.5T680-272v112H40Zm720 0v-120q0-44-24.5-84.5T666-434q51 6 96 20.5t84 35.5q36 20 55 44.5t19 53.5v120H760ZM360-480q-66 0-113-47t-47-113q0-66 47-113t113-47q66 0 113 47t47 113q0 66-47 113t-113 47Zm400-160q0 66-47 113t-113 47q-11 0-28-2.5t-28-5.5q27-32 41.5-71t14.5-81q0-42-14.5-81T544-792q14-5 28-6.5t28-1.5q66 0 113 47t47 113ZM120-240h480v-32q0-11-5.5-20T580-306q-54-27-109-40.5T360-360q-56 0-111 13.5T140-306q-9 5-14.5 14t-5.5 20v32Zm240-320q33 0 56.5-23.5T440-640q0-33-23.5-56.5T360-720q-33 0-56.5 23.5T280-640q0 33 23.5 56.5T360-560Zm0 320Zm0-400Z" />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="24px"
                    viewBox="0 -960 960 960"
                    width="24px"
                    fill="#e8eaed"
                  >
                    <path d="M234-276q51-39 114-61.5T480-360q69 0 132 22.5T726-276q35-41 54.5-93T800-480q0-133-93.5-226.5T480-800q-133 0-226.5 93.5T160-480q0 59 19.5 111t54.5 93Zm246-164q-59 0-99.5-40.5T340-580q0-59 40.5-99.5T480-720q59 0 99.5 40.5T620-580q0 59-40.5 99.5T480-440Zm0 360q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q53 0 100-15.5t86-44.5q-39-29-86-44.5T480-280q-53 0-100 15.5T294-220q39 29 86 44.5T480-160Zm0-360q26 0 43-17t17-43q0-26-17-43t-43-17q-26 0-43 17t-17 43q0 26 17 43t43 17Zm0-60Zm0 360Z" />
                  </svg>
                </ul>
              </header>
              <main className="flex p-4 overflow-y-scroll w-full h-full list-none">
                {playlists.map(renderContentPlaylists)}
              </main>
            </section>
          </div>
          <footer className="flex justify-between p-2 w-full min-h-8 bg-gray-950">
            <div className="flex w-fit gap-1 items-center">
              <img src="" alt="thumb" />
              <div className="flex items-start justify-between">
                <div className="flex flex-col items-start justify-center gap-0.5">
                  <a href="Album Page">
                    <h5>Song Title</h5>
                  </a>
                  <a href="Artist Page">
                    <p>Artist Name</p>
                  </a>
                </div>
                <button className="self-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="24px"
                    viewBox="0 -960 960 960"
                    width="24px"
                    fill="#e8eaed"
                  >
                    <path d="m424-296 282-282-56-56-226 226-114-114-56 56 170 170Zm56 216q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z" />
                  </svg>
                </button>
              </div>
            </div>
            <div className="flex w-fit flex-col items-center justify-between">
              <div className="flex items-center justify-between gap-1">
                <button>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="24px"
                    viewBox="0 -960 960 960"
                    width="24px"
                    fill="#e8eaed"
                  >
                    <path d="M560-160v-80h104L537-367l57-57 126 126v-102h80v240H560Zm-344 0-56-56 504-504H560v-80h240v240h-80v-104L216-160Zm151-377L160-744l56-56 207 207-56 56Z" />
                  </svg>
                </button>
                <button>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="24px"
                    viewBox="0 -960 960 960"
                    width="24px"
                    fill="#e8eaed"
                  >
                    <path d="M220-240v-480h80v480h-80Zm520 0L380-480l360-240v480Zm-80-240Zm0 90v-180l-136 90 136 90Z" />
                  </svg>
                </button>
                <button>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="48px"
                    viewBox="0 -960 960 960"
                    width="48px"
                    fill="#e8eaed"
                  >
                    <path d="m380-300 280-180-280-180v360ZM480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z" />
                  </svg>
                </button>
                <button>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="24px"
                    viewBox="0 -960 960 960"
                    width="24px"
                    fill="#e8eaed"
                  >
                    <path d="M660-240v-480h80v480h-80Zm-440 0v-480l360 240-360 240Zm80-240Zm0 90 136-90-136-90v180Z" />
                  </svg>
                </button>
                <button>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="24px"
                    viewBox="0 -960 960 960"
                    width="24px"
                    fill="#e8eaed"
                  >
                    <path d="M280-80 120-240l160-160 56 58-62 62h406v-160h80v240H274l62 62-56 58Zm-80-440v-240h486l-62-62 56-58 160 160-160 160-56-58 62-62H280v160h-80Z" />
                  </svg>
                </button>
              </div>
              <div className="flex items-center justify-between gap-1">
                <p>{currentTime}</p>
                <progress
                  value={currentTime}
                  max={maxTime}
                  className="h-1 w-40 rounded-full"
                >
                  Test
                </progress>
                <p>{maxTime}</p>
              </div>
            </div>
            <div className="flex w-fit items-center gap-1">
              <button>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="24px"
                  viewBox="0 -960 960 960"
                  width="24px"
                  fill="#e8eaed"
                >
                  <path d="m380-300 280-180-280-180v360ZM160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720v480q0 33-23.5 56.5T800-160H160Zm0-80h640v-480H160v480Zm0 0v-480 480Z" />
                </svg>
              </button>
              <button>
                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="M160-320v-480 480ZM80-80v-720q0-33 23.5-56.5T160-880h440q33 0 56.5 23.5T680-800v17q-24 11-44 27t-36 36v-80H160v480h440v-160q16 20 36 36t44 27v97q0 33-23.5 56.5T600-240H240L80-80Zm160-320h160v-80H240v80Zm520-80q-50 0-85-35t-35-85q0-50 35-85t85-35q11 0 21 2t19 5v-207h160v80h-80v240q0 50-35 85t-85 35Zm-520-40h280v-80H240v80Zm0-120h280v-80H240v80Z"/></svg>  
              </button>
              <button>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="24px"
                  viewBox="0 -960 960 960"
                  width="24px"
                  fill="#e8eaed"
                >
                  <path d="M640-160q-50 0-85-35t-35-85q0-50 35-85t85-35q11 0 21 1.5t19 6.5v-328h200v80H760v360q0 50-35 85t-85 35ZM120-320v-80h320v80H120Zm0-160v-80h480v80H120Zm0-160v-80h480v80H120Z" />
                </svg>
              </button>
              <button>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="24px"
                  viewBox="0 -960 960 960"
                  width="24px"
                  fill="#e8eaed"
                >
                  <path d="M320-120v-80H160q-33 0-56.5-23.5T80-280v-480q0-33 23.5-56.5T160-840h640q33 0 56.5 23.5T880-760v80h-80v-80H160v480h280v160H320Zm286-180q0-39 27.5-66.5T700-394q39 0 66.5 27.5T794-300q0 39-27.5 66.5T700-206q-39 0-66.5-27.5T606-300Zm234-340q17 0 28.5 11.5T880-600v440q0 17-11.5 28.5T840-120H560q-17 0-28.5-11.5T520-160v-440q0-17 11.5-28.5T560-640h280Zm-140 40q-26 0-43 17t-17 43q0 26 17 43t43 17q26 0 43-17t17-43q0-26-17-43t-43-17Zm0 440q59 0 99.5-40.5T840-300q0-59-40.5-99.5T700-440q-59 0-99.5 40.5T560-300q0 59 40.5 99.5T700-160Z" />
                </svg>
              </button>
              <button>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="24px"
                  viewBox="0 -960 960 960"
                  width="24px"
                  fill="#e8eaed"
                >
                  <path d="M560-131v-82q90-26 145-100t55-168q0-94-55-168T560-749v-82q124 28 202 125.5T840-481q0 127-78 224.5T560-131ZM120-360v-240h160l200-200v640L280-360H120Zm440 40v-322q47 22 73.5 66t26.5 96q0 51-26.5 94.5T560-320ZM400-606l-86 86H200v80h114l86 86v-252ZM300-480Z" />
                </svg>
              </button>
              <progress
                  value={currentTime}
                  max={maxTime}
                  className="h-1 w-20 rounded-full"
                >
                  Test
                </progress>
              <button>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="24px"
                  viewBox="0 -960 960 960"
                  width="24px"
                  fill="#e8eaed"
                >
                  <path d="M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h560q33 0 56.5 23.5T840-760v280h-80v-280H200v560h280v80H200Zm360 0v-80h144L332-572l56-56 372 371v-143h80v280H560Z" />
                </svg>
              </button>
              <button>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="24px"
                  viewBox="0 -960 960 960"
                  width="24px"
                  fill="#e8eaed"
                >
                  <path d="M120-120v-320h80v184l504-504H520v-80h320v320h-80v-184L256-200h184v80H120Z" />
                </svg>
              </button>
            </div>
          </footer>
        </div>
      </Site>
    </>
  );
}
