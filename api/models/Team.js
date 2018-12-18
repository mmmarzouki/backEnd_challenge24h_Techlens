'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var TeamSchema = new Schema({
  name: {
    type: String,
    required: 'Kindly enter the name of the task'
  },
  number_participants: Number,
  members: [{name: String, email:String, phone:String, leader:Boolean}]
});

module.exports = mongoose.model('Team', TeamSchema);