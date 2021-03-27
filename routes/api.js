const express = require ('express');
const router = express.Router();
// importa controlador 'apiController.js' da pasta: 
// ‘../controllers/apiController’
const apiController = require('../controllers/apiController');

// url do teste será: http://localhost:5000/api/teste
router.get('/teste', apiController.test);
// TODO: listar pontos de interesse da BD
router.get('/details',apiController.details);
// TODO: adicionar novo ponto de interesse
router.post('/turma',apiController.add);
// TODO: atualizar ponto de interesse
router.put('/turma/:id',apiController.update);
// TODO: apagar ponto de interesse
router.delete('/turma/:id',apiController.delete);
// listar todos os pontos de interesse da BD
router.get('/listall',apiController.listAllTurmas);
module.exports = router;



