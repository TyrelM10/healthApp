import React, { useState } from 'react';

function HealthForm({ onSubmit, loading = false }) {
  const [formData, setFormData] = useState({
    age: '',
    bmi: '',
    glucose: '',
    blood_pressure: '',
    insulin: '',
  });
  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    if (!formData.age || formData.age <= 0) newErrors.age = 'Age must be a positive number';
    if (!formData.bmi || formData.bmi <= 0) newErrors.bmi = 'BMI must be a positive number';
    if (!formData.glucose || formData.glucose <= 0) newErrors.glucose = 'Glucose must be a positive number';
    if (!formData.blood_pressure || formData.blood_pressure <= 0) newErrors.blood_pressure = 'Blood Pressure must be a positive number';
    if (!formData.insulin || formData.insulin <= 0) newErrors.insulin = 'Insulin must be a positive number';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: '' });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      onSubmit(formData);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="w-full space-y-3 sm:space-y-4">
      <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-4 sm:mb-6 text-center">Enter Your Health Data</h2>
      <div className="space-y-3 sm:space-y-4">
        <div>
          <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1">Age (years)</label>
          <input
            type="number"
            name="age"
            value={formData.age}
            onChange={handleChange}
            className={`w-full p-2 sm:p-3 border rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none transition duration-200 ${errors.age ? 'border-red-500' : 'border-gray-300'}`}
            placeholder="e.g., 30"
            disabled={loading}
          />
          {errors.age && <p className="text-red-500 text-xs sm:text-sm mt-1">{errors.age}</p>}
        </div>
        <div>
          <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1">BMI (kg/m²)</label>
          <input
            type="number"
            name="bmi"
            value={formData.bmi}
            onChange={handleChange}
            className={`w-full p-2 sm:p-3 border rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none transition duration-200 ${errors.bmi ? 'border-red-500' : 'border-gray-300'}`}
            placeholder="e.g., 25.5"
            step="0.1"
            disabled={loading}
          />
          {errors.bmi && <p className="text-red-500 text-xs sm:text-sm mt-1">{errors.bmi}</p>}
        </div>
        <div>
          <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1">Glucose (mg/dL)</label>
          <input
            type="number"
            name="glucose"
            value={formData.glucose}
            onChange={handleChange}
            className={`w-full p-2 sm:p-3 border rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none transition duration-200 ${errors.glucose ? 'border-red-500' : 'border-gray-300'}`}
            placeholder="e.g., 85"
            disabled={loading}
          />
          {errors.glucose && <p className="text-red-500 text-xs sm:text-sm mt-1">{errors.glucose}</p>}
        </div>
        <div>
          <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1">Blood Pressure (mmHg)</label>
          <input
            type="number"
            name="blood_pressure"
            value={formData.blood_pressure}
            onChange={handleChange}
            className={`w-full p-2 sm:p-3 border rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none transition duration-200 ${errors.blood_pressure ? 'border-red-500' : 'border-gray-300'}`}
            placeholder="e.g., 120"
            disabled={loading}
          />
          {errors.blood_pressure && <p className="text-red-500 text-xs sm:text-sm mt-1">{errors.blood_pressure}</p>}
        </div>
        <div>
          <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1">Insulin (μU/mL)</label>
          <input
            type="number"
            name="insulin"
            value={formData.insulin}
            onChange={handleChange}
            className={`w-full p-2 sm:p-3 border rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none transition duration-200 ${errors.insulin ? 'border-red-500' : 'border-gray-300'}`}
            placeholder="e.g., 15"
            disabled={loading}
          />
          {errors.insulin && <p className="text-red-500 text-xs sm:text-sm mt-1">{errors.insulin}</p>}
        </div>
      </div>
      <button
        type="submit"
        className="w-full bg-blue-600 text-white p-2 sm:p-3 rounded-lg hover:bg-blue-700 transition duration-300 font-medium flex items-center justify-center text-sm sm:text-base"
        disabled={loading}
      >
        {loading ? (
          <>
            <svg
              className="animate-spin h-4 sm:h-5 w-4 sm:w-5 mr-2 text-white"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              ></circle>
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              ></path>
            </svg>
            Predicting...
          </>
        ) : (
          'Submit'
        )}
      </button>
    </form>
  );
}

export default HealthForm;