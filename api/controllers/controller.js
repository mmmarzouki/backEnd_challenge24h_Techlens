var mongoose = require('mongoose'),
  Model = mongoose.model('MyModel');

exports.readAll = function(req, res) {
    Model.find({}, function(err, model) {
    if (err)
      res.send(err);
    res.json(model);
  });
};
exports.create = function(req, res) {
  var new_Model = new Model(req.body);
  new_Model.save(function(err, model) {
    if (err)
      res.send(err);
    res.json(model);
  });
};
exports.read = function(req, res){
  console.log(req.params.id);
    Model.findById(req.params.id, function(err, model) {
    if (err)
      res.send(err);
      
    res.json(model);
  });
};
exports.update = function(req, res) {
    Model.findByIdAndUpdate({_id: req.params.id}, req.body, {new: true}, function(err, model) {
    if (err)
      res.send(err);
    res.json(model);
  });
};
exports.delete = function(req, res) {
    Model.findByIdAndRemove(req.params.id, function(err, model) {
    if (err)
      res.send(err);
    res.json({ message: 'Model successfully deleted' });
  });
};