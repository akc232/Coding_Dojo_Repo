const User = require('mongoose').model('User')
const Post = require('mongoose').model('Post')
const Comments = require('mongoose').model('Comment')

module.exports = {
   // index(request, response){
   //    User.find({})
   //    .then(function(user){
   //       if(user){
   //          //send an error stating that the user is registered already
   //          console.log(user);
   //       }
   //    })
   //    .catch(function(error){
   //       console.log(error);
   //    })
   // },
   login(request, response){
      User.find({username: request.body.username})
      .then(function(user){
         console.log(user);
      })
      .catch(function(error){
         console.log(error);
      })
   },
   register(request, response){
      User.create(request.body)
      .then(function(user){
         response.json(user)
      })
      .catch(function(error){
         response.status(422).json({error: new Error('something when wrong. Please try again.')})
      })
   },
   post(request, response){
      Post.create(request.body)
      .then(function(post){
         response.json(post)
      })
      .catch(function(error){
         console.log(error);
      })
   },
   comment(request, response){
      Comments.create(request.body)
      .then(function(comment){
         response.json(comment)
      })
      .catch(function(error){
         console.log(error);
      })
   }
}
