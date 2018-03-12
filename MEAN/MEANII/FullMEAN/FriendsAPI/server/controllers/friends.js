console.log('Server Controler - Controller is connected!');

const Friends = require('mongoose').model('Friends')

module.exports = {
   index(request, response){
      Friends.find({})
      .then(function(friends)){
         response.json(friends)
      }
      .catch(function(error){
         console.log(error);
      })
   },
   show(request, response){
      Friends.findById(request.params.id)
      .then(function(friends){
         response.json(friends)
      })
      .catch(error){
         console.log(error);
      }
   },
   create(request, response){
      Friends.create(request.body, function(error, friends){
         if(error){
            console.log(error);
         }
         response.json(friends)
      })
   },
   update(request, response){
      Friends.findByIdAndUpdate(request.params.id, request.body)
         .then(function(friends){
            response.json(friends)
         })
         .catch(function(error){
            console.log(error);
         })
      },
   delete(request, response){
      Friends.findByIdAndRemove(request.params.id)
      .then(function(friends){
         response.json(friends)
      })
      .catch(function(error){
         console.log(error);
      })
}
};
