import RequestLine from './RequestLine';
import { List, Paper, Typography } from '@mui/material';

const RequestList = ({ requests, setSelectedRequest }) => {
  return (
    <Paper sx={{ bgcolor: 'background.paper', padding: 2 }}>
      <Typography variant="h4" sx={{ paddingLeft: 2 }}>
        REQUESTS
      </Typography>
      <List>
        {requests.map((req) => {
          return <RequestLine key={req.id} request={req} setSelectedRequest={setSelectedRequest} />;
        })}
      </List>
    </Paper>
  );
};

export default RequestList;
