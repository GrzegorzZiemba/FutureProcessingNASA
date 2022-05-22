const mongo = require("./mongodb/mongoClient");
const fetchingRoutes = require("./routes/routes");

mongo();

fetchingRoutes();
