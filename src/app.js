const express = require('express');
const app = express();
const cors = require('cors');

require('dotenv-safe').config();

const db = require('./database/mongoConfig');
const cubeRoutes = require('./routes/cuboRoutes');

db.connect() ;

app.use(cors());
app.use(express.json());
app.use("/cubein", cubeRoutes);

module.exports = app;