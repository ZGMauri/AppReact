import "./NavBar.css"
import {Link} from 'react-router-dom'
import { CartWidget } from "../CartWidget/CartWidget"
import { Card, Button, Navbar, Nav, Container } from "react-bootstrap"

export const NavBar = () => {

    return (
        <>
  <Navbar bg="primary" variant="dark">
    <Container>
    <Navbar.Brand as={Link} to="/"><h1>CAMISETAS PREMIER LEAGUE</h1></Navbar.Brand>

    <Nav className="me-auto">
      <Nav.Link as={Link} to='/productos/camisetas'>Camisetas</Nav.Link>
      <Nav.Link as={Link} to='/productos/pelotas'>Pelotas</Nav.Link>
      <Nav.Link as={Link} to='/contacto'>Contacto</Nav.Link>
      <Nav.Link as={Link} to='/nosotros'>Nosotros</Nav.Link>
      
    </Nav>
    <CartWidget/>
    </Container>
  </Navbar>
      
        </>    
    )
}