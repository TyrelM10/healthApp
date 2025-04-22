import React from 'react';

function PredictionResult({ prediction }) {
  const riskScore = (prediction.risk_score * 100).toFixed(2);
  const riskColor = prediction.risk_level === 'High' ? 'bg-red-500' : prediction.risk_level === 'Medium' ? 'bg-yellow-500' : 'bg-green-500';

  return (
    <div className="mt-6 sm:mt-8 w-full">
      <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-4 text-center">Your Health Risk Prediction</h3>
      <div className="mb-4">
        <p className="text-gray-700 font-medium text-sm sm:text-base">Risk Score: {riskScore}%</p>
        <div className="w-full bg-gray-200 rounded-full h-3 sm:h-4 mt-2">
          <div
            className={`h-3 sm:h-4 rounded-full ${riskColor}`}
            style={{ width: `${riskScore}%` }}
          ></div>
        </div>
      </div>
      <p className="text-gray-700 font-medium text-sm sm:text-base">
        Risk Level: <span className={`font-semibold ${riskColor.replace('bg-', 'text-')}`}>{prediction.risk_level}</span>
      </p>
    </div>
  );
}

export default PredictionResult;