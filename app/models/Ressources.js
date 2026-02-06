import { DataTypes } from 'sequelize';
import db  from '../../config/db.js';

const Ressources = db.define('Ressources', {
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
export default Ressources;