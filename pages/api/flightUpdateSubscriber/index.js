const CosmosClient = require('@azure/cosmos').CosmosClient;
const config = require("../../../lib/config");

export default async function handler(req, res) {
  if(!req.query.flightNumber) {
    res.status(400).send({body: "FlightNumber is required"});
    return;
  }

  try {
    const cosmosClient = new CosmosClient(config.cosmosDBConnectionString);
    var container = await cosmosClient.database(config.databaseId).container(config.flightUpdateSubscriberContainerId).read();

    const querySpec = {
      query: "SELECT * from c where c.flightNumber=@flightNumber and (IS_NULL(@flightDate) or c.flightDate=@flightDate)",
      parameters: [
        {
          name: "@flightDate",
          value: req.query.flightDate ? req.query.flightDate : null
        },
        {
          name: "@flightNumber",
          value: req.query.flightNumber
        }
      ]};
  
    var response = await container.container.items.query(querySpec).fetchAll();
  }
  catch(e) {
    console.error(e);
    res.status(400).send({body: "Something went wrong! Try again later."});
    return;
  }
  
  res.status(200).json(response.resources);
}