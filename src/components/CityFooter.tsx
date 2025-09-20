import { Github, Twitter, MessageCircle, Globe } from "lucide-react";

const CityFooter = () => {
  // Generate city building blocks
  const buildings = Array.from({ length: 20 }, (_, i) => ({
    id: i,
    height: Math.random() * 100 + 50,
    delay: Math.random() * 3,
    width: Math.random() * 30 + 20
  }));

  return (
    <footer className="relative overflow-hidden bg-gradient-to-t from-background to-card/50">
      {/* Animated City Skyline */}
      <div className="relative h-32 mb-8 overflow-hidden">
        <div className="absolute bottom-0 left-0 right-0 flex items-end justify-center space-x-1">
          {buildings.map((building) => (
            <div
              key={building.id}
              className="bg-gradient-to-t from-primary/30 to-primary/10 animate-city-lights city-shadow"
              style={{
                height: `${building.height}px`,
                width: `${building.width}px`,
                animationDelay: `${building.delay}s`
              }}
            >
              {/* Building windows */}
              <div className="grid grid-cols-2 gap-1 p-1 h-full">
                {Array.from({ length: Math.floor(building.height / 15) }, (_, i) => (
                  <div
                    key={i}
                    className="bg-city-lights/50 animate-city-lights"
                    style={{ animationDelay: `${building.delay + i * 0.1}s` }}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
        
        {/* Glowing base line */}
        <div className="absolute bottom-0 left-0 right-0 h-1 gradient-encrypted animate-glow-pulse" />
      </div>

      <div className="container mx-auto px-4 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-8 h-8 rounded-lg gradient-encrypted" />
              <h3 className="text-xl font-bold text-foreground">InfraDAO</h3>
            </div>
            <p className="text-muted-foreground mb-4 max-w-md">
              Building tomorrow's infrastructure with encrypted, confidential crowdfunding. 
              Your privacy is our priority.
            </p>
            <div className="binary-text text-xs opacity-50">
              01000101 01101110 01100011 01110010 01111001 01110000 01110100 01100101 01100100
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-foreground mb-4">Platform</h4>
            <ul className="space-y-2">
              <li><a href="#projects" className="text-muted-foreground hover:text-primary transition-colors">Active Projects</a></li>
              <li><a href="#dao" className="text-muted-foreground hover:text-primary transition-colors">DAO Governance</a></li>
              <li><a href="#docs" className="text-muted-foreground hover:text-primary transition-colors">Documentation</a></li>
              <li><a href="#whitepaper" className="text-muted-foreground hover:text-primary transition-colors">Whitepaper</a></li>
            </ul>
          </div>

          {/* Community */}
          <div>
            <h4 className="text-lg font-semibold text-foreground mb-4">Community</h4>
            <div className="flex space-x-4">
              <a 
                href="#twitter" 
                className="w-10 h-10 rounded-lg bg-muted/50 flex items-center justify-center text-muted-foreground hover:text-primary hover-glow transition-all"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a 
                href="#discord" 
                className="w-10 h-10 rounded-lg bg-muted/50 flex items-center justify-center text-muted-foreground hover:text-primary hover-glow transition-all"
              >
                <MessageCircle className="w-5 h-5" />
              </a>
              <a 
                href="#github" 
                className="w-10 h-10 rounded-lg bg-muted/50 flex items-center justify-center text-muted-foreground hover:text-primary hover-glow transition-all"
              >
                <Github className="w-5 h-5" />
              </a>
              <a 
                href="#website" 
                className="w-10 h-10 rounded-lg bg-muted/50 flex items-center justify-center text-muted-foreground hover:text-primary hover-glow transition-all"
              >
                <Globe className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-muted-foreground text-sm mb-4 md:mb-0">
            © 2024 InfraDAO. Encrypted infrastructure funding for the future.
          </div>
          <div className="flex space-x-6 text-sm">
            <a href="#privacy" className="text-muted-foreground hover:text-primary transition-colors">Privacy Policy</a>
            <a href="#terms" className="text-muted-foreground hover:text-primary transition-colors">Terms of Service</a>
            <a href="#security" className="text-muted-foreground hover:text-primary transition-colors">Security</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default CityFooter;