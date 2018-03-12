// did not use routes for this. Placed all routes in the server.js
const mongoose = require('mongoose');
const Cat = mongoose.model('Cat')
const cats = require('../controllers/controller.js')
module.exports = function(app){
   //displays INDEX and passes the DB info to the page to be rendered
   app.get('/', (request, response)=>{
      cats.index(request, response);
   });

   //displays form data to add new cat
   app.get('/cats/new',(request, response)=>{
      response.render('new')
   });

   //shows specific cat folowing the link by using the _id as a find
   app.get('/cats/:id',(request, response)=>{
      cats.showCat(request, response);
   });

   // displays and shows cat info from database in a form to allow for editing
   app.get('/cats/:id/edit', (request, response)=>{
      cats.editCat(request, response);
   });

   //post route to create a new cat in the database
   app.post('/cats', (request, response)=>{
      cats.newCat(request, response);

   })

   //POST route to edit the cat
   app.post('/cats/:id/update', (request, response)=>{
      cats.updateCat(request, response);
   });

   //POST route to delete the cat from the database
   app.post('/cats/:id/delete', (request, response)=>{
      cats.deleteCat(request, response);
   });
}
