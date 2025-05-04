# Tukano - Azure version 

> The `k8s`  branch uses a Kubernetes based deployment on AKS, and the `azure` branch leverages multiple Azure services.

Cloud-native short videos platform proof of concept, created for Cloud Computing course 2024/25 @ NOVA SST.

Team:
- [Francisco Moura](https://github.com/ftemoura)
- [Guilherme Fernandes](https://github.com/Gui28F)
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
