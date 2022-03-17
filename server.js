const express = require('express');
const app = express();
const port = 3000;
const apiController = require('./server/controller.js');

const mongoose = require('mongoose');
const mongoURI = 'mongodb+srv://codesmith:codesmith@adamdb.suxqk.mongodb.net/Quotes';
mongoose.connect(mongoURI)
  .then (() => console.log('connected'))
  .catch ((err) => console.log(err));

//convert all requests from JSON.
app.use(express.json());

app.get('/api', apiController.getQuote, (req, res) => {
  //console.log('this is my res ', res.locals.quote)
  res.status(200).send(res.locals.quote)
});

app.post('/api/favorite', apiController.favoriteQuote2, (req, res) => {
  res.status(200).json(res.locals)
})

//catch all route handler -

app.get('/', (req, res) => {
  res.status(404).send('page not found');
})

app.listen(port, () => {
  console.log(`I am listening on port ${port}`)
});

module.exports = app;