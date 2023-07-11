const mongoose = require('mongoose');
mongoose.connect(process.env.DB_URL);
const database = mongoose.connection;

database.on('error', (error) => {
  console.error(error);
});

database.once('connected', () => {
  console.log('Database connected.');
})
