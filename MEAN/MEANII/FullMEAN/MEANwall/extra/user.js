// const User = require('mongoose').model('User')
// const bcrypt = require('bcrypt');
//
// module.exports = {
//    // index(request, response){
//    //    User.find({})
//    //    .then(function(user){
//    //       if(user){
//    //          //send an error stating that the user is registered already
//    //          console.log(user);
//    //       }
//    //    })
//    //    .catch(function(error){
//    //       console.log(error);
//    //    })
//    // },
//    login(request, response){
//       User.find({username: request.body.username})
//       .then(function(user){
//          console.log(user);
//       })
//       .catch(function(error){
//          console.log(error);
//       })
//    },
//    register(request, response){
//       User.create(request.body)
//       .then(function(user){
//          response.json(user)
//       })
//       .catch(function(error){
//          response.status(422).json({error: new Error('something when wrong. Please try again.')})
//       })
//    }
// }
