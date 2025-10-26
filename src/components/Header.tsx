import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const { language, setLanguage, t } = useLanguage();

  const navigation = [
    { name: t('nav.home'), path: '/' },
    { name: t('nav.about'), path: '/about' },
    { name: t('nav.products'), path: '/products' },
    { name: t('nav.offers'), path: '/offers' },
    { name: t('nav.contact'), path: '/contact' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="fixed top-0 w-full bg-primary/95 backdrop-blur-sm shadow-lg z-50">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center">
              <span className="text-primary font-heading font-bold text-xl">APF</span>
            </div>
            <div className="hidden md:block">
              <h1 className="text-primary-foreground font-heading font-bold text-xl">
                Auto Pjese Flori
              </h1>
              <p className="text-primary-foreground/80 text-xs">
                Excellence in Automotive Parts
              </p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`font-heading font-medium transition-colors ${
                  isActive(item.path)
                    ? 'text-accent'
                    : 'text-primary-foreground hover:text-accent'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Language Selector */}
          <div className="hidden lg:flex items-center space-x-2">
            <Button
              variant={language === 'en' ? 'default' : 'ghost'}
              size="sm"
              onClick={() => setLanguage('en')}
              className="font-heading"
            >
              EN
            </Button>
            <Button
              variant={language === 'sq' ? 'default' : 'ghost'}
              size="sm"
              onClick={() => setLanguage('sq')}
              className="font-heading"
            >
              SQ
            </Button>
            <Button
              variant={language === 'mk' ? 'default' : 'ghost'}
              size="sm"
              onClick={() => setLanguage('mk')}
              className="font-heading"
            >
              MK
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-primary-foreground"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 space-y-4">
            {navigation.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setIsMenuOpen(false)}
                className={`block font-heading font-medium py-2 transition-colors ${
                  isActive(item.path)
                    ? 'text-accent'
                    : 'text-primary-foreground hover:text-accent'
                }`}
              >
                {item.name}
              </Link>
            ))}
            <div className="flex space-x-2 pt-2">
              <Button
                variant={language === 'en' ? 'default' : 'ghost'}
                size="sm"
                onClick={() => setLanguage('en')}
                className="font-heading"
              >
                EN
              </Button>
              <Button
                variant={language === 'sq' ? 'default' : 'ghost'}
                size="sm"
                onClick={() => setLanguage('sq')}
                className="font-heading"
              >
                SQ
              </Button>
              <Button
                variant={language === 'mk' ? 'default' : 'ghost'}
                size="sm"
                onClick={() => setLanguage('mk')}
                className="font-heading"
              >
                MK
              </Button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
