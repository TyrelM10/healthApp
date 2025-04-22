import React, { useState } from 'react';
import HealthForm from '../components/HealthForm';
import PredictionResult from '../components/PredictionResult';
import { predictHealthRisk } from '../utils/api';

function Predictions() {
  const [prediction, setPrediction] = useState(null);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (data) => {
    setLoading(true);
    try {
      const response = await predictHealthRisk(data);
      setPrediction(response);
      setError('');
    } catch (error) {
      console.error('Prediction error:', error);
      setError('Failed to get prediction. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="h-full w-full flex flex-col lg:flex-row bg-black/50 p-4 sm:p-6 lg:p-8">
      {/* Left Section: Form */}
      <div className="flex-1 flex items-center justify-center">
        <div className="w-full max-w-md bg-white p-4 sm:p-6 rounded-xl shadow-lg backdrop-blur-md bg-opacity-80 overflow-y-auto max-h-[calc(100vh-8rem)]">
          <HealthForm onSubmit={handleSubmit} loading={loading} />
          {error && <p className="text-red-500 text-center mt-3 sm:mt-4 animate-fade-in text-xs sm:text-sm">{error}</p>}
        </div>
      </div>
      {/* Right Section: Prediction Result */}
      <div className="flex-1 flex items-center justify-center mt-4 lg:mt-0">
        <div className="w-full max-w-md">
          {prediction ? (
            <div className="bg-white p-4 sm:p-6 rounded-xl shadow-lg backdrop-blur-md bg-opacity-80 overflow-y-auto max-h-[calc(100vh-8rem)]">
              <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-4 sm:mb-6 text-center animate-fade-in">Your Prediction Result</h2>
              <PredictionResult prediction={prediction} />
              <button
                onClick={() => setPrediction(null)}
                className="mt-3 sm:mt-4 w-full bg-gray-500 text-white p-2 sm:p-3 rounded-lg hover:bg-gray-600 transition duration-300 font-medium text-sm sm:text-base"
              >
                Reset
              </button>
            </div>
          ) : (
            <div className="text-center text-white">
              <h2 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4 animate-fade-in">No Prediction Yet</h2>
              <p className="animate-fade-in-delayed text-xs sm:text-sm">Submit your health data to see your risk prediction.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Predictions;