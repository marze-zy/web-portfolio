const fs = require('fs');

async function testGemini() {
    try {
        const { GoogleGenerativeAI } = require('@google/generative-ai');
        const genAI = new GoogleGenerativeAI('AIzaSyBFUwi-ucdTj1eRKp4J3e9L_YE-ManSVtE');
        const model = genAI.getGenerativeModel({ model: 'gemini-1.5-flash' });
        const result = await model.generateContent('who are you');
        fs.writeFileSync('gemini-test-output.txt', result.response.text());
        console.log("Success! Output written to gemini-test-output.txt");
    } catch (e) {
        fs.writeFileSync('gemini-test-output.txt', e.stack || e.toString());
        console.log("Error! Output written to gemini-test-output.txt");
    }
}

testGemini();
