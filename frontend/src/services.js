import axios from 'axios';

// create new bin
// const URL = "https://alessio-novi.cloud/api/bins"; // make sure to update this with your domain! CANNOT USE LOCALHOST HERE!
const URL = 'http://localhost:3000/api/bins';

async function createBin() {
  const result = await axios.post(URL);
  return result.data[0].bin_path; // returns just the bin path as a string
}

async function getRequestList(binPath) {
  const result = await axios.get(`${URL}/${binPath}/requests`);
  return result.data;
}

async function getRequest(requestId) {
  const result = await axios.get(`${URL}/requests/${requestId}`);
  console.log(result.data);
  return result.data;
}

async function deleteBin(bin_path) {
  const result = await axios.delete(`${URL}/${bin_path}`);
  console.log(result.data);
}

function removeBinFromPath(path) {
  const relevantPathArray = path.split('/');
  const relevantPath = '/' + relevantPathArray.slice(2).join('/');

  return relevantPath;
}

export default {
  createBin,
  getRequestList,
  getRequest,
  removeBinFromPath,
  deleteBin,
};
