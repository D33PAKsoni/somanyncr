// import React from "react";
import Header from "./components/Header/Header";
import ContactBar from "./components/Header/ContactBar/ContactBar";
import ExpandingGallery from "./components/ExpandingGallery/ExpandingGallery";
import "./App.css";
function App() {
  return (
    <div>
      <ContactBar></ContactBar>
      <div className="redbackground-image"></div>
      <div className="red-overlay"></div>
      <Header></Header>
      <ExpandingGallery></ExpandingGallery>
    </div>
  );
}

export default App;
