const express = require('express');
const path = require('path');

const PizzasRouter = require('./routers/PizzasRouter');

const app = express();

app.set('view engine','ejs');

app.use(express.static(path.join(__dirname, 'public')));

app.use('/', PizzasRouter);

app.listen(3000)