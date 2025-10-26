import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { useLanguage } from '@/contexts/LanguageContext';

interface ProductCardProps {
  title: string;
  description: string;
  image: string;
  onViewAll?: () => void;
}

const ProductCard = ({ title, description, image, onViewAll }: ProductCardProps) => {
  const { t } = useLanguage();

  return (
    <Card className="overflow-hidden hover:shadow-corporate transition-all duration-300 group">
      <div className="relative overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
      <CardHeader>
        <CardTitle className="font-heading text-2xl">{title}</CardTitle>
        <CardDescription className="text-base">{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <Button
          onClick={onViewAll}
          className="w-full bg-primary text-primary-foreground hover:bg-primary/90 font-heading"
        >
          {t('products.viewAll')}
        </Button>
      </CardContent>
    </Card>
  );
};

export default ProductCard;
