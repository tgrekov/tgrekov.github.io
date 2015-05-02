$(function () {

			var start = $('#dafuq');

			start.on('click', function () {
				var auth = new Authenticator(4902291, '8slNBR4gMis7rkNQjzpY');
				auth.authorize();



			});

});



var Authenticator = function () {

	this.id = null;
	this.secret = null;
	this.token = null;

	this.API_URL = 'https://oauth.vk.com/authorize'


	this.init = function (id, secret) {

		this.id = id;
		this.secret = secret;

	}

	this.authorize = function () {

		var data = {
			client_id = this.id,
			scope = '',
			redirect_uri = '' ,
			response_type =  ''
		};

		$.ajax(this.API_URL, {
			data: data,
			context: this
		}).done(funtion (response) {
			console.log(response);
		});

	}

	this.getToken = function () {

	}

	this.init.appty(this, arguments);

}


var Api = function () {

}