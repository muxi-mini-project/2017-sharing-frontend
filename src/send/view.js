var Backbone = require("Backbone");
var _ = require('underscore');
var $  = require('jquery');

var feedModel = require("./model.js");
var template = require("./index.html");


var loginView = Backbone.View.extend({
            el: $(".ground"),
            template:_.template(template),
            initialize: function () {
              this.model = new feedModel()
              this.listenTo(this.model, "sync", this.onLogin)
              this.render();
              console.log('init');
            },
            events: {
                "click .submit":"loginIn",
            },
            onLogin: function(){
                location.href = "/feed"
            },
            loginIn: function (e) {
                e.preventDefault();
                //this.model.set("input",$(".input").val())
                this.model.set("body",$(".text").val())
                this.model.set("post_type","share")
                console.log(this.model)
                this.model.save()
            },
            render: function(){
              this.$el.html(this.template());
              return this;
            }
        });

module.exports = loginView;
