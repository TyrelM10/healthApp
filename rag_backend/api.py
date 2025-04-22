from fastapi import FastAPI, UploadFile, File, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from rag_pipeline import RAGPipeline
from pydantic import BaseModel
import os

app = FastAPI()

# Enable CORS to allow React frontend to communicate with the backend
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],  # React frontend URL
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

rag = RAGPipeline()

class QueryRequest(BaseModel):
    question: str

@app.post("/ingest")
async def ingest_document(file: UploadFile = File(...)):
    try:
        # Save the uploaded file temporarily
        temp_file_path = f"temp_{file.filename}"
        with open(temp_file_path, "wb") as f:
            f.write(await file.read())
        
        # Ingest the document
        num_chunks = rag.ingest_document(temp_file_path)
        
        # Clean up
        os.remove(temp_file_path)
        return {"message": f"Document ingested successfully. {num_chunks} chunks added."}
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Error ingesting document: {str(e)}")

@app.post("/query")
async def query_rag(request: QueryRequest):
    try:
        result = rag.query(request.question)
        if "error" in result:
            raise HTTPException(status_code=500, detail=result["error"])
        return result
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Error processing query: {str(e)}")