const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 3000;

const db = require('./config/db');
const Users = require('./models/Users');
const Ressources = require('./models/Ressources');

const bodyParser = require('body-parser');

app.use(cors());
app.use(bodyParser.json());

db.sync()
    .then(() => {
        console.log('Les tables ont été synchronisées avec la base de données.');
    })
    .catch(err => {
        console.error('Erreur lors de la synchronisation des tables :', err);
    });

app.listen(port, () => {
    console.log(`Le server écoute sur le port ${port}`);
});
