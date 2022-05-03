const maria = require('mysql');

const connection = maria.createConnection({
    host:'localhost',
    port: 3306,
    user:'root',
    password: '1234',
    database: 'test'
})

module.exports = connection;