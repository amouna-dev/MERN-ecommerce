const express = require('express');
const Router = express.Router();
const filterCtrl = require('../controllers/filterCtrl')

Router.get('/', filterCtrl.getNewArrivals);

Router.post('/search', filterCtrl.searchByQueryType);


module.exports = Router;
