const express = require('express');
const app = express();
const port = 3000;
const apiController = require('./server/controller.js');

//convert all requests from JSON.
app.use(express.json());

app.get('/api', apiController.getQuote, (req, res) => {
  //console.log('this is my res ', res.locals.quote)
  res.status(200).send(res.locals.quote)
});

//catch all route handler -

app.get('/', (req, res) => {
  res.status(404).send('page not found');
})

app.listen(port, () => {
  console.log(`I am listening on port ${port}`)
});