'use client';

import { BarChart3, Users, TrendingUp, MessageSquare, Activity, Zap } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative bg-slate-950 pt-32 pb-24 md:pt-40 md:pb-32 overflow-hidden min-h-screen">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-violet-600/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-emerald-400/10 rounded-full blur-3xl" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-slate-900 via-slate-950 to-slate-950 opacity-80" />
      </div>
      
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        <div className="text-center max-w-4xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 bg-violet-600/10 border border-violet-500/20 rounded-full px-4 py-2 mb-8">
            <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
            <span className="text-violet-300 text-sm font-medium">Trusted by 2,500+ enterprise teams</span>
          </div>
          
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.1] text-white mb-6">
            Decode Your Team&apos;s
            <span className="text-violet-400"> Communication DNA</span>
          </h1>
          <p className="text-xl md:text-2xl text-slate-400 max-w-3xl mx-auto mb-10 leading-relaxed">
            Transform workplace conversations into actionable insights. Identify bottlenecks, boost collaboration, and build a culture that actually works.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#contact" className="bg-violet-600 hover:bg-violet-700 text-white font-semibold rounded-xl px-8 py-4 transition-all duration-300 shadow-sm hover:shadow-md inline-flex items-center justify-center gap-2">
              Start Free Trial
              <Zap className="w-5 h-5" />
            </a>
            <a href="#services" className="border-2 border-violet-600 text-violet-400 hover:bg-violet-600 hover:text-white font-semibold rounded-xl px-8 py-4 transition-all duration-300 inline-flex items-center justify-center">
              See How It Works
            </a>
          </div>
        </div>

        {/* Dashboard Preview */}
        <div className="relative">
          {/* Dashboard Container */}
          <div className="bg-slate-900 rounded-2xl border border-slate-800 shadow-2xl overflow-hidden">
            {/* Browser Header */}
            <div className="flex items-center gap-2 px-4 py-3 bg-slate-800/50 border-b border-slate-700">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500" />
                <div className="w-3 h-3 rounded-full bg-yellow-500" />
                <div className="w-3 h-3 rounded-full bg-green-500" />
              </div>
              <div className="flex-1 text-center">
                <span className="text-slate-500 text-sm">app.cip-analytics.com/dashboard</span>
              </div>
            </div>

            {/* Dashboard Content */}
            <div className="p-6 md:p-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                {/* Stat Card 1 */}
                <div className="bg-slate-800/50 rounded-xl p-5 border border-slate-700/50">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-slate-400 text-sm">Team Engagement</span>
                    <div className="bg-emerald-400/20 p-2 rounded-lg">
                      <TrendingUp className="w-4 h-4 text-emerald-400" />
                    </div>
                  </div>
                  <p className="text-3xl font-bold text-white">94.2%</p>
                  <p className="text-emerald-400 text-sm mt-1">↑ 12% from last month</p>
                </div>

                {/* Stat Card 2 */}
                <div className="bg-slate-800/50 rounded-xl p-5 border border-slate-700/50">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-slate-400 text-sm">Response Time</span>
                    <div className="bg-violet-400/20 p-2 rounded-lg">
                      <Activity className="w-4 h-4 text-violet-400" />
                    </div>
                  </div>
                  <p className="text-3xl font-bold text-white">2.4h</p>
                  <p className="text-violet-400 text-sm mt-1">↓ 34% faster</p>
                </div>

                {/* Stat Card 3 */}
                <div className="bg-slate-800/50 rounded-xl p-5 border border-slate-700/50">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-slate-400 text-sm">Active Users</span>
                    <div className="bg-violet-400/20 p-2 rounded-lg">
                      <Users className="w-4 h-4 text-violet-400" />
                    </div>
                  </div>
                  <p className="text-3xl font-bold text-white">1,847</p>
                  <p className="text-slate-400 text-sm mt-1">Across 12 departments</p>
                </div>
              </div>

              {/* Chart Area */}
              <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700/50">
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <h3 className="text-white font-semibold">Communication Flow Analysis</h3>
                    <p className="text-slate-500 text-sm">Real-time collaboration patterns</p>
                  </div>
                  <div className="flex gap-2">
                    <span className="px-3 py-1 bg-violet-600/20 text-violet-400 text-xs rounded-full">Live</span>
                  </div>
                </div>
                
                {/* Simplified Chart Visualization */}
                <div className="flex items-end justify-between h-32 gap-2">
                  {[65, 45, 78, 52, 88, 72, 95, 68, 82, 58, 90, 75].map((height, i) => (
                    <div
                      key={i}
                      className="flex-1 bg-violet-600/60 rounded-t hover:bg-violet-500 transition-colors duration-300"
                      style={{ height: `${height}%` }}
                    />
                  ))}
                </div>
                <div className="flex justify-between mt-3 text-xs text-slate-500">
                  <span>Jan</span>
                  <span>Mar</span>
                  <span>Jun</span>
                  <span>Sep</span>
                  <span>Dec</span>
                </div>
              </div>
            </div>
          </div>

          {/* Floating Elements */}
          <div className="absolute -left-4 top-1/3 bg-white rounded-xl p-4 shadow-xl border border-slate-100 hidden lg:block">
            <div className="flex items-center gap-3">
              <div className="bg-emerald-100 p-2 rounded-lg">
                <MessageSquare className="w-5 h-5 text-emerald-600" />
              </div>
              <div>
                <p className="text-slate-900 font-semibold text-sm">Sentiment Score</p>
                <p className="text-emerald-600 font-bold">+87% Positive</p>
              </div>
            </div>
          </div>

          <div className="absolute -right-4 top-1/2 bg-white rounded-xl p-4 shadow-xl border border-slate-100 hidden lg:block">
            <div className="flex items-center gap-3">
              <div className="bg-violet-100 p-2 rounded-lg">
                <BarChart3 className="w-5 h-5 text-violet-600" />
              </div>
              <div>
                <p className="text-slate-900 font-semibold text-sm">Insights Generated</p>
                <p className="text-violet-600 font-bold">2,847 this week</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}