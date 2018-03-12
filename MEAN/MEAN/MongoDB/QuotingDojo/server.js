const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const mongoose = require('mongoose');
const { Schema }= mongoose;
const port = process.env.PORT || 8000;
const app = express();

// sets my require, port, and invokes express..

app.use(bodyParser.urlencoded({ extended:true }));

mongoose.connect('mongodb://localhost/quoting_dojo')
mongoose.connection.on('connected', ()=>console.log('mongodb connected'));

//connects my server to mongodb

const quoteSchema = new Schema({
   name: String,
   quote: String,
});
// creates my schema for the database

const Quote = mongoose.model('Quote', quoteSchema);

app.use(express.static(path.join(__dirname, './static')));
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');

//setting routing for static and views

app.get('/', (request, response)=>{
   response.render('index')
   //gets the index page to add name and quote
})
app.get('/quote',(request, response)=>{
   Quote.find({}, (error, results)=>{
      if(error) {console.log(error,"there is an error");}
      console.log(results,"these are the results");
      response.render('quotes', {data: results})
   })
   // this renders and gets the data from the database
})
app.post('/quote', (request, response)=>{
   Quote.create({name:request.body.name, quote:request.body.quote})
   console.log(request.body, "this is the request.body");
   response.redirect('/quote')

// this creates the data and adds it to the database
})


const server = app.listen(port, function(){
   console.log(`listening on port ${port}`);
})
// listens for the port and runs the server.


// var route = require('./routes/route.js')(app, server);
