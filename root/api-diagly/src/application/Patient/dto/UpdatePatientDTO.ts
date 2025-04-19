export interface UpdatePatientDTO {
  id: string;
  name?: string;
  email?: string;
  password?: string;
  birthDate?: Date;
  gender?: 'Masculino' | 'Feminino';
}
