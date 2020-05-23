module.exports = (app) => {
    var org = require('../controllers/orgController');

    app.post('/org', org.create);

    app.get('/org', org.findAll);

}