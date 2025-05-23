import React from 'react'
import { Navbar, Nav, Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <header>
      <Navbar bg="dark" variant="dark" expand="lg" collapseOnSelect>
        <Container>
          {/* Brand도 Link로 연결 */}
          <Navbar.Brand as={Link} to="/">
            Proshop
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              {/* Cart 링크 */}
              <Nav.Link as={Link} to="/cart">
                <i className="fas fa-shopping-cart" /> Cart
              </Nav.Link>
              {/* Login 링크 */}
              <Nav.Link as={Link} to="/login">
                <i className="fas fa-user" /> Login
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  )
}

export default Header
