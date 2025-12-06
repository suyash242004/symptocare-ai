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
  const [history, setHistory] = useState([]);
  const [selectedIndex, setSelectedIndex] = useState(-1);

  useEffect(() => {
    try {
      const raw = localStorage.getItem("sc_history");
      const parsed = raw ? JSON.parse(raw) : [];
      setHistory(parsed);

      if (router.query.data) {
        const parsedData = JSON.parse(decodeURIComponent(router.query.data));
        setResult(parsedData);
        setSelectedIndex(-1);
      } else if (parsed.length > 0) {
        setResult(parsed[0].result);
        setSelectedIndex(0);
      }
    } catch (error) {
      console.error("Failed to load history:", error);
    }
  }, [router.query.data]);

  if (!result) {
    return (
      <>
        <Head>
          <title>Results - SymptoCare AI</title>
        </Head>
        <Header />
        <main className="min-h-screen py-12">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="text-center mb-8">
              <h1 className="text-4xl font-bold text-gray-800 dark:text-white mb-2">📊 Your Analysis Results</h1>
              <p className="text-gray-600 dark:text-gray-300">
                {history.length > 0
                  ? "Select a past result to view details"
                  : "No history yet. Run a symptom check to see results here."}
              </p>
            </div>

            {history.length > 0 ? (
              <div className="bg-white rounded-lg shadow-lg p-6">
                <ul className="divide-y divide-gray-100">
                  {history.slice(0, 10).map((item, idx) => (
                    <li key={item.id || idx} className="py-3 flex items-center justify-between gap-4">
                      <div className="min-w-0">
                        <p className="font-medium text-gray-800 dark:text-white truncate">{item.input?.symptoms}</p>
                        <p className="text-xs text-gray-500 dark:text-gray-400">{new Date(item.timestamp).toLocaleString()}</p>
                      </div>
                      <button
                        onClick={() => { setResult(item.result); setSelectedIndex(idx); }}
                        className="bg-primary-500 text-white px-4 py-2 rounded-lg text-sm hover:bg-primary-600"
                      >
                        View
                      </button>
                    </li>
                  ))}
                </ul>
                <div className="text-right mt-4">
                  <button
                    onClick={() => { localStorage.removeItem("sc_history"); setHistory([]); setResult(null); setSelectedIndex(-1); }}
                    className="text-sm text-gray-600 dark:text-gray-400 hover:text-red-600 dark:hover:text-red-500 underline"
                  >
                    Clear history
                  </button>
                </div>
              </div>
            ) : (
              <div className="text-center">
                <a
                  href="/check"
                  className="inline-block bg-primary-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-600"
                >
                  Start Symptom Check
                </a>
              </div>
            )}
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
            <h1 className="text-4xl font-bold text-gray-800 dark:text-white mb-4">
              📊 Your Analysis Results
            </h1>
            <p className="text-gray-600 dark:text-gray-300">No history yet. Your symptom checks will appear here.</p>
          </div>

          {/* Recent History */}
          {history.length > 0 && (
            <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
              <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">Analysis History</h2>
              <div className="flex flex-col sm:flex-row gap-3 sm:items-center">
                {history.slice(0, 5).map((item, idx) => (
                  <button
                    key={item.id || idx}
                    onClick={() => { setResult(item.result); setSelectedIndex(idx); }}
                    className={`px-4 py-2 rounded-lg border text-sm hover:bg-gray-50 ${
                      selectedIndex === idx ? "border-primary-500 text-primary-600" : "border-gray-200 text-gray-700"
                    }`}
                    title={item.input?.symptoms}
                  >
                    {new Date(item.timestamp).toLocaleDateString()} #{(history.length - idx)}
                  </button>
                ))}
              </div>
            </div>
          )}

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
          <div className="mt-12 bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-lg p-6">
            <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">No Result Selected</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-6">Please select an item from your history to view the details.</p>
            <p className="text-gray-600 dark:text-gray-300">
              These results are for educational purposes only. If you have concerns about your health, please consult with a qualified
              healthcare professional. For emergencies, contact your local emergency services immediately.
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
