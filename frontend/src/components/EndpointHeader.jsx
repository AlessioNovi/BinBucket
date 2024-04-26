import { Button, Paper, Tooltip, Typography } from '@mui/material';
import helpers from '../services';
import { useNavigate } from 'react-router-dom';

const EndpointHeader = ({ binPath }) => {
  const endpoint = `${import.meta.env.VITE_BACKEND_SERVICE}/api/endpoints/${binPath}`;
  const navigate = useNavigate();
  const copyHandler = () => {
    navigator.clipboard.writeText(endpoint);
  };

  const deleteBinHandler = async () => {
    await helpers.deleteBin(binPath);
    navigate('/');
  };

  return (
    <Paper
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 1,
      }}
    >
      <Paper
        elevation={2}
        sx={{
          border: '1px solid gray',
          borderRadius: 1,
          marginRight: 1,
          marginTop: 1,
          marginBottom: 1,
          bgcolor: 'background.paper',
        }}
      >
        <Typography sx={{ padding: 1 }}>Endpoint {endpoint}</Typography>
      </Paper>
      <Tooltip title="Copy to clipboard">
        <Button size="small" variant="contained" onClick={copyHandler}>
          Copy
        </Button>
      </Tooltip>
      <Button sx={{ marginLeft: 1 }} size="small" variant="contained" onClick={deleteBinHandler}>
        Delete Endpoint
      </Button>
    </Paper>
  );
};

export default EndpointHeader;
