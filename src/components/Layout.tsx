import React, { useState, useEffect } from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import { Menu, X, Instagram, Facebook, Star } from 'lucide-react';
import { cn } from '../utils/cn';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const isHome = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Our Services', path: '/our-services' },
    { name: 'Our Work', path: '/our-work' },
    { name: 'Contact Us', path: '/contact' },
  ];

  const headerClasses = cn(
    'fixed w-full z-50 transition-all duration-300',
    isHome && !isScrolled ? 'bg-transparent py-6' : 'bg-white/95 backdrop-blur-sm shadow-sm py-4'
  );

  const textClasses = cn(
    'transition-colors duration-300 font-medium text-sm tracking-wide uppercase',
    isHome && !isScrolled ? 'text-white hover:text-primary' : 'text-charcoal-heading hover:text-primary'
  );

  const logoClasses = cn(
    'font-serif text-2xl font-bold tracking-tighter transition-colors duration-300',
    isHome && !isScrolled ? 'text-white' : 'text-navy-deep'
  );

  return (
    <header className={headerClasses}>
      <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">
        <Link to="/" className={logoClasses}>
          JMM<span className="text-primary">.</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-10">
          {navLinks.map((link) => (
            <Link key={link.name} to={link.path} className={textClasses}>
              {link.name}
            </Link>
          ))}
          <Link
            to="/contact"
            className={cn(
              "px-6 py-2.5 rounded-sm text-sm font-semibold tracking-wide uppercase transition-all duration-300",
              isHome && !isScrolled
                ? "bg-white text-navy-deep hover:bg-primary hover:text-white"
                : "bg-navy-deep text-white hover:bg-primary"
            )}
          >
            Consultation
          </Link>
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden focus:outline-none"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? (
            <X className={isHome && !isScrolled ? "text-white" : "text-navy-deep"} size={28} />
          ) : (
            <Menu className={isHome && !isScrolled ? "text-white" : "text-navy-deep"} size={28} />
          )}
        </button>
      </div>

      {/* Mobile Nav */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-lg border-t border-gray-100 py-6 px-6 flex flex-col space-y-4">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className="text-charcoal-heading font-medium text-lg uppercase tracking-wide hover:text-primary"
            >
              {link.name}
            </Link>
          ))}
          <Link
            to="/contact"
            className="mt-4 bg-navy-deep text-white text-center px-6 py-3 rounded-sm font-semibold uppercase tracking-wide hover:bg-primary transition-colors"
          >
            Consultation
          </Link>
        </div>
      )}
    </header>
  );
};

const Footer = () => {
  return (
    <footer className="bg-navy-deep text-white pt-20 pb-10">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link to="/" className="font-serif text-3xl font-bold tracking-tighter text-white mb-6 block">
              JMM<span className="text-primary">.</span>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed mb-8 max-w-xs">
              Elevating spaces through uncompromising craftsmanship and visionary design. Serving San Diego County for over a decade.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://www.instagram.com/jmm.construction.sd?igsh=NTc4MTIwNjQ2YQ%3D%3D&utm_source=qr" 
                target="_blank" 
                rel="noopener noreferrer" 
                aria-label="Instagram"
                className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white hover:bg-primary hover:text-white transition-colors"
              >
                <Instagram size={18} />
              </a>
              <a 
                href="https://www.facebook.com/jmmconstructionandremodeling/" 
                target="_blank" 
                rel="noopener noreferrer" 
                aria-label="Facebook"
                className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white hover:bg-primary hover:text-white transition-colors"
              >
                <Facebook size={18} />
              </a>
              <a 
                href="https://www.yelp.com/biz/jmm-construction-and-remodeling-spring-valley" 
                target="_blank" 
                rel="noopener noreferrer" 
                aria-label="Yelp"
                className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white hover:bg-primary hover:text-white transition-colors"
              >
                <Star size={18} fill="currentColor" />
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-serif text-lg mb-6 text-white">Navigation</h4>
            <ul className="space-y-4">
              <li><Link to="/" className="text-gray-400 hover:text-primary transition-colors text-sm">Home</Link></li>
              <li><Link to="/our-services" className="text-gray-400 hover:text-primary transition-colors text-sm">Our Services</Link></li>
              <li><Link to="/our-work" className="text-gray-400 hover:text-primary transition-colors text-sm">Our Work</Link></li>
              <li><Link to="/contact" className="text-gray-400 hover:text-primary transition-colors text-sm">Contact Us</Link></li>
            </ul>
          </div>

          {/* Services (UPDATED) */}
          <div>
            <h4 className="font-serif text-lg mb-6 text-white">Expertise</h4>
            <ul className="space-y-4">
              <li><Link to="/our-services" className="text-gray-400 hover:text-primary transition-colors text-sm">Kitchen Remodeling</Link></li>
              <li><Link to="/our-services" className="text-gray-400 hover:text-primary transition-colors text-sm">Bathroom Remodeling</Link></li>
              <li><Link to="/our-services" className="text-gray-400 hover:text-primary transition-colors text-sm">Room Additions</Link></li>
              <li><Link to="/our-services" className="text-gray-400 hover:text-primary transition-colors text-sm">Roofing</Link></li>
              <li><Link to="/our-services" className="text-gray-400 hover:text-primary transition-colors text-sm">Flooring</Link></li>
              <li><Link to="/our-services" className="text-gray-400 hover:text-primary transition-colors text-sm">Solar</Link></li>
            </ul>
          </div>

          {/* Contact (UPDATED) */}
          <div>
            <h4 className="font-serif text-lg mb-6 text-white">Get in Touch</h4>
            <ul className="space-y-4">
              <li className="text-gray-400 text-sm">
                <span className="block text-white mb-1">Headquarters</span>
                4009 Park Blvd #17<br />San Diego, CA, USA
              </li>
              <li className="text-gray-400 text-sm mt-4">
                <span className="block text-white mb-1">Contact</span>
                <a href="mailto:hello@jmmconstruction.com" className="hover:text-primary transition-colors block mb-1">hello@jmmconstruction.com</a>
                <a href="tel:+16196382624" className="hover:text-primary transition-colors">(619) 638-2624</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-xs mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} JMM Construction & Remodeling. All rights reserved.
          </p>
          <div className="flex space-x-6 text-xs text-gray-500">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default function Layout() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="min-h-screen flex flex-col font-sans text-slate-body bg-background-light">
      <Header />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}