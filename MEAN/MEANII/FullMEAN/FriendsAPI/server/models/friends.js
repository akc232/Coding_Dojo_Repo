console.log('Server Models- models is working.');

const mongoose = require('mongoose');

const { Schema } = mongoose;

const friendSchema = new Schema({
   first: {
      type: String,
      required: true,
      minlength: 2,
      trim: true
   },
   last: {
      type: String,
      required: true,
      minlength: 2,
      trim: true
   },
   birthday:{
      type: Date,
      required: true,

   }

})
module.exports = mongoose.model('Friends', friendSchema);
