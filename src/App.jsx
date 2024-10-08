import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import Home from "./screens/Home/Home";
import Login from "./screens/login";
import About from "./screens/About";
import SignUp from "./screens/signUp/signUp";
import Teleconsultation from "./screens/allspecialities/Teleconsultation";
import Search from "./screens/search/search";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";


import { BrowserRouter as Router,Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
    <Router>
    <Navbar />
    <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/login" element={<Login />} />
    <Route path="/about" element={<About />} />
    <Route path="/teleconsultation" element={<Teleconsultation />} />
    <Route path="/search" element={<Search />} />
    <Route path="/Signup" element={<SignUp />} />

    </Routes>
    <Footer />
    </Router>

    </>
  );
}

export default App;
