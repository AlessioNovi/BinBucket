import { Box } from '@mui/material';
import HeadersAndQuery from './HeadersAndQuery';
import SharedDetails from './SharedDetails';
import RequestDetailsBody from './RequestDetailsBody';

const RequestDetails = ({ request }) => {
  console.log(Object.entries(request.payload));

  /*

Shared details component(Method Path Time)
Header component
QueryParams component (if exists)
Body component (if exists)

*/

  return (
    <Box>
      <SharedDetails request={request} />
      <HeadersAndQuery type={'Headers'} obj={request.payload.headers} />
      {request.payload.query && <HeadersAndQuery type={'Query Parameters'} obj={request.payload.query} />}
      {request.payload.body && <RequestDetailsBody obj={request.payload.body} />}
    </Box>
  );
};

export default RequestDetails;
