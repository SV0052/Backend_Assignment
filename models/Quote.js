// models/Quote.js
const mongoose = require('mongoose');

const quoteSchema = new mongoose.Schema({
    text: {
        type: String,
        required: true,
        trim: true,
    },
    author: {
        type: String,
        default: "Unknown",
    },
    tags: {
        type: [String],
        default: [],
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

const Quote = mongoose.model('Quote', quoteSchema);
module.exports = Quote;
