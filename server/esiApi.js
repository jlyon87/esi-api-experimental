const axios = require("axios");
const apiConfig = require("./apiConfig.js");

// apiConfig.getEsiScopes()
// 	.then((scopes) => {
// 		apiConfig.esi.scopes = scopes;
// 		console.log(apiConfig.esi);
// 	});

const authorize = (esiConfig) => {
	console.log(esiConfig.scopes.join(" "));
	axios.get("https://login.eveonline.com/oauth/authorize", {
		params: {
			response_type: "code",
			redirect_uri: esiConfig.scopes,
			client_id: esiConfig.clientId,
			scope: esiConfig.scopes.join(" "),
			state: "downwardfacingdog"
		}
	})
};

const handleBearer = (response) => {
	console.log(response);
};

const handleAuthErr = (err) => {
	throw err;
};

const init = () => {
	apiConfig.getEsiScopes()
		.then((scopes) => {
			apiConfig.esi.scopes = scopes;
			return apiConfig.esi;
		})
		.then(authorize)
		.then(handleBearer)
		.catch(handleAuthErr);
};

init();
