from fastapi import FastAPI, UploadFile, File
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
import shutil

from pdf_loader import extract_text
from chunker import create_chunks
from embedding import create_embeddings
from vector_store import VectorStore
from rag import ask_question

app = FastAPI(title="PDF AI Assistant")

# Allow React frontend to access the backend
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


class Question(BaseModel):
    question: str


@app.get("/")
def home():
    return {
        "message": "Backend Running Successfully"
    }


@app.post("/upload")
async def upload_pdf(file: UploadFile = File(...)):

    filepath = f"uploads/{file.filename}"

    with open(filepath, "wb") as buffer:
        shutil.copyfileobj(file.file, buffer)

    text = extract_text(filepath)

    chunks = create_chunks(text)

    embeddings = create_embeddings(chunks)

    store = VectorStore()

    store.build(chunks, embeddings)

    store.save()
    print(f"Uploaded PDF: {file.filename}")
    print(f"Number of chunks: {len(chunks)}")

    return {
        "message": "PDF Indexed Successfully"
    }


@app.post("/ask")
def ask(data: Question):

    answer = ask_question(data.question)

    return {
        "question": data.question,
        "answer": answer
    }