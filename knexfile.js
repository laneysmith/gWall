require('dotenv').load();

module.exports = {

  development: {
    client: 'pg',
    connection: 'postgresql://localhost/gWall'
  },
  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL + '?ssl=true'
  }

};
