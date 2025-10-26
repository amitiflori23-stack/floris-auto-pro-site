import { Link } from 'react-router-dom';
import { MapPin, Phone, Clock } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const Footer = () => {
  const { t } = useLanguage();

  const navigation = [
    { name: t('nav.home'), path: '/' },
    { name: t('nav.about'), path: '/about' },
    { name: t('nav.products'), path: '/products' },
    { name: t('nav.offers'), path: '/offers' },
    { name: t('nav.contact'), path: '/contact' },
  ];

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center">
                <span className="text-primary font-heading font-bold text-xl">APF</span>
              </div>
              <h3 className="font-heading font-bold text-xl">Auto Pjese Flori</h3>
            </div>
            <p className="text-sm text-primary-foreground/80 mb-4">
              {t('footer.copyright')}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-bold text-lg mb-4">{t('footer.quickLinks')}</h4>
            <ul className="space-y-2">
              {navigation.map((item) => (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    className="text-sm text-primary-foreground/80 hover:text-accent transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-heading font-bold text-lg mb-4">{t('contact.info')}</h4>
            <ul className="space-y-3 text-sm text-primary-foreground/80">
              <li className="flex items-start space-x-2">
                <MapPin className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                <span>R1203, Glogji 1211</span>
              </li>
              <li className="flex items-center space-x-2">
                <Phone className="w-5 h-5 text-accent flex-shrink-0" />
                <span>070 591 427</span>
              </li>
              <li className="flex items-start space-x-2">
                <Clock className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                <div>
                  <p>{t('contact.hours.weekday')}</p>
                  <p>{t('contact.hours.sunday')}</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center">
          <p className="text-sm text-primary-foreground/60">
            © {new Date().getFullYear()} Auto Pjese Flori. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
