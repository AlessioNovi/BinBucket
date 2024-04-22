import { Box } from '@mui/material';
import HeadersAndQuery from './HeadersAndQuery';
import SharedDetails from './SharedDetails';

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
      {request.payload.body && (
        <>
          <b>{'Body'}</b>
          <pre>{JSON.stringify(request.payload.body)}</pre>
        </>
      )}
    </Box>
  );
};

export default RequestDetails;
