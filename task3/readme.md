DevOps Assignment 3: Set up a local Container Orchestration & Monitoring

📋 Project Overview
This project demonstrates a **multi-container Dockerized environment** using:

- **Node.js** → Simple Hello World app with DB connection
- **PostgreSQL** → Database service
- **Nginx** → Reverse proxy in front of the Node.js app
- **Portainer** → Container management UI

## 📂 Project Structure
node-express-hello-world/
├── Dockerfile
├── app.js
|-- db.js
├── package.json
├── docker-compose.yml
├── nginx/
│ └── default.conf
└── README.md      

# ⚙️ Services Overview

### 1️⃣ PostgreSQL (Database)
- Image: `postgres:15`
- User: `myuser`
- Password: `mypassword`
- Database: `mydb`
- Port: `5432`

### 2️⃣ Node.js App (Express)
- Runs on port **3000**
- Connects to PostgreSQL
- Example endpoint:  
  - `/` → Returns `Heyyo :)`
  - `/health` → Health check for Docker

### 3️⃣ Nginx (Reverse Proxy)
- Exposes the Node.js app at **http://localhost:8082**
- Forwards traffic from port **8082 → 3000**

### 4️⃣ Portainer (Management UI)
- Exposes **http://localhost:9000**
- Web-based Docker container manager

---

## 🐳 How to Run

**Clone this repository**
   git clone https://github.com/gautam-kathuria/node-express-hello-world.git
   cd node-express-hello-world

## Build & Start Containers
docker-compose up --build -d

## Check running containers
docker ps

## 🌐 Access Services
Node.js app directly → http://localhost:3000
Node.js app via Nginx → http://localhost:8082
Portainer UI → http://localhost:9000
PostgreSQL Database → localhost:5432

## 📊 Monitoring Features
Portainer Monitoring
Access http://localhost:9000 to view:

Real-time CPU usage
Memory consumption
Network I/O statistics
Filesystem usage
Container-specific metrics
Application Metrics

## 🛠️ Managing Database
# Connect to PostgreSQL inside container:
winpty docker exec -it mydb psql -U myuser -d mydb

# View logs
docker logs myapp
docker logs nginx
docker logd mydb

## Healthchecks
Postgres → pg_isready
Node.js → /health endpoint
Nginx & Portainer → Docker restart policy

## 🛑 Stopping the Application
# Stop all services
docker-compose down -v

## 📜 License
This project is created for educational purposes as part of DevOps Assignment 3.

Last Updated: 2025 Version: 1.0.0 Author: DevOps Team

