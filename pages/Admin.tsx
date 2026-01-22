import React, { useState, useEffect } from 'react';
import { Lead } from '../types';
import { Lock, LogOut, Download } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Admin: React.FC = () => {
  const navigate = useNavigate();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [leads, setLeads] = useState<Lead[]>([]);
  const [selectedLead, setSelectedLead] = useState<Lead | null>(null);

  useEffect(() => {
    // Check local storage for session
    const session = localStorage.getItem('adminSession');
    if (session) setIsAuthenticated(true);

    // Load mock leads from local storage or initialize empty
    const storedLeads = JSON.parse(localStorage.getItem('leads') || '[]');
    setLeads(storedLeads);
  }, []);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Hardcoded mock credentials for demo
    if (username === 'admin' && password === 'admin123') {
      setIsAuthenticated(true);
      localStorage.setItem('adminSession', 'true');
    } else {
      alert('Invalid credentials (try admin/admin123)');
    }
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    localStorage.removeItem('adminSession');
    navigate('/');
  };

  const exportLeads = () => {
    // Mock export functionality
    const headers = ['Name,Email,Phone,Type,Budget,Date'];
    const csvContent = leads.map(l => 
      `${l.fullName},${l.email},${l.phone},${l.websiteType},${l.budget},${new Date(l.submittedAt).toLocaleDateString()}`
    ).join('\n');
    
    const blob = new Blob([headers + '\n' + csvContent], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'leads.csv';
    a.click();
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-dark-900 px-4">
        <div className="bg-dark-800 p-8 rounded-2xl border border-dark-700 w-full max-w-md shadow-2xl">
          <div className="text-center mb-8">
            <div className="w-16 h-16 bg-blue-600/10 rounded-full flex items-center justify-center mx-auto mb-4 text-blue-500">
              <Lock size={24} />
            </div>
            <h2 className="text-2xl font-bold text-white">Admin Login</h2>
            <p className="text-slate-400 text-sm mt-2">Enter your credentials to access leads.</p>
          </div>
          <form onSubmit={handleLogin} className="space-y-4">
            <input
              type="text"
              placeholder="Username"
              className="w-full bg-dark-900 border border-dark-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <input
              type="password"
              placeholder="Password"
              className="w-full bg-dark-900 border border-dark-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-lg transition-colors">
              Login
            </button>
            <p className="text-center text-xs text-slate-500">Hint: admin / admin123</p>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-dark-900 text-slate-200">
      <nav className="bg-dark-800 border-b border-dark-700 px-6 py-4 flex justify-between items-center">
        <h1 className="text-xl font-bold text-white">Admin Dashboard</h1>
        <button onClick={handleLogout} className="flex items-center gap-2 text-red-400 hover:text-red-300 text-sm">
          <LogOut size={16} /> Logout
        </button>
      </nav>

      <div className="p-6 max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl font-bold text-white">Project Leads ({leads.length})</h2>
          <button 
            onClick={exportLeads}
            className="flex items-center gap-2 bg-dark-800 border border-dark-600 hover:bg-dark-700 px-4 py-2 rounded-lg text-sm"
          >
            <Download size={16} /> Export CSV
          </button>
        </div>

        {leads.length === 0 ? (
          <div className="bg-dark-800 border border-dark-700 rounded-xl p-12 text-center text-slate-500">
            No leads submitted yet.
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* List */}
            <div className="lg:col-span-1 space-y-4 max-h-[70vh] overflow-y-auto pr-2">
              {leads.map((lead) => (
                <div 
                  key={lead.id} 
                  onClick={() => setSelectedLead(lead)}
                  className={`p-4 rounded-xl border cursor-pointer transition-all ${
                    selectedLead?.id === lead.id 
                      ? 'bg-blue-900/20 border-blue-500/50' 
                      : 'bg-dark-800 border-dark-700 hover:border-dark-600'
                  }`}
                >
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="font-bold text-white">{lead.fullName}</h4>
                    <span className="text-xs text-slate-500">{new Date(lead.submittedAt).toLocaleDateString()}</span>
                  </div>
                  <p className="text-sm text-blue-400 mb-1">{lead.websiteType}</p>
                  <p className="text-xs text-slate-500 truncate">{lead.email}</p>
                </div>
              ))}
            </div>

            {/* Details */}
            <div className="lg:col-span-2 bg-dark-800 border border-dark-700 rounded-xl p-6 h-fit">
              {selectedLead ? (
                <div>
                  <div className="flex justify-between items-start border-b border-dark-600 pb-6 mb-6">
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-1">{selectedLead.fullName}</h3>
                      <p className="text-slate-400">{selectedLead.email} • {selectedLead.phone}</p>
                      {selectedLead.whatsapp && <p className="text-green-400 text-sm mt-1">WA: {selectedLead.whatsapp}</p>}
                    </div>
                    <div className="text-right">
                      <span className="bg-blue-900/30 text-blue-400 px-3 py-1 rounded-full text-xs font-bold uppercase border border-blue-500/20">
                        {selectedLead.status}
                      </span>
                      <p className="text-slate-500 text-sm mt-2">{new Date(selectedLead.submittedAt).toLocaleString()}</p>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-6 mb-6">
                    <div className="bg-dark-900 p-4 rounded-lg">
                      <span className="text-xs text-slate-500 block mb-1">Service Type</span>
                      <span className="font-medium text-white">{selectedLead.websiteType}</span>
                    </div>
                    <div className="bg-dark-900 p-4 rounded-lg">
                      <span className="text-xs text-slate-500 block mb-1">Budget</span>
                      <span className="font-medium text-white">{selectedLead.budget}</span>
                    </div>
                  </div>

                  <div>
                    <span className="text-xs text-slate-500 block mb-2">Message</span>
                    <div className="bg-dark-900 p-4 rounded-lg text-slate-300 text-sm leading-relaxed whitespace-pre-wrap">
                      {selectedLead.message}
                    </div>
                  </div>
                </div>
              ) : (
                <div className="h-64 flex items-center justify-center text-slate-500">
                  Select a lead to view details
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Admin;