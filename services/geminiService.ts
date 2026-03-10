
import { GoogleGenAI } from "@google/genai";

export const generateSamplePrompt = async (category: string): Promise<string> => {
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: `Create an ultra-realistic image prompt for the category "${category}". The prompt should be in English (as most AI generators work better this way), highly detailed, including lighting, camera gear (like Sony A7R IV), and mood. Keep it under 60 words.`,
      config: {
        temperature: 0.8,
        maxOutputTokens: 100,
      }
    });
    return response.text || "Erro ao gerar exemplo. Tente novamente.";
  } catch (error) {
    console.error("Gemini Error:", error);
    return "Um prompt incrível estaria aqui. Adquira o pack para ver todos!";
  }
};
