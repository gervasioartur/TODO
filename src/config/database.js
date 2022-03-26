require('dotenv/config')
const host = process.env.HOST
const database = process.env.DATABASE
const user = process.env.DB_USER
const password = process.env.DB_PASSWORD

module.exports = {
    host: host,
    username: user,
    password: password,
    database: database,
    dialect: 'postgres',
    operationAlias: false,
    logging: false,
    define: {
        timestamps: true,
        underscored: false,
    },
    dialectOptions: {
        ssl: {
            require: true, // This will help you. But you will see nwe error
            rejectUnauthorized: false, // This line will fix new error
        },
    },
}

