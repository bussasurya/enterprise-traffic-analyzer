# ~/enterprise-traffic-analyzer/producer/Dockerfile

FROM python:3.11-slim

WORKDIR /app

COPY app.py .

RUN pip install flask

RUN mkdir -p /app/logs

CMD ["python", "app.py"]

