import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const SplashScreen: React.FC = () => {
  const navigate = useNavigate();
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          navigate('/onboarding');
          return 100;
        }
        return prev + 10;
      });
    }, 100);

    return () => clearInterval(timer);
  }, [navigate]);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-b from-blue-600 to-blue-800">
      <div className="text-center">
        <div className="mb-8">
          <div className="text-6xl font-bold text-white mb-2">✨</div>
          <h1 className="text-5xl font-bold text-white">UsafiBora</h1>
          <p className="text-xl text-blue-100 mt-2">Professional Cleaning. Booked in Minutes.</p>
        </div>
        <div className="w-64 h-2 bg-blue-300 rounded-full overflow-hidden">
          <div
            className="h-full bg-white transition-all duration-300"
            style={{ width: `${progress}%` }}
          />
        </div>
        <p className="text-blue-100 mt-4 text-sm">Loading...</p>
      </div>
    </div>
  );
};

export default SplashScreen;
