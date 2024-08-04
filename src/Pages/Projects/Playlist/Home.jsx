import Site from "../../../Layouts/SiteLayout";

export default function Playlist()
{
    return (<>
      <Site>
        <div id="spotify" className="p-8 mt-24 flex flex-col max-h-screen">
          <div id="container" className="flex">
            <aside className="flex flex-col p-2 justify-between h-5/6 w-1/6">
              <div id="menu" className="bg-gray-900 border border-transparent rounded-2xl p-4">
                <div>Home</div>
                <div>Search</div>
              </div>
              <div id="Library" className="bg-gray-900 border border-transparent rounded-2xl p-4 w-full">
                  <div className="flex flex-wrap justify-between">
                    <nav className="flex justify-between gap-2">
                      <button>Playlists</button>
                      <button>Albums</button>
                      <button>Artists</button>
                    </nav>
                    <nav className="flex justify-between list-none">
                      <li>Search</li>
                      <li>Order</li>
                    </nav>
                  </div>
                  <ul className="flex flex-col list-none">
                    <li>Playlist #name</li>
                  </ul>
              </div>
            </aside>
            <section className="flex flex-col w-5/6 bg-gray-900 bg-gradient-to-t border border-transparent rounded-full">
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
              <main className="flex p-4">
                Content
              </main>
            </section>
          </div>
          <footer className="flex justify-between p-2 w-full bg-gray-950">
            <div className="flex flex-1 items-center justify-between">
              <img src="" alt="thumb" />
              <div className="flex items-start justify-between">
                <div className="flex flex-col items-start justify-center gap-1">
                  <h5>Song Title</h5>
                  <p>Artist Name</p>
                </div>
                <button><i className="fa fa-check-circle bg-green-400 rounded-full" aria-hidden="true"></i></button>
              </div>
            </div>
            <div className="flex flex-1 flex-col items-center justify-between">
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
            <div className="flex flex-1 items-center justify-between">
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