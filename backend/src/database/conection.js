const knex = require('knex');
//.. volta pasta
const configuration = require('../../knexfile');

const connection = knex(configuration.development);

module.exports = connection;