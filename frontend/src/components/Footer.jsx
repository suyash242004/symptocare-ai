export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white mt-20">
      <div className="container mx-auto px-4 py-8">
        {/* Disclaimer Banner */}
        <div className="bg-red-600 text-white p-4 rounded-lg mb-6">
          <p className="text-center font-semibold">
            ⚠️ MEDICAL DISCLAIMER: This tool is for educational purposes only
            and is NOT a substitute for professional medical advice, diagnosis,
            or treatment.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* About Section */}
          <div>
            <h3 className="text-xl font-bold mb-4">SymptoCare AI</h3>
            <p className="text-gray-300 text-sm">
              An educational AI-powered symptom checker designed to provide
              general health information. Always consult healthcare
              professionals for medical concerns.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="/" className="text-gray-300 hover:text-white">
                  Home
                </a>
              </li>
              <li>
                <a href="/check" className="text-gray-300 hover:text-white">
                  Symptom Checker
                </a>
              </li>
              <li>
                <a href="/about" className="text-gray-300 hover:text-white">
                  About Us
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">Important</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>🚨 For emergencies, call local emergency services</li>
              <li>🏥 Always consult qualified healthcare providers</li>
              <li>📚 This is an educational tool only</li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-700 mt-8 pt-6 text-center text-sm text-gray-400">
          <p>
            © 2024 SymptoCare AI | Educational Project for Unthinkable Solutions
          </p>
          <p className="mt-2">Powered by Anthropic Claude AI</p>
        </div>
      </div>
    </footer>
  );
}
