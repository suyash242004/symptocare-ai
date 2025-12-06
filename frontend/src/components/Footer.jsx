export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 mt-20 border-t border-gray-700">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* About Section */}
          <div>
            <h3 className="text-xl font-bold text-white mb-4">SymptoCare AI</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              An educational AI-powered tool to help you understand health information better. Powered by Google Gemini AI.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="/" className="text-gray-400 hover:text-white transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="/check" className="text-gray-400 hover:text-white transition-colors">
                  Symptom Checker
                </a>
              </li>
              <li>
                <a href="/about" className="text-gray-400 hover:text-white transition-colors">
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
        <div className="border-t border-gray-700 mt-6 pt-6 text-center text-xs text-gray-500">
          <p>
            © 2024 SymptoCare AI | Educational Project for Unthinkable Solutions
          </p>
        </div>
      </div>
    </footer>
  );
}
