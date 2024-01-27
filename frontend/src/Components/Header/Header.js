import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import { Link } from "react-router-dom";

function Header() {
    return (
        <Navbar expand="lg" className="bg-white mb-3" sticky="top">
            <Container fluid>
                <Navbar.Brand href="#" as="h1">
                    CogniConnecto
                </Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Offcanvas placement="end">
                    <Offcanvas.Header closeButton>
                        <Offcanvas.Title>CogniConnecto</Offcanvas.Title>
                    </Offcanvas.Header>
                    <Offcanvas.Body>
                        <Nav className="justify-content-end flex-grow-1 pe-3">
                            <Link to="/events" className="nav-link">
                                Events
                            </Link>
                            <Link to="/jobs" className="nav-link">
                                Jobs
                            </Link>
                            <Link to="/tasks" className="nav-link">
                                Tasks
                            </Link>
                            <Link to="/" className="btn btn-outline-primary">
                                Sign out
                            </Link>
                        </Nav>
                    </Offcanvas.Body>
                </Navbar.Offcanvas>
            </Container>
        </Navbar>
    );
}
export default Header;
