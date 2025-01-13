import Navbar from "./Navbar/Navbar";
import "./Header.css";
import logo from "../../assets/logo.png";

const Header = () => {
  return (
    <>
      <div className="header-container">
        <div className="logo-container">
          <div className="college">
            <img src={logo} alt="logo"></img>
            <div className="college-name">
              <h3>SOMANY</h3>
              <p>GROUP OF INSTITUTES</p>
            </div>
          </div>
        </div>
        <div className="contact-details">Contact details</div>
        <Navbar></Navbar>
      </div>
    </>
  );
};

export default Header;
