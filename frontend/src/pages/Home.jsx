import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  const healthTips = [
    {
      title: "Stay Hydrated",
      description: "Drink at least 8 glasses of water a day to keep your body functioning optimally.",
    },
    {
      title: "Monitor Your BMI",
      description: "Maintain a healthy BMI (18.5–24.9) to reduce the risk of chronic diseases.",
    },
    {
      title: "Regular Exercise",
      description: "Aim for at least 150 minutes of moderate aerobic activity each week.",
    },
    {
      title: "Check Blood Pressure",
      description: "Regularly monitor your blood pressure to catch potential issues early.",
    },
  ];

  return (
    <div className="h-full w-full bg-black/50 flex flex-col">
      {/* Welcome Section */}
      <div className="flex-1 flex items-center justify-center p-4 sm:p-6">
        <div className="text-center text-white p-4 sm:p-6 rounded-xl bg-opacity-80 backdrop-blur-md max-w-2xl w-full mx-4">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4 animate-fade-in">Welcome to HealthGuard Predictor</h2>
          <p className="text-sm sm:text-base md:text-lg mb-4 sm:mb-6 animate-fade-in-delayed">
            Submit your health data and get personalized risk predictions to stay ahead of potential health issues.
          </p>
          <Link
            to="/predictions"
            className="inline-block bg-blue-600 text-white px-3 sm:px-4 md:px-6 py-2 sm:py-2 md:py-3 rounded-lg hover:bg-blue-700 transition duration-300 font-semibold animate-pulse text-xs sm:text-sm md:text-base"
          >
            Get Started
          </Link>
        </div>
      </div>
      {/* Health Tips Section */}
      <div className="py-6 sm:py-8 flex-none">
        <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white text-center mb-4 sm:mb-6 animate-fade-in">Health Tips for a Better Life</h3>
        <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 px-4 sm:px-6">
          {healthTips.map((tip, index) => (
            <div
              key={index}
              className="bg-white p-3 sm:p-4 rounded-xl shadow-lg backdrop-blur-md bg-opacity-80 transform hover:scale-105 transition duration-300 animate-fade-in-delayed"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <h4 className="text-base sm:text-lg md:text-xl font-semibold text-gray-800 mb-1 sm:mb-2">{tip.title}</h4>
              <p className="text-gray-600 text-xs sm:text-sm md:text-base">{tip.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;