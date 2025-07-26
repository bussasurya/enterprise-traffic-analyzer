# 🚦 Enterprise Traffic Analyzer

A self-contained **Dockerized monitoring system** that simulates API traffic and logs system behavior for real-time analysis—perfect for learning containerized microservices without external dependencies.

---

## 📦 Architecture

                 +-----------------+           +-----------------+
                 |  Traffic Producer  |  --->    |  Log Processor    |
                 |   (Flask App)       |  Logs   |   (Node.js App)    |
                 +-----------------+           +-----------------+
                          |
                          v
                    [shared/logs]  (Docker volume)

---

## 🧰 Features

- 🚀 **Synthetic Traffic Generation** (Flask)
- 📈 **Real-Time Log Processing** (Node.js)
- 📦 **Docker Compose** with shared volumes
- 🐳 Fully containerized, no cloud or DB dependency

---

## 📁 Folder Structure

enterprise-traffic-analyzer/
├── producer/          # Flask API traffic generator  
│   ├── app.py  
│   └── Dockerfile  
├── processor/         # Node.js log processor  
│   ├── index.js  
│   └── Dockerfile  
├── shared/            # Shared volume (logs)  
├── docker-compose.yml  
├── .gitignore  
└── README.md  

---

## 🚀 Getting Started

### 1. Clone the repo

    git clone https://github.com/bussasurya/enterprise-traffic-analyzer.git
    cd enterprise-traffic-analyzer

### 2. Run the stack

    docker compose up --build

### 3. Generate traffic

Open a new terminal and run:

    curl http://localhost:5000/generate

You’ll see live logs and stats from the processor.

---

## 🛑 Stop the system

    docker compose down

---

## 📌 Requirements

- Docker
- Docker Compose

---

## 🧠 Author

**B. Surya**  
Full-stack & DevOps enthusiast  
GitHub: [@bussasurya](https://github.com/bussasurya)

---

## 📜 License

MIT – Feel free to use, modify, and share.
