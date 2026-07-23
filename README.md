# AI PDF Assistant using Retrieval-Augmented Generation (RAG)

## Overview

AI PDF Assistant is an end-to-end Retrieval-Augmented Generation (RAG) application that enables users to upload PDF documents and ask questions in natural language. The application extracts text from uploaded PDF files, converts the text into vector embeddings, stores them in a FAISS vector database, retrieves the most relevant document chunks, and generates context-aware answers using the Groq API.

This project demonstrates the complete workflow of a modern AI application using React, FastAPI, LangChain, FAISS, Sentence Transformers, and Groq LLM inference.

---

## Features

- Upload PDF documents
- Extract text from uploaded PDFs
- Automatic text chunking
- Generate semantic embeddings
- Store embeddings using FAISS
- Retrieval-Augmented Generation (RAG)
- AI-powered question answering
- Interactive chat interface
- FastAPI REST API
- React frontend
- Responsive user interface

---

## Tech Stack

### Frontend

- React.js
- React Router DOM
- JavaScript (ES6)
- CSS3
- Vite

### Backend

- FastAPI
- Uvicorn
- Python

### AI Technologies

- LangChain
- FAISS
- Sentence Transformers
- PyMuPDF
- Groq API

---

## Project Structure

```text
AI-PDF-Assistant/
│
├── backend/
│   ├── app.py
│   ├── build_index.py
│   ├── chunker.py
│   ├── embedding.py
│   ├── pdf_loader.py
│   ├── rag.py
│   ├── requirements.txt
│   ├── .env
│   └── vector_db/
│       ├── index.faiss
│       └── chunks.pkl
│
├── frontend/
│   ├── src/
│   │
│   ├── components/
│   │   ├── Header.jsx
│   │   ├── UploadBox.jsx
│   │   ├── ChatBox.jsx
│   │   ├── Message.jsx
│   │   └── InputBox.jsx
│   │
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── Chat.jsx
│   │   └── History.jsx
│   │
│   ├── styles/
│   │
│   ├── App.jsx
│   ├── main.jsx
│   ├── package.json
│   └── vite.config.js
│
├── README.md
└── .gitignore
```

---

# Installation

## 1. Clone the Repository

```bash
git clone https://github.com/your-username/AI-PDF-Assistant.git

cd AI-PDF-Assistant
```

---

# Backend Setup

Navigate to the backend folder.

```bash
cd backend
```

Create a virtual environment.

### Windows

```bash
python -m venv venv
```

Activate the virtual environment.

### Windows

```bash
venv\Scripts\activate
```

### Linux/macOS

```bash
source venv/bin/activate
```

Install the required dependencies.

```bash
pip install -r requirements.txt
```

---

# Configure Environment Variables

Create a `.env` file inside the backend directory.

```env
GROQ_API_KEY=your_groq_api_key_here
```

---

# Run the Backend Server

```bash
uvicorn app:app --reload
```

Backend will start at

```text
http://127.0.0.1:8000
```

---

# Frontend Setup

Open a new terminal.

Navigate to the frontend directory.

```bash
cd frontend
```

Install the required packages.

```bash
npm install
```

Start the React development server.

```bash
npm run dev
```

Frontend will start at

```text
http://localhost:5173
```

---

# Running the Application

### Step 1

Start the FastAPI backend.

```bash
uvicorn app:app --reload
```

### Step 2

Start the React frontend.

```bash
npm run dev
```

### Step 3

Open your browser.

```
http://localhost:5173
```

### Step 4

Upload a PDF document.

### Step 5

Wait until the PDF is processed and indexed.

### Step 6

Ask questions related to the uploaded PDF.

The application retrieves the most relevant document chunks using semantic search and generates an AI-powered answer using the Groq LLM.

---

# How It Works

```
User Uploads PDF
        │
        ▼
FastAPI Receives PDF
        │
        ▼
Extract Text using PyMuPDF
        │
        ▼
Split Text into Chunks
        │
        ▼
Generate Embeddings
        │
        ▼
Store Embeddings in FAISS
        │
        ▼
User Asks a Question
        │
        ▼
Retrieve Relevant Chunks
        │
        ▼
Send Context + Question to Groq LLM
        │
        ▼
Generate AI Response
        │
        ▼
Display Response in React Chat Interface
```

---

# API Endpoints

## Upload PDF

```
POST /upload
```

Uploads the PDF, extracts text, creates embeddings, and builds the FAISS vector index.

---

## Ask Question

```
POST /ask
```

### Request

```json
{
    "question": "What is Machine Learning?"
}
```

### Response

```json
{
    "answer": "Machine Learning is..."
}
```

---

# Example Workflow

1. Start the backend server.
2. Start the React frontend.
3. Open the application in your browser.
4. Upload a PDF document.
5. Wait for indexing to complete.
6. Type your question in the chat box.
7. Receive an AI-generated answer based on the uploaded document.

---

# Future Enhancements

- Multiple PDF support
- Chat history
- PDF citations with page numbers
- Streaming AI responses
- Drag-and-drop PDF upload
- Authentication
- Docker support
- Cloud deployment
- Mobile-friendly interface

---

# Screenshots

## Home Page

*Add screenshot here*

---

## Chat Interface

*Add screenshot here*

---

## Upload PDF

*Add screenshot here*

---

# Live Demo

Frontend: *Coming Soon*

Backend: *Coming Soon*

---

# Acknowledgements

This project was built using the following open-source technologies:

- React
- FastAPI
- LangChain
- FAISS
- Sentence Transformers
- PyMuPDF
- Groq API

---

# Author

**Sowmya Sirisanagandla**

GitHub: https://github.com/your-username

LinkedIn: https://linkedin.com/in/your-profile

---

# License

This project is licensed under the MIT License.