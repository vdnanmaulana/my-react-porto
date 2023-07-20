import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Gallery from "./components/Gallery";
import Content from "./components/Content";
import "boxicons/css/boxicons.min.css";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Gallery />
      <Content />
      <Footer />
    </div>
  );
}

export default App;
