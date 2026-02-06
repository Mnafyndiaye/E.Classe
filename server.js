import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

import sync  from './config/db.js';
import Users from './app/models/Users.js';
import Ressources from './app/models/Ressources.js';
import db from './config/db.js';

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const startServer = async () => {
    try {
        await db.sync();
        console.log('Synchronisation avec la base de données réussie.');

        app.listen(port, () => {
            console.log(`Serveur démarré sur le port ${port}`);
        }
        );
    } catch (error) {
        console.error('Erreur lors de la synchronisation avec la base de données :', error);
    }
};

startServer();  