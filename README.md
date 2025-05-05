# Tukano

Cloud-native short videos platform proof of concept, deployed in Azure. 

Developed as part of the Cloud Computing course 2024/25 @ NOVA SST.

## Deployment Stack

- Webserver 
	- Azure App Service (geo-distributed)
- Serverless
	- Azure Functions
- Cache 
	- Azure Cache for Redis
- Database 
	- Cosmos DB for PostgreSQL (geo-replicated)
	- CosmosDB NoSQL (geo-distributed)
- Storage
	- Azure Blob Storage
- Routing
	- Azure Traffic Manager is used for routing between the geo-distributed services, ensuring the user connects to the closest region.

## Developers

- [Francisco Moura](https://github.com/ftemoura)
- [Guilherme Fernandes](https://github.com/Gui28F)
