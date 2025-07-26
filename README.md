# 🚦 Enterprise Traffic Analyzer (Dockerized)

An enterprise-grade traffic monitoring system using **Docker**.  
Simulates API traffic logs, processes them in real-time, and reports key metrics like errors, latency, and endpoints — using a shared volume between services.

## 🔧 Stack

- 🐍 Python + Flask (Traffic Producer)
- 🟦 Node.js (Log Processor)
- 🐳 Docker + Docker Compose
- 📁 Shared Volume for inter-container logging

## 📦 Architecture

\`\`\`
+--------------------+      Shared Volume     +--------------------+
| Traffic Producer   |   ─────────────────▶   | Log Processor       |
| (Python/Flask App) |                        | (Node.js)           |
| Random API Traffic |                        | Stats, Alerts, Logs |
+--------------------+                        +--------------------+
\`\`\`

## 📁 Folder Structure

\`\`\`
enterprise-traffic-analyzer/
├── producer/
│   └── app.py
│   └── Dockerfile
├── processor/
│   └── index.js
│   └── Dockerfile
├── shared/                # Mounted log volume
├── docker-compose.yml
└── README.md
\`\`\`

## 🐳 Run Locally (No Cloud Needed!)

\`\`\`bash
# Build & run both containers
docker compose up --build
\`\`\`

Then test it:

\`\`\`bash
curl http://localhost:5000/generate
\`\`\`

📊 Output will be visible from log-processor.

## 💡 Features

- Simulated API traffic with random:
  - Endpoints (\`/users\`, \`/orders\`, etc.)
  - Latency spikes
  - Error injection
- Real-time log file monitoring via shared volume
- Summary stats: total reqs, error count, p90 latency

## 🚀 Future Ideas

- Save stats to SQLite
- Expose processor metrics via Express API
- Alerting system on high error rates
- Integration with Grafana or Prometheus

---

Made with ❤️ by [Surya](https://github.com/your-github-username)
EOF

