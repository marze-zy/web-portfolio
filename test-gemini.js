const { GoogleGenerativeAI } = require("@google/generative-ai");
console.log("Generative AI library loaded successfully:", typeof GoogleGenerativeAI);

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY || "AIzaSyBFUwi-ucdTj1eRKp4J3e9L_YE-ManSVtE");
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

async function run() {
    try {
        const result = await model.generateContent("Hello!");
        console.log("Success! Gemini response:", result.response.text());
    } catch (e) {
        console.error("Error connecting to Gemini:", e.message);
    }
}
run();
