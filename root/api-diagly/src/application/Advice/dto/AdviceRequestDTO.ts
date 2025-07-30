export interface AdviceRequestDTO {
  patientName: string;
  age: number;
  gender: string;
  medicalData: {
    hba1c: number;
    chol: number;
    tg: number;
    bmi: number;
  };
  prediction: {
    result: string;
    confidenceScore: number;
  };
}

export interface AdviceResponseDTO {
  tips: string;
}
