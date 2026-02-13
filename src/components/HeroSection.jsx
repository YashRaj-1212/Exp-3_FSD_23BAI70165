import { Container, Row, Col } from 'react-bootstrap';
import { Button, Typography, Box } from '@mui/material';

const HeroSection = () => {
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
          {/* Text Content */}
          <Col lg={6} className="text-center text-lg-start mb-5 mb-lg-0">
            <Typography 
              variant="h2" 
              sx={{ 
                fontWeight: 800, 
                color: '#1a237e',
                fontSize: { xs: '2.5rem', md: '3.5rem' },
                lineHeight: 1.2
              }}
            >
              TECH-CORE <br />
              <span style={{ color: '#3f51b5' }}>Sound Redefined.</span>
            </Typography>
            <Typography 
              variant="h6" 
              color="textSecondary" 
              sx={{ my: 4, fontWeight: 400, maxWidth: '500px', mx: { xs: 'auto', lg: 0 } }}
            >
              Experience studio-quality audio with the new Core-X Wireless Headphones. 
              Designed for comfort, engineered for precision.
            </Typography>
            <Box sx={{ display: 'flex', gap: 2, justifyContent: { xs: 'center', lg: 'flex-start' } }}>
              <Button 
                variant="contained" 
                size="large" 
                sx={{ borderRadius: 2, px: 4, py: 1.5, textTransform: 'none', fontSize: '1.1rem' }}
              >
                Shop Now
              </Button>
              <Button 
                variant="outlined" 
                size="large" 
                sx={{ borderRadius: 2, px: 4, py: 1.5, textTransform: 'none', fontSize: '1.1rem' }}
              >
                Learn More
              </Button>
            </Box>
          </Col>

          {/* Professional Image */}
          <Col lg={6} className="text-center">
            <img 
              src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=800&q=80" 
              alt="Core-X Headphones" 
              className="img-fluid rounded shadow-lg" 
              style={{ 
                maxWidth: '90%', 
                height: 'auto', 
                borderRadius: '20px',
                transition: 'transform 0.3s ease-in-out'
              }}
              onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.03)'}
              onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
            />
          </Col>
        </Row>
      </Container>
    </Box>
  );
};

export default HeroSection;