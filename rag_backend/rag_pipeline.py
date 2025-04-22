import os
from langchain.document_loaders import PyPDFLoader
from langchain.text_splitter import RecursiveCharacterTextSplitter
from langchain.embeddings import OllamaEmbeddings
from langchain.vectorstores import Chroma
from langchain.prompts import PromptTemplate
from langchain_community.chat_models import ChatOllama
from langchain.chains import RetrievalQA

class RAGPipeline:
    def __init__(self, persist_directory="./chroma_db"):
        self.persist_directory = persist_directory
        self.embedding_model = "nomic-embed-text"
        self.llm_model = "llama3.2:1b"
        self.vectorstore = None
        self.retriever = None
        self.qa_chain = None
        self._initialize()

    def _initialize(self):
        # Initialize embeddings
        embeddings = OllamaEmbeddings(model=self.embedding_model)
        
        # Check if vectorstore exists, otherwise create an empty one
        if os.path.exists(self.persist_directory):
            self.vectorstore = Chroma(persist_directory=self.persist_directory, embedding_function=embeddings)
        else:
            self.vectorstore = Chroma(persist_directory=self.persist_directory, embedding_function=embeddings)
        
        self.retriever = self.vectorstore.as_retriever(search_kwargs={"k": 3})
        
        # Initialize LLM
        llm = ChatOllama(model=self.llm_model, temperature=0.7)
        
        # Define prompt template
        prompt_template = """
        You are a knowledgeable Health Assistant. Use the following context to answer the user's question. If you don't know the answer, say so.
        Context: {context}
        Question: {question}
        Answer:
        """
        prompt = PromptTemplate(template=prompt_template, input_variables=["context", "question"])
        
        # Initialize QA chain
        self.qa_chain = RetrievalQA.from_chain_type(
            llm=llm,
            retriever=self.retriever,
            return_source_documents=True,
            chain_type_kwargs={"prompt": prompt}
        )

    def ingest_document(self, file_path):
        # Load and split the document
        loader = PyPDFLoader(file_path)
        documents = loader.load()
        
        # Chunk the documents
        text_splitter = RecursiveCharacterTextSplitter(chunk_size=1000, chunk_overlap=200)
        chunks = text_splitter.split_documents(documents)
        
        # Add to vectorstore
        self.vectorstore.add_documents(chunks)
        self.vectorstore.persist()
        return len(chunks)

    def query(self, question):
        if not self.qa_chain:
            return {"error": "RAG pipeline not initialized"}
        
        result = self.qa_chain({"query": question})
        return {
            "answer": result["result"],
            "sources": [doc.page_content for doc in result["source_documents"]]
        }