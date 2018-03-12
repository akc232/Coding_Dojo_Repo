const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const path = require('path')
const port = process.env.PORT || 8000;


// app.use(bodyParser(url.encoded(extended:true)));
app.use(express.static(path.resolve('client')));
app.use(express.static(path.resolve('bower_components')));
app.use(bodyParser.json());

require(path.resolve('config', 'mongoose'));
require(path.resolve('config', 'routes'))(app);

app.listen( port, ()=> console.log(`listening to port on ${port}`));
