import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Filter, Maximize2, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const projects = [
  // KITCHENS
  { id: 1, category: 'Kitchens', image: '/images/port-kitchen-1.jpg' },
  { id: 2, category: 'Kitchens', image: '/images/port-kitchen-2.jpg' },
 

  // BATHROOMS
  { id: 5, category: 'Bathrooms', image: '/images/port-bath-1.jpg' },
  { id: 6, category: 'Bathrooms', image: '/images/port-bath-2.jpg' },

  
  // BEFORE AND AFTER
  { id: 8, category: 'Before and After', image: '/images/port-bna-1.jpg' },
  { id: 9, category: 'Before and After', image: '/images/port-bna-2.jpg' },
  
  // MISCELLANEOUS PROJECTS
  { id: 10, category: 'Miscellaneous Projects', image: '/images/port-misc-1.jpg' },
  { id: 11, category: 'Miscellaneous Projects', image: '/images/port-misc-2.jpg' },
  { id: 12, category: 'Miscellaneous Projects', image: '/images/port-misc-3.jpg' },
];

export default function Portfolio() {
  const [filter, setFilter] = useState('All');
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const categories = ['All', 'Kitchens', 'Bathrooms', 'Before and After', 'Miscellaneous Projects'];

  const filteredProjects = filter === 'All' 
    ? projects 
    : projects.filter(project => project.category === filter);

  return (
    <div>
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-background-light border-b border-gray-200">
        <div className="container mx-auto px-6 md:px-12">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-primary font-bold tracking-widest uppercase text-sm mb-4 block">Visual Showcase</span>
              <h1 className="font-serif text-5xl md:text-7xl text-navy-deep font-bold mb-6 leading-tight">
                Our <span className="italic font-light text-primary">Work</span>
              </h1>
              <p className="text-xl text-slate-body leading-relaxed font-light max-w-2xl mx-auto">
                A curated gallery of our finest transformations across San Diego County. 
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Pure Image Gallery Section */}
      <section className="py-16 bg-white min-h-screen relative">
        <div className="container mx-auto px-6 md:px-12">
          
          {/* Minimalist Filter Bar */}
          <div className="flex flex-col items-center mb-16">
            <div className="flex items-center text-gray-400 text-sm tracking-widest uppercase mb-8">
              <Filter className="mr-2 text-primary" size={18} />
              <span>Select Category</span>
            </div>
            
            <div className="flex flex-wrap justify-center gap-6 md:gap-10">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setFilter(cat)}
                  className={`text-sm md:text-base font-semibold tracking-wide transition-all duration-300 pb-2 border-b-2 uppercase ${
                    filter === cat 
                      ? 'border-navy-deep text-navy-deep' 
                      : 'border-transparent text-gray-400 hover:text-primary hover:border-primary'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Seamless Image Grid (Pure Visuals) */}
          <motion.div 
            layout 
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6"
          >
            <AnimatePresence>
              {filteredProjects.map((project) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4 }}
                  className="group relative cursor-pointer overflow-hidden aspect-square bg-gray-100 rounded-sm shadow-sm hover:shadow-xl transition-shadow duration-500"
                  onClick={() => setSelectedImage(project.image)}
                >
                  <img 
                    src={project.image} 
                    alt={`${project.category} showcase`} 
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                    loading="lazy"
                  />
                  
                  {/* Elegant Hover Overlay */}
                  <div className="absolute inset-0 bg-navy-deep/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center">
                    <div className="bg-white/90 p-3 rounded-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                      <Maximize2 className="text-navy-deep" size={20} />
                    </div>
                    <span className="text-white mt-4 font-bold tracking-widest uppercase text-[10px] opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                      View Larger
                    </span>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
          
          {/* Empty State / Fallback */}
          {filteredProjects.length === 0 && (
            <div className="text-center py-20">
              <p className="text-slate-body text-lg">More projects coming soon to this category.</p>
            </div>
          )}

        </div>
      </section>

      {/* Lightbox / Modal Overlay */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-12 bg-navy-deep/95 backdrop-blur-md cursor-zoom-out"
            onClick={() => setSelectedImage(null)}
          >
            <button 
              className="absolute top-6 right-6 md:top-10 md:right-10 text-white/50 hover:text-white transition-colors z-50 focus:outline-none"
              onClick={() => setSelectedImage(null)}
              aria-label="Close lightbox"
            >
              <X size={40} strokeWidth={1.5} />
            </button>
            
            <motion.img
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              src={selectedImage}
              alt="Enlarged view"
              className="max-w-full max-h-full object-contain rounded-sm shadow-2xl cursor-default"
              onClick={(e) => e.stopPropagation()} // Prevent clicking image from closing modal
            />
          </motion.div>
        )}
      </AnimatePresence>

      {/* CTA Section */}
      <section className="py-24 bg-primary relative overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'1\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")' }}></div>
        <div className="container mx-auto px-6 md:px-12 relative z-10 text-center">
          <h2 className="font-serif text-4xl md:text-5xl text-white font-bold mb-8 max-w-3xl mx-auto leading-tight">
            Inspired by our gallery?
          </h2>
          <p className="text-white/90 text-lg mb-10 max-w-2xl mx-auto font-light">
            Let's collaborate to create your own architectural masterpiece. Our team is ready to bring your vision to life.
          </p>
          <Link 
            to="/contact" 
            className="inline-block bg-navy-deep text-white px-10 py-5 rounded-sm font-bold tracking-widest uppercase hover:bg-white hover:text-navy-deep transition-all duration-300 shadow-xl"
          >
            Start Your Project
          </Link>
        </div>
      </section>
    </div>
  );
}