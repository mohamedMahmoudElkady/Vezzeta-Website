import { useContext, useState } from "react";
import "./Navbar.css";
import Dropdown from "react-bootstrap/Dropdown";
import logo from "../assets/NavbarImages/whitelogowithdotcom.png";
import Egypt from "../assets/NavbarImages/Egypt.webp";
import Saudi from "../assets/NavbarImages/Saudi.jfif";
import Lebanon from "../assets/NavbarImages/Lebanon.jfif";
import Jordan from "../assets/NavbarImages/Jordan.jfif";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/AuthContext"; // Ensure correct import
import { LuLogOut } from "react-icons/lu";

export default function Navbar() {
  const { currentUser, dispatch } = useContext(AuthContext); // Use currentUser from context
  const [language, setLanguage] = useState("عربي"); // Initial language state
  const [isCollapsed, setIsCollapsed] = useState(true);

  const toggleLanguage = () => {
    setLanguage(language === "English" ? "عربي" : "English");
  };

  const toggleNavbar = () => {
    setIsCollapsed(!isCollapsed);
  };

  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark">
      <Link to="/">
        <img src={logo} alt="Logo" />
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        onClick={toggleNavbar}
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded={isCollapsed}
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon" />
      </button>
      <div
        className={`collapse navbar-collapse ${isCollapsed ? "" : "show"}`}
        id="navbarNav"
      >
        <ul className="navbar-nav" style={{ marginLeft: "auto" }}>
          {currentUser ? (
            <>
              <Dropdown>
                <Dropdown.Toggle
                  variant="transparent"
                  style={{ color: "white" }}
                  id="dropdown-basic"
                >
                  {currentUser.name}
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item className="drp-item">
                    <Link to="/Profile"> Profile </Link>
                  </Dropdown.Item>
                  
                  <Dropdown.Item className="drp-item">
                  <Link to="/appointment">Appointments </Link>
                  </Dropdown.Item>
                  <Dropdown.Item onClick={handleLogout} className="drp-item">
                    Logout{" "}
                    <LuLogOut
                      style={{
                        marginLeft: "5px",
                        alignSelf: "center",
                        fontSize: "20px",
                        color: "black",
                      }}
                    />
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </>
          ) : (
            <>
              <li className="nav-item">
                <Link to="/signup">
                  <button className="btn btn-outline-light btn-sm">
                    Sign Up
                  </button>
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/login">
                  <a className="nav-link" href="#">
                    Login
                  </a>
                </Link>
              </li>
            </>
          )}
          <li className="nav-item">
            <Link to="/DoctorSignup">
              <a className="nav-link" href="#">
                Vezzeta For Doctors
              </a>
            </Link>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="contact.html">
              Contact Us
            </a>
          </li>
          <li className="nav-item">
            <button className="nav-link" onClick={toggleLanguage}>
              {language}
            </button>
          </li>
          <Dropdown>
            <Dropdown.Toggle
              variant="transparent"
              style={{ color: "white" }}
              id="dropdown-basic"
            >
              <img src={Egypt} alt="Egypt" /> Egypt
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item href="#">
                <img src={Saudi} alt="Saudi" className="drpcountry" /> Saudi
              </Dropdown.Item>
              <Dropdown.Item href="#">
                <img src={Jordan} alt="Jordan" className="drpcountry" /> Jordan
              </Dropdown.Item>
              <Dropdown.Item href="#">
                <img src={Lebanon} alt="Lebanon" className="drpcountry" />{" "}
                Lebanon
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </ul>
      </div>
    </nav>
  );
}
