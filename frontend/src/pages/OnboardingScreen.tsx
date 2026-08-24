import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

const OnboardingScreen: React.FC = () => {
  const navigate = useNavigate();
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      title: 'Book a Cleaner',
      description: 'Find trusted cleaning professionals near you in seconds.',
      icon: '🏠',
    },
    {
      title: 'Choose When You Need Us',
      description: 'Pick your preferred date and time for the cleaning service.',
      icon: '📅',
    },
    {
      title: 'Relax While Professionals Handle It',
      description: 'Sit back and enjoy a perfectly cleaned space.',
      icon: '✨',
    },
  ];

  const handleNext = () => {
    if (currentSlide < slides.length - 1) {
      setCurrentSlide(currentSlide + 1);
    } else {
      navigate('/login');
    }
  };

  const handleSkip = () => {
    navigate('/login');
  };

  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* Header */}
      <div className="flex justify-between items-center p-6">
        <h1 className="text-2xl font-bold text-gray-900">UsafiBora</h1>
        <button
          onClick={handleSkip}
          className="text-gray-600 hover:text-gray-900 font-medium"
        >
          Skip
        </button>
      </div>

      {/* Slides */}
      <div className="flex-1 flex items-center justify-center px-6">
        <div className="text-center max-w-md">
          <div className="text-7xl mb-6">{slides[currentSlide].icon}</div>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            {slides[currentSlide].title}
          </h2>
          <p className="text-lg text-gray-600">{slides[currentSlide].description}</p>
        </div>
      </div>

      {/* Indicators & Button */}
      <div className="px-6 pb-8">
        <div className="flex justify-center gap-2 mb-8">
          {slides.map((_, index) => (
            <div
              key={index}
              className={`h-2 w-2 rounded-full transition-all ${
                index === currentSlide ? 'bg-blue-600 w-8' : 'bg-gray-300'
              }`}
            />
          ))}
        </div>
        <button
          onClick={handleNext}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 rounded-lg flex items-center justify-center gap-2"
        >
          {currentSlide === slides.length - 1 ? 'Get Started' : 'Next'}
          <ChevronRight size={20} />
        </button>
      </div>
    </div>
  );
};

export default OnboardingScreen;
