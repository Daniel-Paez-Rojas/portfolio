import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Container, Stack } from "react-bootstrap";
import Home from "./pages/Home";
import About from "./pages/About";
import Qualification from "./pages/Qualification";
import Portfolio from "./pages/Portfolio";
import Skills from "./pages/Skills";
import Contact from "./pages/Contact";

/* TODO:
* RAMA: Hacer página 404
* RAMA: Hero Section
*/

function App() {
  return (
    <Router>
      <Stack gap={5}>
        <Container className="p-3">
          <Routes>
            <Route path="/" exact element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/qualification" element={<Qualification />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<h1>404 Not Found</h1>} />
          </Routes>
        </Container>
      </Stack>
    </Router>
  );
}

export default App;
