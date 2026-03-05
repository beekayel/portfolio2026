import { motion } from 'framer-motion';
import CountUp from 'react-countup';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { TrendingUp, Users, Link as LinkIcon, Globe, ShoppingBag, Award, BarChart, Euro } from 'lucide-react';

const stats = [
  { label: 'Revenue Impact', value: 4, suffix: 'M €', icon: Euro, desc: 'Generated in 1 month by identifying user behavior (Hotjar/Clarity) and implementing targeted video features.' },
  { label: 'Pages Managed', value: 2, suffix: 'M+', icon: Globe, desc: 'Across hundreds of markets (focus on DACH & US)' },
  { label: 'Shops Managed', value: 40, suffix: '+', icon: ShoppingBag, desc: 'Ecommerce optimization for Klarstein, Droppe, Auna, etc.' },
  { label: 'SEM Spend Efficiency', value: 60, suffix: '%', icon: BarChart, desc: 'Monthly budget of €50k with ROAS > 100%' },
  { label: 'Backlinks', value: 10.2, suffix: 'M', decimals: 1, icon: LinkIcon, desc: 'Increased from 6M to 10.2M using custom backlink strategies' },
  { label: 'Traffic Increase', value: 150, suffix: '%', icon: TrendingUp, desc: 'Scaled to 50M visits using programmatic SEO & proprietary data' },
];

export default function Stats() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="stats" className="py-20 bg-slate-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Performance in Numbers</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Measurable impact driving growth and product excellence.
          </p>
        </motion.div>

        <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 group"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="p-3 bg-orange-500/10 rounded-lg group-hover:bg-orange-500/20 transition-colors">
                  <stat.icon className="w-6 h-6 text-orange-500" />
                </div>
                <span className="text-sm text-gray-500 font-mono">0{index + 1}</span>
              </div>
              
              <div className="text-4xl font-bold text-white mb-2">
                {isInView ? (
                  <CountUp
                    start={0}
                    end={stat.value}
                    duration={2.5}
                    decimals={stat.decimals || 0}
                    suffix={stat.suffix}
                  />
                ) : (
                  <span>0{stat.suffix}</span>
                )}
              </div>
              
              <h3 className="text-lg font-semibold text-gray-200 mb-1">{stat.label}</h3>
              <p className="text-sm text-gray-400">{stat.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Highlight Card for #1 Ranking */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-8 bg-gradient-to-r from-orange-500/20 to-purple-500/20 border border-white/10 rounded-2xl p-8 flex flex-col md:flex-row items-center justify-between gap-6"
        >
          <div className="flex items-center gap-4">
            <div className="p-4 bg-yellow-500/20 rounded-full shrink-0">
              <Award className="w-8 h-8 text-yellow-500" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-white">#1 Organic Ranking & €2M+ Sales</h3>
              <p className="text-gray-300 mt-2">
                Achieved top positions for Black Friday & Christmas in DACH region within the first year for core Category pages. 
                End-to-end ownership: from design → GTM strategy → managing implementation & leveraging proprietary AI data → production.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
