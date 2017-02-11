var Backbone = require("Backbone");
var _ = require('underscore');
var $  = require('jquery');

var loginModel = require("./model.js");
var template = require("./index.html");


var loginView = Backbone.View.extend({
            el: $(".login_component"),
            template:_.template(template),
            initialize: function () {
              this.render();
              console.log('init');
            },
            events: {
                "click #loginButton":"loginIn",
            },
            loginIn: function () {

            },
            render: function(){
              this.$el.html(this.template());
              return this;
            }
        });

module.exports = loginView;
