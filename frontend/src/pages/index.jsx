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

            {/* Disclaimer */}
            <div className="mb-8">
              <DisclaimerBanner />
            </div>

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

        {/* Important Information */}
        <section className="container mx-auto px-4 py-16">
          <div className="max-w-3xl mx-auto bg-red-50 border-2 border-red-200 rounded-lg p-8">
            <h2 className="text-2xl font-bold text-red-800 mb-4 flex items-center">
              <svg
                className="w-8 h-8 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                />
              </svg>
              When to Seek Immediate Medical Attention
            </h2>
            <ul className="space-y-2 text-red-700">
              <li className="flex items-start">
                <span className="mr-2">🚨</span>
                <span>Chest pain or pressure</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">🚨</span>
                <span>Difficulty breathing or shortness of breath</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">🚨</span>
                <span>Severe bleeding or trauma</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">🚨</span>
                <span>Sudden severe headache or vision changes</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">🚨</span>
                <span>
                  Signs of stroke (face drooping, arm weakness, speech
                  difficulty)
                </span>
              </li>
            </ul>
            <p className="mt-4 font-semibold text-red-800">
              For emergencies, call your local emergency number immediately!
            </p>
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
