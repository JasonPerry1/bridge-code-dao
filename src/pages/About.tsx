import Header from "@/components/Header";
import CityFooter from "@/components/CityFooter";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield, Users, Zap, Globe, Lock, TrendingUp } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-20 gradient-hero">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="text-foreground">About </span>
              <span className="gradient-encrypted bg-clip-text text-transparent">InfraDAO</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              We're revolutionizing infrastructure funding through encrypted, decentralized crowdfunding. 
              Our platform ensures complete privacy for contributors while maintaining transparency for project progress.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 gradient-city">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                <span className="text-foreground">Our </span>
                <span className="gradient-infrastructure bg-clip-text text-transparent">Mission</span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                To democratize infrastructure investment while preserving contributor privacy through advanced encryption technology.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="bg-card/80 backdrop-blur-md border-border hover-glow transition-all duration-300">
                <CardHeader className="text-center">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center encrypted-glow">
                    <Shield className="w-8 h-8 text-primary" />
                  </div>
                  <CardTitle className="text-xl font-bold text-foreground">Privacy First</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-center">
                    Your contribution amounts remain encrypted until project funding goals are achieved, 
                    ensuring complete financial privacy.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-card/80 backdrop-blur-md border-border hover-glow transition-all duration-300">
                <CardHeader className="text-center">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-secondary/10 flex items-center justify-center infrastructure-glow">
                    <Globe className="w-8 h-8 text-secondary" />
                  </div>
                  <CardTitle className="text-xl font-bold text-foreground">Global Impact</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-center">
                    Fund critical infrastructure projects worldwide, from quantum networks to smart city grids, 
                    shaping tomorrow's digital landscape.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-card/80 backdrop-blur-md border-border hover-glow transition-all duration-300">
                <CardHeader className="text-center">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-accent/10 flex items-center justify-center pulse-glow">
                    <Users className="w-8 h-8 text-accent" />
                  </div>
                  <CardTitle className="text-xl font-bold text-foreground">Community Driven</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-center">
                    Decentralized governance ensures that our community makes decisions about which projects 
                    receive funding and platform development.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                <span className="text-foreground">How It </span>
                <span className="gradient-encrypted bg-clip-text text-transparent">Works</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center encrypted-glow">
                  <span className="text-2xl font-bold text-primary">1</span>
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">Browse Projects</h3>
                <p className="text-muted-foreground">
                  Explore verified infrastructure projects seeking funding.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-secondary/10 flex items-center justify-center infrastructure-glow">
                  <span className="text-2xl font-bold text-secondary">2</span>
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">Contribute Privately</h3>
                <p className="text-muted-foreground">
                  Make encrypted contributions that remain confidential.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-accent/10 flex items-center justify-center pulse-glow">
                  <span className="text-2xl font-bold text-accent">3</span>
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">Track Progress</h3>
                <p className="text-muted-foreground">
                  Monitor project development with transparent updates.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center encrypted-glow">
                  <span className="text-2xl font-bold text-primary">4</span>
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">Reveal & Deploy</h3>
                <p className="text-muted-foreground">
                  Contributions are revealed when funding goals are met.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 gradient-city">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                <span className="text-foreground">Platform </span>
                <span className="gradient-infrastructure bg-clip-text text-transparent">Statistics</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center encrypted-glow">
                  <Lock className="w-10 h-10 text-primary" />
                </div>
                <div className="text-4xl font-bold text-foreground mb-2">$127M+</div>
                <div className="text-muted-foreground">Total Encrypted Funding</div>
              </div>

              <div className="text-center">
                <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-secondary/10 flex items-center justify-center infrastructure-glow">
                  <Users className="w-10 h-10 text-secondary" />
                </div>
                <div className="text-4xl font-bold text-foreground mb-2">12,847</div>
                <div className="text-muted-foreground">Active DAO Members</div>
              </div>

              <div className="text-center">
                <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-accent/10 flex items-center justify-center pulse-glow">
                  <TrendingUp className="w-10 h-10 text-accent" />
                </div>
                <div className="text-4xl font-bold text-foreground mb-2">47</div>
                <div className="text-muted-foreground">Completed Projects</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CityFooter />
    </div>
  );
};

export default About;