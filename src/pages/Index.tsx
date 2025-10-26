import { useNavigate } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import ProductCard from '@/components/ProductCard';
import { useLanguage } from '@/contexts/LanguageContext';
import aboutImage from '@/assets/about-image.jpg';
import engineParts from '@/assets/engine-parts.jpg';
import oilsLubricants from '@/assets/oils-lubricants.jpg';
import batteries from '@/assets/batteries.jpg';
import accessories from '@/assets/accessories.jpg';

const Index = () => {
  const { t } = useLanguage();
  const navigate = useNavigate();

  const products = [
    {
      title: t('products.engine'),
      description: t('products.engine.desc'),
      image: engineParts,
    },
    {
      title: t('products.oils'),
      description: t('products.oils.desc'),
      image: oilsLubricants,
    },
    {
      title: t('products.batteries'),
      description: t('products.batteries.desc'),
      image: batteries,
    },
    {
      title: t('products.accessories'),
      description: t('products.accessories.desc'),
      image: accessories,
    },
  ];

  return (
    <div className="min-h-screen">
      <Header />
      <Hero />

      {/* About Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-heading font-bold text-4xl md:text-5xl text-foreground mb-6">
                {t('about.title')}
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {t('about.description')}
              </p>
            </div>
            <div className="relative">
              <img
                src={aboutImage}
                alt="About Auto Pjese Flori"
                className="rounded-lg shadow-corporate"
              />
              <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-accent/20 rounded-lg -z-10" />
            </div>
          </div>
        </div>
      </section>

      {/* Brands Section */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-heading font-bold text-4xl md:text-5xl text-foreground mb-4">
            {t('brands.title')}
          </h2>
          <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto">
            {t('brands.subtitle')}
          </p>
          <div className="bg-card rounded-lg shadow-lg p-12">
            <p className="text-muted-foreground font-heading text-xl">
              Partner logos coming soon
            </p>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-heading font-bold text-4xl md:text-5xl text-foreground mb-4">
              {t('products.title')}
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {t('products.subtitle')}
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {products.map((product, index) => (
              <ProductCard
                key={index}
                {...product}
                onViewAll={() => navigate('/products')}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Offers CTA Section */}
      <section className="py-20 bg-gradient-primary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-heading font-bold text-4xl md:text-5xl text-primary-foreground mb-6">
            {t('offers.title')}
          </h2>
          <p className="text-lg text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            {t('offers.subtitle')}
          </p>
          <button
            onClick={() => navigate('/offers')}
            className="bg-accent text-accent-foreground hover:bg-accent/90 font-heading font-semibold text-lg px-8 py-4 rounded-lg shadow-glow transition-all"
          >
            {t('nav.offers')}
          </button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
