// import React from "react";
import Header from "./components/Header/Header";
import ContactBar from "./components/Header/ContactBar/ContactBar";
import SoamniJi from "./components/SomaniJi/SomaniJi";
import ExpandingGallery from "./components/ExpandingGallery/ExpandingGallery";
import "./App.css";
function App() {
  return (
    <div>
      <ContactBar></ContactBar>
      <div className="redbackground-image"></div>
      <div className="red-overlay"></div>
      <Header></Header>
      <div className="hero-container">
        <ExpandingGallery></ExpandingGallery>
        <SoamniJi></SoamniJi>
      </div>
    </div>
  );
}

export default App;
