const { GoogleGenerativeAI } = require("@google/generative-ai");

class LLMService {
  constructor() {
    this.genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
    this.model = this.genAI.getGenerativeModel({
      model: "gemini-2.0-flash",
    });
  }

  async analyzeSymptoms(symptoms, metadata = {}) {
    try {
      const prompt = this.constructPrompt(symptoms, metadata);

      console.log("🔍 Calling Google Gemini API...");

      const result = await this.model.generateContent(prompt);
      const response = await result.response;
      const analysisText = response.text();

      console.log("✅ Gemini API response received");

      return this.parseResponse(analysisText);
    } catch (error) {
      console.error("❌ LLM Service Error:", error.message);
      throw new Error("Failed to analyze symptoms. Please try again.");
    }
  }

  constructPrompt(symptoms, metadata) {
    const { age, gender, duration } = metadata;

    return `You are a medical education assistant. Analyze symptoms and provide educational information.

**CRITICAL INSTRUCTIONS:**
1. Educational purposes ONLY
2. NO definitive diagnoses
3. Always recommend consulting healthcare professionals
4. Use cautious language
5. Highlight emergency red flags

**Patient Information:**
- Symptoms: ${symptoms}
${age ? `- Age: ${age}` : ""}
${gender ? `- Gender: ${gender}` : ""}
${duration ? `- Duration: ${duration}` : ""}

**RESPOND ONLY WITH THIS EXACT JSON FORMAT (no markdown, no extra text):**
{
  "possibleConditions": [
    {
      "name": "Condition name",
      "likelihood": "Low/Medium/High",
      "description": "Brief explanation"
    }
  ],
  "severity": "Low/Medium/High",
  "recommendations": [
    "Recommendation 1",
    "Recommendation 2"
  ],
  "redFlags": [
    "Warning sign if any"
  ],
  "disclaimer": "Educational disclaimer text"
}`;
  }

  parseResponse(text) {
    try {
      // Remove markdown code blocks if present
      let cleanText = text
        .replace(/```json\n?/g, "")
        .replace(/```\n?/g, "")
        .trim();

      const jsonMatch = cleanText.match(/\{[\s\S]*\}/);
      if (jsonMatch) {
        return JSON.parse(jsonMatch[0]);
      }

      return {
        possibleConditions: [],
        severity: "Unknown",
        recommendations: [
          "Unable to analyze. Please consult a healthcare provider.",
        ],
        redFlags: [],
        disclaimer:
          "This analysis could not be completed. Please seek professional medical advice.",
      };
    } catch (error) {
      console.error("Response parsing error:", error);
      throw new Error("Failed to parse analysis results");
    }
  }

  static validateConfig() {
    if (!process.env.GEMINI_API_KEY) {
      throw new Error(
        "GEMINI_API_KEY is not configured in environment variables"
      );
    }
  }
}

LLMService.validateConfig();

module.exports = new LLMService();
