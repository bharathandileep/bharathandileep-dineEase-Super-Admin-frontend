


const mongoose = require('mongoose');
require('dotenv').config();  // Load environment variables from .env file

// Connection URL
const url = `${process.env.DB_URL}/${process.env.DB_NAME}`;  // Combine URL and dbName

async function connect() {
  try {
    // Connect to the MongoDB server
    await mongoose.connect(url, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });

    console.log('Connected successfully to MongoDB');
    
    // Return the Mongoose connection object
    return mongoose.connection;
  } catch (err) {
    console.error('Error occurred while connecting to MongoDB:', err);
    throw err;
  }
}

module.exports = connect;
