var loginModel = Backbone.Model.extend({
	urlRoot : '/api/v1.0/toshare/',
	defaults: {
    "body":  "",
    "post_type":""
  }
});

module.exports = loginModel
