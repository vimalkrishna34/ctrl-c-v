const mongoose = require('mongoose');

const MessageSchema = new mongoose.Schema({
    content: { type: String, required: true },
    user: { type: String, required: true },
    timestamp: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Message', MessageSchema);
