module.exports = function(app) {
    var controller = require('../controllers/controller');
  
    // todoList Routes
    app.route('/api/team').get(controller.readAll);
    app.route('/api/team').post(controller.create);
    app.route('/api/team/:id').get(controller.read);
    // app.route('/model/:id').delete(controller.delete);
    // app.route('/model/:id').put(controller.update);
    
};
  