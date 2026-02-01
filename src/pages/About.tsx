import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';
import { Shield, Target, Users, TrendingUp } from 'lucide-react';

export default function About() {
  const { t } = useLanguage();

  const values = [
    {
      icon: Target,
      title: t('about.mission.title') || 'Миссия',
      description: t('about.mission.description') || 'Мы помогаем бизнесу достичь эффективных результатов за счет инновационных, простых и удобных цифровых решений',
    },
    {
      icon: Shield,
      title: t('about.vision.title') || 'Видение',
      description: t('about.vision.description') || 'Стать ведущей технологической компанией в области финтех-решений в Казахстане и Центральной Азии',
    },
    {
      icon: TrendingUp,
      title: t('about.values.title') || 'Ценности',
      description: t('about.values.description') || 'Инновации, надежность и партнерство — основа нашей работы',
    },
  ];

  const stats = [
    { value: '5+', label: t('about.stats.years') || 'Лет на рынке' },
    { value: '40+', label: t('about.stats.employees') || 'Сотрудников' },
    { value: '300+', label: t('about.stats.partners') || 'Партнеров' },
    { value: '1M+', label: t('about.stats.applications') || 'Обработано заявок' },
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
                {t('about.title') || 'О нас'}
              </h1>
              <p className="text-lg sm:text-xl text-primary-foreground/70 leading-relaxed">
                {t('about.subtitle') || 'Sapa Technologies — казахстанская IT-компания, входящая в состав группы компаний Sapa, эксперт в области разработки цифровых и кастомных решений любой сложности'}
              </p>
            </motion.div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="section-padding bg-background">
          <div className="container-wide">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="text-center"
                >
                  <p className="text-4xl lg:text-5xl font-display font-bold text-foreground mb-2">
                    {stat.value}
                  </p>
                  <p className="text-muted-foreground text-sm">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Values Section */}
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
                {t('about.valuesSection.title') || 'Наши ценности'}
              </h2>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {values.map((value, index) => {
                const Icon = value.icon;
                return (
                  <motion.div
                    key={value.title}
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="bg-card rounded-2xl border border-border p-8 text-center"
                  >
                    <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-teal-500 to-cyan-500 flex items-center justify-center mx-auto mb-6">
                      <Icon className="w-8 h-8 text-primary-foreground" />
                    </div>
                    <h3 className="font-display text-xl font-bold text-foreground mb-4">
                      {value.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {value.description}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Story Section */}
        <section className="section-padding bg-muted/30">
          <div className="container-wide">
            <div className="max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="prose prose-lg max-w-none"
              >
                <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-6">
                  {t('about.story.title') || 'Наша история'}
                </h2>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    {t('about.story.p1') || 'Sapa Technologies была основана с целью трансформировать финансовую индустрию Казахстана через внедрение передовых технологий. За годы работы мы стали надежным партнером для ведущих банков, МФО и дилерских центров.'}
                  </p>
                  <p>
                    {t('about.story.p2') || 'Наши решения обрабатывают более миллиона заявок, обеспечивая быструю и прозрачную автоматизацию кредитных процессов. Мы гордимся тем, что наши технологии помогают бизнесу расти и развиваться.'}
                  </p>
                  <p>
                    {t('about.story.p3') || 'Сегодня Sapa Technologies — это команда из более чем 40 профессионалов, работающих в 20+ городах Казахстана. Мы продолжаем развиваться и внедрять инновации, чтобы сделать финансовые услуги доступнее для всех.'}
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
