const mongoose = require("mongoose");
const Schema = mongoose.Schema;
// PI Schema
const TurmaSchema = new Schema({
  nome: {
    type: String,
    required: [true, "*Campo obrigatório!"],
  },
  curso: {
    type: String,
    required: [true, "*Campo obrigatório!"],
  },
  dataInicio: {
    type: Date,
  },
  alunos: [
    {
      nome: String,
      dataMatricula: Date,
    },
  ],
  // TODO: geo location
});
// criar Modelo_PI baseado em PISchema: ‘PontosInteresse’->nome da // coleção
const Turma = mongoose.model("Turmas", TurmaSchema);
// exportar Modelo_PI
module.exports = Turma;
