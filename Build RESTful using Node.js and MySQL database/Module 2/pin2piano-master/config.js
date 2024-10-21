// Get the config either from environment variables or pick the default
// The config should contain PORT and MONGO_URL properties
const config = {

    PORT: process.env.PORT || "3004",
    MONGO_URL: "mongodb://localhost:27017/pianoDB"

}

module.exports = config;