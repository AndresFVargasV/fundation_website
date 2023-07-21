import { NavLink } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
const NavBar = () => {
  const routes = [
    ["Home", "/"],
    ["Login", "/login"],
    ["Register", "/register"],
  ];
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid>
        <Navbar.Brand href="#">Fundacion ACOR</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="me-auto my-2 my-lg-0" navbarScroll>
            <NavLink to="/" className="nav-link">
              Inicio
            </NavLink>

            <NavDropdown title="Link" id="navbarScrollingDropdown">
              <NavLink to="/about" className="dropdown-item">
                Quienes somos
              </NavLink>

              <NavDropdown.Item href="#action5">
                Something else here
              </NavDropdown.Item>
            </NavDropdown>
            <NavLink to="/login" className="nav-link">
              Iniciar sesión
            </NavLink>
            <NavLink to="/register" className="nav-link">
              Registrarse
            </NavLink>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Buscar"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Buscar</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
