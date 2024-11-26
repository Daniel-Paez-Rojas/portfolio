import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {Container} from "react-bootstrap";
import MainNavbar from "./components/Navbar";
import Home from "./pages/Home";
import AboutMe from "./pages/AboutMe";
import Portfolio from "./pages/Portfolio";
import Experience from "./pages/Experience";
import ContactMe from "./pages/ContactMe";

/* TODO:
* RAMA: Hacer página 404
* RAMA: Hero Section
*/

function App() {
  return (
    <Router>
      <MainNavbar />
      <Container>
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/about" element={<AboutMe />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/contact" element={<ContactMe />} />
          <Route path="*" element={<h1>404 Not Found</h1>} />
        </Routes>
      </Container>
    </Router>
  );
}

export default App;
