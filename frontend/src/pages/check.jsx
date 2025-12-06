import { useState } from "react";
import Head from "next/head";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import DisclaimerBanner from "@/components/DisclaimerBanner";
import SymptomForm from "@/components/SymptomForm";
import LoadingSpinner from "@/components/LoadingSpinner";
import ResultCard from "@/components/ResultCard";
import { analyzeSymptoms } from "@/utils/api";

export default function CheckSymptoms() {
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);

  const handleSubmit = async (formData) => {
    setLoading(true);
    setError(null);
    setResult(null);

    try {
      console.log("Submitting symptoms:", formData);
      const response = await analyzeSymptoms(formData);

      if (response.success) {
        setResult(response.data);
        // Scroll to results
        setTimeout(() => {
          document
            .getElementById("results")
            ?.scrollIntoView({ behavior: "smooth" });
        }, 100);
      } else {
        setError(response.message || "Analysis failed");
      }
    } catch (err) {
      console.error("Submission error:", err);
      setError(
        err.message ||
          "Unable to analyze symptoms. Please check your connection and try again."
      );
    } finally {
      setLoading(false);
    }
  };

  const handleNewCheck = () => {
    setResult(null);
    setError(null);
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

          {/* Disclaimer */}
          <DisclaimerBanner />

          {/* Form Section */}
          {!result && (
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
              <div className="text-center">
                <button
                  onClick={handleNewCheck}
                  className="bg-primary-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-primary-600 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all"
                >
                  ← Start New Check
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
