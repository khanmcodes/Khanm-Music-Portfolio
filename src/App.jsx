import React from "react";
import LNavbar from "./components/LNavbar";
import HomePage from "./pages/HomePage";
import "./App.css";
import Links from "./pages/Links";
import Music from "./pages/Music";
import Footer from "./components/Footer";
import Videos from "./pages/Videos";
import About from "./pages/About";

function App() {
  return (
    <div className="App">
      <LNavbar />
      <HomePage /> 
      {/* <Music/> */}
      {/* <Videos/> */}
      {/* <About/> */}
      {/* <Links/> */}
      <Footer/>
    </div>
  );
}

export default App;
