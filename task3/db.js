const { Pool } = require('pg');
const pool = new Pool({
  user: 'myuser',           
  host: 'localhost',        
  database: 'mydb',         
  password: 'mypassword',   
  port: 5432,               
});

pool.connect((err, client, release) => {
  if (err) {
    return console.error('Error acquiring client', err.stack);
  }
  console.log('PostgreSQL connected successfully!');
  release();
});

module.exports = pool;

