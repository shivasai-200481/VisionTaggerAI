import {
  GoogleGenerativeAI,
  HarmCategory,
  HarmBlockThreshold,
} from "@google/generative-ai";

const apiKey = "AIzaSyCjgLenGu2iNggyt9mMmokYJ_OmIizSpOc";
const genAI = new GoogleGenerativeAI(apiKey);

const model = genAI.getGenerativeModel({
  model: "gemini-1.5-flash",
});

const generationConfig = {
  temperature: 0.7,
  topP: 0.9,
  topK: 40,
  maxOutputTokens: 2048,
};

async function run(prompt, imageFile = null) {
    let contents = [];

    if (imageFile) {
        const base64Image = await toBase64(imageFile);

        contents.push({
            role: "user",
            parts: [{ inline_data: { mime_type: "image/png", data: base64Image } }]
        });

        if (prompt) {
            contents.unshift({
                role: "user",
                parts: [{ text: prompt }]
            });
        }
    } else {
        contents.push({
            role: "user",
            parts: [{ text: prompt }]
        });
    }

    try {
        const result = await model.generateContent({ contents, generationConfig });
        return result.response.text();
    } catch (error) {
        console.error("Error fetching response:", error);
        return "Error processing request.";
    }
}

// Convert image file to Base64 (without metadata prefix)
function toBase64(file) {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result.split(",")[1]); // Remove "data:image/png;base64,"
        reader.onerror = (error) => reject(error);
    });
}

export default run;
