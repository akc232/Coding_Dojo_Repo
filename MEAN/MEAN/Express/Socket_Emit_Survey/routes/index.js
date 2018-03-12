module.exports = function(app){
   app.get('/', function(request, response) {

    response.render("index");
   })
   // renders index.ejs
   var data;
   app.post('/users', function(request, response) {

      var data= {
         name: request.body.name,
         dojo: request.body.dojo,
         language: request.body.language,
         comment: request.body.text,
      }

      //sets variables to take in input information and passess it to the routing

      return redirect('/')
   })
   // console.log(data);
}
