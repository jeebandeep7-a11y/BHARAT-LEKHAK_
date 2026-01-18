
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Cpu, Database, DollarSign, Rocket } from 'lucide-react';

const DevDocumentation: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col h-full bg-white">
      <div className="bg-[#000080] text-white px-5 py-6">
        <button onClick={() => navigate(-1)} className="mb-4">
          <ArrowLeft size={24} />
        </button>
        <h2 className="text-2xl font-heading font-black">Startup Roadmap</h2>
        <p className="text-xs opacity-70 uppercase tracking-widest font-bold">BHARAT LEKHAK Blueprint</p>
      </div>

      <div className="p-6 space-y-8 overflow-y-auto no-scrollbar pb-10">
        {/* Tech Stack */}
        <section className="space-y-4">
          <div className="flex items-center space-x-2 text-blue-600 font-black text-xs uppercase tracking-widest">
            <Cpu size={16} />
            <span>Tech Stack</span>
          </div>
          <ul className="grid grid-cols-2 gap-2">
            {['React Native', 'Node.js/Go', 'Redis Cache', 'ElasticSearch', 'AWS S3 (Images)', 'Gemini AI API'].map(tech => (
              <li key={tech} className="bg-gray-50 p-2 rounded-lg text-xs font-medium text-gray-600 border border-gray-100">{tech}</li>
            ))}
          </ul>
        </section>

        {/* DB Schema */}
        <section className="space-y-4">
          <div className="flex items-center space-x-2 text-orange-600 font-black text-xs uppercase tracking-widest">
            <Database size={16} />
            <span>Database Architecture</span>
          </div>
          <div className="space-y-4">
            <div className="border-l-2 border-orange-100 pl-4 py-1">
              <h5 className="text-sm font-bold text-gray-900">Users Table (PostgreSQL)</h5>
              <p className="text-[10px] text-gray-500">ID, UUID, Email, PasswordHash, LanguagePref, State, KarmaPoints, ReferrerID</p>
            </div>
            <div className="border-l-2 border-orange-100 pl-4 py-1">
              <h5 className="text-sm font-bold text-gray-900">Stories Table (PostgreSQL)</h5>
              <p className="text-[10px] text-gray-500">ID, AuthorID, Title, CategoryID, LanguageID, ContentRef, LikesCount, Views, Status (Draft/Live)</p>
            </div>
            <div className="border-l-2 border-orange-100 pl-4 py-1">
              <h5 className="text-sm font-bold text-gray-900">Analytics (MongoDB)</h5>
              <p className="text-[10px] text-gray-500">Event-driven storage for read sessions, scroll depth, and interaction heatmaps.</p>
            </div>
          </div>
        </section>

        {/* Monetization */}
        <section className="space-y-4">
          <div className="flex items-center space-x-2 text-green-600 font-black text-xs uppercase tracking-widest">
            <DollarSign size={16} />
            <span>Monetization Model</span>
          </div>
          <div className="grid grid-cols-1 gap-3">
            <div className="p-4 bg-green-50 rounded-2xl border border-green-100">
              <h5 className="text-xs font-black text-green-800 uppercase mb-1">Writer Tipping</h5>
              <p className="text-[11px] text-green-700">Readers buy "Diyas" (virtual currency) to tip authors. Platform takes 15% commission.</p>
            </div>
            <div className="p-4 bg-blue-50 rounded-2xl border border-blue-100">
              <h5 className="text-xs font-black text-blue-800 uppercase mb-1">Lekhak Plus (SaaS)</h5>
              <p className="text-[11px] text-blue-700">Ad-free reading, offline downloads, and early access to trending series.</p>
            </div>
          </div>
        </section>

        {/* Future Roadmap */}
        <section className="space-y-4">
          <div className="flex items-center space-x-2 text-purple-600 font-black text-xs uppercase tracking-widest">
            <Rocket size={16} />
            <span>2025 Roadmap</span>
          </div>
          <div className="space-y-3">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 rounded-full bg-purple-100 flex items-center justify-center text-[10px] font-bold text-purple-600">Q1</div>
              <p className="text-xs text-gray-600">Beta Launch in 5 languages + Audio Stories feature.</p>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 rounded-full bg-purple-100 flex items-center justify-center text-[10px] font-bold text-purple-600">Q2</div>
              <p className="text-xs text-gray-600">Print-on-demand service integration for top writers.</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default DevDocumentation;
