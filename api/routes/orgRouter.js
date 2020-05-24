module.exports = (app) => {
    var org = require('../controllers/orgController');

    app.post('/createorg', org.create);

    app.get('/listorg', org.findAll);

}