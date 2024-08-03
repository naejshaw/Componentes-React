import Site from "../../../Layouts/SiteLayout";

export default function Playlist()
{
//TODO: Pesquisar e estruturar
    const clientId = "your-client-id-here"; // Replace with your client ID
    const code = undefined;

    if (!code) {
        redirectToAuthCodeFlow(clientId);
    } else {
        const accessToken = getAccessToken(clientId, code);
        const profile = fetchProfile(accessToken);
        populateUI(profile);
    }

    async function redirectToAuthCodeFlow(clientId) {
        // TODO: Redirect to Spotify authorization page
    }

    async function getAccessToken(clientId, code) {
      // TODO: Get access token for code
    }

    async function fetchProfile(token) {
        const result = await fetch("https://api.spotify.com/v1/me", {
            method: "GET", headers: { Authorization: `Bearer ${token}` }
        });

        return await result.json();
    }

    function populateUI(profile) {
        document.getElementById("displayName").innerText = profile.display_name;
        if (profile.images[0]) {
            const profileImage = new Image(200, 200);
            profileImage.src = profile.images[0].url;
            document.getElementById("avatar").appendChild(profileImage);
            document.getElementById("imgUrl").innerText = profile.images[0].url;
        }
        document.getElementById("id").innerText = profile.id;
        document.getElementById("email").innerText = profile.email;
        document.getElementById("uri").innerText = profile.uri;
        document.getElementById("uri").setAttribute("href", profile.external_urls.spotify);
        document.getElementById("url").innerText = profile.href;
        document.getElementById("url").setAttribute("href", profile.href);
    }
    async function redirectToAuthCodeFlow(clientId) {
      const verifier = generateCodeVerifier(128);
      const challenge = await generateCodeChallenge(verifier);

      localStorage.setItem("verifier", verifier);

      const params = new URLSearchParams();
      params.append("client_id", clientId);
      params.append("response_type", "code");
      params.append("redirect_uri", "http://localhost:5173/callback");
      params.append("scope", "user-read-private user-read-email");
      params.append("code_challenge_method", "S256");
      params.append("code_challenge", challenge);

      document.location = `https://accounts.spotify.com/authorize?${params.toString()}`;
  }

  function generateCodeVerifier(length) {
      let text = '';
      let possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

      for (let i = 0; i < length; i++) {
          text += possible.charAt(Math.floor(Math.random() * possible.length));
      }
      return text;
  }

  async function generateCodeChallenge(codeVerifier) {
      const data = new TextEncoder().encode(codeVerifier);
      const digest = await window.crypto.subtle.digest('SHA-256', data);
      return btoa(String.fromCharCode.apply(null, [...new Uint8Array(digest)]))
          .replace(/\+/g, '-')
          .replace(/\//g, '_')
          .replace(/=+$/, '');
  }

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

        <h1>Display your Spotify profile data</h1>

        <section id="profile">
          <h2>Logged in as <span id="displayName"></span></h2>
          <span id="avatar"></span>
          <ul>
              <li>User ID: <span id="id"></span></li>
              <li>Email: <span id="email"></span></li>
              <li>Spotify URI: <a id="uri" href="#"></a></li>
              <li>Link: <a id="url" href="#"></a></li>
              <li>Profile Image: <span id="imgUrl"></span></li>
          </ul>
        </section>
      </Site>
    </>);
  }