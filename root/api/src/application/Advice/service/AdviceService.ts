import axios from 'axios';
import { AdviceRequestDTO, AdviceResponseDTO } from '../dto/AdviceRequestDTO';
import { AppError } from '@presentation/errors/AppError';

export class AdviceService {
  private apiUrl: string;

  constructor() {
    this.apiUrl = 'https://api.cohere.ai/generate';
  }

  async generateAdvice(data: AdviceRequestDTO): Promise<AdviceResponseDTO> {
    try {
      const response = await axios.post(
        this.apiUrl,
        {
          model: 'command-xlarge-nightly',
          prompt: `
          Você é um especialista em saúde e estilo de vida. Sua tarefa é fornecer conselhos práticos e personalizados para melhorar a saúde do paciente, com base nos dados médicos fornecidos. Use o diagnóstico fornecido para direcionar suas recomendações e não o interprete novamente.

          Paciente: ${data.patientName}, ${data.age} anos, ${data.gender}.
          Dados médicos:
          - Ureia: ${data.medicalData.urea}
          - Creatinina: ${data.medicalData.cr}
          - HbA1c: ${data.medicalData.hba1c}
          - Colesterol: ${data.medicalData.chol}
          - Triglicerídeos: ${data.medicalData.tg}
          - HDL: ${data.medicalData.hdl}
          - LDL: ${data.medicalData.ldl}
          - VLDL: ${data.medicalData.vldl}
          - IMC: ${data.medicalData.bmi}.
          Diagnóstico confirmado: ${data.prediction.result} (Confiança: ${
            data.prediction.confidenceScore * 100
          }%).

          Considere as condições e os fatores de risco do paciente. Foque em dicas práticas que ele pode seguir, como:
          1. Ajustes na dieta;
          2. Exercícios físicos adequados.

          Suas respostas devem ser claras e simples, evitando linguagem técnica desnecessária. Evite textos muitos longos, insira as informações em no máximo 300 palavras. Liste as recomendações em tópicos, sendo o mais direto e útil possível.
          `,
          max_tokens: 500,
          temperature: 0.7,
        },
        {
          headers: {
            Authorization: `Bearer ${process.env.COHERE_API_KEY}`,
            'Content-Type': 'application/json',
          },
        }
      );

      const advice = response.data.text.trim();

      return { tips: advice };
    } catch (err) {
      console.error('Error communicating with Cohere API:', err);
      throw new AppError('Error generating advice using Cohere model', 500);
    }
  }
}

export default AdviceService;
