const fs = require('fs');
const path = require('path');

const LOG_FILE = path.join('/app/logs/traffic.log');

function isJsonString(str) {
  try {
    const json = JSON.parse(str);
    return json && typeof json === 'object';
  } catch (e) {
    return false;
  }
}

fs.watchFile(LOG_FILE, { interval: 1000 }, () => {
  fs.readFile(LOG_FILE, 'utf8', (err, data) => {
    if (err) {
      console.error('Error reading log file:', err);
      return;
    }

    const lines = data.trim().split('\n').slice(-10); // Read last 10 lines
    let requestCount = 0;
    let errorCount = 0;
    let latencies = [];

    lines.forEach(line => {
      // Extract JSON part of the line if it's inside logs
      const firstBrace = line.indexOf('{');
      const jsonPart = line.slice(firstBrace);

      if (isJsonString(jsonPart)) {
        try {
          const entry = JSON.parse(jsonPart);
          requestCount++;
          if (entry.status >= 400) errorCount++;
          latencies.push(entry.latency);
        } catch (e) {
          console.warn('⚠️  Log parse error:', e.message);
        }
      }
    });

    if (requestCount > 0) {
      latencies.sort((a, b) => a - b);
      const p90 = latencies[Math.floor(latencies.length * 0.9)];
      console.log(`📊 Stats (last 10 reqs) - Requests: ${requestCount}, Errors: ${errorCount}, p90 Latency: ${p90}s`);
    }
  });
});
