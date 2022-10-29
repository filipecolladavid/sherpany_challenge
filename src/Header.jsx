import {Container, Navbar, Nav, Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const Header = ({query, setQuery, filterResults}) => {
  return (
    <header>
      <Navbar bg="white" expand="sm" fixed="top">
        <Container fluid>
          <Navbar.Brand href="#">Contact Book</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: '100px' }}
              navbarScroll
            >
              <Link className="nav-link" to="/">Home</Link>
              <Link className="nav-link" to="/settings">Settings</Link>
            </Nav>
            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
                value={query}
                onChange={(e)=>setQuery(e.target.value)}
              />
              <Button variant="outline-success" onClick={(e)=>filterResults(e)} onSubmit={(e)=>filterResults(e)}>Search</Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
    );
}

export default Header;