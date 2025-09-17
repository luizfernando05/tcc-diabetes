import axios from 'axios';
import { AdviceRequestDTO, AdviceResponseDTO } from '../dto/AdviceRequestDTO';
import { AppError } from '@presentation/errors/AppError';

export class AdviceService {
  private apiUrl: string;

  constructor() {
    this.apiUrl = 'https://api.cohere.ai/v1/chat';
  }

  async generateAdvice(data: AdviceRequestDTO): Promise<AdviceResponseDTO> {
    try {
      const prompt = `
        You are a health and lifestyle specialist. Your task is to provide a clear, non-technical explanation of the patient's diabetes diagnosis based on the provided data, followed by one simple, practical tip for managing their health.

        **Important Guidelines:**
        - Do NOT reinterpret the diagnosis. Use the prediction as ground truth.
        - Focus your response on:
          1. Explaining why the diagnosis makes sense based on the patient's lab values.
          2. Highlighting which values are abnormal and how they relate to diabetes.
          3. Ending with a short, simple lifestyle tip (1–2 sentences max).

        **Output Format:**
        - First: clear explanation of diagnosis.
        - Then: one short actionable tip.

        **Example 1:**
        Diagnosis: Diabetic  
        Confidence: 93.2%  
        HbA1c: 8.2 | Cholesterol: 240 | BMI: 32  
        Explanation: The HbA1c is well above the normal threshold (usually <5.7), indicating chronic high blood sugar levels. Combined with high cholesterol and a BMI in the obese range, these values support the diabetic diagnosis.  
        Tip: Try taking a 20-minute walk after meals to help regulate blood sugar.

        **Example 2:**
        Diagnosis: Non-Diabetic  
        Confidence: 91.0%  
        HbA1c: 5.1 | BMI: 22  
        Explanation: The HbA1c level is within the normal range, and the BMI is healthy. These values do not indicate current diabetic risk.  
        Tip: Keep up your balanced routine and stay active daily.

        ---

        **Patient Information:**  
        - Name: ${data.patientName}  
        - Age: ${data.age} years  
        - Gender: ${data.gender}  

        **Medical Data:**    
        - HbA1c: ${data.medicalData.hba1c}  
        - Cholesterol: ${data.medicalData.chol}  
        - Triglycerides: ${data.medicalData.tg}  
        - BMI: ${data.medicalData.bmi}  

        **Confirmed Diagnosis:** ${data.prediction.result} (Confidence: ${data.prediction.confidenceScore * 100}%).

        Now explain the diagnosis and end with one brief tip.
      `;

      const response = await axios.post(
        this.apiUrl,
        {
          model: 'command-r-plus-08-2024',
          message: prompt,
          chat_history: [],
          temperature: 0.7,
          max_tokens: 500,
        },
        {
          headers: {
            Authorization: `Bearer ${process.env.COHERE_API_KEY}`,
            'Content-Type': 'application/json',
          },
        }
      );

      const advice = response.data.text?.trim() || response.data.reply?.trim();

      return { tips: advice };
    } catch (err) {
      console.error('Error communicating with Cohere Chat API:', err);
      throw new AppError(
        'Error generating advice using Cohere Chat model',
        500
      );
    }
  }
}

export default AdviceService;
