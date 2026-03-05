import { motion } from 'framer-motion';
import { ExternalLink, Github, Globe } from 'lucide-react';
import GlassCard from './ui/GlassCard';

const projects = [
  {
    title: 'Horologius.com',
    category: 'News & Reviews',
    desc: 'Full-scale News & Reviews publication for Microbrand Watches. Live platform serving collectors and enthusiasts with news and reviews about wristwatches from independent watchmakers and less-known brands.',
    tags: ['Product Management', 'GTM Strategy', 'Technical SEO', 'Content SEO', 'Figma', 'CMS', 'CRO'],
    link: 'https://horologius.com',
    image: '/projects/horologius.jpg'
  },
  {
    title: 'MealPrepPlan',
    category: 'Web App',
    desc: 'Streamlines meal prep and grocery shopping into a waste-free experience scanning existing products in your fridge via photos and creating optimised shopping lists. Led Product, SEO, UI, and frontend development.',
    tags: ['Product Management', 'GTM Strategy', 'React', 'Tailwind', 'Figma', 'Technical SEO'],
    image: '/projects/mealprepplan.jpg'
  },
  {
    title: 'SaveGamez.com',
    category: 'Price Comparison',
    desc: 'Enables users to find the lowest prices for video games and track sales. Led SEO, Product and UI/UX efforts for this startup project.',
    tags: ['Product Management', 'GTM Strategy', 'Technical SEO', 'UI/UX', 'URL Logic', 'Figma'],
    link: 'https://savegamez.com',
    image: '/projects/savegamez.jpg'
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-slate-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Featured Projects</h2>
          <p className="text-gray-400">Personal projects and case studies.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <GlassCard key={index} className="flex flex-col h-full p-0 overflow-hidden group" hoverEffect={true}>
              <div className="relative h-48 overflow-hidden">
                <div className="absolute inset-0 bg-slate-900/20 group-hover:bg-transparent transition-colors z-10" />
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              
              <div className="p-6 flex-1 flex flex-col">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <span className="text-orange-500 text-xs font-bold uppercase tracking-wider">
                      {project.category}
                    </span>
                    <h3 className="text-xl font-bold text-white mt-1 group-hover:text-orange-400 transition-colors">
                      {project.title}
                    </h3>
                  </div>
                  <a 
                    href={project.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="p-2 bg-white/5 rounded-full hover:bg-white/10 text-gray-300 hover:text-white transition-colors"
                  >
                    <ExternalLink className="w-5 h-5" />
                  </a>
                </div>
                
                <p className="text-gray-400 text-sm mb-6 flex-1">
                  {project.desc}
                </p>
                
                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.tags.map((tag) => (
                    <span 
                      key={tag} 
                      className="px-3 py-1 text-xs font-medium text-gray-300 bg-white/5 rounded-full border border-white/5"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
}
