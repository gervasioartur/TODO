const { sequilize, Sequelize } = require('sequelize')

const sequelize = new Sequelize('nodesmvc', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'

})

try {
    sequelize.authenticate()
    console.log('Conectado com sucesso no banco!')

} catch (err) {
    console.log('Não foi possível conectar ao banco ' + err)
}

module.exports = sequelize