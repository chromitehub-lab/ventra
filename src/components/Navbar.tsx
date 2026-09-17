import { useState, useEffect } from 'react';
import { Search, ArrowRight, Menu, X } from 'lucide-react';
import VentraLogo from './VentraLogo';

interface NavbarProps {
  onOpenSearch: () => void;
  onOpenSignIn: () => void;
  onOpenGetStarted: () => void;
  activeSection: string;
}

export default function Navbar({
  onOpenSearch,
  onOpenSignIn,
  onOpenGetStarted,
  activeSection,
}: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Home', href: '#home', id: 'home' },
    { label: 'About', href: '#about', id: 'about' },
    { label: 'Services', href: '#services', id: 'services' },
    { label: 'Process', href: '#process', id: 'process' },
    { label: 'Work', href: '#work', id: 'work' },
    { label: 'Pricing', href: '#pricing', id: 'pricing' },
    { label: 'Contact', href: '#contact', id: 'contact' },
  ];

  const handleNavClick = (target: string | { label: string; href: string; id: string }) => {
    setMobileMenuOpen(false);
    const href = typeof target === 'string' ? target : target.href;
    const id = href.replace('#', '');
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-white/85 backdrop-blur-xl border-b border-slate-200/60 shadow-xs py-3.5'
            : 'bg-transparent py-5 lg:py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10 flex items-center justify-between">
          {/* Brand Logo & Wordmark */}
          <a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('#home');
            }}
            className="group focus:outline-none"
            aria-label="VENTRA Home"
          >
            <VentraLogo size="md" />
          </a>

          {/* Desktop Navigation Links */}
          <nav
            className="hidden md:flex items-center space-x-8 lg:space-x-10"
            aria-label="Main Navigation"
          >
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(item);
                  }}
                  className={`relative text-[15px] font-medium tracking-normal transition-colors py-1 flex items-center gap-1.5 ${
                    isActive
                      ? 'text-[#071B41] font-semibold'
                      : 'text-[#1E293B] hover:text-blue-600'
                  }`}
                >
                  <span>{item.label}</span>
                  {/* Active small blue pill underline */}
                  {isActive && (
                    <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-5 h-[2.5px] bg-[#1677FF] rounded-full" />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Right Actions */}
          <div className="hidden md:flex items-center space-x-4 lg:space-x-6">
            {/* Search Icon */}
            <button
              onClick={onOpenSearch}
              className="p-2 rounded-full text-slate-700 hover:text-blue-600 hover:bg-white/60 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
              aria-label="Search"
              title="Quick Search"
            >
              <Search className="w-[18px] h-[18px]" strokeWidth={2.2} />
            </button>

            {/* Subtle Divider */}
            <div className="h-4 w-[1px] bg-slate-300/80" />

            {/* Sign In */}
            <button
              onClick={onOpenSignIn}
              className="text-[15px] font-medium text-[#071B41] hover:text-blue-600 transition-colors px-1 py-1"
            >
              Sign in
            </button>

            {/* Get Started Button */}
            <button
              onClick={onOpenGetStarted}
              className="group inline-flex items-center gap-1.5 bg-[#1677FF] hover:bg-[#0c66e4] text-white text-[14px] font-semibold px-5 py-2.5 rounded-full shadow-[0_4px_14px_rgba(22,119,255,0.25)] hover:shadow-[0_6px_20px_rgba(22,119,255,0.35)] active:scale-95 transition-all duration-200"
            >
              <span>Get Started</span>
              <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5" />
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="flex items-center space-x-2 md:hidden">
            <button
              onClick={onOpenSearch}
              className="p-2 rounded-full text-slate-700 hover:text-blue-600"
              aria-label="Search"
            >
              <Search className="w-5 h-5" />
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-800 hover:bg-slate-100"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 md:hidden bg-slate-900/40 backdrop-blur-sm">
          <div className="fixed inset-y-0 right-0 w-full max-w-xs bg-white shadow-2xl p-6 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between pb-6 border-b border-slate-100">
                <VentraLogo size="sm" />
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-2 text-slate-500 hover:text-slate-900"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              <div className="flex flex-col space-y-4 pt-6">
                {navItems.map((item) => (
                  <button
                    key={item.label}
                    onClick={() => handleNavClick(item)}
                    className="text-left py-2 text-lg font-semibold text-[#071B41] hover:text-blue-600 transition-colors flex items-center justify-between"
                  >
                    <span>{item.label}</span>
                    {activeSection === item.id && (
                      <span className="w-2 h-2 rounded-full bg-[#1677FF]" />
                    )}
                  </button>
                ))}
              </div>
            </div>

            <div className="pt-6 border-t border-slate-100 space-y-3">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenSignIn();
                }}
                className="w-full py-3 rounded-full border border-slate-200 text-sm font-semibold text-slate-800 hover:bg-slate-50"
              >
                Sign in to Client Portal
              </button>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenGetStarted();
                }}
                className="w-full py-3 rounded-full bg-[#1677FF] text-white text-sm font-semibold flex items-center justify-center gap-2 shadow-md"
              >
                <span>Get Started</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
