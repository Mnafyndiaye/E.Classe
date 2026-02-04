const sequelize = require('sequelize');

const db = new sequelize.Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASS, {
    host: process.env.DB_HOST,
    dialect: 'mysql', 
});

sequelize.authenticate()
    .then(() => {
        console.log('Connection à la base de données réussie.');   
    })
    .catch(err => {
        console.error('Impossible de se connecter à la base de données :', err);
    });
module.exports = db;
