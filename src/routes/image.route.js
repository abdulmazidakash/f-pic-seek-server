const express = require('express');
const { insertAiImage } = require('../controllers/image.controller');
const imageRouter = express.Router();

//create a new image
imageRouter.post('/create', insertAiImage);

module.exports = imageRouter;