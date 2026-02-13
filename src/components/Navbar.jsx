import { Navbar, Container, Nav } from 'react-bootstrap';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const Navigation = () => {
  const navigate = useNavigate();
  return (
    <Navbar bg="white" expand="lg" sticky="top" className="shadow-sm py-3">
      <Container>
        <Navbar.Brand onClick={() => navigate('/')} style={{cursor:'pointer'}} className="fw-bold fs-4">TECH-CORE</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto align-items-center">
            <Nav.Link onClick={() => navigate('/')}>Features</Nav.Link>
            <Button variant="contained" sx={{ borderRadius: '20px', ml: 2 }} onClick={() => navigate('/get-started')}>
              Get Started
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
export default Navigation;