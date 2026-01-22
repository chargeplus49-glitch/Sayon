import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle } from 'lucide-react';

const ThankYou: React.FC = () => {
  return (
    <div className="min-h-[80vh] flex items-center justify-center px-4">
      <div className="text-center max-w-lg">
        <div className="w-24 h-24 bg-green-500/10 rounded-full flex items-center justify-center mx-auto mb-8 text-green-500">
          <CheckCircle size={48} />
        </div>
        <h1 className="text-4xl font-bold text-white mb-4">Thank You!</h1>
        <p className="text-slate-400 text-lg mb-8">
          Your request has been received successfully. Our team will review your requirements and contact you shortly via email or phone.
        </p>
        <Link 
          to="/" 
          className="inline-block bg-dark-800 hover:bg-dark-700 border border-dark-600 text-white font-medium py-3 px-8 rounded-full transition-all"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
};

export default ThankYou;