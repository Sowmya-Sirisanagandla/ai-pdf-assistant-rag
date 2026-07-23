from pdf_loader import extract_text
from chunker import create_chunks
from embedding import create_embeddings
from vector_store import VectorStore

pdf_path = "uploads/sample.pdf"

text = extract_text(pdf_path)

chunks = create_chunks(text)

embeddings = create_embeddings(chunks)

store = VectorStore()

store.build(chunks, embeddings)

store.save()

print("Vector Database Created Successfully")