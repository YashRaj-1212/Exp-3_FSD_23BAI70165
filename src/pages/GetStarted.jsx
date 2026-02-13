import { Container, Typography, Box, Button, TextField, Paper, Grid } from '@mui/material';
import { CloudUpload } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';

const GetStarted = () => {
  const navigate = useNavigate();

  return (
    <Container maxWidth="sm" sx={{ py: 8 }}>
      <Paper elevation={6} sx={{ p: 4, borderRadius: 4, textAlign: 'center' }}>
        <Typography variant="h4" fontWeight="bold" gutterBottom sx={{ color: '#1a237e' }}>
          Project Submission
        </Typography>
        <Typography variant="body1" color="textSecondary" sx={{ mb: 4 }}>
          Please provide your details and upload your project files.
        </Typography>

        <Grid container spacing={3}>
          {/* User Details */}
          <Grid item xs={12}>
            <TextField fullWidth label="Full Name" variant="outlined" placeholder="e.g. Yashraj" />
          </Grid>
          <Grid item xs={12}>
            <TextField fullWidth label="UID" variant="outlined" placeholder="e.g. 23BAI70165" />
          </Grid>

          {/* Interactive Upload Area */}
          <Grid item xs={12}>
            <Box 
              sx={{ 
                border: '2px dashed #3f51b5', 
                borderRadius: 3, 
                p: 4, 
                bgcolor: '#f0f2ff',
                cursor: 'pointer',
                transition: '0.3s',
                '&:hover': { bgcolor: '#e0e4ff' }
              }}
              component="label"
            >
              <input type="file" hidden />
              <CloudUpload sx={{ fontSize: 48, color: '#3f51b5', mb: 1 }} />
              <Typography variant="h6" color="primary">Click to Upload File</Typography>
              <Typography variant="caption" color="textSecondary">
                PDF, ZIP, or Images (Max 10MB)
              </Typography>
            </Box>
          </Grid>

          {/* Action Buttons */}
          <Grid item xs={12}>
            <Button 
              fullWidth 
              variant="contained" 
              size="large" 
              sx={{ py: 1.5, mb: 2, borderRadius: 2 }}
              onClick={() => alert('Project Submitted Successfully!')}
            >
              Submit Project
            </Button>
            <Button 
              fullWidth 
              variant="text" 
              onClick={() => navigate('/')}
            >
              Back to Home
            </Button>
          </Grid>
        </Grid>
      </Paper>
    </Container>
  );
};

export default GetStarted;