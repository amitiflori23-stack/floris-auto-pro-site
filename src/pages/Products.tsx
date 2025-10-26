import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ProductCard from '@/components/ProductCard';
import { useLanguage } from '@/contexts/LanguageContext';
import engineParts from '@/assets/engine-parts.jpg';
import oilsLubricants from '@/assets/oils-lubricants.jpg';
import batteries from '@/assets/batteries.jpg';
import accessories from '@/assets/accessories.jpg';

const Products = () => {
  const { t } = useLanguage();

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
      
      <main className="pt-24 pb-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="font-heading font-bold text-5xl md:text-6xl text-foreground mb-6">
              {t('products.title')}
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              {t('products.subtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {products.map((product, index) => (
              <ProductCard key={index} {...product} />
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Products;
