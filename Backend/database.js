// database.js

const { Sequelize } = require('sequelize');
const password = process.env.REACT_APP_PASSWORD;

// Initialize Sequelize and specify database connection parameters
const sequelize = new Sequelize('Mood','moodadmin', password, {
    host: 'sqlmood.database.windows.net',
    port: 1433,
    dialect: 'mssql',
    dialectOptions: {
        options: {
          trustedConnection: true
        }
     }
});

module.exports = sequelize;




