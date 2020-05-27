var Organization = require('../models/orgModel');

const OrganizationService = {
    FindAll: (req) => {
        return Organization.find();
    },
    Create: (req) => {
        var org = new Organization({
            name: req.body.name,
            address: req.body.address,
            type: req.body.type
        });
        org.save();
    }
}

module.exports = OrganizationService;