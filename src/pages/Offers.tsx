import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useLanguage } from '@/contexts/LanguageContext';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const Offers = () => {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen">
      <Header />
      
      <main className="pt-24 pb-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="font-heading font-bold text-5xl md:text-6xl text-foreground mb-6">
              {t('offers.title')}
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              {t('offers.subtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="overflow-hidden hover:shadow-corporate transition-shadow">
              <div className="bg-gradient-primary p-6">
                <Badge className="bg-accent text-accent-foreground mb-4">Featured</Badge>
                <CardTitle className="font-heading text-3xl text-primary-foreground mb-2">
                  Premium Oil Package
                </CardTitle>
                <p className="text-primary-foreground/90">Save 20% on select motor oils</p>
              </div>
              <CardContent className="p-6">
                <CardDescription className="text-base">
                  Get premium quality motor oils at special prices. Limited time offer on top brands.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="overflow-hidden hover:shadow-corporate transition-shadow">
              <div className="bg-gradient-primary p-6">
                <Badge className="bg-accent text-accent-foreground mb-4">New Arrival</Badge>
                <CardTitle className="font-heading text-3xl text-primary-foreground mb-2">
                  Battery Special
                </CardTitle>
                <p className="text-primary-foreground/90">Free installation included</p>
              </div>
              <CardContent className="p-6">
                <CardDescription className="text-base">
                  Purchase any battery and receive complimentary professional installation.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="overflow-hidden hover:shadow-corporate transition-shadow">
              <div className="bg-gradient-primary p-6">
                <Badge className="bg-accent text-accent-foreground mb-4">Bundle Deal</Badge>
                <CardTitle className="font-heading text-3xl text-primary-foreground mb-2">
                  Service Package
                </CardTitle>
                <p className="text-primary-foreground/90">Complete maintenance kit</p>
              </div>
              <CardContent className="p-6">
                <CardDescription className="text-base">
                  Everything you need for your vehicle's regular service in one package.
                </CardDescription>
              </CardContent>
            </Card>
          </div>

          <div className="mt-16 bg-muted rounded-lg p-8 md:p-12 text-center">
            <h2 className="font-heading font-bold text-3xl md:text-4xl mb-4">
              Need Help Choosing?
            </h2>
            <p className="text-lg text-muted-foreground mb-6">
              Our team is ready to assist you in finding the perfect parts and deals
            </p>
            <a
              href="tel:070591427"
              className="inline-block bg-accent text-accent-foreground hover:bg-accent/90 font-heading font-semibold px-8 py-4 rounded-lg transition-colors"
            >
              Call Us: 070 591 427
            </a>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Offers;
