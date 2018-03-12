const mongoose = require('mongoose');
const fs = require('fs');
const path = require('path');
const reg = new RegExp('.js$', 'i');
const modelsPath = path.resolve('server', 'models');

mongoose.connect('mongodb://localhost/friendsDB')
mongoose.connection.on('connected', ()=> console.log('Database- Connected to the database!!'));

fs.readdirSync(modelsPath).forEach(function(file){
   if(reg.test(file)){
      require(path.join(modelsPath, file));
   }
});
