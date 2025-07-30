export interface PredictionRequestDTO {
  gender: string;
  age: number;
  hba1c: number;
  chol: number;
  tg: number;
  bmi: number;
}

export interface PredictionResponseDTO {
  predictionResult: string;
  confidenceScore: number;
}
