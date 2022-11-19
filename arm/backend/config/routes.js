const {
    userController,
    authController,
    orderController,
    wagesController,
    payrollController
} = require('../app/controllers');
const { authMiddleware } = require('../app/middlewares');

module.exports = (app) => {
    //userList
    app.get('/api/users', authMiddleware, userController.getList);
    app.post('/api/users', authMiddleware, userController.create);
    app.put('/api/users/:id', authMiddleware, userController.update);
    app.delete('/api/users/:id', authMiddleware, userController.remove);

    //auth
    app.post('/api/login', authController.login);

    //orderList
    app.get('/api/orders', authMiddleware, orderController.getList);
    app.post('/api/orders', authMiddleware, orderController.create);
    app.put('/api/orders/:id', authMiddleware, orderController.update);
    app.delete('/api/orders/:id', authMiddleware, orderController.remove);

    //wagesList
    app.get('/api/wages', authMiddleware, wagesController.getList);

    //payrollList
    app.get('/api/payrolls', authMiddleware, payrollController.getList);
    app.post('/api/payrolls', authMiddleware, payrollController.create);
    app.put('/api/payrolls/:id', authMiddleware, payrollController.update);
    app.delete('/api/payrolls/:id', authMiddleware, payrollController.remove);
}