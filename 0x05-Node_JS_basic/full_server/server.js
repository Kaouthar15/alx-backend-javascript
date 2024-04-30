const express = require('express');
const process = require('process');
const routes = require('./routes');

const app = express();
const port = 1245;

const dbFile = process.argv[2];

app.use(['/students', '/students/:major'], (req, res, next) => {
  req.dbFile = dbFile;
  next();
});

app.use('/', routes);

app.listen(port);

export default app;
