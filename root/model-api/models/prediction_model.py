import joblib

class DiabetesPredictionModel:
  def __init__(self):
    self.model = joblib.load('ml-model/random_forest_model.joblib')
  
  def predict(self, input_data):
    return self.model.predict(input_data)[0]
  
  def get_confidence_score(self, input_data):
    return max(self.model.predict_proba(input_data)[0])