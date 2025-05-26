<div align="center">

![logo](/screenshots/logo.png)

<h1 align="center"><strong>🩺 Health Risk Prediction App</strong><h6 align="center">AI-powered health risk prediction and chatbot system</h6></h1>

![Python - 3.9](https://img.shields.io/badge/PYTHON-3.9+-blue?style=for-the-badge&logo=python&logoColor=white)
![FastAPI - 0.115.0](https://img.shields.io/badge/FastAPI-0.115.0-teal?style=for-the-badge&logo=fastapi)
![React - 18.2.0](https://img.shields.io/badge/React-18.2.0-blue?style=for-the-badge&logo=react)
![Ollama - 0.4](https://img.shields.io/badge/Ollama-0.4+-orange?style=for-the-badge&logo=ollama)
![MLflow - 2.16.2](https://img.shields.io/badge/MLflow-2.16.2-red?style=for-the-badge&logo=mlflow)
[![Generic badge](https://img.shields.io/badge/License-MIT-blue.svg?style=for-the-badge)](LICENSE)
[![GitHub Issues](https://img.shields.io/github/issues/TyrelM10/healthApp.svg?style=for-the-badge)](https://github.com/TyrelM10/healthApp/issues)
![Contributions welcome](https://img.shields.io/badge/contributions-welcome-orange.svg?style=for-the-badge)

</div>

---

> [!IMPORTANT]  
> 📋 Version Updates from v1.0:  
> 1. **Interactive Frontend Design**: Features a responsive layout with Tailwind CSS, a side-overlay chatbot, and smooth form interactions.  
> 2. **Health Risk Prediction**: Integrates a RandomForestClassifier model trained on the PIMA Indians Diabetes Dataset, logged via MLflow.  
> 3. **RAG Chatbot**: Implements a local RAG system using Ollama (Llama 3.2 1B and nomic-embed-text) for health-related queries.  
> 4. **CORS Middleware**: Added FastAPI CORS support for seamless communication between frontend (`http://localhost:5173`) and backends (`http://localhost:8000`, `http://localhost:8001`).  
> 5. **CI/CD Integration**: GitHub Actions automates model training, testing, and deployment for continuous improvement of ML models.

---

## 📚 Table of Contents
- [Overview](#overview)
- [Technical Flow Chart](#technical-flowchart)
- [Key Features](#key-features)
- [Technology Stack](#technology-stack)
- [Installation and Setup](#installation-setup)
  - [Using Docker](#docker-setup)
  - [Manual Installation](#manual-setup)
- [Usage](#usage)
- [Contributions](#contributions)
- [License](#license)
- [Contact](#contact)

---

## 📌 Overview <a name="overview"></a>

The **Health Risk Prediction App** is an **AI-powered web application** designed to **predict health risks** (e.g., diabetes) based on user-submitted health metrics and provide health-related information via a RAG-powered chatbot.  

🚀 **Powered by Local AI and ML**, this system integrates:  
- **🤖 Machine Learning**: RandomForestClassifier for health risk prediction, tracked with MLflow.  
- **📚 RAG Chatbot**: Local Ollama models (Llama 3.2 1B and nomic-embed-text) for answering health queries using ingested documents.  
- **🌐 Responsive Frontend**: Built with React and Tailwind CSS, featuring a clean UI and side-overlay chatbot.  
- **⚡ Scalable Backend**: FastAPI servers for health data management and RAG query processing, with PostgreSQL for data storage.

### Health Risk Prediction App - Screenshots

Below are two screenshots of the Health Risk Prediction App.

<div style="margin-bottom: 20px;">
  <img src="/screenshots/home.png" alt="Home Page" width="600">
</div>
<div>
  <img src="/screenshots/prediction.png" alt="Prediction Page" width="600">
</div>


### **What You’ll Learn from This Project** 📖  
🔹 **👨‍💻 Machine Learning Integration**: Train and deploy ML models with MLflow and FastAPI.  
🔹 **🔍 RAG Implementation**: Build a local RAG system for health data queries.  
🔹 **⚡ Modern Frontend Design**: Create responsive UIs with React and Tailwind CSS.  
🔹 **🔒 Scalable Backend**: Use FastAPI and SQLAlchemy for robust data handling.

📂 **For learners**: Refer to `health-app-backend/app/main.py`, `backend/api.py`, and `frontend/src/App.jsx` for detailed code comments explaining the ML and RAG workflows!

---

## 🛡️ Technical Flow Chart <a name="technical-flowchart"></a>

![Technical Flow Chart](/screenshots/architecture.png)

*Flowchart*: The system collects health data via a React frontend, sends it to a FastAPI backend for storage and ML-based risk prediction, and uses a separate FastAPI server with Ollama for RAG-based chatbot responses from ingested health documents.

---

## ✨ Key Features <a name="key-features"></a>

- 🤖 **Health Risk Prediction**: Predicts diabetes risk using a RandomForestClassifier trained on the PIMA Indians Diabetes Dataset, logged via MLflow.  
- 📚 **RAG-Powered Chatbot**: Answers health-related queries using local Ollama models and ingested documents (e.g., PDFs).  
- 💻 **Responsive UI**: React frontend with Tailwind CSS, featuring a health data form, prediction display, and side-overlay chatbot.  
- ⚡ **Continuous Model Improvement**: CI/CD pipeline with GitHub Actions automates model training and evaluation.  
- 🔄 **Data Management**: Stores health metrics in PostgreSQL via FastAPI and SQLAlchemy.  
- 🌐 **CORS Support**: Ensures seamless frontend-backend communication across ports.  
- 📜 **Local AI Processing**: Runs all AI models (ML and RAG) locally for privacy.

> [!NOTE]  
> Upcoming features:  
> 1. Support for additional health risk models (e.g., heart disease).  
> 2. Enhanced RAG with larger document ingestion.  
> 3. User authentication for personalized data tracking.  
> 4. Open to suggestions and contributions.

---

## 🛠️ Technology Stack <a name="technology-stack"></a>

| Component | Technologies |
|-----------|-------------|
| 🔹 **Backend Framework** | FastAPI, SQLAlchemy |
| 🔹 **Machine Learning** | scikit-learn, MLflow |
| 🔹 **RAG System** | Ollama (Llama 3.2 1B, nomic-embed-text), LangChain |
| 🔹 **Database** | PostgreSQL |
| 🔹 **Frontend** | React, Tailwind CSS, react-router-dom |
| 🔹 **Deployment** | Vite (frontend), Uvicorn (backend), Docker |

**Backend Dependencies** (from `health-app-backend/requirements.txt`):  
- `fastapi==0.115.0`, `uvicorn==0.30.6`, `sqlalchemy==2.0.35`  
- `mlflow==2.16.2`, `scikit-learn==1.5.2`, `pandas==2.2.3`  
- `ollama==0.4.8`, `langchain==0.3.3`, `psycopg2-binary==2.9.9`  
- Full list in `health-app-backend/requirements.txt`.

**Frontend Dependencies** (from `frontend/package.json`):  
- `react==18.2.0`, `react-dom==18.2.0`  
- `axios==1.7.2`, `tailwindcss==3.4.13`, `react-router-dom==6.26.2`  
- Full list in `frontend/package.json`.

---

## 🚀 Installation & Setup <a name="installation-setup"></a>

## 📌 Option 1: Using Docker <a name="docker-setup"></a>

### Prerequisites:
- [Docker](https://docs.docker.com/get-docker/) installed
- [Ollama](https://ollama.ai) running separately for LLM support
- PostgreSQL instance (local or cloud)

### 1️⃣ Clone the Repository
```bash
git clone https://github.com/TyrelM10/healthApp.git
cd healthApp
```

### 2️⃣ Create Environment Files
Create `health-app-backend/.env`:
```bash
DATABASE_URL=postgresql://user:password@localhost:5432/health_db
MLFLOW_TRACKING_URI=http://localhost:5000
```
Create `backend/.env`:
```bash
OLLAMA_HOST=http://localhost:11434
```

### 3️⃣ Set Up Ollama
Run Ollama in a separate terminal or as a service:
```bash
ollama serve
ollama pull llama3.2:1b
ollama pull nomic-embed-text
```
Verify:
```bash
ollama list
```
Ensure `llama3.2:1b` and `nomic-embed-text` are listed.

### 4️⃣ Build the Docker Images
```bash
cd health-app-backend
docker build -t health-app-backend .
cd ../backend
docker build -t health-rag-backend .
cd ../frontend
docker build -t health-app-frontend .
```

### 5️⃣ Run the Docker Containers
```bash
docker run -d --name health-app-backend -p 8001:8000 --env-file health-app-backend/.env health-app-backend
docker run -d --name health-rag-backend -p 8000:8000 --env-file backend/.env health-rag-backend
docker run -d --name health-app-frontend -p 5173:5173 health-app-frontend
```
- Health Backend: [http://localhost:8001](http://localhost:8001)
- RAG Backend: [http://localhost:8000](http://localhost:8000)
- Frontend: [http://localhost:5173](http://localhost:5173)

### Managing the Containers:
#### Stop the Containers
```bash
docker stop health-app-backend health-rag-backend health-app-frontend
```

#### Start the Containers
```bash
docker start health-app-backend health-rag-backend health-app-frontend
```

#### View Logs
```bash
docker logs health-app-backend
docker logs health-rag-backend
docker logs health-app-frontend
```

#### Remove the Containers
```bash
docker rm health-app-backend health-rag-backend health-app-frontend
```

### Troubleshooting:
#### Container Health Check
```bash
docker inspect --format='{{.State.Health.Status}}' health-app-backend
```

#### Container Not Starting
Check logs for errors:
```bash
docker logs health-app-backend
```
Ensure Ollama and PostgreSQL are running and environment variables are correct.

## 📌 Option 2: Manual Installation <a name="manual-setup"></a>

### Prerequisites:
- Python 3.9+
- Node.js 18+, npm 9+
- [Ollama](https://ollama.ai) for local LLM support
- PostgreSQL instance
- MLflow server

### 1️⃣ Clone the Repository
```bash
git clone https://github.com/TyrelM10/healthApp.git
cd healthApp
```

### 2️⃣ Health Backend Setup
#### Create & Activate Virtual Environment
```bash
cd health-app-backend
python -m venv venv
source venv/bin/activate  # Mac/Linux
venv\Scripts\activate     # Windows
```

#### Install Dependencies
```bash
pip install -r requirements.txt
```

#### Set Up Environment Variables
Create `health-app-backend/.env`:
```bash
DATABASE_URL=postgresql://user:password@localhost:5432/health_db
MLFLOW_TRACKING_URI=http://localhost:5000
```

#### Run MLflow Server
```bash
mlflow server --host 0.0.0.0 --port 5000
```

#### Train Model
```bash
python app/ml/train.py
```

#### Run the Backend
```bash
uvicorn app.main:app --port 8001 --reload
```
Health Backend available at: [http://localhost:8001](http://localhost:8001)

### 3️⃣ RAG Backend Setup
#### Create & Activate Virtual Environment
```bash
cd ../backend
python -m venv venv
source venv/bin/activate  # Mac/Linux
venv\Scripts\activate     # Windows
```

#### Install Dependencies
```bash
pip install -r requirements.txt
```

#### Set Up Environment Variables
Create `backend/.env`:
```bash
OLLAMA_HOST=http://localhost:11434
```

#### Run the Backend
```bash
uvicorn api:app --port 8000 --reload
```
RAG Backend available at: [http://localhost:8000](http://localhost:8000)

### 4️⃣ Frontend Setup
#### Navigate to Frontend
```bash
cd ../frontend
```

#### Install Dependencies
```bash
npm install
```

#### Run the Frontend
```bash
npm run dev
```
Frontend available at: [http://localhost:5173](http://localhost:5173)

### 5️⃣ Ollama Setup
#### Install Ollama
Follow instructions at [ollama.ai](https://ollama.ai).

#### Run Ollama Server
```bash
ollama serve
```

#### Pull Models
```bash
ollama pull llama3.2:1b
ollama pull nomic-embed-text
```

#### Verify
```bash
ollama list
```
Ensure `llama3.2:1b` and `nomic-embed-text` are listed.

---

## 🧠 Usage <a name="usage"></a>

> [!NOTE]  
> 1. The first run may take time as Ollama downloads models.  
> 2. Ensure Ollama, MLflow, and both backends home are running before starting the frontend.  
> 3. Check browser console (F12) for frontend errors and backend terminals for warnings.

- Open [http://localhost:5173](http://localhost:5173) to access the app.  
- Navigate to **Home** for health tips.  
- Use **Health Data** to submit metrics (age, BMI, glucose, etc.).  
- Visit **Predictions** to get risk predictions.  
- Interact with the **Chatbot** to ask health-related questions.  
- Ingest health PDFs via [http://localhost:8000/ingest](http://localhost:8000/ingest) or `streamlit run backend/ingest_ui.py`.

---

## 🤝 Contributions <a name="contributions"></a>
Contributions are welcome! Check the [issues](https://github.com/TyrelM10/healthApp/issues) tab for feature requests and improvements.  

To contribute:
1. Fork the repository.
2. Create a feature branch (`git checkout -b feature/YourFeature`).
3. Commit changes (`git commit -m 'Add YourFeature'`).
4. Push to the branch (`git push origin feature/YourFeature`).
5. Open a Pull Request.

---

## ⚖️ License <a name="license"></a>
This project is licensed under the **MIT License**. See the [LICENSE](LICENSE) file for details.

---

## 📬 Contact <a name="contact"></a>
For questions or collaboration inquiries, reach out to **Tyrel Menezes** on:  

🔗 **LinkedIn**: [https://www.linkedin.com/in/tyrel-menezes](https://www.linkedin.com/in/tyrel-menezes)  
🔗 **GitHub**: [https://github.com/TyrelM10](https://github.com/TyrelM10)  

<p align="right">
 <a href="#top"><b>🔝 Return </b></a>
</p>