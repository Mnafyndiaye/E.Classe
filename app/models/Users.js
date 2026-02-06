import { DataTypes } from 'sequelize';
import  db  from '../../config/db.js';
import {roles} from '../controllers/roles.js'

const Users = db.define('Users', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },  
    nom: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,     
        allowNull: false,
        unique: true
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    },
    role:{
        type: DataTypes.ENUM(...roles),
        allowNull: false,
        defaultValue: 'apprenant'
    }
},
);
export default Users;