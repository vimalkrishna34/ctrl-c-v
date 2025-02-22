const mongoose = require('mongoose');

const BadWordSchema = new mongoose.Schema({
    word: { type: String, required: true, unique: true },
});

module.exports = mongoose.model('BadWord', BadWordSchema);
