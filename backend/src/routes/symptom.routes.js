const express = require("express");
const router = express.Router();
const symptomController = require("../controllers/symptom.controller");
const {
  validateSymptomInput,
  basicRateLimit,
} = require("../middleware/validation");

/**
 * POST /api/symptoms/analyze
 * Analyze user symptoms and return possible conditions
 */
router.post(
  "/analyze",
  basicRateLimit,
  validateSymptomInput,
  symptomController.analyzeSymptoms
);

/**
 * GET /api/symptoms/health
 * Health check for symptom service
 */
router.get("/health", symptomController.healthCheck);

module.exports = router;
