import { useLanguage } from '@/contexts/LanguageContext';
import { MapPin, Mail, Phone, Linkedin, Instagram, Send } from 'lucide-react';

export function Footer() {
  const { t } = useLanguage();

  const quickLinks = [
    { label: t('nav.about'), href: '#about' },
    { label: t('nav.products'), href: '#products' },
    { label: t('nav.solutions'), href: '#solutions' },
    { label: t('nav.media'), href: '#media' },
    { label: t('nav.contacts'), href: '#contacts' },
  ];

  const socialLinks = [
    { icon: Linkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
    { icon: Instagram, href: 'https://instagram.com', label: 'Instagram' },
    { icon: Send, href: 'https://t.me/', label: 'Telegram' },
  ];

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container-wide section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-teal-500 to-cyan-500 flex items-center justify-center">
                <span className="text-xl font-bold text-primary-foreground">S</span>
              </div>
              <span className="font-display font-bold text-xl">
                Sapa<span className="text-teal-400">.</span>
              </span>
            </div>
            <p className="text-primary-foreground/70 text-sm leading-relaxed">
              {t('footer.description')}
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-accent transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-semibold text-lg mb-6">
              {t('footer.quickLinks')}
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-primary-foreground/70 hover:text-teal-400 transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-display font-semibold text-lg mb-6">
              {t('footer.legal')}
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="#privacy"
                  className="text-primary-foreground/70 hover:text-teal-400 transition-colors text-sm"
                >
                  {t('footer.privacy')}
                </a>
              </li>
              <li>
                <a
                  href="#terms"
                  className="text-primary-foreground/70 hover:text-teal-400 transition-colors text-sm"
                >
                  {t('footer.terms')}
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display font-semibold text-lg mb-6">
              {t('footer.contact')}
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-teal-400 shrink-0 mt-0.5" />
                <span className="text-primary-foreground/70 text-sm">
                  {t('footer.address')}
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-teal-400 shrink-0" />
                <a
                  href="mailto:info@sapatechnologies.kz"
                  className="text-primary-foreground/70 hover:text-teal-400 transition-colors text-sm"
                >
                  info@sapatechnologies.kz
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-teal-400 shrink-0" />
                <a
                  href="tel:+77771234567"
                  className="text-primary-foreground/70 hover:text-teal-400 transition-colors text-sm"
                >
                  +7 (777) 123-45-67
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-primary-foreground/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-primary-foreground/50 text-sm">
            © {new Date().getFullYear()} Sapa Technologies. {t('footer.rights')}.
          </p>
          <p className="text-primary-foreground/50 text-sm">
            ТОО «Sapa Technologies»
          </p>
        </div>
      </div>
    </footer>
  );
}