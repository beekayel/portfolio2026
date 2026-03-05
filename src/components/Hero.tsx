import { motion, useMotionTemplate, useMotionValue } from 'framer-motion';
import { Linkedin, ArrowRight } from 'lucide-react';
import { useEffect } from 'react';

export default function Hero() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16 group">
      {/* Background Gradients */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-orange-500/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-blue-500/10 rounded-full blur-[120px]" />
        
        {/* Cursor Follower */}
        <motion.div
          className="absolute w-[600px] h-[600px] bg-orange-500/15 rounded-full blur-[100px] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
          style={{
            left: useMotionTemplate`${mouseX}px`,
            top: useMotionTemplate`${mouseY}px`,
            transform: 'translate(-50%, -50%)',
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-orange-500 font-medium tracking-wide uppercase mb-4">
            Senior SEO (Product Focus)
          </h2>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight">
            Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">Dan Hodeanu</span>
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-300 leading-relaxed">
            Currently looking for Product roles where I can leverage my experience in driving organic growth, technical strategy, and scalable optimization.
          </p>
          
          <div className="mt-10 flex justify-center gap-4">
            <motion.a
              href="https://www.linkedin.com/in/danhodeanu/"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="relative group inline-flex items-center px-8 py-3 rounded-full bg-blue-600 text-white font-semibold overflow-hidden shadow-[0_0_20px_rgba(37,99,235,0.5)] hover:shadow-[0_0_30px_rgba(37,99,235,0.7)] transition-all duration-300"
            >
              <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-shimmer" />
              <Linkedin className="w-5 h-5 mr-2" />
              Connect on LinkedIn
            </motion.a>
            
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center px-8 py-3 rounded-full border border-white/20 hover:bg-white/10 text-white font-semibold transition-colors"
            >
              Get in Touch
              <ArrowRight className="w-4 h-4 ml-2" />
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
