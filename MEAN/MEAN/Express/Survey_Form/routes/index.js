module.exports = function(app){
   app.get('/', function(request, response) {
    response.render("index");
   })
   // renders index.ejs

   app.post('/users', function(request, response) {

      //sets variables to take in input information and passess it to the routing
      let data = {
         name: request.body.name,
         dojo: request.body.dojo,
         language: request.body.language,
         comment: request.body.text,
      }
      response.render("users", {user:data})
   })
}
