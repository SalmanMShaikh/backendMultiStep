const dotenv = require("dotenv");
dotenv.config();

const config = {
    port: process.env.PORT,
    databaseUrl: process.env.DATABASE_URL,
    secret: process.env.SECRET_KEY
}

module.exports = config
