import { React } from "react";
import LNavbar from "./components/LNavbar";
import HomePage from "./pages/HomePage";
import "./App.css";
import Links from "./pages/Links";
import Music from "./pages/Music";
import Footer from "./components/Footer";
import Videos from "./pages/Videos";
import About from "./pages/About";
import { BrowserRouter, Routes, Route} from "react-router";
import NotFound from "./pages/NotFound";

import { useLayoutEffect } from 'react';
import { useLocation } from 'react-router-dom';

function ScrollToTop() {
  const location = useLocation();

  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return null;
}

function App() {
  return (
    <BrowserRouter>
    <ScrollToTop />
      <div className="App">
        <LNavbar />
        <Routes >
            <Route path="/" element={<HomePage />} />
            <Route path="music" element={<Music />} />
            <Route path="videos" element={<Videos />} />
            <Route path="about" element={<About />} />
            <Route path="links" element={<Links />} />
            <Route path="/*" element={<NotFound />} />
          </Routes>
        <Footer/>
      </div>
    </BrowserRouter>
  );
}

export default App;
