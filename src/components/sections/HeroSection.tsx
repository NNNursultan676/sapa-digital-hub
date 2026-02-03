import { motion } from 'framer-motion';
import { ArrowRight, Play, Shield, Zap, Users, TrendingUp } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import modalService from '@/services/modalService';

export function HeroSection() {
  const { t } = useLanguage();

  const floatingIcons = [
    { Icon: Shield, delay: 0, x: -20, y: -30 },
    { Icon: Zap, delay: 0.2, x: 40, y: -60 },
    { Icon: Users, delay: 0.4, x: -60, y: 20 },
    { Icon: TrendingUp, delay: 0.6, x: 50, y: 40 },
  ];

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-navy-900">
      {/* Background Elements */}
      <div className="absolute inset-0">
        {/* Gradient Orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-cyan-500/5 rounded-full blur-3xl" />
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="h-full w-full" style={{
            backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
            backgroundSize: '80px 80px'
          }} />
        </div>
      </div>

      <div className="container-wide relative z-10 pt-20 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="text-center lg:text-left"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-teal-500/10 border border-teal-500/20 mb-8"
            >
              <span className="w-2 h-2 rounded-full bg-teal-400 animate-pulse" />
              <span className="text-teal-300 text-sm font-medium">
                {t('hero.badge')}
              </span>
            </motion.div>

            {/* Title */}
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-primary-foreground leading-tight mb-6">
              {t('hero.title').split(' ').map((word, i, arr) => (
                <span key={i}>
                  {i === arr.length - 1 ? (
                    <span className="gradient-text">{word}</span>
                  ) : (
                    word + ' '
                  )}
                </span>
              ))}
            </h1>

            {/* Subtitle */}
            <p className="text-lg sm:text-xl text-primary-foreground/70 mb-10 max-w-xl mx-auto lg:mx-0 leading-relaxed">
              {t('hero.subtitle')}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button 
                size="lg" 
                className="btn-accent rounded-full px-8 py-6 text-lg group"
                onClick={() => modalService.openModal(t('hero.cta'))}
              >
                {t('hero.cta')}
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="rounded-full px-8 py-6 text-lg border-white/80 bg-transparent text-white hover:bg-white/20 hover:border-white hover:text-white backdrop-blur-sm [&_svg]:text-white"
              >
                <Play className="mr-2 w-5 h-5" />
                {t('hero.learnMore')}
              </Button>
            </div>
          </motion.div>

          {/* Right Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="relative hidden lg:block"
          >
            {/* Main Card */}
            <div className="relative">
              {/* Glow Effect */}
              <div className="absolute -inset-4 bg-gradient-to-r from-teal-500/30 to-cyan-500/30 rounded-3xl blur-2xl" />
              
              {/* Card */}
              <div className="relative bg-primary-foreground/5 backdrop-blur-xl rounded-3xl border border-primary-foreground/10 p-8 lg:p-10">
                {/* Dashboard Preview */}
                <div className="space-y-6">
                  {/* Header */}
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-primary-foreground font-semibold text-lg">Credit Conveyor</h3>
                      <p className="text-primary-foreground/50 text-sm">Real-time processing</p>
                    </div>
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-teal-500 to-cyan-500 flex items-center justify-center">
                      <Zap className="w-6 h-6 text-primary-foreground" />
                    </div>
                  </div>

                  {/* Stats Grid */}
                  <div className="grid grid-cols-2 gap-4">
                    {[
                      { label: 'Applications', value: '12,847' },
                      { label: 'Approved', value: '89.2%' },
                      { label: 'Processing', value: '< 3min' },
                      { label: 'Partners', value: '45+' },
                    ].map((stat, index) => (
                      <motion.div
                        key={stat.label}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 + index * 0.1 }}
                        className="bg-primary-foreground/5 rounded-xl p-4"
                      >
                        <p className="text-primary-foreground/50 text-xs mb-1">{stat.label}</p>
                        <p className="text-primary-foreground font-bold text-xl">{stat.value}</p>
                      </motion.div>
                    ))}
                  </div>

                  {/* Progress Bar */}
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-primary-foreground/70">Monthly Target</span>
                      <span className="text-teal-400 font-medium">78%</span>
                    </div>
                    <div className="h-2 bg-primary-foreground/10 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: '78%' }}
                        transition={{ delay: 0.8, duration: 1, ease: 'easeOut' }}
                        className="h-full bg-gradient-to-r from-teal-500 to-cyan-500 rounded-full"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Icons */}
              {floatingIcons.map(({ Icon, delay, x, y }, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.6 + delay, duration: 0.5, type: 'spring' }}
                  className="absolute w-12 h-12 rounded-xl bg-primary-foreground/10 backdrop-blur-xl border border-primary-foreground/10 flex items-center justify-center animate-float"
                  style={{
                    top: `${50 + y}%`,
                    left: `${50 + x}%`,
                    animationDelay: `${delay}s`,
                  }}
                >
                  <Icon className="w-5 h-5 text-teal-400" />
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Stats Bar */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="mt-20 grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12"
        >
          {[
            { value: '20+', label: t('stats.cities') },
            { value: '300+', label: t('stats.partners') },
            { value: '1M+', label: t('stats.applications') },
            { value: '40+', label: t('stats.employees') },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 + index * 0.1 }}
              className="text-center lg:text-left"
            >
              <p className="text-3xl lg:text-4xl font-display font-bold text-primary-foreground mb-2">
                {stat.value}
              </p>
              <p className="text-primary-foreground/60 text-sm">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-6 h-10 rounded-full border-2 border-primary-foreground/30 flex justify-center pt-2"
        >
          <div className="w-1.5 h-1.5 rounded-full bg-teal-400" />
        </motion.div>
      </motion.div>
    </section>
  );
}