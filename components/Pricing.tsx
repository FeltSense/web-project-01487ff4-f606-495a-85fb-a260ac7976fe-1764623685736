'use client';

import { motion } from 'framer-motion';
import { Check, X } from 'lucide-react';

const plans = [
  {
    name: 'Starter',
    price: '$49',
    period: '/user/month',
    description: 'Perfect for small teams getting started',
    popular: false,
  },
  {
    name: 'Professional',
    price: '$99',
    period: '/user/month',
    description: 'For growing teams that need more insights',
    popular: true,
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    period: '',
    description: 'For large organizations with advanced needs',
    popular: false,
  },
];

const features = [
  {
    name: 'Communication Analytics',
    starter: true,
    professional: true,
    enterprise: true,
  },
  {
    name: 'Team Performance Dashboards',
    starter: true,
    professional: true,
    enterprise: true,
  },
  {
    name: 'Sentiment Analysis',
    starter: false,
    professional: true,
    enterprise: true,
  },
  {
    name: 'Meeting Intelligence',
    starter: false,
    professional: true,
    enterprise: true,
  },
  {
    name: 'Custom Integrations',
    starter: false,
    professional: false,
    enterprise: true,
  },
  {
    name: 'Advanced API Access',
    starter: false,
    professional: false,
    enterprise: true,
  },
  {
    name: 'Real-time Collaboration Insights',
    starter: true,
    professional: true,
    enterprise: true,
  },
  {
    name: 'Predictive Analytics',
    starter: false,
    professional: true,
    enterprise: true,
  },
  {
    name: 'Dedicated Success Manager',
    starter: false,
    professional: false,
    enterprise: true,
  },
  {
    name: 'SLA & Priority Support',
    starter: false,
    professional: false,
    enterprise: true,
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-24 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight leading-[1.2] text-slate-900 mb-6">
            Transparent Pricing for Every Team
          </h2>
          <p className="text-lg text-slate-500 max-w-2xl mx-auto">
            Choose the plan that scales with your organization. Unlock deeper insights as you grow.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="overflow-x-auto"
        >
          <table className="w-full bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
            <thead>
              <tr className="border-b border-slate-100">
                <th className="text-left p-6 bg-slate-50">
                  <span className="text-lg font-semibold text-slate-900">Compare Plans</span>
                </th>
                {plans.map((plan, index) => (
                  <th key={index} className={`p-6 text-center ${plan.popular ? 'bg-violet-50' : 'bg-slate-50'}`}>
                    <div className="flex flex-col items-center">
                      {plan.popular && (
                        <span className="text-xs font-semibold text-emerald-400 uppercase tracking-wide mb-2">
                          Most Popular
                        </span>
                      )}
                      <span className="text-xl font-bold text-slate-900">{plan.name}</span>
                      <div className="mt-2">
                        <span className="text-3xl font-bold text-violet-600">{plan.price}</span>
                        <span className="text-slate-500 text-sm">{plan.period}</span>
                      </div>
                      <p className="text-sm text-slate-500 mt-2 max-w-[180px]">{plan.description}</p>
                    </div>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {features.map((feature, index) => (
                <tr 
                  key={index} 
                  className={`border-b border-slate-100 ${index % 2 === 0 ? 'bg-white' : 'bg-slate-50/50'}`}
                >
                  <td className="p-5 text-slate-700 font-medium">
                    {feature.name}
                  </td>
                  <td className="p-5 text-center">
                    {feature.starter ? (
                      <Check className="w-5 h-5 text-emerald-400 mx-auto" />
                    ) : (
                      <X className="w-5 h-5 text-slate-300 mx-auto" />
                    )}
                  </td>
                  <td className={`p-5 text-center ${plans[1].popular ? 'bg-violet-50/30' : ''}`}>
                    {feature.professional ? (
                      <Check className="w-5 h-5 text-emerald-400 mx-auto" />
                    ) : (
                      <X className="w-5 h-5 text-slate-300 mx-auto" />
                    )}
                  </td>
                  <td className="p-5 text-center">
                    {feature.enterprise ? (
                      <Check className="w-5 h-5 text-emerald-400 mx-auto" />
                    ) : (
                      <X className="w-5 h-5 text-slate-300 mx-auto" />
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
            <tfoot>
              <tr className="border-t border-slate-200">
                <td className="p-6 bg-slate-50"></td>
                <td className="p-6 text-center bg-slate-50">
                  <a
                    href="#contact"
                    className="inline-block border-2 border-violet-600 text-violet-600 hover:bg-violet-600 hover:text-white font-semibold rounded-xl px-6 py-3 transition-all duration-300"
                  >
                    Get Started
                  </a>
                </td>
                <td className="p-6 text-center bg-violet-50">
                  <a
                    href="#contact"
                    className="inline-block bg-violet-600 hover:bg-violet-700 text-white font-semibold rounded-xl px-6 py-3 transition-all duration-300 shadow-sm hover:shadow-md"
                  >
                    Start Free Trial
                  </a>
                </td>
                <td className="p-6 text-center bg-slate-50">
                  <a
                    href="#contact"
                    className="inline-block border-2 border-violet-600 text-violet-600 hover:bg-violet-600 hover:text-white font-semibold rounded-xl px-6 py-3 transition-all duration-300"
                  >
                    Contact Sales
                  </a>
                </td>
              </tr>
            </tfoot>
          </table>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 text-center"
        >
          <p className="text-slate-500">
            All plans include a <span className="text-violet-600 font-semibold">14-day free trial</span>. No credit card required.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
