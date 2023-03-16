import {Navbar, Container, Nav} from 'react-bootstrap'

function HeaderNav () {
    return (
        <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">NC News</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#login">Login</Nav.Link>
            <Nav.Link href="#myarticles">My Articles</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    )
}

export default HeaderNav;