const {DataTypes} = require('sequelize');
const sequelize = require('../config/db');

const Ressources = sequelize.define('Ressources', {
    id: {
        type: DataTypes.INTEGER,        
        primaryKey: true,
        autoIncrement: true
    },  
    title: {
        type: DataTypes.STRING,
        allowNull: false
    },
    description: {
        type: DataTypes.TEXT,
        allowNull: false
    },  
    categorie: {
        type: DataTypes.STRING,
        allowNull: false
    }, lien : {
        type: DataTypes.STRING,
        allowNull: false    
    },
},
    );
module.exports = Ressources;