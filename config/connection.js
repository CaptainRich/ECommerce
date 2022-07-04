
// Load the environment variables setup with the DOTENV package
require('dotenv').config();

// Import the Sequelize constructor from the library
const Sequelize = require('sequelize');

// If the on-line URL exists, use it.  Otherwise, pull the data locally from the "env" file.
const sequelize = process.env.JAWSDB_URL
  ? new Sequelize(process.env.JAWSDB_URL)
  : new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PW, {
      host: 'localhost',
      dialect: 'mysql',
      dialectOptions: {
        decimalNumbers: true,
      },
    });

////////////////////////////////////////////////////////////////////////////////////////////////////////
// Export the connection to the database.
module.exports = sequelize;
