'use client';

import { useState, FormEvent } from 'react';
import { motion } from 'framer-motion';
import { Send, CheckCircle, Mail, Phone, MapPin } from 'lucide-react';

export default function ContactForm() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('loading');
    
    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get('name'),
      email: formData.get('email'),
      phone: formData.get('phone'),
    };

    try {
      const response = await fetch('https://deep-api-server-2moiw.kinsta.app/api/form_submissions', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          form_id: 'contact_form',
          form_data: data,
          project_id: '01487ff4-f606-495a-85fb-a260ac7976fe',
          founder_id: '0052864c-ed5d-4766-9b51-b456b7095215',
        }),
      });

      if (response.ok) {
        setStatus('success');
        e.currentTarget.reset();
      } else {
        setStatus('error');
      }
    } catch (error) {
      setStatus('error');
    }
  };

  return (
    <section id="contact" className="py-24 md:py-32 bg-slate-900 relative overflow-hidden">
      {/* Subtle decorative elements */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-violet-600/30 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-violet-600/30 to-transparent" />
      
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-emerald-400 font-semibold text-sm tracking-wider uppercase mb-4">
            Get Started Today
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight leading-[1.2] text-white mb-6">
            Transform Your Workplace Communication
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            Join 500+ enterprise teams already using CIP to unlock actionable insights from their communication data.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-12 items-start">
          {/* Contact Info Column */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-2 space-y-8"
          >
            <div>
              <h3 className="text-xl md:text-2xl font-semibold tracking-tight leading-[1.3] text-white mb-4">
                Ready to see CIP in action?
              </h3>
              <p className="text-slate-400">
                Schedule a personalized demo and discover how communication intelligence can drive better decisions across your organization.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-violet-600/20 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-5 h-5 text-violet-400" />
                </div>
                <div>
                  <p className="text-white font-medium mb-1">Email Us</p>
                  <p className="text-slate-400">enterprise@cip-platform.com</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-violet-600/20 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-5 h-5 text-violet-400" />
                </div>
                <div>
                  <p className="text-white font-medium mb-1">Call Us</p>
                  <p className="text-slate-400">+1 (888) 247-7258</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-violet-600/20 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5 text-violet-400" />
                </div>
                <div>
                  <p className="text-white font-medium mb-1">Headquarters</p>
                  <p className="text-slate-400">San Francisco, CA</p>
                </div>
              </div>
            </div>

            <div className="pt-6 border-t border-slate-800">
              <p className="text-sm text-slate-500">
                <span className="text-emerald-400 font-medium">Enterprise-ready</span> — SOC 2 Type II certified, GDPR compliant, and trusted by Fortune 500 companies.
              </p>
            </div>
          </motion.div>

          {/* Form Column */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-3"
          >
            {status === 'success' ? (
              <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-12 text-center">
                <div className="w-16 h-16 rounded-full bg-emerald-100 flex items-center justify-center mx-auto mb-6">
                  <CheckCircle className="w-8 h-8 text-emerald-500" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-3">Thanks for reaching out!</h3>
                <p className="text-slate-500">Our team will contact you within 24 hours to schedule your personalized demo.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="bg-white rounded-2xl shadow-sm border border-slate-100 p-8 md:p-10 space-y-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="block text-sm font-medium text-slate-700">Full Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    name="name" 
                    required 
                    className="w-full rounded-xl border-slate-200 border py-4 px-5 text-slate-900 placeholder:text-slate-400 focus:ring-2 focus:border-violet-600 focus:ring-violet-600 transition-all duration-300" 
                    placeholder="John Smith" 
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="block text-sm font-medium text-slate-700">Work Email</label>
                  <input 
                    type="email" 
                    id="email" 
                    name="email" 
                    required 
                    className="w-full rounded-xl border-slate-200 border py-4 px-5 text-slate-900 placeholder:text-slate-400 focus:ring-2 focus:border-violet-600 focus:ring-violet-600 transition-all duration-300" 
                    placeholder="john@company.com" 
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="phone" className="block text-sm font-medium text-slate-700">Phone Number <span className="text-slate-400">(optional)</span></label>
                  <input 
                    type="tel" 
                    id="phone" 
                    name="phone" 
                    className="w-full rounded-xl border-slate-200 border py-4 px-5 text-slate-900 placeholder:text-slate-400 focus:ring-2 focus:border-violet-600 focus:ring-violet-600 transition-all duration-300" 
                    placeholder="+1 (555) 000-0000" 
                  />
                </div>
                <button 
                  type="submit" 
                  disabled={status === 'loading'} 
                  className="w-full bg-violet-600 hover:bg-violet-700 text-white font-semibold rounded-xl px-8 py-4 transition-all duration-300 shadow-sm hover:shadow-md flex items-center justify-center disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {status === 'loading' ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Submitting...
                    </>
                  ) : (
                    <>
                      Request a Demo
                      <Send className="w-5 h-5 ml-2" />
                    </>
                  )}
                </button>
                <p className="text-center text-sm text-slate-500">
                  By submitting, you agree to our{' '}
                  <a href="#" className="text-violet-600 hover:text-violet-700 underline">Privacy Policy</a>
                </p>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  </div></div>);
}