console.log('Routes- loading routes file!');

module.exports = function(app){
   app.get('/friends', function( request, response){
      friends.index(request, response)
   })
   app.get('/friends/:id', function( request, response){
      friends.show(request, response)
   })
   app.post('/friends', function( request, response){
      friends.create(request, response)
   })
   app.put('/friends/:id', function( request, response){
      friends.update(request, response)
   })
   app.get('/friends/:id', function( request, response){
      friends.delete(request, response)
   })
}
