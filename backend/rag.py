import os
import pickle
import faiss
from groq import Groq
from dotenv import load_dotenv
from embedding import get_model


load_dotenv()

client = Groq(api_key=os.getenv("GROQ_API_KEY"))




def ask_question(question):

    # Load latest FAISS index
    index = faiss.read_index("vector_db/index.faiss")

    # Load latest chunks
    with open("vector_db/chunks.pkl", "rb") as f:
        chunks = pickle.load(f)
    print(f"Loaded {len(chunks)} chunks")
    print("First chunk:")
    print(chunks[0][:200])

    # Convert question to embedding
    model = get_model()

    query_embedding = model.encode([question])

    # Search FAISS
    distances, indices = index.search(query_embedding, k=3)

    # Retrieve top chunks
    context = "\n\n".join([chunks[i] for i in indices[0]])

    prompt = f"""
You are a helpful AI assistant.

Answer ONLY using the provided context.
If the answer is not present in the context, say:
"I couldn't find that information in the uploaded PDF."

Context:
{context}

Question:
{question}
"""

    response = client.chat.completions.create(
        model="llama-3.3-70b-versatile",
        messages=[
            {
                "role": "user",
                "content": prompt
            }
        ]
    )

    return response.choices[0].message.content