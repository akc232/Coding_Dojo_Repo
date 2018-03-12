const mongoose = require('mongoose');
const { Schema } = mongoose;
const postSchema = new Schema({
   post:{
      type: String,
      required: [true, "Post can not be blank."]
   }
})

module.exports = mongoose.model('Post', postSchema)
