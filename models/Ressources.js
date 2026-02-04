const {Datatypes} = require('sequelize');
const sequlize = require('../config/database');

const Ressources = sequlize.define('Ressources', {
    id: {
        type: Datatypes.INTEGER,        
        primaryKey: true,
        autoIncrement: true
    },  
    title: {
        type: Datatypes.STRING,
        allowNull: false
    },
    description: {
        type: Datatypes.TEXT,
        allowNull: false
    },  
    categorie: {
        type: Datatypes.STRING,
        allowNull: false
    }, lien : {
        type: Datatypes.STRING,
        allowNull: false    
    },
},
    {
        timestamps: false
});
module.exports = Ressources;