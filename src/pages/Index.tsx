import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ProjectShowcase from "@/components/ProjectShowcase";
import CityFooter from "@/components/CityFooter";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <ProjectShowcase />
      </main>
      <CityFooter />
    </div>
  );
};

export default Index;