import pickle
import faiss
import numpy as np

from embedding import model

# Load FAISS index
index = faiss.read_index("vector_db/index.faiss")

# Load chunks
with open("vector_db/chunks.pkl", "rb") as f:
    chunks = pickle.load(f)

while True:
    question = input("\nAsk a question (type 'exit' to quit): ")

    if question.lower() == "exit":
        break

    # Create embedding for the question
    query_embedding = model.encode([question], convert_to_numpy=True)

    # Search top 3 similar chunks
    distances, indices = index.search(np.array(query_embedding), 3)

    print("\nTop Matching Chunks:\n")

    for i in indices[0]:
        print("-" * 60)
        print(chunks[i])