import { Header } from '@/components/portfolio/Header';
import { HeroSection } from '@/components/portfolio/HeroSection';
import { SkillsSection } from '@/components/portfolio/SkillsSection';
import { CertificatesSection } from '@/components/portfolio/CertificatesSection';
import { EducationSection } from '@/components/portfolio/EducationSection';
import { KnowledgeSection } from '@/components/portfolio/KnowledgeSection';
import { Footer } from '@/components/portfolio/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <SkillsSection />
      <CertificatesSection />
      <EducationSection />
      <KnowledgeSection />
      <Footer />
    </div>
  );
};

export default Index;
