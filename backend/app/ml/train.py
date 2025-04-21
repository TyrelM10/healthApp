import mlflow
import mlflow.sklearn
from sklearn.ensemble import RandomForestClassifier
from sklearn.model_selection import train_test_split
from sklearn.metrics import accuracy_score, precision_score, recall_score, f1_score
import pandas as pd
import os

def load_data():
    # Load PIMA Indians Diabetes Dataset (replace with your dataset path or URL)
    url = "https://raw.githubusercontent.com/jbrownlee/Datasets/master/pima-indians-diabetes.data.csv"
    columns = ['pregnancies', 'glucose', 'blood_pressure', 'skin_thickness', 'insulin', 'bmi', 'diabetes_pedigree', 'age', 'outcome']
    data = pd.read_csv(url, names=columns)
    
    # For this example, we'll use a subset of features to match the API input
    features = ['age', 'bmi', 'glucose', 'blood_pressure', 'insulin']
    X = data[features]
    y = data['outcome']
    return X, y

def train_model():
    # Set MLflow tracking URI
    mlflow.set_tracking_uri(os.getenv("MLFLOW_TRACKING_URI", "http://localhost:5000"))
    mlflow.set_experiment("Diabetes_Risk_Prediction")

    # Load data
    X, y = load_data()
    
    # Split data
    X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)
    
    # Model parameters
    params = {
        "n_estimators": 100,
        "max_depth": 5,
        "random_state": 42
    }
    
    # Start MLflow run
    with mlflow.start_run():
        # Train model
        model = RandomForestClassifier(**params)
        model.fit(X_train, y_train)
        
        # Make predictions
        y_pred = model.predict(X_test)
        
        # Calculate metrics
        accuracy = accuracy_score(y_test, y_pred)
        precision = precision_score(y_test, y_pred)
        recall = recall_score(y_test, y_pred)
        f1 = f1_score(y_test, y_pred)
        
        # Log parameters and metrics to MLflow
        mlflow.log_params(params)
        mlflow.log_metric("accuracy", accuracy)
        mlflow.log_metric("precision", precision)
        mlflow.log_metric("recall", recall)
        mlflow.log_metric("f1_score", f1)
        
        # Log and save model
        model_path = "models/risk_model"
        mlflow.sklearn.log_model(model, "model")
        mlflow.sklearn.save_model(model, model_path)
        
        print(f"Model trained and saved to {model_path}")
        print(f"Metrics: Accuracy={accuracy:.3f}, Precision={precision:.3f}, Recall={recall:.3f}, F1={f1:.3f}")

if __name__ == "__main__":
    train_model()