const {Datatypes} = require('sequelize');
const sequlize = require('../config/database');

const Users = sequlize.define('Users', {
    id: {
        type: Datatypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },  
    nom: {
        type: Datatypes.STRING,
        allowNull: false
    },
    email: {
        type: Datatypes.STRING,     
        allowNull: false,
        unique: true
    },
    password: {
        type: Datatypes.STRING,
        allowNull: false
    },
    role:{
        type: Datatypes.ENUM('apprenant','admin'),
        allowNull: false,
        defaultValue: 'apprenant'
    }
});
module.exports = Users;