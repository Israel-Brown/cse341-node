const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const contactRoutes = require('./src/routes/contacts');
const setupSwagger = require('./swagger');

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use('./routes/contacts', contactRoutes);

setupSwagger(app);

module.exports = app;

