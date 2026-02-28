const { GoogleGenerativeAI } = require("@google/generative-ai");
const apiKey = "AIzaSyDPHvA1-A0xMCFM5PiUQkvgWDujT7oACTE";
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

testModel("gemini-2.5-flash");
