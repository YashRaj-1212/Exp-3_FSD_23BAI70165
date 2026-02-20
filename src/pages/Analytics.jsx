import { useMemo } from 'react';
import { useAppContext } from '../context/AppContext';
import { Container, Typography, Paper, Button, Box } from '@mui/material';
import Navigation from '../components/Navbar';

const Analytics = () => {
  const { state, dispatch } = useAppContext();

  // useMemo for performance optimization
  const totalPrice = useMemo(() => {
    return state.cart.reduce((acc, item) => acc + item.price, 0);
  }, [state.cart]);

  return (
    <>
      <Navigation />
      <Container sx={{ py: 5 }}>
        <Typography variant="h4" fontWeight="bold" gutterBottom>Project Analytics</Typography>
        
        <Paper elevation={3} sx={{ p: 4, borderRadius: 3, mb: 4 }}>
          <Typography variant="h6">Items in Cart: {state.cart.length}</Typography>
          <Typography variant="h5" color="primary" fontWeight="bold">Total Value: ${totalPrice}</Typography>
        </Paper>

        {state.cart.length === 0 ? (
          <Typography color="textSecondary">Your cart is empty.</Typography>
        ) : (
          state.cart.map((item) => (
            <Paper key={item.id} sx={{ p: 2, mb: 2, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <Box>
                <Typography fontWeight="bold">{item.name}</Typography>
                <Typography variant="body2" color="textSecondary">${item.price}</Typography>
              </Box>
              <Button color="error" onClick={() => dispatch({ type: 'REMOVE_FROM_CART', payload: item.id })}>
                Remove
              </Button>
            </Paper>
          ))
        )}
      </Container>
    </>
  );
};

export default Analytics;