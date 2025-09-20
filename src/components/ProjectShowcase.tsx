import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Shield, Users, Clock, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

const projects = [
  {
    id: 1,
    title: "Quantum Bridge Network",
    description: "High-speed quantum communication bridge connecting metropolitan areas with encrypted data transmission capabilities.",
    location: "San Francisco - Los Angeles",
    fundingGoal: 15000000,
    currentFunding: 8750000,
    contributors: 1247,
    timeLeft: "23 days",
    status: "Active",
    category: "Transportation"
  },
  {
    id: 2,
    title: "Neural Grid Infrastructure",
    description: "Advanced neural network-powered smart city grid system with AI-driven energy optimization and encrypted monitoring.",
    location: "Austin Metro",
    fundingGoal: 12000000,
    currentFunding: 11200000,
    contributors: 892,
    timeLeft: "5 days",
    status: "Nearly Funded",
    category: "Energy"
  },
  {
    id: 3,
    title: "Encrypted Data Tunnels",
    description: "Underground fiber optic network with military-grade encryption for secure inter-city data transmission.",
    location: "Boston - New York",
    fundingGoal: 20000000,
    currentFunding: 3400000,
    contributors: 634,
    timeLeft: "45 days",
    status: "Active",
    category: "Digital"
  }
];

const ProjectShowcase = () => {
  return (
    <section className="py-20 gradient-city">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-foreground">Active </span>
            <span className="gradient-encrypted bg-clip-text text-transparent">Infrastructure</span>
            <span className="text-foreground"> Projects</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Discover cutting-edge infrastructure projects seeking encrypted funding. 
            Your contribution amounts remain confidential until project completion.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <Card key={project.id} className="bg-card/80 backdrop-blur-md border-border hover-glow transition-all duration-300">
              <CardHeader>
                <div className="flex items-start justify-between mb-4">
                  <Badge 
                    variant={project.status === "Nearly Funded" ? "default" : "secondary"}
                    className={project.status === "Nearly Funded" 
                      ? "gradient-infrastructure text-secondary-foreground" 
                      : "bg-muted text-muted-foreground"
                    }
                  >
                    {project.status}
                  </Badge>
                  <Shield className="w-5 h-5 text-primary encrypted-glow" />
                </div>
                <CardTitle className="text-xl font-bold text-foreground mb-2">
                  {project.title}
                </CardTitle>
                <p className="text-sm text-muted-foreground mb-4">
                  {project.description}
                </p>
                <div className="flex items-center text-sm text-muted-foreground mb-4">
                  <MapPin className="w-4 h-4 mr-2" />
                  {project.location}
                </div>
              </CardHeader>

              <CardContent>
                <div className="space-y-4">
                  {/* Funding Progress */}
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm text-muted-foreground">Encrypted Funding</span>
                      <span className="text-sm font-medium text-foreground">
                        {Math.round((project.currentFunding / project.fundingGoal) * 100)}%
                      </span>
                    </div>
                    <Progress 
                      value={Math.round((project.currentFunding / project.fundingGoal) * 100)} 
                      className="h-2"
                    />
                    <div className="flex justify-between items-center mt-2">
                      <span className="text-xs binary-text">
                        ████████ ENCRYPTED ████████
                      </span>
                      <span className="text-sm font-bold text-primary">
                        ${(project.fundingGoal / 1000000).toFixed(1)}M Goal
                      </span>
                    </div>
                  </div>

                  {/* Stats */}
                  <div className="grid grid-cols-2 gap-4">
                    <div className="flex items-center space-x-2">
                      <Users className="w-4 h-4 text-accent" />
                      <span className="text-sm text-foreground">{project.contributors} contributors</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Clock className="w-4 h-4 text-secondary" />
                      <span className="text-sm text-foreground">{project.timeLeft}</span>
                    </div>
                  </div>

                  {/* Action Button */}
                  <Link to="/contribute">
                    <Button 
                      className="w-full encrypted-glow hover-glow gradient-encrypted text-primary-foreground"
                    >
                      Contribute Privately
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link to="/projects">
            <Button 
              variant="outline" 
              size="lg" 
              className="px-8 py-6 text-lg font-semibold encrypted-glow hover-glow"
            >
              View All Projects
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ProjectShowcase;