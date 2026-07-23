import faiss
import pickle
import numpy as np


class VectorStore:

    def __init__(self):
        self.index = None
        self.chunks = []

    def build(self, chunks, embeddings):

        dimension = embeddings.shape[1]

        self.index = faiss.IndexFlatL2(dimension)

        self.index.add(np.array(embeddings))

        self.chunks = chunks

    def save(self):

        faiss.write_index(
            self.index,
            "vector_db/index.faiss"
        )

        with open("vector_db/chunks.pkl", "wb") as f:

            pickle.dump(self.chunks, f)