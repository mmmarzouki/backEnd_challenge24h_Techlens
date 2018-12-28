var mongoose = require('mongoose'),
  Team = mongoose.model('Team');

exports.readAll = function(req, res) {
    Team.find({}, function(err, team) {
    if (err)
      res.send(err);
    res.json(team);
  });
};
exports.create = function(req, res) {
  var new_Team = new Team(req.body);
  if (!validate(new_Team)){
    //TODO: Team new valid
  }
  new_Team.save(function(err, team) {
    if (err)
      res.send(err);
    res.json(team);
  });
};
exports.read = function(req, res){
  console.log(req.params.id);
    Team.findById(req.params.id, function(err, team) {
    if (err)
      res.send(err);
      
    res.json(team);
  });
};

function validate(team){
  return true;
}