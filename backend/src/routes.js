const express = require('express');

//criacao de rotas
const OngController = require('./controllers/OngController');
const IncidentController = require('./controllers/IncidentController');
const ProfileController = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionController');


const routes = express.Router();


routes.post('/sessions',SessionController.create);

routes.get('/ongs',OngController.index);
routes.post('/ongs', OngController.create);

routes.get('/profile', ProfileController.index);

routes.get('/incidents', IncidentController.index);
routes.post('/incidents', IncidentController.create);
routes.delete('incidents/:id',IncidentController.delete);

//exportar as rotas para o index
module.exports = routes;

