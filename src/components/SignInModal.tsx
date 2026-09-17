import React, { useState } from 'react';
import { X, Lock, KeyRound, ArrowRight, ShieldCheck } from 'lucide-react';
import VentraLogo from './VentraLogo';

interface SignInModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function SignInModal({ isOpen, onClose }: SignInModalProps) {
  const [email, setEmail] = useState('');
  const [token, setToken] = useState('');
  const [signedIn, setSignedIn] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSignedIn(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm">
      <div className="relative w-full max-w-md bg-white rounded-3xl shadow-2xl border border-slate-100 overflow-hidden">
        {/* Header */}
        <div className="p-6 sm:p-8 text-center border-b border-slate-100 relative">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 text-slate-400 hover:text-slate-600 rounded-full"
          >
            <X className="w-5 h-5" />
          </button>
          <div className="flex justify-center mb-3">
            <VentraLogo size="md" />
          </div>
          <h3 className="text-xl font-bold text-[#071B41]">Client Command Center</h3>
          <p className="text-xs text-slate-500 mt-1">
            Access active sprint burndowns, staging URLs, and staging keys
          </p>
        </div>

        {/* Content */}
        <div className="p-6 sm:p-8">
          {signedIn ? (
            <div className="text-center py-6 space-y-3">
              <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h4 className="text-lg font-bold text-slate-800">
                Secure Session Authenticated
              </h4>
              <p className="text-xs text-slate-500">
                Logged in as <span className="font-semibold text-slate-700">{email || 'client@enterprise.com'}</span>. Redirecting to your dedicated AWS/GCP staging portal...
              </p>
              <button
                onClick={onClose}
                className="mt-4 px-5 py-2.5 rounded-full bg-[#071B41] text-white text-xs font-semibold"
              >
                Close Session
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1.5">
                  Authorized Work Email
                </label>
                <input
                  type="email"
                  required
                  placeholder="name@company.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5 text-xs text-slate-800 focus:outline-none focus:border-blue-600"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1.5 flex items-center justify-between">
                  <span>Client SSO / Access Key</span>
                  <span className="text-[11px] text-blue-600 font-normal">Use demo key</span>
                </label>
                <input
                  type="password"
                  required
                  placeholder="••••••••••••••••"
                  value={token}
                  onChange={(e) => setToken(e.target.value)}
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5 text-xs text-slate-800 focus:outline-none focus:border-blue-600"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3 rounded-full bg-[#1677FF] hover:bg-[#0c66e4] text-white text-xs font-bold flex items-center justify-center gap-2 shadow-md transition-colors"
                >
                  <Lock className="w-3.5 h-3.5" />
                  <span>Authenticate to Portal</span>
                </button>
              </div>

              <div className="text-center pt-2">
                <button
                  type="button"
                  onClick={() => {
                    setEmail('cto@acme-corp.com');
                    setToken('VENTRA-SECURE-KEY-882');
                  }}
                  className="text-[11px] text-slate-400 hover:text-blue-600 underline"
                >
                  Prefill Demo Client Credentials
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
