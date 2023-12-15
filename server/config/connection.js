require('dotenv').config(); // Load environment variables from .env file

const mongoose = require('mongoose');

mongoose.connect(
  process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/chati-boti'
);

module.exports = mongoose.connection;