const apiConfig = require("./apiConfig.js");

const esiConfig;

const init = () => {
	esiConfig = apiConfig.esi()
		.then((esiConfig) => {
			return esiConfig;
		})
		.then((esiConfig) => {
			console.log("esiConfig", esiConfig);
		});
};
init();
