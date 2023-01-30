const axios = require("axios");
const config = require("config");
const capsuleUrl = config.get("capsuleFetchUrl");
module.exports = fetchCapsules = () => axios.get(capsuleUrl);

const dragonUrl = config.get("dragonFetchUrl");
module.exports = fetchDragons = () => axios.get(dragonUrl);

const roadsterUrl = config.get("RoadsterFetchUrl");
module.exports = fetchRoadster = () => axios.get(roadsterUrl);

module.exports = {
	fetchCapsules: fetchCapsules,
	fetchDragons: fetchDragons,
	fetchRoadster: fetchRoadster,
};
