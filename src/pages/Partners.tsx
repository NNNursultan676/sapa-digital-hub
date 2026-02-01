import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';
import { Shield, TrendingUp, Users, Award } from 'lucide-react';

export default function Partners() {
  const { t } = useLanguage();

  const trustPoints = [
    {
      icon: Shield,
      title: t('partners.trust.reliability.title') || 'Надежность',
      description: t('partners.trust.reliability.description') || 'Более 5 лет стабильной работы на рынке Казахстана',
    },
    {
      icon: TrendingUp,
      title: t('partners.trust.results.title') || 'Результаты',
      description: t('partners.trust.results.description') || 'Обработано более 1 миллиона заявок с высоким процентом одобрения',
    },
    {
      icon: Users,
      title: t('partners.trust.partners.title') || 'Партнеры',
      description: t('partners.trust.partners.description') || 'Более 300 партнеров доверяют нам свои бизнес-процессы',
    },
    {
      icon: Award,
      title: t('partners.trust.experience.title') || 'Опыт',
      description: t('partners.trust.experience.description') || 'Работаем с ведущими банками, МФО и дилерскими центрами',
    },
  ];

  const partnerCategories = [
    {
      title: t('partners.categories.banks.title') || 'Банки',
      count: '6+',
      description: t('partners.categories.banks.description') || 'Ведущие финансовые организации Казахстана',
    },
    {
      title: t('partners.categories.mfo.title') || 'МФО',
      count: '10+',
      description: t('partners.categories.mfo.description') || 'Микрофинансовые организации',
    },
    {
      title: t('partners.categories.dealers.title') || 'Дилеры',
      count: '300+',
      description: t('partners.categories.dealers.description') || 'Дилерские центры по всей стране',
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 hero-bg overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl" />
            <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-cyan-500/5 rounded-full blur-3xl" />
          </div>
          <div className="container-wide relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center max-w-3xl mx-auto"
            >
              <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6">
                {t('partners.title') || 'Наши партнеры'}
              </h1>
              <p className="text-lg sm:text-xl text-primary-foreground/70 leading-relaxed">
                {t('partners.subtitle') || 'Более 5 лет мы работаем с ведущими компаниями Казахстана, обеспечивая надежные и эффективные решения'}
              </p>
            </motion.div>
          </div>
        </section>

        {/* Trust Section */}
        <section className="section-padding bg-background">
          <div className="container-wide">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
                {t('partners.trust.title') || 'Почему нам доверяют'}
              </h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                {t('partners.trust.subtitle') || 'Наш опыт, результаты и надежность — вот что делает нас надежным партнером для вашего бизнеса'}
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {trustPoints.map((point, index) => {
                const Icon = point.icon;
                return (
                  <motion.div
                    key={point.title}
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="bg-card rounded-2xl border border-border p-6 text-center"
                  >
                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-teal-500 to-cyan-500 flex items-center justify-center mx-auto mb-4">
                      <Icon className="w-7 h-7 text-primary-foreground" />
                    </div>
                    <h3 className="font-display text-lg font-bold text-foreground mb-2">
                      {point.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {point.description}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Results Section */}
        <section className="section-padding bg-muted/30">
          <div className="container-wide">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="max-w-4xl mx-auto"
            >
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-8 text-center">
                {t('partners.results.title') || 'Наши результаты'}
              </h2>
              <div className="space-y-6 text-muted-foreground leading-relaxed">
                <p className="text-lg">
                  {t('partners.results.p1') || 'За годы работы мы достигли значительных результатов, которые говорят сами за себя:'}
                </p>
                <ul className="space-y-4 list-disc list-inside">
                  <li>{t('partners.results.li1') || 'Обработано более 1 миллиона заявок на кредитование'}</li>
                  <li>{t('partners.results.li2') || 'Работаем в 20+ городах Казахстана'}</li>
                  <li>{t('partners.results.li3') || 'Более 300 партнеров доверяют нам свои процессы'}</li>
                  <li>{t('partners.results.li4') || 'Среднее время обработки заявки — менее 3 минут'}</li>
                  <li>{t('partners.results.li5') || 'Процент одобрения заявок — более 89%'}</li>
                </ul>
                <p className="text-lg font-semibold text-foreground mt-6">
                  {t('partners.results.conclusion') || 'Эти результаты показывают, что наши решения действительно работают и приносят пользу нашим партнерам. Именно поэтому нам доверяют ведущие компании Казахстана.'}
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Categories Section */}
        <section className="section-padding bg-background">
          <div className="container-wide">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-6">
                {t('partners.categories.title') || 'Категории партнеров'}
              </h2>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {partnerCategories.map((category, index) => (
                <motion.div
                  key={category.title}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-card rounded-2xl border border-border p-8 text-center"
                >
                  <p className="text-5xl font-display font-bold text-accent mb-4">
                    {category.count}
                  </p>
                  <h3 className="font-display text-xl font-bold text-foreground mb-3">
                    {category.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {category.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
