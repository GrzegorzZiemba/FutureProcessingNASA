const axios = require("axios");
const config = require("config");
const capsuleUrl = config.get("capsuleFetchUrl");
module.exports = fetchCapsules = () => axios.get(capsuleUrl);

const dragonUrl = config.get("dragonFetchUrl");
module.exports = fetchDragons = () => axios.get(dragonUrl);

module.exports = {
	fetchCapsules: fetchCapsules,
	fetchDragons: fetchDragons,
};
