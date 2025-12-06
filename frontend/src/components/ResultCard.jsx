export default function ResultCard({ result }) {
  const getSeverityColor = (severity) => {
    switch (severity?.toLowerCase()) {
      case "high":
        return "bg-red-100 text-red-800 border-red-300";
      case "medium":
        return "bg-yellow-100 text-yellow-800 border-yellow-300";
      case "low":
        return "bg-green-100 text-green-800 border-green-300";
      default:
        return "bg-gray-100 text-gray-800 border-gray-300";
    }
  };

  const getLikelihoodBadge = (likelihood) => {
    switch (likelihood?.toLowerCase()) {
      case "high":
        return "bg-red-500 text-white";
      case "medium":
        return "bg-yellow-500 text-white";
      case "low":
        return "bg-green-500 text-white";
      default:
        return "bg-gray-500 text-white";
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-lg p-6 space-y-6">
      {/* Severity Badge */}
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-gray-800">Analysis Results</h2>
        <div
          className={`px-4 py-2 rounded-full border-2 font-semibold ${getSeverityColor(
            result.severity
          )}`}
        >
          Severity: {result.severity || "Unknown"}
        </div>
      </div>

      {/* Possible Conditions */}
      {result.possibleConditions && result.possibleConditions.length > 0 && (
        <div>
          <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
            <svg
              className="w-6 h-6 mr-2 text-primary-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
              />
            </svg>
            Possible Conditions
          </h3>
          <div className="space-y-3">
            {result.possibleConditions.map((condition, index) => (
              <div
                key={index}
                className="border-2 border-gray-200 rounded-lg p-4 hover:border-primary-300 transition-all"
              >
                <div className="flex items-start justify-between mb-2">
                  <h4 className="font-semibold text-gray-800 text-lg">
                    {condition.name}
                  </h4>
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-semibold ${getLikelihoodBadge(
                      condition.likelihood
                    )}`}
                  >
                    {condition.likelihood} Likelihood
                  </span>
                </div>
                <p className="text-gray-600 text-sm">{condition.description}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Recommendations */}
      {result.recommendations && result.recommendations.length > 0 && (
        <div>
          <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
            <svg
              className="w-6 h-6 mr-2 text-primary-500"
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
            Recommendations
          </h3>
          <ul className="space-y-2">
            {result.recommendations.map((recommendation, index) => (
              <li key={index} className="flex items-start">
                <span className="text-primary-500 mr-2 mt-1">✓</span>
                <span className="text-gray-700">{recommendation}</span>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Red Flags */}
      {result.redFlags && result.redFlags.length > 0 && (
        <div className="bg-red-50 border-2 border-red-300 rounded-lg p-4">
          <h3 className="text-xl font-semibold text-red-800 mb-3 flex items-center">
            <svg
              className="w-6 h-6 mr-2"
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
            Warning Signs
          </h3>
          <ul className="space-y-2">
            {result.redFlags.map((flag, index) => (
              <li key={index} className="flex items-start">
                <span className="text-red-600 mr-2">⚠️</span>
                <span className="text-red-700 font-medium">{flag}</span>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Disclaimer */}
      <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-lg p-4">
        <p className="text-xs text-gray-700 leading-relaxed">
          {result.disclaimer ||
            "This information is for educational purposes only. Always consult with a qualified healthcare professional for medical advice, diagnosis, or treatment."}
        </p>
      </div>
    </div>
  );
}
