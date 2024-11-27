const dotenv = require('dotenv');

dotenv.config();//se existe um .env 

const {
    PORT,
    pgConnection
} = process.env;

module.exports = {
    port: PORT,
    urlConnection: pgConnection
} 
