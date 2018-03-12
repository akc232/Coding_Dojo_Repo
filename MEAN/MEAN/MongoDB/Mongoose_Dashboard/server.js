//seting my dependancies
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const mongoose = require('mongoose');
const { Schema } = mongoose;
const port = process.env.PORT || 8000;
const app = express();

//connects to mongoosedb
app.use(bodyParser.urlencoded({extended:true}));
mongoose.connect('mongodb://localhost/mongooseDashboard')
mongoose.connection.on('connected', ()=>console.log('mongodb connected'));

//creates my Schema and model
const catSchema = new Schema({
   name: String,
   weight: Number,
   color:String,
});
const Cat = mongoose.model('Cat', catSchema);

//sets my views and static
app.use(express.static(path.join(__dirname, './static')));
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');

//displays INDEX and passes the DB info to the page to be rendered
app.get('/', (request, response)=>{
   Cat.find({})
   .then(function(cats){
      response.render('index', { cats });
   }).catch(function(error){
      throw error;
   })
});

//displays form data to add new cat
app.get('/cats/new',(request, response)=>{
   response.render('new')
});

//shows specific cat folowing the link by using the _id as a find
app.get('/cats/:id',(request, response)=>{
   // console.log(request.params);
   Cat.find({_id:request.params.id})
   .then(function(cats){
      // console.log(cats);
      response.render('show', { cats })
   }).catch(function(error){
      throw error;
   })
});

// displays and shows cat info from database in a form to allow for editing
app.get('/cats/:id/edit', (request, response)=>{
   Cat.find({_id:request.params.id})
   .then(function(cats){
      console.log(cats);
      response.render('edit', { cats })
   }).catch(function(error){
      throw error;
   })
});

//post route to create a new cat in the database
app.post('/cats', (request, response)=>{
   console.log(request.body);
   Cat.create(request.body, function(error, response){
      if(error){throw error}
   })
   response.redirect('/')

})

//POST route to edit the cat
app.post('/cats/:id/update', (request, response)=>{
   Cat.update({_id:request.params.id}, request.body, function(error, response){
      if(error){
         throw error;
      }
   })
   response.redirect('/');
});

//POST route to delete the cat from the database
app.post('/cats/:id/delete', (request, response)=>{
   Cat.remove({_id:request.params.id},function(error, response){
      if(error){
         throw error;
      }
   })
   response.redirect('/');
});

// sets up server to listen on port
const server = app.listen(port, ()=>{
   console.log(`listening on port ${port}`);
})
