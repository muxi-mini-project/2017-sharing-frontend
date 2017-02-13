var loginModel = Backbone.Model.extend({
	urlRoot : '/api/v1.0/toshare/',
	defaults: {
    "input":  "",
    "text":  ""
  }
});

module.exports = loginModel
