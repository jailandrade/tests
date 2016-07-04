var mongoose = require('mongoose');
var bcrypt = require('bcrypt-nodejs');
var SALT_FACTOR = 10;

var UserSchema = mongoose.Schema({
	username: {type: String, required: true, unique: true},
	password: {type: String, required: true},
	createdAt: {type: Date, default: Date.now},
	displayName: String,
	bio: String,
	website: String,
	interests: String
});

UserSchema.methods.name = function(){
	return this.displayName || this.username;
};

var noop = function(){};

UserSchema.pre('save', function(done){
	var user = this;

	if (!user.isModified('password')){
		return done();
	}
	bcrypt.genSalt(SALT_FACTOR, function(err, salt){
		if (err) {return done(err);}

		bcrypt.hash(user.password, salt, noop, function(err, hashedPassword){
			if (err) {return done(err);}

			user.password = hashedPassword;
			done();
		});
	});
});

UserSchema.methods.checkPassword = function(guess, done){
	bcrypt.compare(guess, this.password, function(err, isMatch){
		done(err, isMatch);
	});
};

var User = mongoose.model('User', UserSchema);
module.exports = User;
