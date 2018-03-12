const User = require('mongoose').model('User');
const bcrypt = require('bcrypt');

module.exports = {
   index(request, response){
      User.find({})
      .then(function(users){
         response.json(users)
      })
      .catch(function(error){
         console.log(error);
      })
   },
   login(request, response){
      // console.log(request,'this is the request');
      // console.log(response, 'this is the response');
      var password = request.body.password
      User.findOne({ username: request.body.username })
      .then(function(user){
         console.log(request.body.username);
         console.log(user);
         if(user === null){
            response.status(422).send('The Username or Password entered is incorrect.')
         }
         bcrypt.compare(password, user.password)
         .then(function(res){
            if(res === false){
               // console.dir(response)
               response.status(422).send('The Username or Password entered is incorrect.')
         }else{
            response.json(res)
         }
         })
      })
      .catch(function(error){
         console.log(error);
      })
   },
   register(request, response){
      User.create(request.body)
        .then(function(user) {
          response.json(user)
        })
        .catch(function(error) {
          console.log(error,"this is the error");
          response.status(422).send(error.message)
        });

   },
   logout(request, response){
      request.session.destroy();
      response.clearCookie('userID');
      response.clearCookie('expiration');
      response.json(true);
   }
}
