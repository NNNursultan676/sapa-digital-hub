import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';
import { Briefcase, MapPin, Clock, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useState, useEffect } from 'react';

interface Vacancy {
  id: string;
  title: string;
  location?: string;
  type?: string;
  description?: string;
  requirements?: string[];
}

export default function Career() {
  const { t } = useLanguage();
  const [vacancies, setVacancies] = useState<Vacancy[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Загрузка вакансий из API (управление через другой порт)
    const fetchVacancies = async () => {
      try {
        // TODO: Заменить на реальный API endpoint для вакансий
        const API_URL = process.env.NODE_ENV === 'production' 
          ? 'https://api.sapatech.kz/api' 
          : 'http://localhost:3002/api';
        
        const response = await fetch(`${API_URL}/vacancies`);
        if (response.ok) {
          const data = await response.json();
          setVacancies(data);
        } else {
          // Fallback на примеры вакансий
          setVacancies([
            {
              id: '1',
              title: 'Frontend Developer',
              location: 'Алматы',
              type: 'Полная занятость',
              description: 'Ищем опытного Frontend разработчика для работы над современными веб-приложениями',
            },
            {
              id: '2',
              title: 'Backend Developer',
              location: 'Алматы / Удаленно',
              type: 'Полная занятость',
              description: 'Разработка и поддержка backend-систем для финтех-платформ',
            },
          ]);
        }
      } catch (error) {
        // eslint-disable-next-line no-console
        if (process.env.NODE_ENV === 'development') {
          // eslint-disable-next-line no-console
          console.error('Ошибка загрузки вакансий:', error);
        }
        setVacancies([]);
      } finally {
        setLoading(false);
      }
    };

    fetchVacancies();
  }, []);

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
                {t('career.title') || 'Карьера'}
              </h1>
              <p className="text-lg sm:text-xl text-primary-foreground/70 leading-relaxed">
                {t('career.subtitle') || 'Присоединяйтесь к команде профессионалов, создающих будущее финтех-индустрии'}
              </p>
            </motion.div>
          </div>
        </section>

        {/* Vacancies Section */}
        <section className="section-padding bg-background">
          <div className="container-wide">
            {loading ? (
              <div className="text-center py-20">
                <p className="text-muted-foreground">{t('career.loading') || 'Загрузка вакансий...'}</p>
              </div>
            ) : vacancies.length === 0 ? (
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-center py-20"
              >
                <Briefcase className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
                <p className="text-lg text-muted-foreground">
                  {t('career.noVacancies') || 'На данный момент нет открытых вакансий. Следите за обновлениями!'}
                </p>
              </motion.div>
            ) : (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {vacancies.map((vacancy, index) => (
                  <motion.div
                    key={vacancy.id}
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="bg-card rounded-2xl border border-border p-6 hover:shadow-lg transition-shadow"
                  >
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex-1">
                        <h3 className="font-display text-xl font-bold text-foreground mb-2">
                          {vacancy.title}
                        </h3>
                        <div className="flex flex-wrap gap-3 text-sm text-muted-foreground">
                          {vacancy.location && (
                            <div className="flex items-center gap-1">
                              <MapPin className="w-4 h-4" />
                              {vacancy.location}
                            </div>
                          )}
                          {vacancy.type && (
                            <div className="flex items-center gap-1">
                              <Clock className="w-4 h-4" />
                              {vacancy.type}
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                    {vacancy.description && (
                      <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
                        {vacancy.description}
                      </p>
                    )}
                    <Button
                      className="w-full btn-accent rounded-full"
                      onClick={() => {
                        // TODO: Открыть форму отклика или перейти на страницу вакансии
                        window.open(`/admin/vacancies/${vacancy.id}`, '_blank');
                      }}
                    >
                      {t('career.apply') || 'Откликнуться'}
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                  </motion.div>
                ))}
              </div>
            )}
          </div>
        </section>

        {/* Benefits Section */}
        <section className="section-padding bg-muted/30">
          <div className="container-wide">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="max-w-4xl mx-auto text-center"
            >
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-8">
                {t('career.benefits.title') || 'Почему стоит работать с нами'}
              </h2>
              <div className="grid md:grid-cols-2 gap-6 text-left">
                <div className="space-y-4">
                  <h4 className="font-semibold text-foreground">✓ {t('career.benefits.item1') || 'Конкурентная зарплата'}</h4>
                  <h4 className="font-semibold text-foreground">✓ {t('career.benefits.item2') || 'Гибкий график работы'}</h4>
                  <h4 className="font-semibold text-foreground">✓ {t('career.benefits.item3') || 'Возможность удаленной работы'}</h4>
                </div>
                <div className="space-y-4">
                  <h4 className="font-semibold text-foreground">✓ {t('career.benefits.item4') || 'Профессиональное развитие'}</h4>
                  <h4 className="font-semibold text-foreground">✓ {t('career.benefits.item5') || 'Современные технологии'}</h4>
                  <h4 className="font-semibold text-foreground">✓ {t('career.benefits.item6') || 'Дружная команда'}</h4>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
