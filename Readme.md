# 🚀 Kubernetes 3-Tier DevOps Project

This project demonstrates a complete **3-tier application deployment** using modern DevOps tools and practices.

---

## 🧰 Tech Stack

* 🌐 Frontend: HTML + Nginx
* ⚙️ Backend: Node.js (Express)
* 🗄️ Database: MongoDB
* ☸️ Kubernetes: Deployment & Services
* 🐳 Docker: Containerization

---

## 📂 Project Structure

```
k8s-three-tier-project/
│
├── frontend/
│   ├── index.html
│   ├── Dockerfile
│   └── .env
│
├── backend/
│   ├── app.js
│   ├── package.json
│   ├── Dockerfile
│   └── .env
│
├── k8s/
│   ├── namespace.yaml
│   │
│   ├── backend/
│   │   ├── deployment.yaml
│   │   └── service.yaml
│   │
│   ├── frontend/
│   │   ├── deployment.yaml
│   │   └── service.yaml
│   │
│   └── database/
│       ├── deployment.yaml
│       └── service.yaml
│
├── docker-compose.yml
└── README.md
```

---

## 🧩 Architecture

```
User → Frontend → Backend → Database
```

---

## ⚙️ Prerequisites

Make sure you have installed:

* Docker
* Kubernetes (Minikube)
* kubectl

---

## 🚀 Setup & Run

### 1️⃣ Start Minikube

```bash
minikube start
```

---

### 2️⃣ Use Minikube Docker Environment

```bash
eval $(minikube docker-env)
```

---

### 3️⃣ Build Docker Images

```bash
docker build -t backend-app ./backend
docker build -t frontend-app ./frontend
```

---

### 4️⃣ Deploy to Kubernetes

```bash
kubectl apply -f k8s/
```

---

### 5️⃣ Check Pods

```bash
kubectl get pods -n devops-project
```

---

### 6️⃣ Access Application

```bash
minikube service frontend-service -n devops-project
```

---

## 🔍 Test Backend API

```bash
kubectl port-forward service/backend-service 3000:3000 -n devops-project
```

Open in browser:

```
http://localhost:3000/api
```

---

## 🐳 Docker Compose (Optional)

```bash
docker-compose up -d
```

---

## ⚡ Features

* Microservices-style architecture
* Kubernetes-based deployment
* Service-to-service communication
* Scalable backend using replicas
* Clean and modular DevOps structure

---

## 📌 Future Improvements

* Add Jenkins CI/CD pipeline
* Add Ingress Controller
* Add Monitoring (Prometheus & Grafana)
* Deploy on AWS (EKS)

---

