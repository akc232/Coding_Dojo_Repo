const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const mongoose = require('mongoose');
const port = process.env.PORT || 8000;
const { Schema } = mongoose;
const app = express();


app.use(bodyParser.json());
mongoose.connect('mongodb://localhost/1955API')
mongoose.connection.on('connected', function(){console.log('connected to mongodb!');})

const PersonSchema = new Schema({
   name:{
      type:String,
      required:true,
   }
})

const Person = mongoose.model('Person', PersonSchema)

//callbacks
app.get('/', function(request, response){
   Person.find({}).sort({_id:-1}).exec(function (error, person){
      if(error){console.log(error);}
      response.json(person)
   })
   // console.log(request.body);
})

app.get('/new/:name/', function(request, response){
   Person.create(request.params, function(error, person){
      if(error){console.log(error,"this is an ERROR!");}
      response.redirect('/')
   })
   // console.log(request.params);
})

//promises
app.get('/:name',function(request, response){
   Person.findOne({'name':request.params.name})
   .then(function(person){
      console.log(person);
      response.json(person)
   }).catch(function(error){
      console.log(error);
   })
})

app.get('/delete/:name', function(request, response){
   Person.remove({'name': request.params.name})
   .then(function(){
      response.redirect('/');
   }).catch(function(error){
      console.log(error);
   })
})



const server = app.listen(port, function(){
   console.log(`listening on port ${port}`);
})
