var mongoose = require('mongoose');
var UserSchema = new mongoose.Schema({
  username: String,
  email: String,
  password: String,
  firstName: String,
  lastName : String,
  department : String,
  designation :String,
  userroles: String,
  location : String,
  creationDate : Date
});
mongoose.model('User', UserSchema);

module.exports = mongoose.model('User');
