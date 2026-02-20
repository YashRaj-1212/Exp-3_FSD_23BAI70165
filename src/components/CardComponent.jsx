import { Card, CardContent, CardMedia, Typography, Grid, Button } from '@mui/material';
import { useAppContext } from '../context/AppContext';

const features = [
  { 
    id: 1, 
    title: "Studio Sound Headphones", 
    desc: "Experience high-fidelity audio with premium comfort.", 
    price: 299,
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&q=80"
  },
  { 
    id: 2, 
    title: "Wireless Pro Earbuds", 
    desc: "40 hours of playback with active noise cancellation.", 
    price: 150,
    image: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=500&q=80"
  },
  { 
    id: 3, 
    title: "Smart Bluetooth Speaker", 
    desc: "Deep bass and instant pairing for any room.", 
    price: 80,
    image: "https://images.unsplash.com/photo-1608156639585-b3a032ef9689?w=500&q=80"
  }
];

const CardComponent = () => {
  const { dispatch } = useAppContext();

  return (
    <Grid container spacing={4}>
      {features.map((feature) => (
        <Grid item xs={12} md={4} key={feature.id}>
          <Card 
            sx={{ 
              height: '100%', 
              display: 'flex', 
              flexDirection: 'column',
              borderRadius: 4, 
              transition: '0.3s',
              '&:hover': { transform: 'translateY(-5px)', boxShadow: 6 } 
            }} 
            elevation={3}
          >
            <CardMedia
              component="img"
              height="200"
              image={feature.image}
              alt={feature.title}
              sx={{ objectFit: 'cover' }}
            />
            <CardContent sx={{ flexGrow: 1, textAlign: 'center' }}>
              <Typography variant="h6" fontWeight="bold" gutterBottom>
                {feature.title}
              </Typography>
              <Typography variant="body2" color="textSecondary" sx={{ mb: 2 }}>
                {feature.desc}
              </Typography>
              <Typography variant="h6" color="primary" fontWeight="bold" sx={{ mb: 2 }}>
                ${feature.price}
              </Typography>
              <Button 
                variant="contained" 
                fullWidth
                sx={{ borderRadius: 2, textTransform: 'none', fontWeight: 'bold' }}
                onClick={() => dispatch({ 
                  type: 'ADD_TO_CART', 
                  payload: { id: Date.now() + Math.random(), name: feature.title, price: feature.price } 
                })}
              >
                Add to Cart
              </Button>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default CardComponent;