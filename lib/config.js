const config = {};

config.cosmosDBConnectionString = process.env.COSMOSDB_CONNECTIONSTRING;
config.databaseId = process.env.COSMOSDB_DATABASE || "MarabuDB";
config.flightUpdateSubscriberContainerId = process.env.COSMOSDB_FLIGHTUPDATESUBSCRIBER_CONTAINER || "FlightUpdateSubscribers";

module.exports = config;
