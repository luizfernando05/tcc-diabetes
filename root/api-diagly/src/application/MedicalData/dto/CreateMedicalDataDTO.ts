export interface CreateMedicalDataDTO {
  patientId: string;
  age: number;
  urea?: number;
  cr?: number;
  hba1c: number;
  chol: number;
  tg: number;
  hdl?: number;
  ldl?: number;
  vldl?: number;
  bmi: number;
}
