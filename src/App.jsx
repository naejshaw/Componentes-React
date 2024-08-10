import './App.css';
import './global.css';
import './bootstrap';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Welcome from './Pages/Welcome';
import Blog from './Pages/Projects/Blog/Home';
import Calculator from './Pages/Projects/Calculator/Home';
import Clone from './Pages/Projects/Clone/Home';
import Hbo from './Pages/Projects/Clone/Hbo';
import Discord from './Pages/Projects/Clone/Discord';
import SignIn from './Pages/Projects/Clone/SignIn';
import Youtube from './Pages/Projects/Clone/Youtube';
import Booking from './Pages/Projects/Booking/Home';
import CMS from './Pages/Projects/Cms/Home';
import CRUD from './Pages/Projects/Crud/Home';
import Dashboard from './Pages/Projects/Dashboard/Home';
import Delivery from './Pages/Projects/Delivery/Home';
import Ecommerce from './Pages/Projects/Ecommerce/Home';
import Gallery from './Pages/Projects/Gallery/Home';
import Playlist from './Pages/Projects/Playlist/Home';
import Portfolio from './Pages/Projects/Portfolio/Home';
import Quiz from './Pages/Projects/Quiz/Home';
import Ranking from './Pages/Projects/Ranking/Home';
import Schedule from './Pages/Projects/Schedule/Home';
import SiteApi from './Pages/Projects/SiteApi/Home';
import SocialMedia from './Pages/Projects/SocialMedia/Home';
import TicTacToe from './Pages/Projects/TicTacToe/Home';
import Weather from './Pages/Projects/Weather/Home';
import Content from './Pages/Projects/Blog/Content';
import Spotify from './Pages/Projects/Spotify/Spotify';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<Welcome />}/>
        <Route path="/blog" element={<Blog />}/>
        <Route path="/blog/content/:id" element={<Content />}/>
        <Route path="/booking" element={<Booking />}/>
        <Route path="/calculator" element={<Calculator />}/>
        <Route path="/clone" element={<Clone />}/>
        <Route path="/clone/hbo" element={<Hbo />}/>
        <Route path="/clone/hbo/sign" element={<SignIn />}/>
        <Route path="/clone/discord" element={<Discord />}/>
        <Route path="/clone/youtube" element={<Youtube />}/>
        <Route path="/cms" element={<CMS />}/>
        <Route path="/crud" element={<CRUD />}/>
        <Route path="/dashboard" element={<Dashboard />}/>
        <Route path="/delivery" element={<Delivery />}/>
        <Route path="/ecommerce" element={<Ecommerce />}/>
        <Route path="/gallery" element={<Gallery />}/>
        <Route path="/playlist" element={<Spotify />}/>
        <Route path="/portfolio" element={<Portfolio />}/>
        <Route path="/quiz" element={<Quiz />}/>
        <Route path="/ranking" element={<Ranking />}/>
        <Route path="/schedule" element={<Schedule />}/>
        <Route path="/siteapi" element={<SiteApi />}/>
        <Route path="/socialmedia" element={<SocialMedia />}/>
        <Route path="/tictactoe" element={<TicTacToe />}/>
        <Route path="/weather" element={<Weather />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
