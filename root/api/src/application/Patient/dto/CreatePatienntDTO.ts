export interface CreatePatientDTO {
  name: string;
  email: string;
  password: string;
  birthDate: Date;
  gender: 'Masculino' | 'Feminino';
  createdByDoctorId: string;
}
