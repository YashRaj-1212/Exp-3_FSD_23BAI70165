import { Container } from 'react-bootstrap';
import { Typography, Box } from '@mui/material';
import Navigation from '../components/Navbar';
import CardComponent from '../components/CardComponent';

const Shop = () => {
  return (
    <>
      <Navigation />
      <Container sx={{ py: 5 }}>
        <Box textAlign="center" mb={5}>
          <Typography variant="h3" fontWeight="bold">Our Collection</Typography>
          <Typography color="textSecondary">Select the best gear for your studio</Typography>
        </Box>
        <CardComponent /> 
      </Container>
    </>
  );
};

export default Shop; // 👈 MAKE SURE THIS LINE IS HERE!