const Anthropic = require("@anthropic-ai/sdk");

class LLMService {
  constructor() {
    this.client = new Anthropic({
      apiKey: process.env.ANTHROPIC_API_KEY,
    });
  }

  /**
   * Analyze symptoms using Claude API
   * @param {string} symptoms - User's symptom description
   * @param {object} metadata - Additional user data (age, gender, duration)
   * @returns {Promise<object>} Analysis results
   */
  async analyzeSymptoms(symptoms, metadata = {}) {
    try {
      const prompt = this.constructPrompt(symptoms, metadata);

      const response = await this.client.messages.create({
        model: "claude-sonnet-4-20250514",
        max_tokens: 2000,
        messages: [
          {
            role: "user",
            content: prompt,
          },
        ],
      });

      const analysisText = response.content[0].text;
      return this.parseResponse(analysisText);
    } catch (error) {
      console.error("LLM Service Error:", error);
      throw new Error("Failed to analyze symptoms. Please try again.");
    }
  }

  /**
   * Construct detailed prompt for Claude
   */
  constructPrompt(symptoms, metadata) {
    const { age, gender, duration } = metadata;

    return `You are a medical education assistant. Analyze the following symptoms and provide educational information.

**CRITICAL INSTRUCTIONS:**
1. This is for EDUCATIONAL purposes only
2. Do NOT provide definitive diagnoses
3. Always recommend consulting healthcare professionals
4. Use cautious, conservative language
5. Highlight red flags requiring immediate attention

**Patient Information:**
- Symptoms: ${symptoms}
${age ? `- Age: ${age}` : ""}
${gender ? `- Gender: ${gender}` : ""}
${duration ? `- Duration: ${duration}` : ""}

**Provide response in this JSON format:**
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
    "Warning sign 1 if any"
  ],
  "disclaimer": "Educational disclaimer text"
}

**IMPORTANT:** If symptoms suggest emergency (chest pain, difficulty breathing, severe trauma), mark severity as "High" and include urgent care recommendation.`;
  }

  /**
   * Parse Claude's response into structured format
   */
  parseResponse(text) {
    try {
      // Try to extract JSON from response
      const jsonMatch = text.match(/\{[\s\S]*\}/);
      if (jsonMatch) {
        return JSON.parse(jsonMatch[0]);
      }

      // Fallback: Return structured error
      return {
        possibleConditions: [],
        severity: "Unknown",
        recommendations: [
          "Unable to analyze symptoms. Please consult a healthcare provider.",
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

  /**
   * Validate API key configuration
   */
  static validateConfig() {
    if (!process.env.ANTHROPIC_API_KEY) {
      throw new Error(
        "ANTHROPIC_API_KEY is not configured in environment variables"
      );
    }
  }
}

// Validate configuration on module load
LLMService.validateConfig();

module.exports = new LLMService();
