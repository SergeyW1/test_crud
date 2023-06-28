const {Sequelize} = require('sequelize');

const connection = new Sequelize('node_js', 'postgres', 'root', {
    host: 'localhost',
    dialect: 'postgres'
})
connection.sync({force: false}).then(() => console.log('db success!'))

module.exports = connection