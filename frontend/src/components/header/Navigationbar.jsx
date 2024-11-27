import PropTypes from "prop-types";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { useNavigate } from "react-router-dom";

function Navigationbar() {
  const navigate = useNavigate(); // navigate to other pages

  // get authToken and loginUser from local storage
  const authToken = localStorage.getItem("authToken");
  const loginUser = JSON.parse(localStorage.getItem("loginUser"));

  // handle logout
  const logout = () => {
    // clear local storage
    localStorage.removeItem("authToken");
    localStorage.removeItem("loginUser");

    // navigate to login page
    navigate("/login");
  };

  return (
    <Navbar expand="lg" bg="primary" data-bs-theme="dark">
      <Container fluid>
        <Navbar.Brand href="/">CarBay🚕</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/cars">Cars</Nav.Link>
            <Nav.Link href="/about">About</Nav.Link>
            <Nav.Link href="/blogs">Blog</Nav.Link>
            <Nav.Link href="/contact">Contact</Nav.Link>
            <NavDropdown title="More" id="navbarScrollingDropdown">
              <NavDropdown.Item href="/add-car">Add Car</NavDropdown.Item>
              <NavDropdown.Item href="#action4">My Favorite</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/register">Register</NavDropdown.Item>
              {authToken ? (
                <NavDropdown.Item href="#" onClick={logout}>
                  Logout
                </NavDropdown.Item>
              ) : (
                <NavDropdown.Item href="/login">Login</NavDropdown.Item>
              )}
            </NavDropdown>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
          <p className="mx-3 text-warning">Hello {loginUser?.name || " " }</p>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

Navigationbar.propTypes = {
  authToken: PropTypes.string,
  loginUser: PropTypes.object,
  setAuthToken: PropTypes.func,
  setLoginUser: PropTypes.func,
};

export default Navigationbar;
