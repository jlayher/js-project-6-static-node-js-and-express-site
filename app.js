const express = require('express');
const app = express();
const { projects } = "/data.json";
const path = require('path'); 

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(express.static(path.join(__dirname, 'public')));

app.use('/', routes);

app.use('/about', routes);