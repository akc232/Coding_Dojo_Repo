const mongoose = require('mongoose')
const { Schema } = mongoose;

   //creates my Schema and model
   const catSchema = new Schema({
      name: String,
      weight: Number,
      color:String,
   });
   const Cat = mongoose.model('Cat', catSchema);
