var Organization = require('../models/orgModel');

exports.findAll = (req, res) => {
    Organization.find()
    .then(org => {
        res.send(org);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving organizations."
        });
    });
};

exports.create = (req, res) => {
    var org = new Organization({
        name: req.body.name,
        address: req.body.address,
        type: req.body.type
    });

    org.save()
    .then(org => {
        res.send(org);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while creating the Organization."
        });
    });
};