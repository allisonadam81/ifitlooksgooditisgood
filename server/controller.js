const { json } = require('express');
const fetch = require('isomorphic-fetch');
const Quote = require('../db/quoteModel.js');

const fakeDB = {};

const apiController = {};

apiController.getQuote = (req, res, next) => {
  fetch('https://type.fit/api/quotes')
  .then(response => response.json())
  .then(response => {
    res.locals.quote = response;
    return next();
  })
  .catch(err => {
    console.error(err);
  });
}

// apiController.favoriteQuote = (req, res, next) => {
//   fakeDB[req.body.author] = req.body.text;
//   res.locals.message = 'success!';
//   return next();
// }

apiController.favoriteQuote2 = (req, res, next) => {
  const { text, author } = req.body;
  //console.log(req.body);
  Quote.create({ text, author }, (err, quote) => {
    console.log(quote);
    res.locals.message = quote;
    return next()
  })
}

apiController.getFavorite = (req, res, next) => {
  console.log(req.body);
  return next();
}

//fetch('https://foaas.com/cup/adam',
//   { method: "GET",
//     headers: {
//       Accept: 'application/json'
//     },
//   })
//   .then(response => response.json())
//   .then(response => {
//     res.locals.quote = response;
//     console.log(res.locals.quote);
//     return next();
//   })
//   .catch(err => {
//     console.error(err);
//   });

module.exports = apiController;