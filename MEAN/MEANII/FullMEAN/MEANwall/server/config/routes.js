console.log("Loading Server Routes!");

// const user = require('../controllers/user');
// const wall = require('../controllers/wall');
const authController = require('../controllers/auth');

module.exports = function(app){
   // app.get('/', user.index);
   // app.post('/auth/login/', wall.login);
   // app.post('/auth/register/', wall.register);
   app.post('/auth/login', authController.login);
   app.post('/auth/register', authController.register);
   app.delete('auth/logout', authController.logout);
   // app.post('/messages/post/', wall.post);
   // app.post('/messages/post/', wall.comment);


}
