const express = require('express');
const app = express();
const port = 3000;

//convert all requests from JSON.
app.use(express.json());

app.get('/', (req, res) => {
  res.status(200)//.json(res.locals);
});

app.get('/signup', (req, res) => {
  res.status(200)//.json(res.locals);
})

app.post();

//catch all route handler -

app.get('/', (req, res) => {
  res.status(404).send('page not found');
})

app.listen(port, () => {
  console.log('I am listening on port ${port}')
});