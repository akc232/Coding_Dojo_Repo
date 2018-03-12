// const mongoose = require('mongoose')
// const { Schema } = mongoose;
// const userSchema = new Schema({
//    user:{
//       type: String,
//       required: [true, "Please enter a user name!"],
//       minlength: [2, "Username must be longer than 2 charaters"],
//       unique: true,
//    },
//    password:{
//       type: String,
//       required: [true, "Please enter a password"],
//       minlength: [2, "Password must be longer than 2 characters"],
//    }
//    },{
//    timestamps: true
// })
//
// userSchema.pre('save', function(next){
//    if(!this.isModified('password')){
//       return next();
//    }
//    bcrypt.hash(this.password, 10)
//    .then(hashed => {
//       this.password = hashed;
//       next();
//    })
//    .catch(next);
// });
//
// userSchema.statics.verifyPassword = function(candidate, hashed){
//    return bcrypt.compareSync(candidate, hashed);
// };
//
//
// module.exports = mongoose.model('User', userSchema)
