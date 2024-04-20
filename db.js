const Pool = require('pg').Pool;

const Pool = new Pool({
    user: "postgres",
    host: "localhost",
    database: "project2",
    password: "admin",
    port: 5432,
});

module.exports = pool;