const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    name: { type: String },
    email: { type: String, unique: true },
    password: { type: String },
    role: { type: String, enum: ['Admin', 'User'], default: 'User' },
});


UserSchema.methods.matchPassword = async function (password) {
    return password === this.password; 
};

const User = mongoose.model('User', UserSchema);

module.exports = User;
