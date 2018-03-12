const mongoose = require('mongoose');
const Cat = mongoose.model('Cat')

module.exports = {
   index: function(request, response){
   Cat.find({})
   .then(function(cats){
      response.render('index', { cats });
   }).catch(function(error){
      throw error;
   })
},
   showCat: function(request, response){
      // console.log(request.params);
   Cat.find({_id:request.params.id})
   .then(function(cats){
      // console.log(cats);
      response.render('show', { cats })
   }).catch(function(error){
      throw error;
   })
},
   newCat:function(request, response){
   // console.log(request.body);
   Cat.create(request.body, function(error, response){
      if(error){throw error}
   })
   response.redirect('/')
},
   editCat:function(request, response){
      Cat.find({_id:request.params.id})
   .then(function(cats){
      console.log(cats);
      response.render('edit', { cats })
   }).catch(function(error){
      throw error;
   })
},
   updateCat:function(request, response){
      Cat.update({_id:request.params.id}, request.body, function(error, response){
      if(error){
         throw error;
      }
   })
   response.redirect('/');
},
   deleteCat:function(request, response){
      Cat.remove({_id:request.params.id},function(error, response){
            if(error){
               throw error;
            }
         })
         response.redirect('/');
      },
}
