import { motion } from 'framer-motion';
import { Briefcase, MapPin, Calendar, ExternalLink } from 'lucide-react';
import GlassCard from './ui/GlassCard';
import { useState } from 'react';

const experiences = [
  {
    company: 'TourRadar',
    role: 'Senior SEO Manager',
    location: 'Vienna, Austria (On-site)',
    period: 'May 2025 - Present',
    desc: 'Owned SEO strategy for content platform serving 55,000+ tour pages across 6 international markets. Led end-to-end domain migration (NZ site consolidation) achieving 0% traffic loss. Collaborated with product and development teams to optimize our platform for organic growth by creating specific Landing Pages with targeted Content Strategies. Launched Google Things to Do discovery rollout and managed the GTM strategy of our Travel Community Forum.',
    url: 'https://www.tourradar.com/',
    logo: '/logos/tourradar.png'
  },
  {
    company: 'Droppe',
    role: 'Senior SEO & SEM Manager',
    location: 'Helsinki, Finland (Remote)',
    period: 'Feb 2025 - Apr 2025',
    desc: 'Led user acquisition strategy end-to-end and budget allocation across organic and paid channels. Developed SEM efficiency tool increasing budget efficiency by 60% through automation. Drove 50%+ MoM organic traffic growth by scaling content pipeline and optimizing product listing experience and overall user experience.',
    url: 'https://droppe.com/at-en',
    logo: '/logos/droppe.png'
  },
  {
    company: 'Berlin Brands Group',
    role: 'SEO Manager',
    location: 'Berlin, Germany (On-site)',
    period: 'Nov 2023 - Jan 2025',
    desc: 'Led platform strategy across all brands (Klarstein, etc.). Spearheaded UI/UX redesign initiatives for higher CTR and CR. Enhanced website indexation leading to 30% increase in organic keyword rankings. PM for AI-driven content optimization automating Amazon and D2C content creation.',
    url: 'https://www.klarstein.com/',
    logo: '/logos/bbg.png'
  },
  {
    company: 'JustWatch',
    role: 'Junior SEO Manager',
    location: 'Berlin, Germany (On-site)',
    period: 'Oct 2022 - Oct 2023',
    desc: 'Increased platform traffic by 150% to 50M monthly visits through feature launches and platform optimization. Owned core platform systems: metadata, structured data, indexation architecture (5M+ Pages). Launched Esports category and led 12 regional expansions.',
    url: 'https://www.justwatch.com/',
    logo: '/logos/justwatch.png'
  },
  {
    company: 'Resourceful Humans',
    role: 'Entrepreneur in Residence',
    location: 'Berlin, Germany',
    period: 'Mar 2022 - Sep 2022',
    desc: 'Managed Google Ads (360% traffic increase). Oversaw SEO team and branding across all platforms.',
    url: 'https://resourcefulhumans.com/',
    logo: '/logos/rh.png'
  },
  {
    company: 'Fishing in Lappland',
    role: 'Marketing Manager & Web Developer',
    location: 'Storuman, Sweden',
    period: 'Aug 2019 - Aug 2021',
    desc: 'Produced video content, managed social media, and developed the company website.',
    url: 'https://fishinginlappland.com/',
    logo: '/logos/fl.png'
  }
];

function CompanyLogo({ logo, company }: { logo: string, company: string }) {
  const [error, setError] = useState(false);

  if (error) {
    return (
      <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-orange-500 font-bold text-lg border border-white/5 shrink-0">
        {company.substring(0, 2).toUpperCase()}
      </div>
    );
  }

  return (
    <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center overflow-hidden border border-white/10 shrink-0 p-1">
      <img 
        src={logo} 
        alt={`${company} logo`} 
        className="w-full h-full object-contain"
        onError={() => setError(true)}
      />
    </div>
  );
}

export default function Experience() {
  return (
    <section id="experience" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Work Experience</h2>
          <p className="text-gray-400">A timeline of my professional journey.</p>
        </motion.div>

        <div className="relative border-l border-gray-700 ml-4 md:ml-10 space-y-12">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative pl-8 md:pl-12"
            >
              {/* Timeline Dot */}
              <div className="absolute -left-[5px] md:-left-[9px] top-0 w-3 h-3 md:w-5 md:h-5 rounded-full bg-orange-500 border-4 border-slate-900 shadow-[0_0_10px_rgba(249,115,22,0.5)]" />
              
              <GlassCard className="p-6 md:p-8 hover:border-orange-500/30 transition-colors group">
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                  <div className="flex items-center gap-4">
                    <CompanyLogo logo={exp.logo} company={exp.company} />
                    <div>
                      <h3 className="text-xl font-bold text-white group-hover:text-orange-400 transition-colors">
                        {exp.role}
                      </h3>
                      <a 
                        href={exp.url}
                        target="_blank"
                        rel="noopener noreferrer" 
                        className="text-lg text-gray-300 font-medium hover:text-orange-400 transition-colors flex items-center gap-2"
                      >
                        {exp.company}
                        <ExternalLink className="w-4 h-4 opacity-50" />
                      </a>
                    </div>
                  </div>
                  <div className="flex flex-col md:items-end mt-2 md:mt-0 text-sm text-gray-500 pl-16 md:pl-0">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      <span>{exp.period}</span>
                    </div>
                    <div className="flex items-center gap-1 mt-1">
                      <MapPin className="w-4 h-4" />
                      <span>{exp.location}</span>
                    </div>
                  </div>
                </div>
                
                <p className="text-gray-400 leading-relaxed">
                  {exp.desc}
                </p>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
