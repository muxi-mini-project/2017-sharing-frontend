var Backbone = require("Backbone");
var _ = require('underscore');
var $  = require('jquery');

var loginModel = require("./model.js");
var template = require("./index.html");


var loginView = Backbone.View.extend({
            el: $(".login_component"),
            template:_.template(template),
            initialize: function () {
              this.model = new loginModel()
              this.listenTo(this.model, "sync", this.onLogin)
              this.render();
              console.log('init');
              // var path = false;
              // if(location.pathname === '/register'){
              //   path = false;
              //   $('#loginButton').innerHTML = "注册"
              // }else if(location.pathname === '/login'){
              //   path = true;
              //   $('#loginButton').innerHTML = "登陆"
              // }
              // console.log(location.pathname)
            },
            events: {
                "click #loginButton":"loginIn"
            },
            onLogin: function(){
                location.href = "/feed"
            },
            check:function(){
                // check
                if ( $(".username").val() == "" || $(".password").val() == "") {
                    alert("请输入完整邮箱或密码");
                    return false
                }
                else{
                    return true
                }
            },
            loginIn: function(e){
                e.preventDefault();
                if (this.check()) {
                    this.model.set("username",$(".username").val())
                    this.model.set("password",$(".password").val())
                    console.log(this.model)
                    this.model.save()
                }
                this.onLogin()
            },
            render: function(){
              this.$el.html(this.template());
              return this;
            }
        });

module.exports = loginView;
