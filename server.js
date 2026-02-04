const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 3000;

require('./config/db');

const bodyParser = require('body-parser');

app.use(cors());
app.use(bodyParser.json());


app.listen(port, () => {
    console.log(`Le server écoute sur le port ${port}`);
});
