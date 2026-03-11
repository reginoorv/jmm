import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2, Building2, Ruler, HardHat, Compass } from 'lucide-react';
import { motion } from 'motion/react';

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="/images/hero-main.jpg" 
            alt="JMM Construction Premium Residential" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-navy-deep/60 mix-blend-multiply"></div>
        </div>

        <div className="container mx-auto px-6 md:px-12 relative z-10 text-center mt-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-primary font-semibold tracking-[0.2em] uppercase text-sm mb-6 block">
              Over a Decade in San Diego
            </span>
            <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl text-white font-bold leading-tight mb-8 max-w-5xl mx-auto">
              Improving Homes & <span className="italic font-light text-primary-light">Communities</span>.
            </h1>
            <p className="text-gray-200 text-lg md:text-xl max-w-2xl mx-auto mb-12 font-light leading-relaxed">
              Delivering quality craftsmanship with a family-feel approach. We are dedicated to making your residential construction project completely stress-free and leaving you at ease.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <Link 
                to="/our-work" 
                className="bg-primary text-white px-8 py-4 rounded-sm font-semibold tracking-wide uppercase hover:bg-white hover:text-navy-deep transition-all duration-300 w-full sm:w-auto text-center"
              >
                View Our Work
              </Link>
              <Link 
                to="/contact" 
                className="text-white border border-white/30 px-8 py-4 rounded-sm font-semibold tracking-wide uppercase hover:bg-white hover:text-navy-deep transition-all duration-300 w-full sm:w-auto text-center"
              >
                Start a Project
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-10 flex flex-col items-center animate-bounce">
          <span className="text-white/50 text-xs tracking-widest uppercase mb-2">Scroll</span>
          <div className="w-[1px] h-12 bg-white/30"></div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-24 lg:py-32 bg-background-light">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="absolute -top-6 -left-6 w-32 h-32 bg-primary/10 rounded-full blur-2xl"></div>
              <img 
                src="/images/about-us.jpg" 
                alt="About JMM Construction San Diego" 
                className="w-full h-auto object-cover rounded-sm shadow-2xl relative z-10"
                referrerPolicy="no-referrer"
              />
              <div className="absolute -bottom-10 -right-10 bg-white p-8 shadow-xl z-20 hidden md:block border-l-4 border-primary">
                <p className="font-serif text-5xl text-navy-deep font-bold mb-2">10+</p>
                <p className="text-sm font-bold uppercase tracking-wider text-slate-body">Years of<br/>Excellence</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <span className="text-primary font-bold tracking-widest uppercase text-xs mb-4 block">A Little About Us</span>
              <h2 className="font-serif text-4xl md:text-5xl text-navy-deep font-bold mb-8 leading-tight">
                Improving homes and communities in <span className="italic font-light text-primary">San Diego</span>.
              </h2>
              <p className="text-lg text-slate-body mb-6 leading-relaxed">
                JMM Construction & Remodeling has proudly served the County of San Diego, California for over ten years. During the past decade we have been able to help many clients all over San Diego County.
              </p>
              <p className="text-slate-body mb-10 leading-relaxed">
                Our goal is to improve residential properties and help neighborhoods / communities with their construction projects. One of the reasons our clients stick with us for many years is because of our quality line of work, and our family-feel type of business. We do our very best to ensure our clients are completely satisfied with our projects before we go home at the end of the day, leaving them feeling stress-free and at ease!
              </p>
              
              <ul className="space-y-4 mb-10">
                {[
                  'Over a decade of local experience',
                  'Quality residential improvements',
                  'Family-feel type of business',
                  '100% client satisfaction focus'
                ].map((item, i) => (
                  <li key={i} className="flex items-center text-navy-deep font-medium">
                    <CheckCircle2 className="text-primary mr-3" size={20} />
                    {item}
                  </li>
                ))}
              </ul>

              <Link to="/our-work" className="inline-flex items-center font-bold text-navy-deep hover:text-primary transition-colors uppercase tracking-wide text-sm group">
                View Our Work
                <ArrowRight className="ml-2 transform group-hover:translate-x-1 transition-transform" size={16} />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 lg:py-32 bg-white relative">
        <div className="container mx-auto px-6 md:px-12">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16">
            <h2 className="font-serif text-4xl md:text-5xl text-navy-deep font-bold italic">Our Services</h2>
            <Link to="/our-services" className="hidden md:inline-flex items-center font-bold text-slate-body hover:text-navy-deep transition-colors uppercase tracking-widest text-xs border-b border-slate-body hover:border-navy-deep pb-1">
              VIEW ALL
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
            {[
              { 
                category: 'RESIDENTIAL', 
                title: 'Kitchen Remodeling', 
                desc: 'Bespoke culinary spaces tailored to your lifestyle.',
                img: '/images/service-kitchen.jpg'
              },
              { 
                category: 'INTERIOR', 
                title: 'Bathroom Remodeling', 
                desc: 'Transforming bathrooms into private sanctuaries.',
                img: '/images/service-bathroom.jpg'
              },
              { 
                category: 'EXPANSION', 
                title: 'Room Additions', 
                desc: 'Seamlessly expanding your living space.',
                img: '/images/service-addition.jpg'
              },
              { 
                category: 'EXTERIOR', 
                title: 'Roofing', 
                desc: 'Durable and aesthetic protection for your home.',
                img: '/images/service-roofing.jpg'
              },
              { 
                category: 'FINISHING', 
                title: 'Flooring', 
                desc: 'Exquisite foundations for every room.',
                img: '/images/service-flooring.jpg'
              },
              { 
                category: 'ENERGY', 
                title: 'Solar', 
                desc: 'Sustainable power solutions for modern living.',
                img: '/images/service-solar.jpg'
              }
            ].map((service, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group cursor-pointer"
              >
                <div className="aspect-[4/3] overflow-hidden mb-6">
                  <img 
                    src={service.img} 
                    alt={service.title} 
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <span className="text-gray-400 font-bold tracking-widest uppercase text-[10px] mb-2 block">{service.category}</span>
                <h3 className="font-serif text-2xl text-navy-deep font-bold italic mb-3">{service.title}</h3>
                <p className="text-slate-body text-sm leading-relaxed">{service.desc}</p>
              </motion.div>
            ))}
          </div>

          <div className="mt-20 text-center">
            <Link 
              to="/our-services" 
              className="inline-block border border-primary text-primary px-8 py-4 font-bold tracking-widest uppercase text-xs hover:bg-primary hover:text-white transition-colors duration-300"
            >
              Explore All Services
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Work (UPDATED TO MATCH LOCAL ASSETS) */}
      <section className="py-24 lg:py-32 bg-background-light">
        <div className="container mx-auto px-6 md:px-12">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16">
            <div className="max-w-2xl">
              <span className="text-primary font-bold tracking-widest uppercase text-xs mb-4 block">Our Work</span>
              <h2 className="font-serif text-4xl md:text-5xl text-navy-deep font-bold">Selected Works</h2>
            </div>
            <Link to="/our-work" className="hidden md:inline-flex items-center font-bold text-navy-deep hover:text-primary transition-colors uppercase tracking-wide text-sm group">
              View All Projects
              <ArrowRight className="ml-2 transform group-hover:translate-x-1 transition-transform" size={16} />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Project 1 */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="group relative overflow-hidden"
            >
              <div className="aspect-[4/5] overflow-hidden">
                <img 
                  src="/images/port-kitchen-1.jpg" 
                  alt="Modern Kitchen Remodel" 
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-navy-deep/90 via-navy-deep/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-10">
                <span className="text-primary font-bold tracking-widest uppercase text-xs mb-2">Kitchens</span>
                <h3 className="font-serif text-3xl text-white font-bold mb-4">Modern Open-Concept</h3>
                <Link to="/our-work" className="inline-flex items-center text-white hover:text-primary transition-colors text-sm font-semibold uppercase tracking-wider">
                  View Project <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </div>
            </motion.div>

            {/* Project 2 */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="group relative overflow-hidden md:mt-16"
            >
              <div className="aspect-[4/5] overflow-hidden">
                <img 
                  src="/images/port-bath-1.jpg" 
                  alt="Luxury Bathroom Remodel" 
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-navy-deep/90 via-navy-deep/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-10">
                <span className="text-primary font-bold tracking-widest uppercase text-xs mb-2">Bathrooms</span>
                <h3 className="font-serif text-3xl text-white font-bold mb-4">Serene Spa Sanctuary</h3>
                <Link to="/our-work" className="inline-flex items-center text-white hover:text-primary transition-colors text-sm font-semibold uppercase tracking-wider">
                  View Project <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </div>
            </motion.div>
          </div>
          
          <div className="mt-12 text-center md:hidden">
            <Link to="/our-work" className="inline-flex items-center font-bold text-navy-deep hover:text-primary transition-colors uppercase tracking-wide text-sm group">
              View All Projects
              <ArrowRight className="ml-2 transform group-hover:translate-x-1 transition-transform" size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-primary relative overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'1\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")' }}></div>
        <div className="container mx-auto px-6 md:px-12 relative z-10 text-center">
          <h2 className="font-serif text-4xl md:text-6xl text-white font-bold mb-8 max-w-3xl mx-auto leading-tight">
            Ready to build something extraordinary?
          </h2>
          <p className="text-white/90 text-lg md:text-xl mb-10 max-w-2xl mx-auto font-light">
            Contact our team to discuss your vision and discover how JMM can bring it to life.
          </p>
          <Link 
            to="/contact" 
            className="inline-block bg-navy-deep text-white px-10 py-5 rounded-sm font-bold tracking-widest uppercase hover:bg-white hover:text-navy-deep transition-all duration-300 shadow-xl"
          >
            Schedule a Consultation
          </Link>
        </div>
      </section>
    </div>
  );
}