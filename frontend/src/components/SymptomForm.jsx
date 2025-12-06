import { useState } from "react";

export default function SymptomForm({ onSubmit, loading }) {
  const [formData, setFormData] = useState({
    symptoms: "",
    age: "",
    gender: "",
    duration: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  const validate = () => {
    const newErrors = {};

    if (!formData.symptoms.trim()) {
      newErrors.symptoms = "Please describe your symptoms";
    } else if (formData.symptoms.trim().length < 10) {
      newErrors.symptoms =
        "Please provide more detailed description (at least 10 characters)";
    }

    if (
      formData.age &&
      (isNaN(formData.age) || formData.age < 0 || formData.age > 120)
    ) {
      newErrors.age = "Please enter a valid age (0-120)";
    }

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newErrors = validate();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    // Prepare data for submission
    const submissionData = {
      symptoms: formData.symptoms.trim(),
      ...(formData.age && { age: parseInt(formData.age) }),
      ...(formData.gender && { gender: formData.gender }),
      ...(formData.duration && { duration: formData.duration }),
    };

    onSubmit(submissionData);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Symptoms Input */}
      <div>
        <label
          htmlFor="symptoms"
          className="block text-sm font-semibold text-gray-700 mb-2"
        >
          Describe Your Symptoms <span className="text-red-500">*</span>
        </label>
        <textarea
          id="symptoms"
          name="symptoms"
          rows="6"
          value={formData.symptoms}
          onChange={handleChange}
          placeholder="Example: I have a persistent headache for the last 2 days, mild fever, and feeling tired..."
          className={`w-full px-4 py-3 border-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 ${
            errors.symptoms ? "border-red-500" : "border-gray-300"
          }`}
          disabled={loading}
        />
        {errors.symptoms && (
          <p className="mt-1 text-sm text-red-500">{errors.symptoms}</p>
        )}
        <p className="mt-1 text-xs text-gray-500">
          Be as specific as possible. Include when symptoms started, severity,
          and any related information.
        </p>
      </div>

      {/* Age Input */}
      <div className="grid md:grid-cols-2 gap-4">
        <div>
          <label
            htmlFor="age"
            className="block text-sm font-semibold text-gray-700 mb-2"
          >
            Age (Optional)
          </label>
          <input
            type="number"
            id="age"
            name="age"
            value={formData.age}
            onChange={handleChange}
            placeholder="e.g., 25"
            min="0"
            max="120"
            className={`w-full px-4 py-3 border-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 ${
              errors.age ? "border-red-500" : "border-gray-300"
            }`}
            disabled={loading}
          />
          {errors.age && (
            <p className="mt-1 text-sm text-red-500">{errors.age}</p>
          )}
        </div>

        {/* Gender Select */}
        <div>
          <label
            htmlFor="gender"
            className="block text-sm font-semibold text-gray-700 mb-2"
          >
            Gender (Optional)
          </label>
          <select
            id="gender"
            name="gender"
            value={formData.gender}
            onChange={handleChange}
            className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
            disabled={loading}
          >
            <option value="">Select gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
        </div>
      </div>

      {/* Duration Input */}
      <div>
        <label
          htmlFor="duration"
          className="block text-sm font-semibold text-gray-700 mb-2"
        >
          How long have you had these symptoms? (Optional)
        </label>
        <select
          id="duration"
          name="duration"
          value={formData.duration}
          onChange={handleChange}
          className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
          disabled={loading}
        >
          <option value="">Select duration</option>
          <option value="Less than 24 hours">Less than 24 hours</option>
          <option value="1-3 days">1-3 days</option>
          <option value="4-7 days">4-7 days</option>
          <option value="1-2 weeks">1-2 weeks</option>
          <option value="2-4 weeks">2-4 weeks</option>
          <option value="More than 1 month">More than 1 month</option>
        </select>
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        disabled={loading}
        className={`w-full py-4 px-6 rounded-lg font-semibold text-white text-lg shadow-lg transition-all ${
          loading
            ? "bg-gray-400 cursor-not-allowed"
            : "bg-primary-500 hover:bg-primary-600 hover:shadow-xl transform hover:scale-105"
        }`}
      >
        {loading ? (
          <span className="flex items-center justify-center">
            <svg className="animate-spin h-5 w-5 mr-3" viewBox="0 0 24 24">
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
                fill="none"
              ></circle>
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              ></path>
            </svg>
            Analyzing...
          </span>
        ) : (
          "🔍 Analyze Symptoms"
        )}
      </button>

      {/* Helper Text */}
      <p className="text-xs text-gray-500 text-center">
        * Required fields | Your information is processed securely
      </p>
    </form>
  );
}
