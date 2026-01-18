
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { User, Mail, Lock, MapPin, Tag } from 'lucide-react';

interface SignupProps {
  onSignup: () => void;
}

const Signup: React.FC<SignupProps> = ({ onSignup }) => {
  const navigate = useNavigate();

  const handleSignup = (e: React.FormEvent) => {
    e.preventDefault();
    onSignup();
    navigate('/home');
  };

  return (
    <div className="flex flex-col h-full bg-white p-6 overflow-y-auto no-scrollbar">
      <div className="mt-8 mb-8">
        <h2 className="text-3xl font-heading font-bold text-gray-900">Create Account</h2>
        <p className="text-gray-500 mt-2">Join Bharat's biggest community of writers.</p>
      </div>

      <form onSubmit={handleSignup} className="space-y-4">
        <div className="space-y-1">
          <label className="text-[10px] font-bold text-gray-500 uppercase tracking-widest ml-1">Full Name</label>
          <div className="relative">
            <User className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
            <input 
              type="text" 
              required
              className="w-full bg-gray-50 border border-gray-100 rounded-xl py-3 pl-12 pr-4 focus:ring-2 focus:ring-orange-500 focus:bg-white outline-none transition-all"
              placeholder="e.g. Vikram Seth"
            />
          </div>
        </div>

        <div className="space-y-1">
          <label className="text-[10px] font-bold text-gray-500 uppercase tracking-widest ml-1">Email</label>
          <div className="relative">
            <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
            <input 
              type="email" 
              required
              className="w-full bg-gray-50 border border-gray-100 rounded-xl py-3 pl-12 pr-4 focus:ring-2 focus:ring-orange-500 focus:bg-white outline-none transition-all"
              placeholder="vikram@example.com"
            />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-1">
            <label className="text-[10px] font-bold text-gray-500 uppercase tracking-widest ml-1">State</label>
            <div className="relative">
              <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
              <select className="w-full bg-gray-50 border border-gray-100 rounded-xl py-3 pl-12 pr-4 focus:ring-2 focus:ring-orange-500 focus:bg-white outline-none transition-all appearance-none">
                <option>Maharashtra</option>
                <option>Delhi</option>
                <option>Uttar Pradesh</option>
                <option>Tamil Nadu</option>
                <option>Karnataka</option>
              </select>
            </div>
          </div>
          <div className="space-y-1">
            <label className="text-[10px] font-bold text-gray-500 uppercase tracking-widest ml-1">Referral</label>
            <div className="relative">
              <Tag className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
              <input 
                type="text" 
                className="w-full bg-gray-50 border border-gray-100 rounded-xl py-3 pl-12 pr-4 focus:ring-2 focus:ring-orange-500 focus:bg-white outline-none transition-all"
                placeholder="Optional"
              />
            </div>
          </div>
        </div>

        <div className="space-y-1">
          <label className="text-[10px] font-bold text-gray-500 uppercase tracking-widest ml-1">Password</label>
          <div className="relative">
            <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
            <input 
              type="password" 
              required
              className="w-full bg-gray-50 border border-gray-100 rounded-xl py-3 pl-12 pr-4 focus:ring-2 focus:ring-orange-500 focus:bg-white outline-none transition-all"
              placeholder="••••••••"
            />
          </div>
        </div>

        <button 
          type="submit"
          className="w-full py-4 bg-orange-500 text-white rounded-xl font-bold text-lg shadow-lg shadow-orange-100 active:scale-95 transition-all mt-4"
        >
          Create Account
        </button>
      </form>

      <div className="mt-8 text-center pb-8">
        <p className="text-gray-500 text-sm">
          By signing up, you agree to our <span className="text-gray-900 font-medium underline">Terms</span> and <span className="text-gray-900 font-medium underline">Privacy Policy</span>.
        </p>
        <p className="text-gray-500 mt-4">
          Already a writer? {' '}
          <button onClick={() => navigate('/login')} className="font-bold text-orange-500">Log In</button>
        </p>
      </div>
    </div>
  );
};

export default Signup;
