import React, { useState } from 'react';
import { Phone, MapPin, Clock, ArrowRight, ExternalLink, X, MessageCircle, ShieldCheck } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    interest: '',
    message: ''
  });
  const [showMapInfo, setShowMapInfo] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log(formData);
    alert('Thank you for your inquiry. Our team will contact you shortly.');
    setFormData({ name: '', email: '', phone: '', interest: '', message: '' });
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-background-light">
        <div className="container mx-auto px-6 md:px-12">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-primary font-bold tracking-widest uppercase text-sm mb-4 block">Get in Touch</span>
              <h1 className="font-serif text-5xl md:text-7xl text-navy-deep font-bold mb-8 leading-tight">
                Let's Build <span className="italic font-light text-primary">Together</span>
              </h1>
              <p className="text-xl text-slate-body leading-relaxed font-light">
                Whether you have a fully developed architectural plan or just the seed of an idea, our team is ready to guide you through the next steps.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-24 bg-white relative">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-background-light hidden lg:block z-0"></div>
        
        <div className="container mx-auto px-6 md:px-12 relative z-10">
          <div className="flex flex-col lg:flex-row gap-16">
            
            {/* Form Column */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="w-full lg:w-2/3 pr-0 lg:pr-12"
            >
              <h2 className="font-serif text-4xl text-navy-deep font-bold mb-10">Project Inquiry</h2>
              
              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {/* Name Input */}
                  <div className="relative floating-label-input">
                    <input 
                      type="text" 
                      id="name" 
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full bg-transparent border-b border-gray-300 py-3 text-navy-deep focus:outline-none focus:border-primary transition-colors peer placeholder-transparent"
                      placeholder="Full Name"
                      required
                    />
                    <label htmlFor="name" className="absolute left-0 top-3 text-gray-400 text-sm transition-all duration-300 pointer-events-none peer-focus:-translate-y-6 peer-focus:text-xs peer-focus:text-primary peer-valid:-translate-y-6 peer-valid:text-xs">
                      Full Name *
                    </label>
                  </div>

                  {/* Email Input */}
                  <div className="relative floating-label-input">
                    <input 
                      type="email" 
                      id="email" 
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full bg-transparent border-b border-gray-300 py-3 text-navy-deep focus:outline-none focus:border-primary transition-colors peer placeholder-transparent"
                      placeholder="Email Address"
                      required
                    />
                    <label htmlFor="email" className="absolute left-0 top-3 text-gray-400 text-sm transition-all duration-300 pointer-events-none peer-focus:-translate-y-6 peer-focus:text-xs peer-focus:text-primary peer-valid:-translate-y-6 peer-valid:text-xs">
                      Email Address *
                    </label>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {/* Phone Input */}
                  <div className="relative floating-label-input">
                    <input 
                      type="tel" 
                      id="phone" 
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full bg-transparent border-b border-gray-300 py-3 text-navy-deep focus:outline-none focus:border-primary transition-colors peer placeholder-transparent"
                      placeholder="Phone Number"
                    />
                    <label htmlFor="phone" className="absolute left-0 top-3 text-gray-400 text-sm transition-all duration-300 pointer-events-none peer-focus:-translate-y-6 peer-focus:text-xs peer-focus:text-primary peer-valid:-translate-y-6 peer-valid:text-xs">
                      Phone Number
                    </label>
                  </div>

                  {/* Area of Interest Select */}
                  <div className="relative">
                    <select 
                      id="interest" 
                      name="interest"
                      value={formData.interest}
                      onChange={handleChange}
                      className="w-full bg-transparent border-b border-gray-300 py-3 text-navy-deep focus:outline-none focus:border-primary transition-colors appearance-none cursor-pointer"
                      required
                    >
                      <option value="" disabled className="text-gray-400">Area of Interest *</option>
                      <option value="residential">Custom Residential</option>
                      <option value="commercial">Commercial Build</option>
                      <option value="renovation">Major Renovation</option>
                      <option value="design">Architectural Design</option>
                      <option value="other">Other</option>
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-500">
                      <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                    </div>
                  </div>
                </div>

                {/* Message Textarea */}
                <div className="relative floating-label-input mt-12">
                  <textarea 
                    id="message" 
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5} 
                    className="w-full bg-transparent border-b border-gray-300 py-3 text-navy-deep focus:outline-none focus:border-primary transition-colors peer placeholder-transparent resize-none"
                    placeholder="Project Details"
                    required
                  ></textarea>
                  <label htmlFor="message" className="absolute left-0 top-3 text-gray-400 text-sm transition-all duration-300 pointer-events-none peer-focus:-translate-y-6 peer-focus:text-xs peer-focus:text-primary peer-valid:-translate-y-6 peer-valid:text-xs">
                    Project Details & Timeline *
                  </label>
                </div>

                <button 
                  type="submit" 
                  className="bg-navy-deep text-white px-10 py-4 rounded-sm font-bold tracking-widest uppercase hover:bg-primary transition-colors duration-300 flex items-center group mt-8"
                >
                  Submit Inquiry
                  <ArrowRight className="ml-3 transform group-hover:translate-x-1 transition-transform" size={18} />
                </button>
              </form>
            </motion.div>

            {/* Info Column - UPDATED */}
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="w-full lg:w-1/3 lg:pl-12"
            >
              <div className="bg-navy-deep text-white p-10 shadow-2xl relative overflow-hidden h-full">
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/20 rounded-full blur-3xl"></div>
                
                <h3 className="font-serif text-3xl font-bold mb-4 relative z-10 text-white leading-tight">
                  Better yet, see us in person!
                </h3>
                <p className="text-gray-400 text-sm mb-10 leading-relaxed relative z-10">
                  We love our clients, so feel free to visit during normal business hours.
                </p>
                
                <div className="space-y-8 relative z-10">
                  {/* Address */}
                  <div className="flex items-start">
                    <MapPin className="text-primary mr-4 mt-1 flex-shrink-0" size={24} />
                    <div>
                      <h4 className="font-bold tracking-widest uppercase text-[10px] text-gray-400 mb-2">JMM Construction & Remodeling</h4>
                      <p className="text-base leading-relaxed">
                        4009 Park Blvd #17<br />
                        San Diego, CA, USA
                      </p>
                    </div>
                  </div>

                  {/* WhatsApp / Phone */}
                  <div className="flex items-start">
                    <MessageCircle className="text-primary mr-4 mt-1 flex-shrink-0" size={24} />
                    <div>
                      <h4 className="font-bold tracking-widest uppercase text-[10px] text-gray-400 mb-2">Message us on WhatsApp</h4>
                      <p className="text-base leading-relaxed">
                        <a href="tel:+16196382624" className="hover:text-primary transition-colors">(619) 638-2624</a>
                      </p>
                    </div>
                  </div>

                  {/* License */}
                  <div className="flex items-start">
                    <ShieldCheck className="text-primary mr-4 mt-1 flex-shrink-0" size={24} />
                    <div>
                      <h4 className="font-bold tracking-widest uppercase text-[10px] text-gray-400 mb-2">License</h4>
                      <p className="text-base leading-relaxed text-gray-200">
                        CA Lic# 1034691
                      </p>
                    </div>
                  </div>

                  {/* Hours */}
                  <div className="flex items-start">
                    <Clock className="text-primary mr-4 mt-1 flex-shrink-0" size={24} />
                    <div className="w-full pr-4">
                      <h4 className="font-bold tracking-widest uppercase text-[10px] text-gray-400 mb-3">Hours</h4>
                      <ul className="text-sm text-gray-300 space-y-2">
                        <li className="flex justify-between border-b border-white/10 pb-2">
                          <span>Mon - Fri</span> <span>09:00 am – 05:00 pm</span>
                        </li>
                        <li className="flex justify-between pt-1">
                          <span>Sat - Sun</span> <span>Closed</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Interactive Map Section */}
      <section className="h-[600px] bg-gray-200 relative overflow-hidden">
        {/* Background Map Image */}
        <div className="absolute inset-0" style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1524661135-423995f22d0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80")', backgroundSize: 'cover', backgroundPosition: 'center', filter: 'grayscale(80%) opacity(60%)' }}></div>
        <div className="absolute inset-0 bg-navy-deep/5"></div>

        {/* Interactive Map Area */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="relative flex flex-col items-center">
            {/* Pulsing Marker */}
            <button 
              onClick={() => setShowMapInfo(!showMapInfo)}
              className="relative group cursor-pointer focus:outline-none z-20"
              aria-label="Toggle map information"
            >
              <motion.div 
                animate={{ scale: [1, 2.5], opacity: [0.5, 0] }} 
                transition={{ duration: 2, repeat: Infinity, ease: "easeOut" }}
                className="absolute inset-0 bg-primary rounded-full"
              ></motion.div>
              <div className="bg-primary text-white p-4 rounded-full relative z-10 shadow-2xl transform group-hover:scale-110 transition-transform duration-300">
                <MapPin size={36} />
              </div>
            </button>

            {/* Animated Info Card */}
            <AnimatePresence>
              {showMapInfo && (
                <motion.div 
                  initial={{ opacity: 0, y: 20, scale: 0.9 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 10, scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                  className="absolute top-full mt-6 bg-white p-8 shadow-2xl w-80 z-30 border-t-4 border-primary"
                >
                  <button 
                    onClick={() => setShowMapInfo(false)}
                    className="absolute top-4 right-4 text-gray-400 hover:text-primary transition-colors"
                    aria-label="Close map info"
                  >
                    <X size={20} />
                  </button>
                  <h4 className="font-serif text-2xl font-bold text-navy-deep mb-2">JMM Construction</h4>
                  <p className="text-sm text-slate-body mb-6 leading-relaxed">
                    4009 Park Blvd #17<br />
                    San Diego, CA, USA
                  </p>
                  <a 
                    href="https://maps.google.com/?q=4009+Park+Blvd+%2317,+San+Diego,+CA" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center w-full bg-navy-deep text-white px-6 py-3 font-bold tracking-widest uppercase text-xs hover:bg-primary transition-colors duration-300"
                  >
                    Open in Google Maps <ExternalLink size={14} className="ml-2" />
                  </a>
                </motion.div>
              )}
            </AnimatePresence>
            
            {/* Hint Text */}
            <AnimatePresence>
              {!showMapInfo && (
                <motion.p 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="mt-6 text-navy-deep font-bold tracking-widest uppercase text-xs bg-white/90 backdrop-blur-sm px-5 py-2.5 rounded-full shadow-lg"
                >
                  Click marker for location
                </motion.p>
              )}
            </AnimatePresence>
          </div>
        </div>
      </section>
    </div>
  );
}