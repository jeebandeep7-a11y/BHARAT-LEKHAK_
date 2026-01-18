
import React, { useState, useEffect } from 'react';
import { HashRouter, Routes, Route, useNavigate } from 'react-router-dom';
import SplashScreen from './screens/SplashScreen';
import Onboarding from './screens/Onboarding';
import Login from './screens/Login';
import Signup from './screens/Signup';
import HomeFeed from './screens/HomeFeed';
import Reader from './screens/Reader';
import WriteStory from './screens/WriteStory';
import Profile from './screens/Profile';
import SearchScreen from './screens/SearchScreen';
import Notifications from './screens/Notifications';
import AdminPanel from './screens/AdminPanel';
import DevDocumentation from './screens/DevDocumentation';
import Navigation from './components/Navigation';

const App: React.FC = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3500);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <SplashScreen />;
  }

  return (
    <HashRouter>
      <div className="flex flex-col h-screen bg-gray-50 max-w-md mx-auto relative shadow-2xl overflow-hidden border-x border-gray-200">
        <div className="flex-1 overflow-y-auto no-scrollbar pb-16">
          <Routes>
            <Route path="/" element={<Onboarding />} />
            <Route path="/login" element={<Login onLogin={() => {}} />} />
            <Route path="/signup" element={<Signup onSignup={() => {}} />} />
            <Route path="/home" element={<HomeFeed />} />
            <Route path="/search" element={<SearchScreen />} />
            <Route path="/notifications" element={<Notifications />} />
            <Route path="/reader/:id" element={<Reader />} />
            <Route path="/write" element={<WriteStory />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/admin" element={<AdminPanel />} />
            <Route path="/dev-docs" element={<DevDocumentation />} />
          </Routes>
        </div>
        <ConditionalNavigation />
      </div>
    </HashRouter>
  );
};

const ConditionalNavigation: React.FC = () => {
  const path = window.location.hash;
  const hideNav = path === '#/' || path === '#/login' || path === '#/signup' || path === '' || path.includes('reader');
  
  if (hideNav) return null;
  return <Navigation />;
};

export default App;
