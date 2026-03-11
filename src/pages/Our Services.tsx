import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Ruler, Leaf, Wrench } from 'lucide-react';
import { motion } from 'motion/react';

export default function Services() {
  const services = [
    {
      id: 1,
      tag: 'RESIDENTIAL',
      title: 'Kitchen Remodeling',
      subtitle: 'Bespoke culinary spaces tailored to your lifestyle.',
      content: (
        <>
          <p className="text-lg text-slate-body mb-6 leading-relaxed">
            Remodeling an outdated kitchen is the number one best investment you can make in overall resale value of your home. But that aside, your kitchen is the heart of your home... It's where great meals are made and shared. It's where family and friends gather together and you want a space that is comfortable, beautiful, and functional.
          </p>
          <p className="text-lg text-slate-body mb-8 leading-relaxed">
            From cabinets to countertops and flooring to fixtures, the possibilities are fit to suit any taste. We've got you covered. We can manage and execute every aspect of your kitchen remodel.
          </p>
        </>
      ),
      img: '/images/service-kitchen.jpg',
    },
    {
      id: 2,
      tag: 'INTERIOR',
      title: 'Bathroom Remodeling',
      subtitle: 'Transforming bathrooms into private sanctuaries.',
      content: (
        <>
          <p className="text-lg text-slate-body mb-6 leading-relaxed">
            A bathroom is an essential part of any home, but one that is often overlooked. Updating your bathroom is one of the best ways to add value to your home.
          </p>
          <p className="text-lg text-slate-body mb-6 leading-relaxed">
            Your bathroom is a place to relax, unwind, start and end your day. You want a space that is both functional and stylish.
          </p>
          <p className="text-lg text-slate-body mb-8 leading-relaxed">
            Whether you are updating an existing bathroom or adding a new bathroom, we can work with you to create a room that becomes a place you love to spend time in.
          </p>
        </>
      ),
      img: '/images/service-bathroom.jpg',
    },
    {
      id: 3,
      tag: 'EXPANSION',
      title: 'Room Additions',
      subtitle: 'Seamlessly expanding your living space.',
      content: (
        <>
          <p className="text-lg text-slate-body mb-6 leading-relaxed">
            Maybe your family has grown and need a new bedroom. Maybe you're tired of squeezing your family and friends into a tiny kitchen, or maybe you are finally building the master suite you've always wanted...
          </p>
          <p className="text-lg text-slate-body mb-8 leading-relaxed">
            Whatever the need or purpose, we can help you plan and build the new space you've been thinking about. From advice on layout and materials to permits and execution, we have you covered every step of the way.
          </p>
        </>
      ),
      img: '/images/service-addition.jpg',
    },
    {
      id: 4,
      tag: 'EXTERIOR',
      title: 'Roofing',
      subtitle: 'Durable and aesthetic protection for your home.',
      content: (
        <>
          <p className="text-lg text-slate-body mb-6 leading-relaxed">
            Making the decision to get a new roof is an important one. Roof installation or replacement is a significant investment that has a big impact on the appearance, value, and function of your home.
          </p>
          <p className="text-lg text-slate-body mb-8 leading-relaxed">
            We specialize in both roof replacement and new roof installation in San Diego, CA. There are many reasons to install a new roof, which is why we will inspect your home's roof and help you decide if roof replacement is necessary and worth the investment.
          </p>
        </>
      ),
      img: '/images/service-roofing.jpg',
    },
    {
      id: 5,
      tag: 'FINISHING',
      title: 'Flooring',
      subtitle: 'Exquisite foundations for every room.',
      content: (
        <>
          <p className="text-lg text-slate-body mb-6 leading-relaxed">
            Our family-owned business is dedicated to helping find your ideal flooring.
          </p>
          <p className="text-lg text-slate-body mb-8 leading-relaxed">
            Whether you desire vinyl or hardwood, laminate or tile, our finest selections of name brand flooring options will make it easy for you to be able to choose the best option for your home, your family, and you.
          </p>
        </>
      ),
      img: '/images/service-flooring.jpg',
    },
    {
      id: 6,
      tag: 'ENERGY',
      title: 'Solar',
      subtitle: 'Sustainable power solutions for modern living.',
      content: (
        <>
          <p className="text-lg text-slate-body mb-6 leading-relaxed">
            Many Californians don’t realize the amount of money spent on their home energy use each year. In the next 10 years, the average California homeowner may spend over $11,000 on electricity.
          </p>
          <p className="text-lg text-slate-body mb-8 leading-relaxed">
            To find out if you could benefit by going solar, we will meet with you in your home and explain all of the options and cost saving initiatives that may be available to you – from government and California specific solar rebates & incentives to the different solar panel financing and leasing programs, all of which can help offset some of the initial solar system installation costs.
          </p>
        </>
      ),
      img: '/images/service-solar.jpg',
    }
  ];

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
              <span className="text-primary font-bold tracking-widest uppercase text-sm mb-4 block">Our Expertise</span>
              <h1 className="font-serif text-5xl md:text-7xl text-navy-deep font-bold mb-8 leading-tight">
                Comprehensive <span className="italic font-light text-primary">Construction</span> Solutions
              </h1>
              <p className="text-xl text-slate-body leading-relaxed font-light">
                From visionary architectural design to meticulous execution, JMM delivers excellence across every phase of the construction lifecycle.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Services Detailed Showcase */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 md:px-12">
          
          {services.map((service, index) => (
            <div 
              key={service.id} 
              className={`flex flex-col lg:flex-row items-center gap-16 mb-32 ${
                index % 2 !== 0 ? 'lg:flex-row-reverse' : ''
              }`}
            >
              {/* Image Column */}
              <motion.div 
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="w-full lg:w-1/2"
              >
                <div className="aspect-[4/5] md:aspect-[4/3] overflow-hidden rounded-sm shadow-2xl relative group">
                  <img 
                    src={service.img} 
                    alt={service.title} 
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-1000"
                    referrerPolicy="no-referrer"
                  />
                  {/* Subtle overlay effect */}
                  <div className="absolute inset-0 bg-navy-deep/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
              </motion.div>

              {/* Text Column */}
              <motion.div 
                initial={{ opacity: 0, x: index % 2 === 0 ? 30 : -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="w-full lg:w-1/2"
              >
                <span className="text-gray-400 font-bold tracking-widest uppercase text-xs mb-4 block">
                  {service.tag}
                </span>
                <h2 className="font-serif text-4xl text-navy-deep font-bold mb-3">
                  {service.title}
                </h2>
                <h3 className="text-xl text-primary font-serif italic mb-8">
                  {service.subtitle}
                </h3>
                
                <div className="prose prose-lg text-slate-body">
                  {service.content}
                </div>

                <Link to="/contact" className="inline-flex items-center font-bold text-navy-deep hover:text-primary transition-colors uppercase tracking-wide text-sm group mt-4">
                  Discuss Your Project
                  <ArrowRight className="ml-2 transform group-hover:translate-x-1 transition-transform" size={16} />
                </Link>
              </motion.div>
            </div>
          ))}

        </div>
      </section>

      {/* Additional Capabilities */}
      <section className="py-24 bg-background-light border-t border-gray-200">
        <div className="container mx-auto px-6 md:px-12">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="font-serif text-3xl md:text-4xl text-navy-deep font-bold mb-6">Specialized Capabilities</h2>
            <p className="text-slate-body">Beyond our core services, we offer specialized expertise to handle complex and unique project requirements.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: Ruler, title: 'Historic Restoration', desc: 'Meticulous preservation techniques to restore heritage buildings to their former glory while integrating modern systems.' },
              { icon: Leaf, title: 'Sustainable Building', desc: 'LEED-certified construction practices, focusing on energy efficiency, sustainable materials, and reduced environmental impact.' },
              { icon: Wrench, title: 'Major Renovations', desc: 'Transformative structural changes and high-end remodeling for existing residential and commercial properties.' }
            ].map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-white p-10 shadow-sm border border-gray-100 hover:shadow-xl transition-shadow duration-300"
              >
                <item.icon className="text-primary mb-6" size={36} strokeWidth={1.5} />
                <h3 className="font-serif text-xl text-navy-deep font-bold mb-4">{item.title}</h3>
                <p className="text-slate-body text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 bg-navy-deep text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'radial-gradient(#C5A059 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
        <div className="container mx-auto px-6 md:px-12 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <span className="text-primary font-bold tracking-widest uppercase text-xs mb-4 block">Methodology</span>
            <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6 text-white">The JMM Process</h2>
            <p className="text-gray-400 text-lg">A proven, transparent approach that ensures predictability, quality, and client satisfaction from day one.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 relative">
            {/* Connecting Line (Desktop) */}
            <div className="hidden md:block absolute top-12 left-[10%] right-[10%] h-[1px] bg-white/20 z-0"></div>

            {[
              { step: '01', title: 'Consultation & Vision', desc: 'We begin by deeply understanding your goals, aesthetic preferences, and functional requirements.' },
              { step: '02', title: 'Design & Pre-Construction', desc: 'Detailed architectural plans, material selection, budgeting, and securing necessary permits.' },
              { step: '03', title: 'Construction & Management', desc: 'Flawless execution by our master craftsmen, with transparent, regular progress updates.' },
              { step: '04', title: 'Delivery & Handover', desc: 'Rigorous final inspections and a comprehensive walkthrough before handing over the keys.' }
            ].map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="relative z-10"
              >
                <div className="w-24 h-24 rounded-full bg-navy-deep border-2 border-primary flex items-center justify-center mx-auto mb-8 shadow-[0_0_30px_rgba(197,160,89,0.2)]">
                  <span className="font-serif text-3xl font-bold text-primary">{item.step}</span>
                </div>
                <h3 className="font-serif text-xl font-bold mb-4 text-center text-white">{item.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed text-center">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-primary relative overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'1\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")' }}></div>
        <div className="container mx-auto px-6 md:px-12 relative z-10 text-center">
          <h2 className="font-serif text-4xl md:text-5xl text-white font-bold mb-8 max-w-3xl mx-auto leading-tight">
            Discuss Your Next Project
          </h2>
          <p className="text-white/90 text-lg mb-10 max-w-2xl mx-auto font-light">
            Our experts are ready to provide insights and outline the path forward for your construction or design needs.
          </p>
          <Link 
            to="/contact" 
            className="inline-block bg-navy-deep text-white px-10 py-5 rounded-sm font-bold tracking-widest uppercase hover:bg-white hover:text-navy-deep transition-all duration-300 shadow-xl"
          >
            Book a Consultation
          </Link>
        </div>
      </section>
    </div>
  );
}