import EndpointHeader from './EndpointHeader';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import helpers from '../services';
import RequestList from './RequestList';
import RequestDetails from './RequestDetails';
import { socket } from '../socket';
import { Grid } from '@mui/material';
import PlaceHolderText from './PlaceHolderText';

const Bin = () => {
  const { bin_path } = useParams();
  const [requestList, setRequestList] = useState([]);
  const [selectedRequest, setSelectedRequest] = useState(null);

  useEffect(() => {
    const socketIosetRequestList = (request) => {
      setRequestList((previous) => [...previous, request]);
    };

    const requestDetails = async () => {
      const list = await helpers.getRequestList(bin_path);
      setRequestList(list);
    };
    requestDetails();

    socket.emit('binRomm', bin_path);
    socket.on('newRequest', socketIosetRequestList);

    return () => {
      socket.off('newRequest', socketIosetRequestList);
    };
  }, [bin_path]);
  return (
    <Grid padding={2} rowSpacing={1} columnSpacing={3} container>
      <Grid item xs={12}>
        <EndpointHeader binPath={bin_path} />
      </Grid>
      <Grid item xs={3}>
        <RequestList requests={requestList} setSelectedRequest={setSelectedRequest} />
      </Grid>
      <Grid item xs={9}>
        {!selectedRequest && <PlaceHolderText />}
        {selectedRequest && <RequestDetails request={selectedRequest} />}
      </Grid>
    </Grid>
  );
};

export default Bin;
