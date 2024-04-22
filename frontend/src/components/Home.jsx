import { useNavigate } from 'react-router-dom';
import helpers from '../services';
import { Button, Container, Typography, Stack, Box } from '@mui/material';

const Home = () => {
  const navigate = useNavigate();

  const newBinHandler = async () => {
    const binPath = await helpers.createBin();
    navigate(`/display/${binPath}`);
  };

  return (
    <Stack
      direction="row"
      textAlign="center"
      justifyContent="center"
      alignItems="center"
      sx={{ width: 1, height: '100vh' }}
    >
      <Container maxWidth="sm">
        <Typography variant="h1">Bin Bucket</Typography>
        <Box sx={{ marginTop: 2, textAlign: 'center' }}>
          <Button variant="contained" onClick={newBinHandler}>
            Create a Bin
          </Button>
        </Box>
      </Container>
    </Stack>
  );
};
export default Home;
