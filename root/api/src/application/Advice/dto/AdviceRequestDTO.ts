export interface AdviceRequestDTO {
  patientName: string;
  age: number;
  gender: string;
  medicalData: {
    urea: number;
    cr: number;
    hba1c: number;
    chol: number;
    tg: number;
    hdl: number;
    ldl: number;
    vldl: number;
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
