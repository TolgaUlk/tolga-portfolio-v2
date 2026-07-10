import NavHeader from '@/components/Netflix/NavHeader';
import LandingHero from '@/components/Netflix/LandingHero';
import FeaturedSection from '@/components/Netflix/FeaturedSection';
import CategoryRow from '@/components/Netflix/CategoryRow';
import { CATEGORY_ROWS, projectsInCategory, getFeaturedProjects } from '@/data/projects';

const Index = () => {
  const featured = getFeaturedProjects();

  return (
    <div className="min-h-screen bg-black text-white">
      <NavHeader />
      <LandingHero />
      <FeaturedSection projects={featured} />

      <div className="mt-6 md:mt-10">
        {CATEGORY_ROWS.map((row) => (
          <CategoryRow key={row.key} title={row.label} projects={projectsInCategory(row.key)} />
        ))}
      </div>

      <footer className="border-t border-white/10 py-8 px-4 md:px-8 mt-8">
        <p className="text-white/50 text-xs md:text-sm">© {new Date().getFullYear()} Tolga Ülkümen.</p>
      </footer>
    </div>
  );
};

export default Index;
