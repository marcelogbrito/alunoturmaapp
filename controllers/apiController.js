// importar modelo
const Turma = require('../models/turma');

// exporta function 'test', chamada em '/routes/api.js'
exports.test = function (req, res) {
    // res.send(‘Olá! Teste ao Controller’);
    res.render('Turma');
  };


  // TODO: listar pontos de interesse da BD
// procura todos os doc. na BD, guarda em ‘pi’ 
// depois devolve ‘pi’ ao cliente
exports.details = function (req, res) {
    Turma.find({}).then(function(turma){
    res.send(turma);
    });
 };
  // TODO: adicionar novo ponto de interesse
  exports.add = function (req, res) {
    res.send({type: 'POST'});
  };
// listar um ponto de interesse por id (para editar)
exports.edit = function (req, res, next) {
    Turma.findOne({_id: req.params.id}).then(function(turma){
      res.render('editTurma', {turma: turma});
    }).catch(next);
  };
  // atualiza 'pi' da BD com os valores do formulário
  exports.update = function (req, res, next) {
   Turma.findByIdAndUpdate({_id: req.params.id},
        req.body).then(function(){
      res.redirect('/api/listall');
  }).catch(next);
  };
  // ‘_id:’->nome da propriedade na BD, 
// ‘req.params.id’->devolve-me o parametro id na req
exports.delete = function (req, res, next) {
    // 'req.params.id'->devolve-me o parametro id na req
    Turma.findOneAndDelete({_id: req.params.id}).then(function(pi){
      console.log("Registo eliminado com sucesso!");
      res.redirect('/api/listall');
    }).catch(next);
  };

  // adicionar novo ponto de interesse
  exports.create = function (req, res, next) {
      // inicializar variaveis com os valores do 'req.body'
  let nm = req.body.nome;
  let cr = req.body.curso;
  let data = {
    nome: nm,
    curso: cr,
  };
   Turma.create(data).then(function(turma){
    res.redirect('/api/listall');
    }).catch(next);
  };

  // listar todos os pontos de interesse da BD
exports.listAllTurmas = function (req, res, next) {
   Turma.find({}).then(function(turma){
      res.render('listTurmas', {turmas: turma});
    }).catch(next);
  };