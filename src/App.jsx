import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import './global.css';
import './bootstrap';

import Welcome from './Pages/Welcome';
import Blog from './Pages/Projects/Blog/Home';
import Content from './Pages/Projects/Blog/Content';
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
import GalleryItem from './Pages/Projects/Gallery/Content';
import Playlist from './Pages/Projects/Playlist/Home';
import Portfolio from './Pages/Projects/Portfolio/Home';
import Quiz from './Pages/Projects/Quiz/Home';
import QuizItem from './Pages/Projects/Quiz/Content';
import Ranking from './Pages/Projects/Ranking/Home';
import Schedule from './Pages/Projects/Schedule/Home';
import SiteApi from './Pages/Projects/SiteApi/Home';
import SocialMedia from './Pages/Projects/SocialMedia/Home';
import Template from './Pages/Projects/Template/Template';
import TicTacToe from './Pages/Projects/TicTacToe/Home';
import Weather from './Pages/Projects/Weather/Home';

const routes = [
  { path: "/", element: <Welcome /> },
  { path: "/blog", element: <Blog /> },
  { path: "/blog/content/:id", element: <Content /> },
  { path: "/booking", element: <Booking /> },
  { path: "/calculator", element: <Calculator /> },
  { path: "/clone", element: <Clone /> },
  { path: "/clone/hbo", element: <Hbo /> },
  { path: "/clone/hbo/sign", element: <SignIn /> },
  { path: "/clone/discord", element: <Discord /> },
  { path: "/clone/youtube", element: <Youtube /> },
  { path: "/cms", element: <CMS /> },
  { path: "/crud", element: <CRUD /> },
  { path: "/dashboard", element: <Dashboard /> },
  { path: "/delivery", element: <Delivery /> },
  { path: "/ecommerce", element: <Ecommerce /> },
  { path: "/gallery", element: <Gallery /> },
  { path: "/gallery/content/:id", element: <GalleryItem /> },
  { path: "/playlist", element: <Playlist /> },
  { path: "/portfolio", element: <Portfolio /> },
  { path: "/quiz", element: <Quiz /> },
  { path: "/quiz/:id", element: <QuizItem /> },
  { path: "/ranking", element: <Ranking /> },
  { path: "/schedule", element: <Schedule /> },
  { path: "/siteapi", element: <SiteApi /> },
  { path: "/socialmedia", element: <SocialMedia /> },
  { path: "/tictactoe", element: <TicTacToe /> },
  { path: "/weather", element: <Weather /> },
  { path: "/template", element: <Template /> },
];

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {routes.map(({ path, element }) => (
          <Route key={path} path={path} element={element} />
        ))}
        {/* Optional: Add a 404 page route */}
        <Route path="*" element={<h2>404 Not Found</h2>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;