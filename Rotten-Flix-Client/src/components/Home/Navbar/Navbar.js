import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Form from 'react-bootstrap/Form'
import { Button } from 'react-bootstrap'
import { Container } from 'react-bootstrap'
import { useLocation } from 'react-router-dom'

function NavBar() {
    const location = useLocation()

    return (
        <Navbar bg="dark" variant="dark" sticky='top' >
            <Container>
                <Navbar.Brand href="#home" style={{ 'color': 'red' }}>Rotten-FLIX</Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse className="justify-content-end">
                    <Nav className="me-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#tvShows">TV Shows</Nav.Link>
                        <Nav.Link href="#movies">Movies</Nav.Link>
                        <Nav.Link href="#new">New &amp; Popular</Nav.Link>
                        <Nav.Link href="#myList">My List</Nav.Link>
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
                    <Navbar.Text>
                        Signed in as: <a href="/">{location.state && location.state.user.username}</a>
                    </Navbar.Text>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default NavBar