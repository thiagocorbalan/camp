const { Schema, model } = require('mongoose');

const DataSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    value: {
        type: Number,
        required: true
    },
    category: {
        type: String,
        required: true
    }
});

module.exports = model('Camp', DataSchema);