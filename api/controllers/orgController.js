var OrganizationService = require('../services/orgService');

exports.findAll = (req, res) => {
    OrganizationService.FindAll()
    .then(orgs => {
        res.send(orgs);
    })
};

exports.create = (req, res) => {
    OrganizationService.Create(req);
};