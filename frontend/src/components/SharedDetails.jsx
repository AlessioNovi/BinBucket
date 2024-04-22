import { Typography, Box, Paper } from '@mui/material';
import helpers from '../services';

const SharedDetails = ({ request }) => {
  return (
    <Paper sx={{ bgcolor: 'background.paper', marginBottom: 1, minHeight: '48px' }}>
      <Typography
        sx={{ paddingLeft: 2, paddingTop: '12px', paddingBottom: '12px', wordWrap: 'break-word' }}
        component="div"
      >
        <Box fontWeight="bold" display="inline">
          HTTP Request:
        </Box>{' '}
        {request.payload.method} {helpers.removeBinFromPath(request.payload.path)} {request.date.toJSON()}
      </Typography>
    </Paper>
  );
};

export default SharedDetails;
