import React from "react";
import { Container, Stack } from "react-bootstrap";
import MainNavbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";

function App() {
  const handleScrollToSection = (event) => {
    const targetId = event.target.getAttribute("href").substring(1);
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <Stack gap={5}>
      <Container className="p-3">
        <MainNavbar handleScroll={handleScrollToSection} />
        <Home />
        <About />
      </Container>
    </Stack>
  );
}

export default App;
