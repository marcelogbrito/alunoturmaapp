// associar as dependências instaladas
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
// inicializar app express
const app = express();

// Configuração da view engine
app.set('view engine', 'ejs');


//MIDLEWARE
app.use(express.static('public'))
// este middleware deve estar acima das routes-handlers!
app.use(bodyParser.urlencoded({ extended: true }));

  // todo o url começado por ‘/api’ chama as rotas em ‘./routes/api’
  const routes = require('./routes/api');
  app.use('/api', routes);

  // error handling middleware
app.use(function(err, req, res, next){
    console.log(err);
   // ‘res.status(422)’->muda o status
   res.status(422).send({error: err.message});
 });

 //**fim midleware */


 app.get('/', function (req, res) {
    res.render('createTurma');
  });

 let port = 5000;

// servidor á escuta no porto 5000
// 'process.env.port': caso usemos Heroku
app.listen(process.env.port || port, () =>{
  console.log('Servidor em execução no porto: '+ port);
});

mongoose.connect("mongodb+srv://semana:semana@cluster0.wylzd.mongodb.net/curso?retryWrites=true&w=majority");
// Confirma ligação na consola
mongoose.connection.on('connected', function () {
  console.log('Connected to Database test');
});
// Mensagem de Erro
mongoose.connection.on('error', (err) => {
  console.log('Database error '+err);
});

// ‘END POINT INVÁLIDO!’
app.get('/', function(req, res){
    res.send('END POINT INVÁLIDO!');
  });

  
