const mongoose = require('mongoose');
const { Schema } = mongoose;
const commentSchema = new Schema({
   post:{
      type: String,
      required: [true, "Comment can not be blank."],
   }
})

module.exports = mongoose.model('Comment', commentSchema)
