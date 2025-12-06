import Head from "next/head";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import DisclaimerBanner from "@/components/DisclaimerBanner";

export default function Home() {
  return (
    <>
      <Head>
        <title>SymptoCare AI - Healthcare Symptom Checker</title>
        <meta
          name="description"
          content="AI-powered symptom checker for educational purposes"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-800 mb-6">
              Welcome to <span className="text-primary-500">SymptoCare AI</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              An AI-powered educational tool to help you understand your
              symptoms and provide general health information.
            </p>


            {/* CTA Button */}
            <Link
              href="/check"
              className="inline-block bg-primary-500 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-primary-600 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all"
            >
              🩺 Start Symptom Check
            </Link>
          </div>
        </section>

        {/* Features Section */}
        <section className="bg-white py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
              How It Works
            </h2>

            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {/* Feature 1 */}
              <div className="text-center p-6 rounded-lg border-2 border-gray-100 hover:border-primary-500 transition-all">
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg
                    className="w-8 h-8 text-primary-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">
                  1. Describe Symptoms
                </h3>
                <p className="text-gray-600">
                  Enter your symptoms in detail including duration and severity
                </p>
              </div>

              {/* Feature 2 */}
              <div className="text-center p-6 rounded-lg border-2 border-gray-100 hover:border-primary-500 transition-all">
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg
                    className="w-8 h-8 text-primary-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">
                  2. AI Analysis
                </h3>
                <p className="text-gray-600">
                  Our AI analyzes your symptoms using advanced medical knowledge
                </p>
              </div>

              {/* Feature 3 */}
              <div className="text-center p-6 rounded-lg border-2 border-gray-100 hover:border-primary-500 transition-all">
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg
                    className="w-8 h-8 text-primary-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">
                  3. Get Results
                </h3>
                <p className="text-gray-600">
                  Receive possible conditions and recommendations with safety
                  disclaimers
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Trust & Safety Section */}
        <section className="bg-gradient-to-r from-blue-50 to-indigo-50 py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl font-bold text-gray-800 text-center mb-12">
                How SymptoCare AI Works
              </h2>
              <div className="grid md:grid-cols-3 gap-8">
                {/* Trust */}
                <div className="text-center">
                  <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-md">
                    <svg
                      className="w-8 h-8 text-primary-500"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">
                    Educational Focus
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Designed to help you understand health information, not replace professional medical advice
                  </p>
                </div>

                {/* Accuracy */}
                <div className="text-center">
                  <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-md">
                    <svg
                      className="w-8 h-8 text-primary-500"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 10V3L4 14h7v7l9-11h-7z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">
                    AI-Powered
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Powered by Google Gemini for intelligent symptom analysis
                  </p>
                </div>

                {/* Safety */}
                <div className="text-center">
                  <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-md">
                    <svg
                      className="w-8 h-8 text-primary-500"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">
                    Your Privacy
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Your information is processed securely and never stored
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-primary-500 text-white py-16">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">
              Ready to Check Your Symptoms?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Get educational insights about your health in minutes
            </p>
            <Link
              href="/check"
              className="inline-block bg-white text-primary-500 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all"
            >
              Start Now →
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
