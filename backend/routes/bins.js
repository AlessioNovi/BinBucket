const express = require('express');

const router = express.Router();
const { v4: uuidv4 } = require('uuid');
const postgres = require('../db/postgres_utils');
const mongoDb = require('../db/mongo_utils');

// GET all requests for bin
router.get('/:bin_path/requests', async (req, res, next) => {
  // let frontend handle when bin_path/uuid does not exist (rn, does not make the distincti)
  const binPath = req.params.bin_path;
  try {
    const result = await postgres.getAllRequestsInBin(binPath);
    res.json(result);
  } catch (error) {
    next(error);
  }
});

// GET a single requests details from MongoDB
router.get('/requests/:request_id', async (req, res, next) => {
  const requestId = req.params.request_id;
  let request;
  try {
    request = await postgres.getRequest(requestId);
  } catch (error) {
    return next(error);
  }

  const mongoId = request.mongo_id;
  const result = await mongoDb.getRequest(mongoId);
  res.json(result);
});

// CREATE a new bin
router.post('/', async (req, res, next) => {
  const binPath = uuidv4();
  try {
    const result = await postgres.createBin(binPath);
    res.json(result);
  } catch (error) {
    next(error);
  }
});

// DELETE a bin
router.delete('/:bin_path', async (req, res, next) => {
  // delete a bin.
  // so must delete all the requests associated with the bin
  const binPath = req.params.bin_path;
  let allRequests;
  try {
    allRequests = await postgres.getAllRequestsInBin(binPath);
  } catch (error) {
    return next(error);
  }

  const promises = [];

  for (let i = 0; i < allRequests.length; i += 1) {
    const mongoId = allRequests[i].mongo_id;
    promises.push(mongoDb.deleteRequest(mongoId));
  }

  promises.push(postgres.deleteBin(binPath));
  await Promise.all(promises);
  return res.json({ success: 'ok' });
});

module.exports = router;
