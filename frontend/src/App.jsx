import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import HealthData from './pages/HealthData';
import Predictions from './pages/Predictions';
import Chatbot from './components/Chatbot';
import './styles/tailwind.css';

function App() {
  return (
    <Router>
      <div
        className="h-screen w-screen bg-cover bg-center bg-no-repeat font-poppins overflow-hidden flex flex-col"
        style={{
          backgroundImage: `url('/background.png'), linear-gradient(to bottom right, #e0f7fa, #e3f2fd)`,
        }}
      >
        <nav className="bg-blue-800 text-white p-4 shadow-lg">
          <div className="container mx-auto flex justify-between items-center">
            <div className="flex items-center space-x-3">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
              </svg>
              <h1 className="text-2xl font-bold">HealthGuard Predictor</h1>
            </div>
            <ul className="flex space-x-6">
              <li><a href="/" className="hover:text-blue-200 transition duration-300">Home</a></li>
              <li><a href="/health-data" className="hover:text-blue-200 transition duration-300">Health Data</a></li>
              <li><a href="/predictions" className="hover:text-blue-200 transition duration-300">Predictions</a></li>
            </ul>
          </div>
        </nav>
        <main className="flex-1 w-full overflow-y-auto">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/health-data" element={<HealthData />} />
            <Route path="/predictions" element={<Predictions />} />
          </Routes>
        </main>
        <Chatbot />
      </div>
    </Router>
  );
}

export default App;