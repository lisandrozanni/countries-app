const express = require('express');
const countriesRoutes = require('./routes/countriesRoutes');
const dotenv = require('dotenv');
const cors = require('cors');

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

app.use('/', countriesRoutes);

app.listen(process.env.APP_PORT, () => {
  console.log(`Server is running on port ${process.env.APP_PORT}`);
});

module.exports = app;
