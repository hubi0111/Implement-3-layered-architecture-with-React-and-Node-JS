var mongoose = require('mongoose');

var orgModel = mongoose.Schema({
    name: {
        type: String
    },
    address: {
        type: String
    },
    type: {
        type: String
    }
}, {collection: 'organizations'});

module.exports = mongoose.model("orgs", orgModel);