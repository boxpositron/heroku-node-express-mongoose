'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

mongoose.Promise = global.Promise;

const exampleSchema = new Schema({
    name: {
        type: String,
        default: 'example'
    },
    number: {
        type: Number,
        default: 0
    }
});

module.exports = mongoose.model('Example', exampleSchema);