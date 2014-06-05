'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

/**
 * Message Schema
 */
var MessageSchema = new Schema({
  user: { type: Schema.Types.ObjectId, ref: 'User' },
  message: String,
  imageUrl: String,
  timestamp: Date
});

/**
 * Validations
 */
// ThingSchema.path('awesomeness').validate(function (num) {
//   return num >= 1 && num <= 10;
// }, 'Awesomeness must be between 1 and 10');


module.exports = mongoose.model('Message', MessageSchema);
