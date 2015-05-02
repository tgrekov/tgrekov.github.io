$(function () {

	if (!window.localStorage) {
		alert('Your browser is too old.');
		return;
	} 	

	$('#dafuq').on('click', function () {
		new Handler();
	});

});

//-------------------------

var Handler = function () {

	this.api = null;

	this.init = function () {

		var token = this.authenticate();

		if (!token) {
			//alert('Unable to authenticate.');
			return;
		}

		this.api = new Api(token);

	}

	this.authenticate = function () {

		var auth = new Authenticator(4902291, '8slNBR4gMis7rkNQjzpY');

		auth.setScope('friends');
		auth.start();

		// 	time = new Date().getTime(),
		// 	expire = window.localStorage.getItem('expire');

		// if (expire && (expire > time)) {

		// 	return window.localStorage.getItem('token');

		// } else if (auth.isProcessing()) {

		// 	auth.end();
		// 	window.localStorage.setItem('token', auth.getToken());
		// 	window.localStorage.setItem('expire', auth.getExpire());
		// 	return auth.getToken();

		// } else {

		// 	auth.setScope('friends');
		// 	auth.start();

		// }

		return null;

	}

	this.init.apply(this, arguments);

}


//-------------------------------

var Authenticator = function () {

	this.id = null;
	this.secret = null;
	this.redirect = null;
	this.scope = null;

	this.token = null;
	this.expire = null;

	this.API_URL = 'https://oauth.vk.com/authorize'
	this.REDIRECT_URL = 'https://oauth.vk.com/blank.html'


	this.init = function (id, secret) {

		this.id = id;
		this.secret = secret;

	}

	this.params = function () {
		return {
			client_id: 		this.id,
			redirect_uri: 	this.REDIRECT_URL,
			scope: 			this.scope,
			display: 		'popup',
			response_type: 	'token'
		};
	}

	this.start = function () {

		var url = this.API_URL + '?' + $.param(this.params()),
			popup = window.open(url);

		popup.focus();

	}

	this.setScope = function(scope) {
		this.scope = scope;
	}

	this.getToken = function () {
		return this.token;
	}

	this.init.apply(this, arguments);

}

//---------------------

var Api = function () {

	this.token = null;

	this.init = function (token) {
		this.token = token;
	}

	this.init.apply(this, arguments);

}