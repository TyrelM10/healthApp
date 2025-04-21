import mlflow.sklearn
import pandas as pd
import os

def predict_risk(input_data):
    model_path = "models/risk_model"
    if not os.path.exists(model_path):
        raise Exception("Model not found. Please train the model first.")
    
    model = mlflow.sklearn.load_model(model_path)
    input_df = pd.DataFrame([input_data])
    prediction = model.predict_proba(input_df)[:, 1][0]
    return prediction