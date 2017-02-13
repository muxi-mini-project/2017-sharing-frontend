var Backbone = require("Backbone");

//add model
var feedCard = require('../avatar/model.js');

var feedCards = Backbone.Collection.extend({
  model: feedCard,
  url :'/original'
})

module.exports = feedCards;
