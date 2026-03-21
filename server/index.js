require('dotenv').config()
const mongoose = require('mongoose')

mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log('MongoDB conectado'))
  .catch(err => console.log(err))


const express = require('express')

const app = express();
const port = 3000; 

app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});
