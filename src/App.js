import './App.css';
import Home from './pages/Home';
import About from './pages/About';
import Header from './Partial/Header';
import Footer from './Partial/footer';
import MovieApp from './pages/project_pages/Movie_App/MovieApp';
import HiLoApp from './pages/project_pages/HiLo_Project/HiLoApp';
import CalculatorApp from './pages/project_pages/Calculator/CalculatorApp';
import DeckMasterApp from './pages/project_pages/DeckMasterApp/DeckMastereApp';

import { HashRouter as BrowserRouter, Routes, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';

function App() {
  return (
    <>
    <Header />
      <div className="App">
            <BrowserRouter>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/About" element={<About />} />
                <Route path="/MovieApp" element={<MovieApp />} />
                <Route path="/HiLoApp" element={<HiLoApp />} />
                <Route path="/CalculatorApp" element={<CalculatorApp />} />
                <Route path="/DeckMasterApp" element={<DeckMasterApp />} />
              </Routes>
            </BrowserRouter>
      </div>
      <Footer />
    </>
  );
}

export default App;
