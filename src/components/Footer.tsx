import React, { useState } from 'react';
import { ArrowRight, CheckCircle2, Globe, Shield, Terminal } from 'lucide-react';
import VentraLogo from './VentraLogo';

export default function Footer() {
  const [subscribed, setSubscribed] = useState(false);
  const [email, setEmail] = useState('');
  const [bgImage, setBgImage] = useState<string>('/abbottabad-tech.jpg');

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail('');
    }
  };

  return (
    <footer className="relative bg-[#040E24] text-slate-300 text-sm border-t border-slate-800/90 overflow-hidden">
      {/* Mountain Landscape Background (Cohesive with Hero) */}
      <div className="absolute inset-0 z-0 pointer-events-none select-none">
        <img
          src={bgImage}
          alt="VENTRA Alpine Mountain Landscape - Footer Background"
          onError={() => {
            if (bgImage !== '/hero-landscape.jpg') {
              setBgImage('/hero-landscape.jpg');
            }
          }}
          className="w-full h-full object-cover object-[center_bottom] opacity-35 scale-105"
        />
        {/* Deep Atmospheric Dark Gradients for 100% Text Legibility */}
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(180deg, rgba(4, 14, 36, 0.97) 0%, rgba(4, 14, 36, 0.88) 35%, rgba(4, 14, 36, 0.85) 65%, rgba(4, 14, 36, 0.98) 100%)',
          }}
        />
        <div className="absolute inset-0 bg-[#040E24]/30 backdrop-blur-[1px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-10 pt-16 sm:pt-20 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-12 pb-16 border-b border-slate-800/80">
          {/* Col 1: Brand & Manifesto */}
          <div className="lg:col-span-2 space-y-5">
            <VentraLogo size="md" lightMode={true} />
            <p className="text-slate-400 text-sm leading-relaxed max-w-sm">
              VENTRA is an enterprise technology house and digital product foundry.
              We architect and ship world-class software, AI systems, and cloud infrastructure.
            </p>

            {/* Newsletter Subscription */}
            <div className="pt-2">
              <span className="text-xs font-semibold text-slate-300 uppercase tracking-wider block mb-2.5">
                Engineering Dispatches
              </span>
              {subscribed ? (
                <div className="flex items-center gap-2 text-emerald-400 text-xs font-medium py-2">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>Subscribed to VENTRA Engineering Quarterly.</span>
                </div>
              ) : (
                <form onSubmit={handleSubscribe} className="flex max-w-sm">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="architect@company.com"
                    required
                    className="w-full bg-slate-900/90 border border-slate-700/80 rounded-l-full px-4 py-2.5 text-xs text-white placeholder:text-slate-500 focus:outline-none focus:border-blue-500"
                  />
                  <button
                    type="submit"
                    className="bg-blue-600 hover:bg-blue-500 text-white px-4 py-2.5 rounded-r-full text-xs font-semibold flex items-center gap-1 transition-colors"
                  >
                    <span>Join</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </form>
              )}
            </div>
          </div>

          {/* Col 2: Services */}
          <div>
            <h4 className="text-xs font-bold text-white uppercase tracking-[0.18em] mb-4">
              Capabilities
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li>
                <a href="#services" className="hover:text-white transition-colors">
                  Software Development
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">
                  AI & Machine Learning
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">
                  Cloud Solutions
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">
                  UI/UX Design
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">
                  Digital Products
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">
                  Enterprise Architecture
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Company */}
          <div>
            <h4 className="text-xs font-bold text-white uppercase tracking-[0.18em] mb-4">
              Ecosystem
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li>
                <a href="#about" className="text-blue-400 hover:text-blue-300 font-semibold transition-colors flex items-center gap-1">
                  <span>VENTRA Ecosystem</span>
                  <ArrowRight className="w-3 h-3" />
                </a>
              </li>
              <li>
                <a href="#work" className="hover:text-white transition-colors">
                  Production Case Studies
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-white transition-colors">
                  About Platform
                </a>
              </li>
              <li>
                <a href="#process" className="hover:text-white transition-colors">
                  Engineering Process
                </a>
              </li>
              <li>
                <a href="#pricing" className="hover:text-white transition-colors">
                  Engagement Models
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-white transition-colors">
                  Careers & Security
                </a>
              </li>
            </ul>
          </div>

          {/* Col 4: Global Hubs */}
          <div>
            <h4 className="text-xs font-bold text-white uppercase tracking-[0.18em] mb-4">
              Global Hubs
            </h4>
            <ul className="space-y-3 text-xs">
              <div>
                <span className="text-white font-medium block">Abbottabad Tech Hub</span>
                <span className="text-slate-400">Innovation Valley & Engineering Lab</span>
              </div>
              <div>
                <span className="text-white font-medium block">San Francisco</span>
                <span className="text-slate-500">Market St, Financial District</span>
              </div>
              <div>
                <span className="text-white font-medium block">Zurich</span>
                <span className="text-slate-500">Bahnhofstrasse Tech Center</span>
              </div>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <div className="flex items-center gap-4">
            <span>© {new Date().getFullYear()} VENTRA Technologies Inc. All rights reserved.</span>
            <span className="inline-flex items-center gap-1.5 text-emerald-400 font-mono">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>All Systems Operational</span>
            </span>
          </div>

          <div className="flex items-center space-x-6 text-slate-500">
            <a href="#contact" className="hover:text-slate-400 transition-colors">
              Privacy Policy
            </a>
            <a href="#contact" className="hover:text-slate-400 transition-colors">
              Terms of Service
            </a>
            <a href="#contact" className="hover:text-slate-400 transition-colors">
              Security Whitepaper
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
