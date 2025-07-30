import pandas as pd

class DataPreprocessor:
    gender_mapping = {"Masculino": 1, "Feminino": 0, "Outro": 2}

    def process(self, data):
        features = [
            self.gender_mapping[data["gender"]],
            data["age"],
            data["hba1c"],
            data["chol"],
            data["tg"],
            data["bmi"]
        ]

        return pd.DataFrame([features], columns=[
            "Gender", "AGE", "HbA1c", "Chol",
            "TG", "BMI"
        ])
    
    'Gender', 'AGE', 'HbA1c', 'Chol', 'TG', 'BMI'
