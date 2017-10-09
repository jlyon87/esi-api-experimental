var App = (function App() {

	var state = new Date() + "-downwardfacingdog";

	var params = [
		{
			key: "response_type",
			value: "code"
		},
		{
			key: "redirect_uri",
			value: esi.callbackUrl
		},
		{
			key: "client_id",
			value: esi.clientId
		},
		{
			key: "scope",
			value: esi.scopes
		},
		{
			key: "state",
			value: state
		}
	];

	var buildAuthUri = function() {
		var queryParams = params.reduce(function(acc, val) {
			return acc.concat(val.key + "=" + val.value);
		}, []);
		console.log(queryParams.join("&"));
		return "https://login.eveonline.com/oauth/authorize?" + queryParams.join("&");
	};

	var authResponseHandler = function(res) {
		console.log(response);
	};

	var authorize = function() {
		var req = new XMLHttpRequest();
		req.addEventListener("load", authResponseHandler);
		req.open("GET", buildAuthUri);
		req.send();
	};

	var init = function() {
		var url = buildAuthUri();
		console.log(url);
	};
	init();

	App.controller = {
		authorize: authorize
	};

	return App;
} (App || {}));
