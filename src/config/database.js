require('dotenv/config')
const host = process.env.host
const database = process.env.database
const user = process.env.db_user
const password = process.env.db_password

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

