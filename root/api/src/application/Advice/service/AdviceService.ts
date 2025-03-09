import axios from 'axios';
import { AdviceRequestDTO, AdviceResponseDTO } from '../dto/AdviceRequestDTO';
import { AppError } from '@presentation/errors/AppError';

export class AdviceService {
  private apiUrl: string;

  constructor() {
    this.apiUrl = 'https://api.cohere.ai/v1/generate';
  }

  async generateAdvice(data: AdviceRequestDTO): Promise<AdviceResponseDTO> {
    try {
      const response = await axios.post(
        this.apiUrl,
        {
          model: 'command-r-plus-08-2024',
          prompt: `
            You are a health and lifestyle specialist. Your task is to provide practical and personalized advice to improve the patient's health, **with a special focus on diabetes management**, if applicable.

            **Patient Information:**  
            - Name: ${data.patientName}  
            - Age: ${data.age} years  
            - Gender: ${data.gender}  

            **Medical Data:**  
            - Urea: ${data.medicalData.urea}  
            - Creatinine: ${data.medicalData.cr}  
            - HbA1c: ${data.medicalData.hba1c}  
            - Cholesterol: ${data.medicalData.chol}  
            - Triglycerides: ${data.medicalData.tg}  
            - HDL: ${data.medicalData.hdl}  
            - LDL: ${data.medicalData.ldl}  
            - VLDL: ${data.medicalData.vldl}  
            - BMI: ${data.medicalData.bmi}  

            **Confirmed Diagnosis:** ${data.prediction.result} (Confidence: ${
              data.prediction.confidenceScore * 100
            }%).  

            ---  
            **Instructions for your response:**  
            - **Do not reinterpret the diagnosis.** Base your recommendations on the provided diagnosis.  
            - Focus on **practical and specific** advice, including:  
              1. **Appropriate dietary recommendations** for patients with diabetes and other risk factors.  
              2. **Recommended physical activities**, considering the patient's condition.  
              3. **Lifestyle changes** that can help manage diabetes and overall health.  
            - Avoid technical language and provide clear and concise explanations.  
            - Structure the response in bullet points, with a maximum of **300 words**.  

            **Provide direct and actionable guidance that the patient can apply in daily life.**
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

      const advice = response.data.generations[0].text.trim();

      return { tips: advice };
    } catch (err) {
      console.error('Error communicating with Cohere API:', err);
      throw new AppError('Error generating advice using Cohere model', 500);
    }
  }
}

export default AdviceService;
