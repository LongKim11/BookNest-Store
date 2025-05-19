# 📚 MERN Stack Bookstore

🎥 [Demo Video](https://youtu.be/gwvFhrjUSx0)

A scalable bookstore web app built with ReactJS, NodeJS, MongoDB—containerized with Docker Compose and enhanced by Nginx load balancing and Redis caching.

---

## 🧱 Tech Stack

- ReactJS + TailwindCSS (Frontend)  
- NodeJS + ExpressJS (Backend)  
- MongoDB (Database)  
- Redis (Caching)  
- Nginx (Reverse Proxy + Load Balancer)  
- Docker Compose & Docker Swarm (Containerization)

---

## ⚙️ Features

- Full CRUD operations on `Book` model (`title`, `author`, `publishYear`)
- Responsive UI with TailwindCSS
- Redis caches individual book info on first fetch
- Nginx balances traffic across replicated backend containers
- Docker Compose manages multi-service architecture
- Docker Swarm deployment with internal registry for image hosting

---

## 🗂 Project Structure

```bash
mernstack-bookstore/
├── frontend/         # React app with Tailwind
├── backend/          # Express API & Dockerfile
├── reverse-proxy/    # Nginx config
├── docker-swarm/     # Swarm-ready compose file
└── docker-compose.yml
```
---

## 🧪 Deployment Levels

### 🔹 Level 1: Basic Docker Compose
- `docker-compose up` to build and run all services.
- Access the app at: [http://localhost:5173](http://localhost:5173)
- Perform full CRUD operations on Book data.

### 🔹 Level 2: Load Balancing & Caching
- Added **Nginx** as a reverse proxy for backend replicas.
- Added **Redis** to cache book details.
- Test Load Balancing:  
  Run `curl http://localhost:8092` multiple times to see request distribution across backend containers.
- Test Redis Cache:  
  Fetch a book detail twice → second response includes `"isCached": true`.

### 🔹 Level 3: Docker Swarm Deployment
- Initialize Swarm: `docker swarm init`
- Create private registry:  
  `docker service create --name registry --publish 5000:5000 registry:2`
- Push images: `docker compose push`
- Deploy stack: `docker stack deploy --compose-file docker-compose.yml mernstack`
