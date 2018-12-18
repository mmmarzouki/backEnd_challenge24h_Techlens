module.exports = function(app) {
    var controller = require('../controllers/controller');
  
    // todoList Routes
    app.route('/model').get(controller.readAll);
    app.route('/model').post(controller.create);
    app.route('/model/:id').get(controller.read);
    // app.route('/model/:id').delete(controller.delete);
    // app.route('/model/:id').put(controller.update);
    
};
  