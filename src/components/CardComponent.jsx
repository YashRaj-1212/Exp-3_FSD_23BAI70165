import { Card, CardContent, Typography, Grid } from '@mui/material';
import { Headset, BatteryFull, Bluetooth } from '@mui/icons-material';

const features = [
  { title: "Studio Sound", desc: "High-fidelity audio output.", icon: <Headset color="primary" fontSize="large"/> },
  { title: "40h Battery", desc: "Lasts all week on one charge.", icon: <BatteryFull color="primary" fontSize="large"/> },
  { title: "Smart Sync", desc: "Instant Bluetooth pairing.", icon: <Bluetooth color="primary" fontSize="large"/> }
];

const CardComponent = () => (
  <Grid container spacing={4}>
    {features.map((f, i) => (
      <Grid item xs={12} md={4} key={i}>
        <Card sx={{ textAlign: 'center', p: 3, borderRadius: 4, height: '100%' }} elevation={3}>
          {f.icon}
          <CardContent>
            <Typography variant="h6" fontWeight="bold">{f.title}</Typography>
            <Typography variant="body2" color="textSecondary">{f.desc}</Typography>
          </CardContent>
        </Card>
      </Grid>
    ))}
  </Grid>
);
export default CardComponent;