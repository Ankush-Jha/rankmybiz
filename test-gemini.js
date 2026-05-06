import { GoogleGenAI } from '@google/genai';
const ai = new GoogleGenAI({ apiKey: "AIzaSyDwWHdDinlLu0nWLeAyLnjSBMnsvHnss4A" });
async function test() {
  try {
    const res = await ai.models.generateContent({
        model: 'gemini-1.5-flash',
        contents: `test`,
    });
    console.log("Success 1.5:", res.text);
  } catch(e) { console.error("Error 1.5:", e.message); }
}
test();
