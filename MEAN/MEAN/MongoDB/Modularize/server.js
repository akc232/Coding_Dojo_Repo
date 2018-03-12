//seting my dependancies
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const mongoose = require('mongoose');
const port = process.env.PORT || 8000;
const app = express();

//connects to mongoosedb
app.use(bodyParser.urlencoded({extended:true}));
mongoose.connect('mongodb://localhost/mongooseDashboard')
mongoose.connection.on('connected', ()=>console.log('mongodb connected'));

const models = require('./server/models/models.js');

//sets my views and static
app.use(express.static(path.join(__dirname, './client/static')));
app.set('views', path.join(__dirname, './client/views'));
app.set('view engine', 'ejs');

const routes = require('./server/config/routes.js')(app);

// sets up server to listen on port
const server = app.listen(port, ()=>{
   console.log(`listening on port ${port}`);
})
