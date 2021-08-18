const mongoose = require('mongoose');

var Employee = mongoose.model('Employee', {
    id:{type: String },
    name: { type: String },
    email: { type: String },
    address: { type: String },
    country: { type: String },
    dob: {type: String}
});

module.exports = { Employee };