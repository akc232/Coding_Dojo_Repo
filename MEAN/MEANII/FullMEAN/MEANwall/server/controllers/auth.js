const User = require('mongoose').model('UserLog');

module.exports.login = function(request, response) {
  User.findOne({ username: request.body.username })
    .then(function(user) {
      console.log('getting to auth controller');
      return User.verifyPassword(request.body.password, user.password)
        .then(function() {
          login(request, response, user);
        });
    })
    .catch(function(error) {
      console.log(error)
      response.status(422).json({ error: new Error('username/password combination not found') });
    });
};

module.exports.register = function(request, response) {
  User.create(request.body)
    .then(function(user) {
      login(request, response, user);
    })
    .catch(function(error) {
      console.log(error);
      response.status(422).json({ error: new Error('something went wrong') });
    });
};

module.exports.logout = function(request, response) {
  request.session.destroy();
  response.clearCookie('userID');
  response.clearCookie('expiration');
  response.json(true);
};

function login(request, response, user) {
  request.session.user = user.toObject();
  delete request.session.user.password;

  response.cookie('userID', user._id.toString());
  response.cookie('expiration', Date.now() + 86400 * 1000);

  response.json(true);
}
