import React from "react";
import LNavbar from "./components/LNavbar";
import HomePage from "./pages/HomePage";
import "./App.css";
import Links from "./pages/Links";
import Music from "./pages/Music";
import Footer from "./components/Footer";
import Videos from "./pages/Videos";
import About from "./pages/About";
import { BrowserRouter, Routes, Route } from "react-router";


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <LNavbar />
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="music" element={<Music />} />
            <Route path="videos" element={<Videos />} />
            <Route path="about" element={<About />} />
            <Route path="links" element={<Links />} />
          </Routes>
        <Footer/>
      </div>
    </BrowserRouter>
  );
}

export default App;
