import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Building2, Landmark, Car, ArrowUpRight, CheckCircle2 } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';

export function SolutionsSection() {
  const { t } = useLanguage();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const solutions = [
    {
      id: 'banks',
      title: t('solutions.banks.title'),
      description: t('solutions.banks.desc'),
      icon: Landmark,
      color: 'teal',
      features: [
        'API Integration',
        'Automated Scoring',
        'Risk Management',
        'Real-time Analytics',
      ],
    },
    {
      id: 'mfo',
      title: t('solutions.mfo.title'),
      description: t('solutions.mfo.desc'),
      icon: Building2,
      color: 'cyan',
      features: [
        'Application Processing',
        'Client Verification',
        'Loan Management',
        'Collection Tools',
      ],
    },
    {
      id: 'dealers',
      title: t('solutions.dealers.title'),
      description: t('solutions.dealers.desc'),
      icon: Car,
      color: 'teal',
      features: [
        'Multi-lender Access',
        'Instant Decisions',
        'Document Management',
        'Commission Tracking',
      ],
    },
  ];

  return (
    <section id="solutions" className="section-padding bg-muted/30 relative overflow-hidden" ref={ref}>
      {/* Background */}
      <div className="absolute inset-0 grid-pattern" />
      
      <div className="container-wide relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 lg:mb-20"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-accent/10 text-accent text-sm font-medium mb-4">
            {t('nav.solutions')}
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            {t('solutions.title')}
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            {t('solutions.subtitle')}
          </p>
        </motion.div>

        {/* Solutions Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {solutions.map((solution, index) => (
            <motion.div
              key={solution.id}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="group"
            >
              <div className="h-full bg-card rounded-2xl border border-border p-8 card-hover flex flex-col">
                {/* Icon */}
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br from-${solution.color}-500 to-${solution.color}-400 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <solution.icon className="w-7 h-7 text-primary-foreground" />
                </div>

                {/* Content */}
                <h3 className="font-display text-xl lg:text-2xl font-bold text-foreground mb-3">
                  {solution.title}
                </h3>
                <p className="text-muted-foreground mb-6 leading-relaxed flex-grow">
                  {solution.description}
                </p>

                {/* Features List */}
                <ul className="space-y-3 mb-8">
                  {solution.features.map((feature, featureIndex) => (
                    <motion.li
                      key={feature}
                      initial={{ opacity: 0, x: -10 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.4, delay: 0.4 + featureIndex * 0.05 }}
                      className="flex items-center gap-3 text-sm text-foreground"
                    >
                      <CheckCircle2 className="w-4 h-4 text-accent shrink-0" />
                      {feature}
                    </motion.li>
                  ))}
                </ul>

                {/* CTA */}
                <Button
                  variant="outline"
                  className="w-full group/btn border-border hover:border-accent hover:bg-accent hover:text-accent-foreground transition-all"
                >
                  {t('products.learnMore')}
                  <ArrowUpRight className="ml-2 w-4 h-4 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}