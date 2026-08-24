import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { AuthProvider } from './context/AuthContext';
import { BookingProvider } from './context/BookingContext';

// Pages
import SplashScreen from './pages/SplashScreen';
import OnboardingScreen from './pages/OnboardingScreen';
import LoginPage from './pages/auth/LoginPage';
import RegisterPage from './pages/auth/RegisterPage';
import HomePage from './pages/customer/HomePage';
import ServiceDetailPage from './pages/customer/ServiceDetailPage';
import BookingPage from './pages/customer/BookingPage';
import BookingConfirmationPage from './pages/customer/BookingConfirmationPage';
import BookingTrackingPage from './pages/customer/BookingTrackingPage';
import ProfilePage from './pages/customer/ProfilePage';
import ProviderDashboard from './pages/provider/ProviderDashboard';
import CleanerDashboard from './pages/cleaner/CleanerDashboard';
import AdminDashboard from './pages/admin/AdminDashboard';
import NotFoundPage from './pages/NotFoundPage';

function App() {
  return (
    <Router>
      <AuthProvider>
        <BookingProvider>
          <Routes>
            {/* Public Routes */}
            <Route path="/splash" element={<SplashScreen />} />
            <Route path="/onboarding" element={<OnboardingScreen />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            
            {/* Customer Routes */}
            <Route path="/" element={<HomePage />} />
            <Route path="/service/:serviceId" element={<ServiceDetailPage />} />
            <Route path="/booking/new" element={<BookingPage />} />
            <Route path="/booking/confirmation/:bookingId" element={<BookingConfirmationPage />} />
            <Route path="/booking/track/:bookingId" element={<BookingTrackingPage />} />
            <Route path="/profile" element={<ProfilePage />} />
            
            {/* Provider Routes */}
            <Route path="/provider/dashboard" element={<ProviderDashboard />} />
            
            {/* Cleaner Routes */}
            <Route path="/cleaner/dashboard" element={<CleanerDashboard />} />
            
            {/* Admin Routes */}
            <Route path="/admin" element={<AdminDashboard />} />
            
            {/* Not Found */}
            <Route path="/404" element={<NotFoundPage />} />
            <Route path="*" element={<Navigate to="/404" />} />
          </Routes>
          <Toaster position="top-center" />
        </BookingProvider>
      </AuthProvider>
    </Router>
  );
}

export default App;
