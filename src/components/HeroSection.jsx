import { Container, Row, Col } from 'react-bootstrap';
import { Button, Typography, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom'; // 1. Add this import

const HeroSection = () => {
  const navigate = useNavigate(); // 2. Initialize the navigate function

  return (
    <Box 
      sx={{ 
        background: 'linear-gradient(135deg, #fdfbfb 0%, #ebedee 100%)', 
        py: { xs: 8, md: 12 },
        display: 'flex',
        alignItems: 'center'
      }}
    >
      <Container>
        <Row className="align-items-center">
          <Col lg={6} className="text-center text-lg-start mb-5 mb-lg-0">
            <Typography variant="h2" sx={{ fontWeight: 800, color: '#1a237e' }}>
              TECH-CORE <br />
              <span style={{ color: '#3f51b5' }}>Sound Redefined.</span>
            </Typography>
            
            <Typography variant="h6" color="textSecondary" sx={{ my: 4 }}>
              Experience studio-quality audio with Core-X. 
              Designed for comfort, engineered for precision.
            </Typography>

            <Box sx={{ display: 'flex', gap: 2, justifyContent: { xs: 'center', lg: 'flex-start' } }}>
              {/* 3. Update the Shop Now button here */}
              <Button 
                variant="contained" 
                size="large" 
                onClick={() => navigate('/shop')} 
                sx={{ borderRadius: 2, px: 4, py: 1.5, textTransform: 'none' }}
              >
                Shop Now
              </Button>

              <Button 
                variant="outlined" 
                size="large" 
                onClick={() => navigate('/get-started')}
                sx={{ borderRadius: 2, px: 4, py: 1.5, textTransform: 'none' }}
              >
                Learn More
              </Button>
            </Box>
          </Col>

          <Col lg={6} className="text-center">
            <img 
              src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=800&q=80" 
              alt="Headphones" 
              className="img-fluid rounded shadow-lg" 
              style={{ maxWidth: '90%', borderRadius: '20px' }}
            />
          </Col>
        </Row>
      </Container>
    </Box>
  );
};

export default HeroSection;