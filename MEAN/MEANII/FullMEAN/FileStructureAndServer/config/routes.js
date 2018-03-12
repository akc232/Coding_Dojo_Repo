//need to make routes.js and finish setting up server side inf
console.log('Look at me im a route file!!');
var path = require('path')

module.exports = function(app){
   // console.log(app);
   app.get('/', function(request, response){
      response.sendFile(path.join('client/index.html'))
   })
}
