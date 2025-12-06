const llmService = require("../services/llm.service");

class SymptomController {
  /**
   * Handle symptom analysis request
   */
  async analyzeSymptoms(req, res) {
    try {
      const { symptoms, age, gender, duration } = req.body;

      console.log("📋 Analyzing symptoms:", symptoms.substring(0, 50) + "...");

      // Prepare metadata
      const metadata = {};
      if (age) metadata.age = age;
      if (gender) metadata.gender = gender;
      if (duration) metadata.duration = duration;

      // Call LLM service
      const analysis = await llmService.analyzeSymptoms(symptoms, metadata);

      // Add mandatory disclaimer
      analysis.disclaimer =
        analysis.disclaimer ||
        "This is for educational purposes only. Not a substitute for professional medical advice.";

      // Log success
      console.log("✅ Analysis completed successfully");

      res.status(200).json({
        success: true,
        data: analysis,
        timestamp: new Date().toISOString(),
      });
    } catch (error) {
      console.error("❌ Controller Error:", error);
      res.status(500).json({
        success: false,
        error: "Analysis Failed",
        message: error.message || "Unable to analyze symptoms at this time",
      });
    }
  }

  /**
   * Health check for symptom service
   */
  async healthCheck(req, res) {
    res.status(200).json({
      service: "Symptom Analysis",
      status: "Operational",
      timestamp: new Date().toISOString(),
    });
  }
}

module.exports = new SymptomController();
