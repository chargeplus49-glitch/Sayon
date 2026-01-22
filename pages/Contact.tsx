import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { WebsiteType, BudgetRange, ContactFormState } from '../types';
import { Mail, Phone, MessageSquare, Send } from 'lucide-react';

const Contact: React.FC = () => {
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState<ContactFormState>({
    fullName: '',
    email: '',
    phone: '',
    whatsapp: '',
    websiteType: WebsiteType.Business,
    budget: BudgetRange.Medium,
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate backend API call
    console.log('Form Submission:', formData);
    
    // Simulate network delay
    setTimeout(() => {
      // Store in local storage to simulate "database" for the Admin panel demo
      const existingLeads = JSON.parse(localStorage.getItem('leads') || '[]');
      const newLead = {
        id: Math.random().toString(36).substr(2, 9),
        ...formData,
        submittedAt: new Date().toISOString(),
        status: 'new'
      };
      localStorage.setItem('leads', JSON.stringify([newLead, ...existingLeads]));

      setIsSubmitting(false);
      navigate('/thank-you');
    }, 1500);
  };

  return (
    <div className="pt-24 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
        {/* Contact Info */}
        <div>
          <h1 className="text-4xl font-bold text-white mb-6">Get Your Website</h1>
          <p className="text-slate-400 text-lg mb-10">
            Ready to start your project? Fill out the form and our team will get back to you within 24 hours.
          </p>

          <div className="space-y-8">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-blue-600/10 rounded-xl flex items-center justify-center text-blue-500 shrink-0">
                <Mail size={24} />
              </div>
              <div>
                <h3 className="text-white font-bold text-lg">Email Us</h3>
                <p className="text-slate-400">contact@mywebsite.com</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-blue-600/10 rounded-xl flex items-center justify-center text-blue-500 shrink-0">
                <Phone size={24} />
              </div>
              <div>
                <h3 className="text-white font-bold text-lg">Call Us</h3>
                <p className="text-slate-400">+1 (555) 123-4567</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-blue-600/10 rounded-xl flex items-center justify-center text-blue-500 shrink-0">
                <MessageSquare size={24} />
              </div>
              <div>
                <h3 className="text-white font-bold text-lg">WhatsApp</h3>
                <p className="text-slate-400">+1 (555) 987-6543</p>
              </div>
            </div>
          </div>
        </div>

        {/* Form */}
        <div className="bg-dark-800 border border-dark-700 p-8 rounded-3xl shadow-xl">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="fullName" className="block text-sm font-medium text-slate-300 mb-2">Full Name *</label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                required
                className="w-full bg-dark-900 border border-dark-600 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors"
                placeholder="John Doe"
                value={formData.fullName}
                onChange={handleChange}
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-2">Email Address *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full bg-dark-900 border border-dark-600 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors"
                  placeholder="john@example.com"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-slate-300 mb-2">Phone Number *</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  required
                  className="w-full bg-dark-900 border border-dark-600 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors"
                  placeholder="+1 (555) 000-0000"
                  value={formData.phone}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div>
              <label htmlFor="whatsapp" className="block text-sm font-medium text-slate-300 mb-2">WhatsApp Number (Optional)</label>
              <input
                type="tel"
                id="whatsapp"
                name="whatsapp"
                className="w-full bg-dark-900 border border-dark-600 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors"
                placeholder="+1 (555) 000-0000"
                value={formData.whatsapp}
                onChange={handleChange}
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="websiteType" className="block text-sm font-medium text-slate-300 mb-2">Type of Website</label>
                <select
                  id="websiteType"
                  name="websiteType"
                  className="w-full bg-dark-900 border border-dark-600 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors appearance-none"
                  value={formData.websiteType}
                  onChange={handleChange}
                >
                  {Object.values(WebsiteType).map((type) => (
                    <option key={type} value={type}>{type}</option>
                  ))}
                </select>
              </div>
              <div>
                <label htmlFor="budget" className="block text-sm font-medium text-slate-300 mb-2">Budget Range</label>
                <select
                  id="budget"
                  name="budget"
                  className="w-full bg-dark-900 border border-dark-600 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors appearance-none"
                  value={formData.budget}
                  onChange={handleChange}
                >
                  {Object.values(BudgetRange).map((range) => (
                    <option key={range} value={range}>{range}</option>
                  ))}
                </select>
              </div>
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-slate-300 mb-2">Message / Requirements *</label>
              <textarea
                id="message"
                name="message"
                required
                rows={4}
                className="w-full bg-dark-900 border border-dark-600 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors resize-none"
                placeholder="Tell us about your project..."
                value={formData.message}
                onChange={handleChange}
              ></textarea>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className={`w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 rounded-xl transition-all flex items-center justify-center gap-2 ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
            >
              {isSubmitting ? 'Sending...' : 'Send Request'} 
              {!isSubmitting && <Send size={20} />}
            </button>
            <p className="text-center text-xs text-slate-500 mt-4">
              By submitting this form, you agree to our privacy policy.
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;