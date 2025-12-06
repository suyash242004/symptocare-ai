import Head from "next/head";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function About() {
  return (
    <>
      <Head>
        <title>About - SymptoCare AI</title>
        <meta
          name="description"
          content="Learn about SymptoCare AI symptom checker"
        />
      </Head>

      <Header />

      <main className="min-h-screen py-12">
        <div className="container mx-auto px-4 max-w-4xl">
          {/* Page Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              About <span className="text-primary-500">SymptoCare AI</span>
            </h1>
            <p className="text-xl text-gray-600">
              Your Educational Healthcare Companion
            </p>
          </div>

          {/* Main Content */}
          <div className="bg-white rounded-lg shadow-lg p-8 space-y-8">
            {/* What is SymptoCare AI */}
            <section>
              <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center">
                <svg
                  className="w-7 h-7 mr-2 text-primary-500"
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
                What is SymptoCare AI?
              </h2>
              <p className="text-gray-700 leading-relaxed">
                SymptoCare AI is an educational healthcare tool that uses
                advanced artificial intelligence to help you understand your
                symptoms better. Powered by Google Gemini AI, our system
                analyzes symptom descriptions and provides general health
                information based on medical knowledge.
              </p>
            </section>

            {/* How It Works */}
            <section>
              <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center">
                <svg
                  className="w-7 h-7 mr-2 text-primary-500"
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
                How It Works
              </h2>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-8 h-8 bg-primary-100 rounded-full flex items-center justify-center text-primary-600 font-bold mr-4">
                    1
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-1">
                      Describe Your Symptoms
                    </h3>
                    <p className="text-gray-600">
                      Enter detailed information about what you're experiencing,
                      including when symptoms started and their severity.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 w-8 h-8 bg-primary-100 rounded-full flex items-center justify-center text-primary-600 font-bold mr-4">
                    2
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-1">
                      AI Analysis
                    </h3>
                    <p className="text-gray-600">
                      Our AI system processes your input using advanced natural
                      language understanding and medical knowledge bases.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 w-8 h-8 bg-primary-100 rounded-full flex items-center justify-center text-primary-600 font-bold mr-4">
                    3
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-1">
                      Educational Results
                    </h3>
                    <p className="text-gray-600">
                      Receive information about possible conditions, severity
                      assessment, and general recommendations.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Technology Stack */}
            <section>
              <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center">
                <svg
                  className="w-7 h-7 mr-2 text-primary-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                  />
                </svg>
                Technology Stack
              </h2>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="border-2 border-gray-200 rounded-lg p-4">
                  <h3 className="font-semibold text-gray-800 mb-2">Frontend</h3>
                  <ul className="text-gray-600 space-y-1 text-sm">
                    <li>• Next.js 14 (React Framework)</li>
                    <li>• Tailwind CSS (Styling)</li>
                    <li>• Axios (API Communication)</li>
                  </ul>
                </div>

                <div className="border-2 border-gray-200 rounded-lg p-4">
                  <h3 className="font-semibold text-gray-800 mb-2">Backend</h3>
                  <ul className="text-gray-600 space-y-1 text-sm">
                    <li>• Node.js + Express</li>
                    <li>• Google Gemini API</li>
                    <li>• RESTful Architecture</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Important Information */}
            <section className="bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-lg p-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center">
                <svg
                  className="w-7 h-7 mr-2 text-primary-500"
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
                Important to Know
              </h2>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="mr-2 text-primary-500 font-bold">•</span>
                  <span>
                    <strong>Educational Tool:</strong> SymptoCare AI provides general health information for learning purposes only.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-primary-500 font-bold">•</span>
                  <span>
                    <strong>Not Medical Advice:</strong> Always consult qualified healthcare professionals for medical diagnosis and treatment.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-primary-500 font-bold">•</span>
                  <span>
                    <strong>Emergencies:</strong> For serious symptoms or medical emergencies, seek immediate professional medical attention.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-primary-500 font-bold">•</span>
                  <span>
                    <strong>AI Limitations:</strong> AI systems can make mistakes. Use this tool as a learning resource, not a diagnostic tool.
                  </span>
                </li>
              </ul>
            </section>

            {/* Purpose */}
            <section>
              <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center">
                <svg
                  className="w-7 h-7 mr-2 text-primary-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                  />
                </svg>
                Educational Purpose
              </h2>
              <p className="text-gray-700 leading-relaxed">
                SymptoCare AI is designed as an{" "}
                <strong>educational tool</strong> to help users learn about
                general health information and understand when they should seek
                professional medical care. Our goal is to promote health
                literacy and informed decision-making, not to replace
                professional medical consultation.
              </p>
            </section>

            {/* Project Info */}
            <section>
              <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center">
                <svg
                  className="w-7 h-7 mr-2 text-primary-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                Project Information
              </h2>
              <div className="bg-gray-50 rounded-lg p-4 space-y-2">
                <p className="text-gray-700">
                  <strong>Developed for:</strong> Unthinkable Solutions Assignment
                </p>
                <p className="text-gray-700">
                  <strong>Purpose:</strong> Educational Healthcare Demonstration
                </p>
                <p className="text-gray-700">
                  <strong>Status:</strong> Assignment Project (Not for Commercial Use)
                </p>
              </div>
            </section>

            {/* Contact CTA */}
            <section className="text-center pt-6 border-t-2 border-gray-200">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                Ready to Try It?
              </h3>
              <a
                href="/check"
                className="inline-block bg-primary-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-primary-600 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all"
              >
                Check Your Symptoms →
              </a>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
