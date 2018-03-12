const mongoose = require('mongoose');
const fs = require('fs');
const path = require('path');
const reg = new RegExp('.js$', 'i');
const modelsPath = path.resolve('server', 'models');

mongoose.connect('mongodb://localhost/MEANwalldb');
mongoose.connection.on('connect', ()=> console.log('Database is connected!'))

fs.readdirSync(modelsPath).forEach(function(file){
   if(reg.test(file)){
      require(path.join(modelsPath, file));
   }
});
