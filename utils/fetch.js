const axios = require("axios");

const capsuleUrl = "https://api.spacexdata.com/v4/capsules";
module.exports = fetchCapsules = () => axios.get(capsuleUrl);

const dragonUrl = "https://api.spacexdata.com/v4/dragons";
module.exports = fetchDragons = () => axios.get(dragonUrl);

module.exports = {
	fetchCapsules: fetchCapsules,
	fetchDragons: fetchDragons,
};
