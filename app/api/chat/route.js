import { GoogleGenerativeAI } from "@google/generative-ai";

const SYSTEM_PROMPT = `You are the AI assistant for Andrei Zyrish Manuel. 
Answer questions based on these facts:
- He is a Computer Engineering student at STI College.
- He has lived in Balangkas, Valenzuela City for 21 years.
- He owns a Bambu Lab A1 Mini and is into 3D printing.
- He is skilled in 3D modeling using Blender and Onshape.
- He works with embedded systems like Raspberry Pi 5 and ESP32.
- His main projects are 'SAKAY PH' (a ride-hailing app concept) and 'AlphaBot'.
- He has experience in computer network security.
Keep your answers short, helpful, and friendly.`;

export async function POST(req) {
    try {
        const { message, history } = await req.json();

        const apiKey = process.env.GEMINI_API_KEY;
        if (!apiKey) {
            return Response.json({ error: "GEMINI_API_KEY is not configured." }, { status: 500 });
        }

        const genAI = new GoogleGenerativeAI(apiKey);

        // Use gemini-2.5-flash and the proper systemInstruction field 
        const model = genAI.getGenerativeModel({
            model: "gemini-2.5-flash",
            systemInstruction: SYSTEM_PROMPT
        });

        const chat = model.startChat({ history: history || [] });
        const result = await chat.sendMessage(message);
        const text = result.response.text();

        return Response.json({ text });
    } catch (error) {
        console.error("Chat API error:", error);
        return Response.json({ error: error.message || "Failed to get a response." }, { status: 500 });
    }
}
