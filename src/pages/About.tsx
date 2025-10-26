import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useLanguage } from '@/contexts/LanguageContext';
import aboutImage from '@/assets/about-image.jpg';

const About = () => {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen">
      <Header />
      
      <main className="pt-24 pb-20">
        <div className="container mx-auto px-4">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="font-heading font-bold text-5xl md:text-6xl text-foreground mb-6">
              {t('about.title')}
            </h1>
          </div>

          {/* Content Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="relative">
              <img
                src={aboutImage}
                alt="Auto Pjese Flori Workshop"
                className="rounded-lg shadow-corporate"
              />
              <div className="absolute -bottom-6 -left-6 w-48 h-48 bg-accent/20 rounded-lg -z-10" />
            </div>
            <div>
              <p className="text-xl text-muted-foreground leading-relaxed mb-6">
                {t('about.description')}
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Our commitment to excellence drives us to continuously expand our product range and improve our services. We understand the importance of reliable automotive parts and provide expert guidance to help you find exactly what you need.
              </p>
            </div>
          </div>

          {/* Values Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20">
            <div className="bg-card p-8 rounded-lg shadow-lg text-center">
              <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">🎯</span>
              </div>
              <h3 className="font-heading font-bold text-2xl mb-3">Quality</h3>
              <p className="text-muted-foreground">
                We source only premium parts from trusted international brands
              </p>
            </div>
            <div className="bg-card p-8 rounded-lg shadow-lg text-center">
              <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">🤝</span>
              </div>
              <h3 className="font-heading font-bold text-2xl mb-3">Service</h3>
              <p className="text-muted-foreground">
                Expert advice and support to ensure you get the right parts
              </p>
            </div>
            <div className="bg-card p-8 rounded-lg shadow-lg text-center">
              <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">⚡</span>
              </div>
              <h3 className="font-heading font-bold text-2xl mb-3">Reliability</h3>
              <p className="text-muted-foreground">
                Consistent availability and fast delivery of automotive solutions
              </p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default About;
