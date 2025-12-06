import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ResultCard from "@/components/ResultCard";

export default function Results() {
  const router = useRouter();
  const [result, setResult] = useState(null);

  useEffect(() => {
    // Check if result data exists in router state
    if (router.query.data) {
      try {
        const parsedData = JSON.parse(decodeURIComponent(router.query.data));
        setResult(parsedData);
      } catch (error) {
        console.error("Failed to parse result data:", error);
      }
    } else {
      // If no data, redirect to check page
      router.push("/check");
    }
  }, [router]);

  if (!result) {
    return (
      <>
        <Head>
          <title>Loading Results - SymptoCare AI</title>
        </Head>
        <Header />
        <main className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <div className="animate-spin rounded-full h-16 w-16 border-b-4 border-primary-500 mx-auto mb-4"></div>
            <p className="text-gray-600">Loading results...</p>
          </div>
        </main>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Head>
        <title>Analysis Results - SymptoCare AI</title>
        <meta name="description" content="Your symptom analysis results" />
      </Head>

      <Header />

      <main className="min-h-screen py-12">
        <div className="container mx-auto px-4 max-w-4xl">
          {/* Page Header */}
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">
              📊 Your Analysis Results
            </h1>
            <p className="text-gray-600">
              Review your symptom analysis and recommendations
            </p>
          </div>

          {/* Results */}
          <ResultCard result={result} />

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
            <Link
              href="/check"
              className="bg-primary-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-primary-600 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all text-center"
            >
              ← Start New Check
            </Link>

            <button
              onClick={() => window.print()}
              className="bg-gray-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-gray-700 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all"
            >
              🖨️ Print Results
            </button>
          </div>

          {/* Important Notice */}
          <div className="mt-12 bg-yellow-50 border-2 border-yellow-300 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-yellow-800 mb-2">
              📌 Remember
            </h3>
            <p className="text-yellow-700">
              These results are for educational purposes only. If you have
              concerns about your health, please consult with a qualified
              healthcare professional. For emergencies, call your local
              emergency services immediately.
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
