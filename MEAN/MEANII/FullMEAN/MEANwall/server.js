const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const path = require('path');
const port = process.env.PORT || 8000;
const cookieParser = require('cookie-parser');
const session = require('express-session');
const sessionConfig = {
  secret: 'cookieMonster',
  resave: false,
  saveUninitialized: true,
  name: 'ninjasCookie',
  cookie: {
    secure: false,
    httpOnly: false,
    maxAge: 3600000,
  }
};

app.use(session(sessionConfig));
app.use(cookieParser('MEANwall'));
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static(path.resolve('client')));
app.use(express.static(path.resolve('bower_components')));
app.use(bodyParser.json());
require('./server/config/mongoose');


require(path.resolve('server','config', 'mongoose'));
require(path.resolve('server','config', 'routes'))(app);

app.listen (port, ()=>{
   console.log(`listening to port on ${port}`);
})
