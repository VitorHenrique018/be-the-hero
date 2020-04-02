//importando do express
const express = require('express');
const cors = require('cors');
const routes =  require('./routes');

//variavel que armazena a aplicacao
const app = express();

app.use(cors());
//dizer qu sera usado json
app.use(express.json());
app.use(routes);


/**
 * Metodos HTTP:
 * 
 * Get: Buscar/Listar informacao do Backend
 * POST: Criar uma informacao no Backend
 * Put: Alterar uma informacao no Backend
 * Delete: Deletar uma informacao no Backend
 */


 /**
  * Tipos de parametro
  * Query: Parametros nomeados na rota apos ? (filtros e paginacao)
  ex: /users?name=vitor
  * ROute Params: Parametros utilziados para identificar recursos
  * Request Body: corpo da requisicao, utilizado para criar ou alterar recursos
  *
  *
  */


  /**
   * SQL: MySQL, SQLite, Postgree, MicrosoftSQL server
   * NoSQL: MongoDB, CouchDB, etc.
   * 
   * 
   * Instalando o Banco de dados: 
   * Driver: Select * FROM users;
   * Query Builder: table('users).select('*').where()   //utilizando js
   */


console.log('Aplicação rodando na porta: 3333');
//a aplicacao vai rodar na porta 3333
app.listen(3333);