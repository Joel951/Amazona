/* eslint-disable @typescript-eslint/no-unused-vars */
import { Navbar, Container, Nav, Row, Col } from "react-bootstrap";
import { sampleProducts } from "./data";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <div className="d-flex flex-column vh-100">
      <header>
        <Navbar bg="dark" variant="dark" expand="lg">
          <Container>
            <Navbar.Brand>Amazona</Navbar.Brand>
          </Container>
          <Nav>
            <a href="/cart" className="nav-link">
              Cart
            </a>
            <a href="/sigin" className="nav-link">
              SignIn
            </a>
          </Nav>
        </Navbar>
      </header>
      <main>
        <Container className="mt-3">
          <Outlet />
        </Container>
      </main>
      <footer>
        <div className="text-center">All rights reserved</div>
      </footer>
    </div>
  );
}

export default App;
