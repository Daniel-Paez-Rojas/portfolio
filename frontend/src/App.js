import React from "react";
import { Container, Stack } from "react-bootstrap";
import MainNavbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import useActiveSection from "./hooks/useActiveSection";

function App() {
  const sections = [
    "home",
    "about",
    "qualification",
    "portfolio",
    "skills",
    "contact"
  ];
  const activeSection = useActiveSection(sections);

  return (
    <Stack gap={5}>
      <Container className="p-3">
        <MainNavbar activeSection={activeSection} />
        <main>
          <Home />
          <About />
        </main>
      </Container>
    </Stack>
  );
}

export default App;
