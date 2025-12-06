/**
 * Validation middleware for API requests
 */

const validateSymptomInput = (req, res, next) => {
  const { symptoms, age, gender, duration } = req.body;

  // Validate symptoms (required)
  if (!symptoms || typeof symptoms !== "string") {
    return res.status(400).json({
      error: "Validation Error",
      message: "Symptoms description is required and must be a string",
    });
  }

  if (symptoms.trim().length < 10) {
    return res.status(400).json({
      error: "Validation Error",
      message:
        "Please provide more detailed symptom description (at least 10 characters)",
    });
  }

  if (symptoms.length > 2000) {
    return res.status(400).json({
      error: "Validation Error",
      message: "Symptom description is too long (maximum 2000 characters)",
    });
  }

  // Validate age (optional)
  if (age && (isNaN(age) || age < 0 || age > 120)) {
    return res.status(400).json({
      error: "Validation Error",
      message: "Age must be a number between 0 and 120",
    });
  }

  // Validate gender (optional)
  if (gender && !["male", "female", "other"].includes(gender.toLowerCase())) {
    return res.status(400).json({
      error: "Validation Error",
      message: "Gender must be one of: male, female, other",
    });
  }

  // Validate duration (optional)
  if (duration && typeof duration !== "string") {
    return res.status(400).json({
      error: "Validation Error",
      message: "Duration must be a string",
    });
  }

  // Sanitize input
  req.body.symptoms = symptoms.trim();
  if (age) req.body.age = parseInt(age);
  if (gender) req.body.gender = gender.toLowerCase();
  if (duration) req.body.duration = duration.trim();

  next();
};

/**
 * Rate limiting helper (basic implementation)
 */
const rateLimitMap = new Map();

const basicRateLimit = (req, res, next) => {
  const ip = req.ip;
  const now = Date.now();
  const windowMs = 60000; // 1 minute
  const maxRequests = 10;

  if (!rateLimitMap.has(ip)) {
    rateLimitMap.set(ip, []);
  }

  const requests = rateLimitMap.get(ip).filter((time) => now - time < windowMs);

  if (requests.length >= maxRequests) {
    return res.status(429).json({
      error: "Too Many Requests",
      message: "Please wait before making another request",
    });
  }

  requests.push(now);
  rateLimitMap.set(ip, requests);

  next();
};

module.exports = {
  validateSymptomInput,
  basicRateLimit,
};
