# 🕹️ Valorant Stats Tracker

A full-stack application built with **FastAPI** (backend) and **React** (frontend) to collect and display rank and performance data for a user’s **Valorant** account. This project provides a web interface for visualizing player statistics.

---

## 🚀 Features

* Full-stack application with **FastAPI** backend and **React** frontend
* Collects rank and performance data from Valorant accounts
* Interactive React UI for displaying stats

---

## 📁 Repository Structure

```
Valorant-Stats-Tracker/
├── fast-api/                # FastAPI backend
├── react-app/               # React frontend
├── .gitignore
├── README.md
```

---

## 🛠 Prerequisites

* Python 3.8+
* Node.js & npm
* Code editor (e.g., VS Code)

---

## ⚙️ Backend Setup (FastAPI)

1. Navigate to the backend folder:

   ```bash
   cd fast-api
   ```

2. Create and activate a virtual environment:

   ```bash
   python -m venv venv
   source venv/bin/activate     # macOS/Linux
   venv\Scripts\activate      # Windows
   ```

3. Install dependencies manually (e.g., FastAPI, uvicorn, python-dotenv):

   ```bash
   pip install fastapi uvicorn python-dotenv requests
   ```

4. Create a `.env` file in the `fast-api` folder and add your Henrick API key:

   ```env
   HENRICK_API_KEY=your_api_key_here
   ```

5. Run the server:

   ```bash
   uvicorn main:app --reload
   ```

   Access the app at `http://localhost:8000`

---

## 📱 Frontend Setup (React)

1. Navigate to the React folder:

   ```bash
   cd react-app
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the development server:

   ```bash
   npm run dev
   ```

   Opens in browser at `http://localhost:3000`

---

## ⚠️ Disclaimer

This project is **not affiliated with Riot Games**. All Valorant data is for personal or educational use only. Use responsibly and respect Riot Games' terms of service.

## 📄 License

This project is licensed under the **MIT License**.

---

## 🙏 Acknowledgements

* Inspired by community trackers for Valorant stats and analytics
* Henrick API for providing player stats endpoints
