const express = require('express');
const DataController = require('./controllers/DataController');

const routes = express.Router();

routes.get('/camp/:cat', DataController.index);
routes.post('/camp', DataController.store);

routes.get('/', (req,res) => {
    return res.json({message: 'api is runnning'});
});

module.exports = routes;