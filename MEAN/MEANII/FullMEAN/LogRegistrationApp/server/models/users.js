const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const { Schema } = mongoose;
const userSchema = new Schema({
  username: {
    type: String,
    required: true,
    minlength: [2, 'Username must be at least 2 characters'],
    unique: true
  },
  email: {
    type: String,
    required: [true, 'please enter an email'],
    unique: true,
    lowercase: true
  },
  password: {
    type: String,
    required: [true, "Please enter a Password!"],
    minlength: [8, "Password must be more than 8 Characters"],
},

}, {
  timestamps: true
});

userSchema.pre('save', function(next){
   if(!this.isModified('password')){
      return next();
   }

   bcrypt.hash(this.password, 10)
   .then(hashed => {
      this.password = hashed;
      next();
   })
   .catch(next);
});

userSchema.statics.verifyPassword = function(candidate, hashed){
   return bcrypt.compareSync(candidate, hashed);
};

module.exports = mongoose.model('User', userSchema)
