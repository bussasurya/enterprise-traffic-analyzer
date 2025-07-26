from flask import Flask
import time
import random
import logging
import os
from datetime import datetime
import json

app = Flask(__name__)

# Set up logging
LOG_DIR = "logs"
os.makedirs(LOG_DIR, exist_ok=True)
log_file = os.path.join(LOG_DIR, "traffic.log")

logging.basicConfig(
    level=logging.INFO,
    format="%(asctime)s - %(message)s",
    handlers=[logging.FileHandler(log_file), logging.StreamHandler()]
)

endpoints = ['/users', '/orders', '/inventory']
status_codes = [200, 404, 500]

def generate_log():
    endpoint = random.choice(endpoints)
    status = random.choice(status_codes)
    latency = round(random.uniform(0.1, 2.0), 3)

    log_entry = {
        'timestamp': datetime.utcnow().isoformat(),
        'endpoint': endpoint,
        'status': status,
        'latency': latency
    }

    logging.info(json.dumps(log_entry))
    return endpoint, status

@app.route('/')
def root():
    return 'Traffic Generator is running.'

@app.route('/<path:endpoint>')
def simulate_traffic(endpoint):
    time.sleep(random.uniform(0.1, 2.0))  # Simulate delay
    _, status = generate_log()
    return f'{endpoint} hit logged with status {status}', status

@app.route('/health')
def health():
    return 'OK', 200

if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0')
