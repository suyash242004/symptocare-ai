export default function DisclaimerBanner() {
  return (
    <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-6 rounded-r-lg">
      <div className="flex items-start">
        <div className="flex-shrink-0">
          <svg
            className="h-6 w-6 text-yellow-400"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
            />
          </svg>
        </div>
        <div className="ml-3">
          <p className="text-sm text-yellow-800 font-semibold">
            Important Medical Disclaimer
          </p>
          <p className="text-sm text-yellow-700 mt-1">
            This tool provides <strong>educational information only</strong>. It
            is not a substitute for professional medical advice, diagnosis, or
            treatment. Always seek the advice of your physician or other
            qualified health provider with any questions you may have regarding
            a medical condition.
          </p>
        </div>
      </div>
    </div>
  );
}
