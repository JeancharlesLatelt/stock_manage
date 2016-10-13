const Mongoose = require('../database').Mongoose;
const passportLocalMongoose = require('passport-local-mongoose');

const userSchema = new Mongoose.Schema({
  email:        { type: String, required: true },
  password:     { type: String, required: true },
  creationDate: { type: Date,   required: true, default: Date.now },
});
userSchema.plugin(passportLocalMongoose, { usernameField: 'email', hashfield: 'password', usernameLowerCase: true });
const User = Mongoose.model('User', userSchema, 'Users');
exports.User = User;
