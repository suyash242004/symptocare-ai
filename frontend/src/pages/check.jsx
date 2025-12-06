import { useState } from "react";
import Head from "next/head";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SymptomForm from "@/components/SymptomForm";
import LoadingSpinner from "@/components/LoadingSpinner";
import ResultCard from "@/components/ResultCard";
import { analyzeSymptoms, getTriageQuestions } from "@/utils/api";

export default function CheckSymptoms() {
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);
  const [triageMode, setTriageMode] = useState(false);
  const [questions, setQuestions] = useState([]);
  const [triageAnswers, setTriageAnswers] = useState({});
  const [initialFormData, setInitialFormData] = useState(null);

  const handleSubmit = async (formData) => {
    setLoading(true);
    setError(null);
    setResult(null);
    setInitialFormData(formData);

    try {
      const response = await getTriageQuestions(formData.symptoms || "");
      if (response.success && response.questions.length > 0) {
        setQuestions(response.questions);
        setTriageMode(true);
        setTriageAnswers({});
      } else {
        // If triage fails, go straight to analysis
        setQuestions([]);
        handleTriageSubmit(); // Will use an empty triage form
      }
    } catch (err) {
      setError("Could not generate clarifying questions. Proceeding with basic analysis.");
      setQuestions([]);
      handleTriageSubmit();
    } finally {
      setLoading(false);
    }
  };


  const handleTriageSubmit = async () => {
    setLoading(true);
    setError(null);

    try {
      let enrichedSymptoms = initialFormData.symptoms;
      if (questions.length > 0) {
        const clarifText = Object.values(triageAnswers)
          .map((a, i) => `${questions[i]}: ${a}`)
          .join("; ");
        enrichedSymptoms = `${initialFormData.symptoms} Additional details: ${clarifText}`.trim();
      }
      const payload = { ...initialFormData, symptoms: enrichedSymptoms };

      const response = await analyzeSymptoms(payload);

      if (response.success) {
        setResult(response.data);
        setTriageMode(false);
        try {
          const item = {
            id: String(Date.now()),
            timestamp: new Date().toISOString(),
            input: payload,
            result: response.data,
          };
          const existing = JSON.parse(localStorage.getItem("sc_history") || "[]");
          existing.unshift(item);
          localStorage.setItem("sc_history", JSON.stringify(existing.slice(0, 20)));
        } catch {}
        setTimeout(() => {
          document.getElementById("results")?.scrollIntoView({ behavior: "smooth" });
        }, 100);
      } else {
        setError(response.message || "Analysis failed");
      }
    } catch (err) {
      setError(
        err?.message ||
          "Unable to analyze symptoms. Please check your connection and try again."
      );
    } finally {
      setLoading(false);
    }
  };

  const handleNewCheck = () => {
    setResult(null);
    setError(null);
    setTriageMode(false);
    setQuestions([]);
    setInitialFormData(null);
    setTriageAnswers({});
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <Head>
        <title>Check Symptoms - SymptoCare AI</title>
        <meta name="description" content="Analyze your symptoms with AI" />
      </Head>

      <Header />

      <main className="min-h-screen py-12">
        <div className="container mx-auto px-4 max-w-4xl">
          {/* Page Header */}
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">
              🩺 Symptom Checker
            </h1>
            <p className="text-gray-600 text-lg">
              Describe your symptoms and get educational insights powered by AI
            </p>
          </div>

          {/* Info Section */}
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-lg p-6 mb-8">
            <div className="flex items-start">
              <svg
                className="w-5 h-5 text-primary-500 mr-3 mt-0.5 flex-shrink-0"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <div>
                <h3 className="text-sm font-semibold text-gray-800 mb-1">
                  How This Works
                </h3>
                <p className="text-sm text-gray-700">
                  Describe your symptoms in detail, and our AI will provide educational information about possible conditions and general recommendations. Always consult a healthcare professional for medical advice.
                </p>
              </div>
            </div>
          </div>

          {!result && triageMode && !loading && (
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">A few quick questions</h2>
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  handleTriageSubmit();
                }}
                className="space-y-4"
              >
                {questions.map((q, idx) => (
                  <div key={idx} className="space-y-2">
                    <label className="block text-sm font-semibold text-gray-700">{q}</label>
                    <input
                      type="text"
                      required
                      value={triageAnswers[idx] || ""}
                      onChange={(e) =>
                        setTriageAnswers((prev) => ({ ...prev, [idx]: e.target.value }))
                      }
                      className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                      placeholder="Type your answer"
                    />
                  </div>
                ))}
                <div className="flex gap-3 justify-end pt-2">
                  <button
                    type="button"
                    onClick={() => setTriageMode(false)}
                    className="px-6 py-3 rounded-lg font-semibold border-2 border-gray-300 text-gray-700 hover:bg-gray-50"
                  >
                    Back
                  </button>
                  <button
                    type="submit"
                    className="bg-primary-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-600 shadow-md"
                  >
                    Continue
                  </button>
                </div>
              </form>
            </div>
          )}

          {!result && !triageMode && (
            <div className="bg-white rounded-lg shadow-lg p-8">
              <SymptomForm onSubmit={handleSubmit} loading={loading} />
            </div>
          )}

          {/* Loading State */}
          {loading && (
            <div className="bg-white rounded-lg shadow-lg p-8 mt-6">
              <LoadingSpinner message="Analyzing your symptoms..." />
            </div>
          )}

          {/* Error State */}
          {error && !loading && (
            <div className="bg-red-50 border-2 border-red-300 rounded-lg p-6 mt-6">
              <div className="flex items-start">
                <svg
                  className="w-6 h-6 text-red-500 mr-3 flex-shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <div>
                  <h3 className="text-red-800 font-semibold mb-2">
                    Analysis Error
                  </h3>
                  <p className="text-red-700">{error}</p>
                  <button
                    onClick={handleNewCheck}
                    className="mt-4 bg-red-600 text-white px-6 py-2 rounded-lg hover:bg-red-700 transition-all"
                  >
                    Try Again
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* Results Section */}
          {result && !loading && (
            <div id="results" className="mt-6 space-y-6">
              <ResultCard result={result} />

              {/* New Check Button */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  onClick={handleNewCheck}
                  className="bg-primary-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-primary-600 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all"
                >
                  ← Start New Check
                </button>
                <button
                  onClick={() => window.print()}
                  className="bg-gray-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-gray-700 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all"
                >
                  Download PDF
                </button>
              </div>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </>
  );
}
