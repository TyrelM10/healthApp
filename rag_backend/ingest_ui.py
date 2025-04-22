import streamlit as st
from rag_pipeline import RAGPipeline
import os

st.title("HealthGuard Document Ingestion")

rag = RAGPipeline()

uploaded_file = st.file_uploader("Upload a PDF document", type=["pdf"])

if uploaded_file is not None:
    # Save the uploaded file temporarily
    temp_file_path = f"temp_{uploaded_file.name}"
    with open(temp_file_path, "wb") as f:
        f.write(uploaded_file.read())
    
    if st.button("Ingest Document"):
        with st.spinner("Ingesting document..."):
            num_chunks = rag.ingest_document(temp_file_path)
            st.success(f"Document ingested successfully. {num_chunks} chunks added.")
        
        # Clean up
        os.remove(temp_file_path)

if st.button("Clear Vector Store"):
    rag.vectorstore.delete_collection()
    rag.vectorstore.persist()
    st.success("Vector store cleared.")