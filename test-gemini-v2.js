const { GoogleGenerativeAI } = require("@google/generative-ai");
require("dotenv").config({ path: ".env.local" });

const apiKey = process.env.GEMINI_API_KEY;
console.log("Using API Key:", apiKey ? apiKey.substring(0, 10) + "..." : "NONE");

const genAI = new GoogleGenerativeAI(apiKey);

async function testModel(modelName) {
    console.log(`\nTesting model: ${modelName}`);
    try {
        const model = genAI.getGenerativeModel({ model: modelName });
        const result = await model.generateContent("Hello! Respond with 'OK' if you can hear me.");
        console.log(`[${modelName}] Success! Response:`, result.response.text().trim());
    } catch (e) {
        console.error(`[${modelName}] Error:`, e.message);
    }
}

async function run() {
    await testModel("gemini-1.5-flash");
    await testModel("gemini-2.0-flash");
}

run();
