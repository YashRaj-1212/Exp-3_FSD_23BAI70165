import { Navbar, Container, Nav, Badge } from 'react-bootstrap'; // Add Badge
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useAppContext } from '../context/AppContext'; // Import Context

const Navigation = () => {
  const navigate = useNavigate();
  const { state } = useAppContext(); // Access global state

  return (
    <Navbar bg="white" expand="lg" sticky="top" className="shadow-sm py-3">
      <Container>
        <Navbar.Brand onClick={() => navigate('/')} style={{cursor:'pointer'}} className="fw-bold fs-4">
          TECH-CORE
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto align-items-center">
            <Nav.Link onClick={() => navigate('/')}>Home</Nav.Link>
            <Nav.Link onClick={() => navigate('/analytics')}>
              Analytics 
              <Badge bg="primary" className="ms-1">{state.cart.length}</Badge>
            </Nav.Link>
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