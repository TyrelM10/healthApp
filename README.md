# Health Risk Prediction App

## Overview

A full-stack web app to predict health risks using user-submitted data (age, BMI, glucose, etc.) with a React frontend, FastAPI backend, and a RAG chatbot powered by Ollama for health-related queries. The app is responsive and runs all AI locally for privacy.

## Features

- Submit health data and predict risks.
- Responsive UI with a side-overlay chatbot.
- Local RAG chatbot for health questions.

## Setup

1. **Clone the repo**:

   ```bash
   git clone https://github.com/TyrelM10/healthApp.git
   cd healthApp
   ```

2. **Backend (Health Data)**:

   ```bash
   cd health-app-backend
   python -m venv venv
   source venv/bin/activate
   pip install -r requirements.txt
   python app/ml/train.py
   uvicorn app.main:app --port 8001 --reload
   ```

3. **RAG Backend**:

   - Install Ollama, pull models: `ollama pull llama3.2:1b nomic-embed-text`, and run `ollama serve`.

   ```bash
   cd ../backend
   python -m venv venv
   source venv/bin/activate
   pip install -r requirements.txt
   uvicorn api:app --port 8000 --reload
   ```

4. **Frontend**:

   ```bash
   cd ../frontend
   npm install
   npm run dev
   ```

   - Access at `http://localhost:5173`.

## Usage

- **Home**: View health tips.
- **Health Data**: Submit metrics.
- **Predictions**: Get risk predictions.
- **Chatbot**: Ask health questions.

## Notes

- Ingest health PDFs via `http://localhost:8000/ingest` or use `streamlit run backend/ingest_ui.py`.
- Ensure both FastAPI servers are running.

## License

MIT License.