import React from "react";
import { Container } from "react-bootstrap";
import { Outlet } from "react-router-dom";
import Navigation from "./Navbar"; // Ensure the correct component name

function Layout() {
  return (
    <div className="app-container">
      {/* Navbar Section */}
      <Navigation />

      {/* Main Content Section */}
      <Container className="mt-4 main-content">
        <Outlet />
      </Container>

      {/* Footer Section */}
      <footer className="text-center mt-4 p-3 new text-white">
        <p style={{ color: "white" }}>&copy; {new Date().getFullYear()} Elijah Abolaji</p>
      </footer>
    </div>
  );
}

export default Layout;