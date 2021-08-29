const UsersController = require('../controllers/usersController');

module.exports = (app) => {

    app.get('/api/users/getAll', UsersController.getAll);


    app.post('/api/users/create', UsersController.register);
    app.post('/api/users/login', UsersController.login);
};