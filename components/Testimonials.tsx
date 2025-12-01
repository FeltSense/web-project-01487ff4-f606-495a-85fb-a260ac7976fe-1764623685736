'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const testimonials = [
  {
    name: 'Sarah Chen',
    role: 'VP of Operations',
    company: 'TechFlow Industries',
    companyLogo: 'TF',
    quote: 'CIP transformed how we understand team collaboration. We identified communication bottlenecks that were costing us 15 hours per week. Now our teams are 40% more aligned.',
    avatar: 'https://i.pravatar.cc/150?img=32',
  },
  {
    name: 'Marcus Rodriguez',
    role: 'Chief People Officer',
    company: 'Nexus Global',
    companyLogo: 'NG',
    quote: 'The insights from CIP helped us reduce meeting overload by 35%. Our employees are happier, more productive, and we finally have data to back up our workplace decisions.',
    avatar: 'https://i.pravatar.cc/150?img=68',
  },
  {
    name: 'Emily Watson',
    role: 'Director of Digital Transformation',
    company: 'Meridian Corp',
    companyLogo: 'MC',
    quote: 'We went from guessing about team dynamics to having real-time intelligence. CIP paid for itself in the first quarter through improved project delivery times.',
    avatar: 'https://i.pravatar.cc/150?img=47',
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 md:py-32 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block text-violet-600 font-semibold text-sm tracking-wide uppercase mb-4">
            Trusted by Industry Leaders
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight leading-[1.2] text-slate-900">
            Teams That Communicate Smarter
          </h2>
          <p className="mt-6 text-lg text-slate-500 max-w-2xl mx-auto">
            See how forward-thinking companies use CIP to unlock workforce potential and drive measurable results.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-2xl shadow-sm border border-slate-100 p-8 hover:shadow-md hover:-translate-y-1 transition-all duration-300 flex flex-col"
            >
              {/* Company Logo */}
              <div className="mb-6">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-violet-50 text-violet-600 font-bold text-lg">
                  {testimonial.companyLogo}
                </div>
              </div>

              {/* Quote */}
              <blockquote className="flex-1 mb-8">
                <p className="text-slate-600 leading-relaxed text-base">
                  &ldquo;{testimonial.quote}&rdquo;
                </p>
              </blockquote>

              {/* Person Info */}
              <div className="flex items-center gap-4 pt-6 border-t border-slate-100">
                <div className="relative w-12 h-12 rounded-full overflow-hidden">
                  <Image
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <p className="font-semibold text-slate-900">{testimonial.name}</p>
                  <p className="text-sm text-slate-500">{testimonial.role}</p>
                  <p className="text-sm text-violet-600 font-medium">{testimonial.company}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Trust Badges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-16 pt-16 border-t border-slate-200"
        >
          <p className="text-center text-sm text-slate-500 mb-8">
            Powering communication intelligence at leading enterprises
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
            {['Fortune 500', 'SOC 2 Certified', 'GDPR Compliant', '99.9% Uptime'].map((badge) => (
              <div
                key={badge}
                className="flex items-center gap-2 text-slate-400"
              >
                <svg className="w-5 h-5 text-emerald-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="font-medium text-slate-600">{badge}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}