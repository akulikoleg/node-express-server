// eslint-disable-next-line no-undef
//const express = require('express');
import express from 'express';
import { home } from './modules/home/home';
import  errorHandler  from './modules/core/errorHandler';
import info  from './modules/info/info';
import logger from './modules/core/logger';
import bParser from './modules/core/bodyParser';
import cors from './modules/core/cors';
import routes from './modules/core/routes';
import dbConnect from './modules/core/db';

const app = express();
const PORT = 5000;

dbConnect().then(r => console.log(r));
logger(app);
bParser(app);// used for parse JSON from request body  sent in postman
cors(app);
routes(app);
// app.get('/', home);
// app.post('/info', info);

errorHandler(app);

app.listen(PORT, () => {
  console.log(`Example app listening at localhost:${PORT}`);
});
