const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const contactRoutes = require('./routes/contacts');
const setupSwagger = require('./swagger');

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use('/contacts', contactRoutes);

setupSwagger(app);

module.exports = app;
