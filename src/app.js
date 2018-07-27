const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

// import routes from './controllers/api/v1/index';

const app = express();
const { PORT } = process.env;

app.use(bodyParser.json())
  .use(bodyParser.urlencoded({
    extended: true
  }))
  .use(express.static(path.join(__dirname, '..', 'public')))
  .use((req, res) => {
    res.sendFile(path.join(__dirname, '..', 'public', 'index.html'));
  })
  .use((err, req, res) => {
    res.status(err.status || 500);
    res.send({
      message: err.message,
      error: {}
    });
  })
  .set('port', PORT || 8080);

module.exports = app;
// .use('/api/v1/', routes)
