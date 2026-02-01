import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { ArrowRight, MessageCircle } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';

export function CTASection() {
  const { t } = useLanguage();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="contacts" className="section-padding bg-background relative overflow-hidden" ref={ref}>
      <div className="container-wide relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          {/* Card */}
          <div className="relative hero-bg rounded-3xl p-8 md:p-12 lg:p-20 overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0">
              <div className="absolute top-0 right-0 w-96 h-96 bg-teal-500/20 rounded-full blur-3xl" />
              <div className="absolute bottom-0 left-0 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl" />
            </div>

            {/* Content */}
            <div className="relative z-10 text-center max-w-3xl mx-auto">
              {/* Title */}
              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-primary-foreground mb-6">
                {t('cta.title')}
              </h2>
              
              {/* Subtitle */}
              <p className="text-primary-foreground/70 text-lg lg:text-xl mb-10 leading-relaxed">
                {t('cta.subtitle')}
              </p>

              {/* Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="btn-accent rounded-full px-8 py-6 text-lg group">
                  {t('cta.demo')}
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="rounded-full px-8 py-6 text-lg border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10"
                >
                  <MessageCircle className="mr-2 w-5 h-5" />
                  {t('cta.button')}
                </Button>
              </div>

              {/* Trust Badges */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="mt-12 pt-8 border-t border-primary-foreground/10"
              >
                <p className="text-primary-foreground/50 text-sm mb-4">
                  Trusted by leading financial institutions
                </p>
                <div className="flex flex-wrap justify-center gap-8 opacity-60">
                  {['Bank 1', 'Bank 2', 'MFO 1', 'MFO 2', 'Partner'].map((partner) => (
                    <div
                      key={partner}
                      className="text-primary-foreground font-semibold text-lg tracking-wide"
                    >
                      {partner}
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}