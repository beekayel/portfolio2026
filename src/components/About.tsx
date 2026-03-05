import { motion } from 'framer-motion';
import GlassCard from './ui/GlassCard';

export default function About() {
  return (
    <section id="about" className="py-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute inset-0 bg-orange-500 rounded-2xl rotate-3 opacity-20 blur-lg transform scale-105" />
            <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl aspect-[4/5] lg:aspect-square">
              <img 
                src="/me.jpg" 
                alt="Dan Hodeanu" 
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6">
                <p className="text-white font-bold text-xl">Dan Hodeanu</p>
                <p className="text-orange-400">Senior SEO (Product Focus)</p>
              </div>
            </div>
          </motion.div>

          {/* Text Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              About <span className="text-orange-500">Me</span>
            </h2>
            
            <GlassCard className="prose prose-invert max-w-none">
              <p className="text-lg text-gray-300 leading-relaxed mb-6">
                I am a Senior SEO with 8+ years of experience and a strong product focus, driving organic growth for international brands and marketplaces across multi-market websites in eCommerce, travel, and SaaS.
              </p>
              <p className="text-gray-400 mb-6">
                My expertise is end-to-end ownership of digital products, from designing in Figma to launching full-stack content platforms. I focus on building automation workflows, shaping GTM and content strategies, and scaling organic growth across multi-market websites.
              </p>
              <p className="text-gray-400">
                Currently based in Vienna, Austria, I combine technical analytics  with product roadmap development to create scalable solutions that fulfill user intent and drive revenue.
              </p>
            </GlassCard>

            <div className="mt-8 grid grid-cols-2 gap-4">
              {['Product Management', 'SEO & Analytics', 'AI-Driven Automation', 'Cross-Functional Leadership'].map((skill) => (
                <div key={skill} className="flex items-center space-x-2 text-gray-300">
                  <div className="w-2 h-2 rounded-full bg-orange-500" />
                  <span>{skill}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
