import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import { useNavigate } from 'react-router-dom';
import heroImage from '@/assets/hero-image.jpg';

const Hero = () => {
  const { t } = useLanguage();
  const navigate = useNavigate();

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Automotive Parts"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/95 to-primary/80" />
      </div>

      {/* Content */}
      <div className="relative container mx-auto px-4 py-32 md:py-40">
        <div className="max-w-4xl">
          <h1 className="font-heading font-bold text-4xl md:text-6xl lg:text-7xl text-primary-foreground mb-6 leading-tight animate-fade-in">
            {t('hero.title')}
          </h1>
          <p className="text-lg md:text-xl text-primary-foreground/90 mb-8 max-w-2xl animate-fade-in">
            {t('hero.subtitle')}
          </p>
          <Button
            size="lg"
            onClick={() => navigate('/products')}
            className="bg-accent text-accent-foreground hover:bg-accent/90 font-heading font-semibold text-lg px-8 py-6 shadow-glow animate-fade-in"
          >
            {t('hero.cta')}
          </Button>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default Hero;
