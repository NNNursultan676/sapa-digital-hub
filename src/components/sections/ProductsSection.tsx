import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { ArrowRight, Workflow, Network, FileCheck, CreditCard, Building2, Handshake } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';

export function ProductsSection() {
  const { t } = useLanguage();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const products = [
    {
      id: 'conveyor',
      title: t('products.conveyor.title'),
      description: t('products.conveyor.desc'),
      icon: Workflow,
      gradient: 'from-teal-500 to-cyan-500',
      features: [
        { icon: FileCheck, label: t('feature.applications') },
        { icon: CreditCard, label: t('feature.scoring') },
        { icon: Building2, label: t('feature.integration') },
        { icon: Handshake, label: t('feature.disbursement') },
      ],
    },
    {
      id: 'broker',
      title: t('products.broker.title'),
      description: t('products.broker.desc'),
      icon: Network,
      gradient: 'from-cyan-500 to-teal-400',
      features: [
        { icon: Building2, label: t('nav.forBanks') },
        { icon: CreditCard, label: t('nav.forMFO') },
        { icon: Handshake, label: t('nav.forDealers') },
      ],
    },
  ];

  return (
    <section id="products" className="section-padding bg-background relative overflow-hidden" ref={ref}>
      {/* Background Pattern */}
      <div className="absolute inset-0 dot-pattern opacity-30" />
      
      <div className="container-wide relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 lg:mb-20"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-accent/10 text-accent text-sm font-medium mb-4">
            {t('nav.products')}
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            {t('products.title')}
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            {t('products.subtitle')}
          </p>
        </motion.div>

        {/* Products Grid */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="group relative"
            >
              {/* Card */}
              <div className="relative bg-card rounded-3xl border border-border p-8 lg:p-10 card-hover overflow-hidden">
                {/* Gradient Background */}
                <div className={`absolute -top-1/2 -right-1/2 w-full h-full bg-gradient-to-br ${product.gradient} opacity-5 blur-3xl group-hover:opacity-10 transition-opacity duration-500`} />
                
                {/* Content */}
                <div className="relative z-10">
                  {/* Icon */}
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${product.gradient} flex items-center justify-center mb-6`}>
                    <product.icon className="w-8 h-8 text-primary-foreground" />
                  </div>

                  {/* Title & Description */}
                  <h3 className="font-display text-2xl lg:text-3xl font-bold text-foreground mb-4">
                    {product.title}
                  </h3>
                  <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
                    {product.description}
                  </p>

                  {/* Features */}
                  <div className="grid grid-cols-2 gap-4 mb-8">
                    {product.features.map((feature, featureIndex) => (
                      <motion.div
                        key={feature.label}
                        initial={{ opacity: 0, x: -20 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.4, delay: 0.4 + featureIndex * 0.1 }}
                        className="flex items-center gap-3 text-foreground"
                      >
                        <div className="w-10 h-10 rounded-xl bg-muted flex items-center justify-center shrink-0">
                          <feature.icon className="w-5 h-5 text-accent" />
                        </div>
                        <span className="text-sm font-medium">{feature.label}</span>
                      </motion.div>
                    ))}
                  </div>

                  {/* CTA */}
                  <Button variant="ghost" className="group/btn p-0 h-auto text-accent hover:text-accent hover:bg-transparent">
                    {t('products.learnMore')}
                    <ArrowRight className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}