import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { HeroSection } from '@/components/sections/HeroSection';
import { ProductsSection } from '@/components/sections/ProductsSection';
import { SolutionsSection } from '@/components/sections/SolutionsSection';
import { TeamSection } from '@/components/sections/TeamSection';
import { MediaSection } from '@/components/sections/MediaSection';
import { CTASection } from '@/components/sections/CTASection';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <ProductsSection />
        <SolutionsSection />
        <TeamSection />
        <MediaSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;