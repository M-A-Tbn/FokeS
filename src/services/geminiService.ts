import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY || "" });

export async function getProductivityAdvice(frictionReason: string, performance: number) {
  try {
    const prompt = `
      The user is using a productivity app called FokeS.
      Their performance today was ${performance}%.
      They identified the primary friction/blocker as: "${frictionReason}".
      
      Provide 3 short, punchy, and highly actionable tips to overcome this specific blocker tomorrow.
      Keep the tone professional, encouraging, and focused on high-performance habits.
      Format the response as a simple bulleted list.
    `;

    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: prompt,
    });
    return response.text;
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Stay focused and keep pushing. Tomorrow is a new opportunity to excel.";
  }
}

export async function generateSyllabusBreakdown(syllabusText: string) {
  try {
    const prompt = `
      You are an expert study planner. The user has provided the following syllabus or project goal:
      "${syllabusText}"
      
      Break this down into 3 to 7 actionable "Deep Work" study blocks.
      Return ONLY a valid JSON array of objects. Do not include markdown formatting or backticks.
      Each object must have exactly these two properties:
      - "title" (string): A concise, actionable title for the study block (e.g., "Read Chapter 1: Introduction").
      - "duration" (number): The estimated duration in minutes (must be a multiple of 30, e.g., 30, 60, 90, 120).
      
      Example output:
      [{"title": "Review Lecture 1 Notes", "duration": 60}, {"title": "Complete Practice Set A", "duration": 90}]
    `;

    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: prompt,
    });
    
    let text = response.text || "[]";
    // Clean up potential markdown formatting
    text = text.replace(/```json/g, '').replace(/```/g, '').trim();
    return JSON.parse(text);
  } catch (error) {
    console.error("Gemini API Error (Syllabus):", error);
    return [];
  }
}

export async function generateDailyReflection(completedTasks: string[], totalHours: number) {
  try {
    const prompt = `
      You are a high-performance productivity coach. The user has just finished their day.
      They completed ${completedTasks.length} tasks today, totaling ${totalHours.toFixed(1)} hours of deep work.
      
      Provide a short, personalized "Daily Debrief" (3-4 sentences max).
      Acknowledge their effort, highlight the volume of work, and give a brief, inspiring thought for tomorrow.
      Keep it punchy, professional, and motivating.
    `;

    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: prompt,
    });
    return response.text;
  } catch (error) {
    console.error("Gemini API Error (Reflection):", error);
    return "Great job today. Rest well, and prepare to tackle tomorrow with the same intensity.";
  }
}
