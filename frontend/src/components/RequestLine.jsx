import helpers from '../services';
import { ListItemButton, ListItemText, Typography } from '@mui/material';

const RequestLine = ({ request, setSelectedRequest }) => {
  const path = helpers.removeBinFromPath(request.http_path);
  const method = request.http_method;
  const time = request.received_at;

  function convertDbTimetoDateObj(databaseTime) {
    databaseTime = databaseTime.slice(0, 10) + 'T' + databaseTime.slice(11, 23) + 'Z';
    return new Date(databaseTime);
  }

  const onClick = async (event) => {
    event.preventDefault();
    const req = await helpers.getRequest(request.id);
    req.date = convertDbTimetoDateObj(time);
    setSelectedRequest(req);
  };

  return (
    <ListItemButton onClick={onClick}>
      <ListItemText>
        <Typography noWrap>
          {convertDbTimetoDateObj(time).toLocaleTimeString()} {method} {path}
        </Typography>
      </ListItemText>
    </ListItemButton>
  );
};

export default RequestLine;
