import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Users, Award, Heart } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import teamPhoto from '@/assets/team-photo.jpg';

export function TeamSection() {
  const { t } = useLanguage();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const stats = [
    { icon: Users, value: '40+', label: t('team.employees') },
    { icon: Award, value: '5+', label: t('team.experience') },
    { icon: Heart, value: '100%', label: t('team.passion') },
  ];

  return (
    <section id="team" className="section-padding bg-background relative overflow-hidden" ref={ref}>
      {/* Background Pattern */}
      <div className="absolute inset-0 dot-pattern opacity-50" />
      
      <div className="container-wide relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-primary font-semibold text-sm uppercase tracking-wider mb-4 block">
            {t('team.badge')}
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            {t('team.title')}
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            {t('team.subtitle')}
          </p>
        </motion.div>

        {/* Team Photo */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative mb-16"
        >
          {/* Glow Effect */}
          <div className="absolute -inset-4 bg-gradient-to-r from-teal-500/20 to-cyan-500/20 rounded-3xl blur-2xl" />
          
          {/* Image Container */}
          <div className="relative rounded-2xl lg:rounded-3xl overflow-hidden shadow-2xl">
            <img
              src={teamPhoto}
              alt="Sapa Technologies Team"
              className="w-full h-auto object-cover"
            />
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-navy-900/60 via-transparent to-transparent" />
            
            {/* Stats Overlay */}
            <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10 hidden md:block">
              <div className="grid grid-cols-3 gap-4 md:gap-8 max-w-2xl mx-auto">
                {stats.map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                    className="text-center glass-card rounded-xl p-4 md:p-6"
                  >
                    <stat.icon className="w-6 h-6 md:w-8 md:h-8 text-teal-400 mx-auto mb-2" />
                    <p className="text-2xl md:text-3xl font-display font-bold text-foreground">
                      {stat.value}
                    </p>
                    <p className="text-xs md:text-sm text-muted-foreground mt-1">
                      {stat.label}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Values */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="grid md:grid-cols-3 gap-8"
        >
          {[
            { title: t('team.value1.title'), description: t('team.value1.description') },
            { title: t('team.value2.title'), description: t('team.value2.description') },
            { title: t('team.value3.title'), description: t('team.value3.description') },
          ].map((value, index) => (
            <div key={index} className="text-center md:text-left">
              <h3 className="font-display text-xl font-bold text-foreground mb-3">
                {value.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {value.description}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
