require('dotenv').config();

const express = require('express');
const app = express();
app.use(express.json({ limit: '10mb' }));

require('./database');

const routes = require('./routes/index.js');

app.use('/api', routes);

//TODO => REPLACE WITH ENV VARIABLE
app.listen(process.env.PORT, () => {
  console.log(`Server running at PORT ${process.env.PORT}`);
});