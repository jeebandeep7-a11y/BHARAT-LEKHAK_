
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Mail, Lock, Eye, EyeOff } from 'lucide-react';

interface LoginProps {
  onLogin: () => void;
}

const Login: React.FC<LoginProps> = ({ onLogin }) => {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    onLogin();
    navigate('/home');
  };

  return (
    <div className="flex flex-col h-full bg-white p-6">
      <div className="mt-12 mb-10">
        <h2 className="text-3xl font-heading font-bold text-gray-900">Welcome Back!</h2>
        <p className="text-gray-500 mt-2">Login to read and publish your stories.</p>
      </div>

      <form onSubmit={handleLogin} className="space-y-6">
        <div className="space-y-2">
          <label className="text-xs font-bold text-gray-500 uppercase tracking-widest ml-1">Email Address</label>
          <div className="relative">
            <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
            <input 
              type="email" 
              required
              className="w-full bg-gray-50 border border-gray-100 rounded-xl py-4 pl-12 pr-4 focus:ring-2 focus:ring-orange-500 focus:bg-white outline-none transition-all"
              placeholder="name@example.com"
            />
          </div>
        </div>

        <div className="space-y-2">
          <label className="text-xs font-bold text-gray-500 uppercase tracking-widest ml-1">Password</label>
          <div className="relative">
            <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
            <input 
              type={showPassword ? "text" : "password"} 
              required
              className="w-full bg-gray-50 border border-gray-100 rounded-xl py-4 pl-12 pr-12 focus:ring-2 focus:ring-orange-500 focus:bg-white outline-none transition-all"
              placeholder="••••••••"
            />
            <button 
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400"
            >
              {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
            </button>
          </div>
          <div className="text-right">
            <button type="button" className="text-sm font-medium text-orange-500">Forgot Password?</button>
          </div>
        </div>

        <button 
          type="submit"
          className="w-full py-4 bg-[#000080] text-white rounded-xl font-bold text-lg shadow-xl shadow-blue-100 active:scale-95 transition-all mt-4"
        >
          Log In
        </button>
      </form>

      <div className="mt-auto pt-8 text-center">
        <p className="text-gray-500">
          Don't have an account? {' '}
          <button onClick={() => navigate('/signup')} className="font-bold text-orange-500">Sign Up</button>
        </p>
      </div>
    </div>
  );
};

export default Login;
