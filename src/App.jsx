import './App.css';
import './global.css';
import './bootstrap';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Welcome from './Pages/Welcome';
import Blog from './Pages/Projects/Blog/Home';
import Calculator from './Pages/Projects/Calculator/Home';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Welcome />}/>
        <Route path="/blog" element={<Blog />}/>
        <Route path="/calculator" element={<Calculator />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
