import React from "react"
import { Navbar, Nav, Container, Image } from "react-bootstrap"
import { LinkContainer } from "react-router-bootstrap"
import "./header.css"
import logo from "../images/mike-logo-c.jpg"

const Header = () => {
  return (
    <header className='header'>
      <Navbar bg='light' variant='light' expand='lg' collapseOnSelect>
        <Container>
          <Navbar.Brand href='/'>
            <Image
              src={logo}
              alt='logo'
              width='50'
              height='50'
              className='d-inline-block align-top'
              roundedCircle
            ></Image>
          </Navbar.Brand>

          <LinkContainer to='/'>
            <Navbar.Brand></Navbar.Brand>
          </LinkContainer>

          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse id='basic-navbar-nav'>
            <Nav className='ms-auto'>
              <LinkContainer to='/cart'>
                <Nav.Link>Cart</Nav.Link>
              </LinkContainer>
              <LinkContainer to='/login'>
                <Nav.Link>Sign In</Nav.Link>
              </LinkContainer>
              <LinkContainer to='/BioScreen'>
                <Nav.Link>Bio</Nav.Link>
              </LinkContainer>
              <LinkContainer to='/Gallery'>
                <Nav.Link>Gallery</Nav.Link>
              </LinkContainer>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  )
}

export default Header
