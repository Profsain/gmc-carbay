const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: { type: String, require: true },
    username: { type: String, require: true, unique: true },
    email: { type: String, require: true, unique: true },
    password: { type: String, require: true },
    favorites: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Car' }]
});

module.exports = mongoose.model('User', userSchema);