var mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/simpleMean')
mongoose.connection.on('connected', function(){
   console.log("This is a future Mongo DB connection!!");
})
