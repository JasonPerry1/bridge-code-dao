import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, Users, TrendingUp } from "lucide-react";
import { Link } from "react-router-dom";
import cityHero from "@/assets/city-hero.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center gradient-hero overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src={cityHero} 
          alt="Futuristic city infrastructure" 
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/70 to-transparent" />
      </div>

      {/* Floating Binary Elements */}
      <div className="absolute inset-0 z-10 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 binary-text text-xs animate-binary-flow opacity-20">
          10110101 01100101 01101110 01100011
        </div>
        <div className="absolute top-40 right-20 binary-text text-xs animate-binary-flow opacity-20" style={{animationDelay: '1s'}}>
          01100101 01101110 01100011 10110101
        </div>
        <div className="absolute bottom-40 left-1/4 binary-text text-xs animate-binary-flow opacity-20" style={{animationDelay: '2s'}}>
          01101110 10110101 01100101 01100011
        </div>
      </div>

      {/* Content */}
      <div className="relative z-20 container mx-auto px-4 py-20">
        <div className="max-w-4xl">
          <div className="mb-6">
            <span className="inline-block px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-primary text-sm font-medium encrypted-glow">
              🔒 Confidential Infrastructure Crowdfunding
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            <span className="text-foreground">Encrypted</span>{" "}
            <span className="gradient-encrypted bg-clip-text text-transparent">Infrastructure</span>{" "}
            <span className="text-foreground">Investment</span>{" "}
            <span className="gradient-infrastructure bg-clip-text text-transparent">DAO</span>
          </h1>

          <p className="text-xl text-muted-foreground mb-8 max-w-2xl leading-relaxed">
            Contribute to critical infrastructure projects with complete privacy. 
            Your investment amounts remain encrypted until project funding goals are achieved, 
            ensuring confidential participation in tomorrow's infrastructure.
          </p>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center encrypted-glow">
                <Shield className="w-6 h-6 text-primary" />
              </div>
              <div>
                <div className="text-2xl font-bold text-foreground">100%</div>
                <div className="text-sm text-muted-foreground">Encrypted Contributions</div>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 rounded-lg bg-secondary/10 flex items-center justify-center infrastructure-glow">
                <Users className="w-6 h-6 text-secondary" />
              </div>
              <div>
                <div className="text-2xl font-bold text-foreground">2,847</div>
                <div className="text-sm text-muted-foreground">DAO Members</div>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center pulse-glow">
                <TrendingUp className="w-6 h-6 text-accent" />
              </div>
              <div>
                <div className="text-2xl font-bold text-foreground">$24.8M</div>
                <div className="text-sm text-muted-foreground">Encrypted Funding</div>
              </div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Link to="/projects">
              <Button 
                size="lg" 
                className="gradient-encrypted hover-glow text-primary-foreground px-8 py-6 text-lg font-semibold w-full"
              >
                Explore Projects
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
            <Link to="/dao">
              <Button 
                variant="outline" 
                size="lg" 
                className="px-8 py-6 text-lg font-semibold encrypted-glow hover-glow w-full"
              >
                Join DAO
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;