# 🚀 Kubernetes 3-Tier DevOps Project

<!-- This project demonstrates a basic 3-tier architecture -->

<!-- Frontend → Backend → (Database can be added later) -->

---

## 🧰 Tech Stack

* 🌐 Frontend: HTML + Nginx
* ⚙️ Backend: Node.js (Express)
* 🐳 Docker: Containerization
* 📦 Docker Compose: Multi-container orchestration
* ☸️ Kubernetes: (for future deployment)

---

## 📂 Project Structure

```bash
k8s-three-tier-project/
│
├── frontend/        # UI files (HTML + Nginx)
├── backend/         # Node.js API
├── k8s/             # Kubernetes YAML files
├── docker-compose.yml
└── README.md
```

---

## 🧩 Architecture

```text
User → Frontend → Backend
```

---

## ⚙️ Prerequisites

<!-- Make sure these are installed -->

* Docker
* Docker Compose

---

# 🐳 Docker Compose Setup

<!-- This is the main way to run the project -->

---

## ▶️ Start Application

```bash
docker-compose up -d --build
```

<!-- Or for newer Docker versions -->

```bash
docker compose up -d --build
```

👉 This command will:

* Build Docker images
* Start all containers

---

## ⏹️ Stop Application

```bash
docker-compose down
```

👉 This will:

* Stop containers
* Remove network

---

## 🔄 Rebuild Containers

```bash
docker-compose up -d --build
```

---

## 📊 Check Running Containers

```bash
docker ps
```

👉 Expected:

* frontend running
* backend running

---

## 📜 Check Logs

```bash
docker logs backend
docker logs frontend
```

---

## 🌐 Access Application

```text
http://<EC2-PUBLIC-IP>:8080
```

---

## 🧪 Test Backend API

```text
http://<EC2-PUBLIC-IP>:3000/api
```

---

## ⚡ Features

* Multi-container DevOps project
* Frontend ↔ Backend communication
* Lightweight deployment
* Beginner-friendly structure

---

## ❗ Important Notes

<!-- Important configuration points -->

* Update frontend API URL:

```javascript
fetch("http://<EC2-PUBLIC-IP>:3000/api")
```

* Enable CORS in backend
* Open required ports in EC2 Security Group:

  * 8080 (Frontend)
  * 3000 (Backend)

---

## 📌 Future Improvements

* Kubernetes deployment
* Jenkins CI/CD pipeline
* Monitoring (Prometheus & Grafana)
* Deploy on AWS (EKS)

---


