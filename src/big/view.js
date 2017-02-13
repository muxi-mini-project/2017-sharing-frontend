var Backbone = require("Backbone");
var _ = require('underscore');
var $  = require('jquery');

// add collections
var feedCards = require('./collections.js');
// add view
var feedView = require('../feed/view.js');
var template = require('./index.html');

var feedCards_view =  Backbone.View.extend({
            el: $(".card"),
            template:_.template(template),
            initialize: function () {
              var that = this;
              this.collection = new feedCards();
              this.collection.fetch().done(function(){
                that.render()
              })
            },
            render: function(){
              var that = this;
              this.$el.html(this.template());
              this.collection.forEach(function(feed){
                var feedcard = new feedView({
                  model: feed
                });
                this.$el.append(feedcard.render().el);
              },that);
              return this;
            }
        });

module.exports = feedCards_view;
