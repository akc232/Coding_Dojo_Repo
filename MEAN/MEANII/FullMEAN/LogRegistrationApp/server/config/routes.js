console.log('Routes- loading routes file!');
const users = require('../controllers/users')

module.exports = function(app){
   app.get('/users/', users.index);
   app.post('/users/login/', users.login);
   app.post('/users/register/', users.register);
   app.delete('/users/logout/:id/', users.logout);
}
