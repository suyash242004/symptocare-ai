import axios from "axios";

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000";

/**
 * API utility for making requests to backend
 */
const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
  timeout: 30000, // 30 seconds
});

/**
 * Analyze symptoms
 * @param {Object} data - { symptoms, age, gender, duration }
 * @returns {Promise} API response
 */
export const analyzeSymptoms = async (data) => {
  try {
    const response = await api.post("/api/symptoms/analyze", data);
    return response.data;
  } catch (error) {
    console.error("API Error:", error);
    throw (
      error.response?.data || {
        error: "Network Error",
        message: "Unable to connect to the server",
      }
    );
  }
};

/**
 * Check backend health
 * @returns {Promise} Health status
 */
export const checkHealth = async () => {
  try {
    const response = await api.get("/health");
    return response.data;
  } catch (error) {
    console.error("Health check failed:", error);
    return { status: "unhealthy" };
  }
};

export const getTriageQuestions = async (symptoms) => {
  try {
    const response = await api.post("/api/symptoms/triage-questions", { symptoms });
    return response.data;
  } catch (error) {
    console.error("Failed to get triage questions:", error);
    // Return generic questions as a fallback
    return {
      success: true,
      questions: [
        "When did these symptoms start?",
        "Are the symptoms constant or do they come and go?",
        "Is there anything that makes the symptoms better or worse?",
      ],
    };
  }
};

export default api;
