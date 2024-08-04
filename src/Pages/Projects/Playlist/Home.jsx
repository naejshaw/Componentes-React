import Site from "../../../Layouts/SiteLayout";

export default function Playlist()
{
    return (<>
      <Site>
        <div id="spotify" className="p-8 mt-24 flex flex-col min-h-screen">
          <div id="container" className="flex">
            <aside className="flex flex-col px-2 gap-1 min-h-96 w-1/6">
              <div id="menu" className="bg-gray-900 border border-transparent rounded-2xl p-4 h-1/6">
                <div>Home</div>
                <div>Search</div>
              </div>
              <div id="Library" className="bg-gray-900 border border-transparent rounded-2xl p-2 w-full h-5/6">
                  <div className="flex flex-wrap justify-between">
                    <nav className="flex justify-between gap-1 flex-wrap">
                      <button>Playlists</button>
                      <button>Albums</button>
                      <button>Artists</button>
                      <button></button>
                    </nav>
                    <nav className="flex justify-between list-none">
                      <li>Search</li>
                      <li>Order</li>
                    </nav>
                  </div>
                  <ul className="flex flex-col list-none overflow-y-scroll">
                    <li>Playlist #name</li>
                  </ul>
              </div>
            </aside>
            <section className="flex flex-col w-5/6 bg-gray-900 bg-gradient-to-t border border-transparent rounded-2xl">
              <header className="flex justify-between p-4 bg-transparent">
                <ul className="flex justify-evenly w-auto gap-1">
                  <button>Previous Page</button>
                  <button>Next Page</button>
                </ul>
                <ul className="flex justify-between gap-2">
                  <i>Notifications</i>
                  <i>Activity</i>
                  <i>Profile</i>
                </ul>
              </header>
              <main className="flex p-4 overflow-y-scroll">
                Content
              </main>
            </section>
          </div>
          <footer className="flex justify-between p-2 w-full min-h-12 bg-gray-950">
            <div className="flex w-1/3 gap-1 items-center">
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
                <button className="self-center"><i className="fa fa-check-circle rounded-full" aria-hidden="true"></i></button>
              </div>
            </div>
            <div className="flex w-1/3 flex-col items-center justify-between">
              <div className="flex items-center justify-between gap-1">
                <button>a</button>
                <button>b</button>
                <button>c</button>
                <button>d</button>
                <button>e</button>
              </div>
              <div className="flex items-center justify-between gap-1">
                <p>Current Time</p>
                <progress>Test</progress>
                <p>Max Time</p>
              </div>
            </div>
            <div className="flex w-1/3 items-center justify-between">
              <button>Now</button>
              <button>List</button>
              <button>Devices</button>
              <button>Mute</button>
              <button>Volume</button>
              <button>Fullscreen</button>
            </div>
          </footer>
        </div>
      </Site>
    </>);
  }