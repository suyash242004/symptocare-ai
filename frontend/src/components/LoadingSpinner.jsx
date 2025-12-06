export default function LoadingSpinner({ message = "Analyzing symptoms..." }) {
  return (
    <div className="flex flex-col items-center justify-center py-12">
      {/* Animated Spinner */}
      <div className="relative">
        <div className="w-20 h-20 border-4 border-primary-200 rounded-full"></div>
        <div className="w-20 h-20 border-4 border-primary-500 rounded-full animate-spin border-t-transparent absolute top-0"></div>
      </div>

      {/* Loading Text */}
      <p className="mt-6 text-gray-600 font-medium text-lg">{message}</p>

      {/* Animated Dots */}
      <div className="flex space-x-2 mt-4">
        <div className="w-3 h-3 bg-primary-500 rounded-full animate-bounce"></div>
        <div
          className="w-3 h-3 bg-primary-500 rounded-full animate-bounce"
          style={{ animationDelay: "0.1s" }}
        ></div>
        <div
          className="w-3 h-3 bg-primary-500 rounded-full animate-bounce"
          style={{ animationDelay: "0.2s" }}
        ></div>
      </div>

      {/* Info Text */}
      <p className="mt-4 text-sm text-gray-500 max-w-md text-center">
        Our AI is carefully analyzing your symptoms. This may take a few
        moments...
      </p>
    </div>
  );
}
