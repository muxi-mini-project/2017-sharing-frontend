var Backbone = require("Backbone");
var _ = require('underscore');
var $  = require('jquery');

var feedModel = require("./model.js");
var template = require("./index.html");


var loginView = Backbone.View.extend({
            className:"background",
            template:_.template(template),
            initialize: function () {
              this.render();
            },
            render: function(){
              this.$el.html(this.template(this.model.toJSON()));
              return this;
            }
        });

module.exports = loginView;
