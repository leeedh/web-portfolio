import { GoogleGenAI } from "@google/genai";
import { PROFILE_CONTEXT } from "../constants";

// Initialize Gemini Client
// IMPORTANT: In a real production app, calls should go through a backend to protect the API Key.
// For this demo, we assume the environment variable is available.
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });

export const generateChatResponse = async (userMessage: string): Promise<string> => {
  try {
    const modelId = 'gemini-3-flash-preview'; 
    const systemInstruction = `
      You are an AI Assistant representing a skilled GIS Web Developer named "The Candidate".
      Your goal is to answer recruiters' questions based strictly on the following profile context.
      
      ${PROFILE_CONTEXT}
      
      Tone: Professional, enthusiastic, and concise.
      If a question is outside the scope of the profile, politely redirect to the candidate's core skills (GIS, React, Python).
      Do not invent false experiences.
      Keep answers under 3 sentences unless asked for details.
      Speak in Korean primarily, as the portfolio is in Korean, unless asked in English.
    `;

    const response = await ai.models.generateContent({
      model: modelId,
      contents: [
        {
          role: 'user',
          parts: [{ text: userMessage }]
        }
      ],
      config: {
        systemInstruction: systemInstruction,
        temperature: 0.7,
      }
    });

    return response.text || "죄송합니다. 현재 답변을 생성할 수 없습니다.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "현재 AI 서비스 연결이 불안정합니다. 잠시 후 다시 시도해주세요.";
  }
};