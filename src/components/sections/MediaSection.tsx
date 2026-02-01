import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { ExternalLink } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

export function MediaSection() {
  const { t } = useLanguage();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const mediaItems = [
    {
      source: 'Forbes Kazakhstan',
      logo: 'F',
      logoColor: 'bg-red-600',
      headline: 'Как казахстанский fintech меняет рынок кредитования',
      excerpt: 'Sapa Technologies внедряет инновационные решения для автоматизации кредитных процессов, объединяя банки и МФО в единую экосистему.',
      url: 'https://forbes.kz',
      date: '2024',
    },
    {
      source: 'Digital Business',
      logo: 'DB',
      logoColor: 'bg-blue-600',
      headline: 'Цифровая трансформация кредитного рынка Казахстана',
      excerpt: 'Платформа Sapa Technologies обрабатывает более миллиона заявок, предоставляя мгновенные решения по кредитам.',
      url: 'https://digitalbusiness.kz',
      date: '2024',
    },
    {
      source: 'Stan.kz',
      logo: 'S',
      logoColor: 'bg-green-600',
      headline: 'Технологии будущего: кредитный конвейер',
      excerpt: 'Инновационная платформа автоматизирует весь цикл кредитования — от подачи заявки до выдачи средств.',
      url: 'https://stan.kz',
      date: '2023',
    },
    {
      source: 'Telegram Finance',
      logo: 'TG',
      logoColor: 'bg-sky-500',
      headline: 'Fintech-компания расширяет присутствие в регионах',
      excerpt: 'Sapa Technologies работает уже в 20+ городах Казахстана, планируя международную экспансию.',
      url: 'https://t.me',
      date: '2024',
    },
  ];

  return (
    <section id="media" className="section-padding bg-background relative overflow-hidden" ref={ref}>
      <div className="container-wide relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 lg:mb-20"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-accent/10 text-accent text-sm font-medium mb-4">
            {t('nav.media')}
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            {t('media.title')}
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            {t('media.subtitle')}
          </p>
        </motion.div>

        {/* Media Grid */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {mediaItems.map((item, index) => (
            <motion.a
              key={item.source}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group block"
            >
              <div className="h-full bg-card rounded-2xl border border-border p-6 lg:p-8 card-hover">
                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className={`w-12 h-12 rounded-xl ${item.logoColor} flex items-center justify-center text-primary-foreground font-bold`}>
                      {item.logo}
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">{item.source}</p>
                      <p className="text-sm text-muted-foreground">{item.date}</p>
                    </div>
                  </div>
                  <ExternalLink className="w-5 h-5 text-muted-foreground group-hover:text-accent transition-colors" />
                </div>

                {/* Content */}
                <h3 className="font-display text-lg lg:text-xl font-semibold text-foreground mb-3 group-hover:text-accent transition-colors">
                  {item.headline}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {item.excerpt}
                </p>

                {/* Read More */}
                <div className="mt-4 pt-4 border-t border-border">
                  <span className="text-sm font-medium text-accent group-hover:underline">
                    {t('media.readMore')} →
                  </span>
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}