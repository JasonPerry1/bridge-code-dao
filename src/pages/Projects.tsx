import Header from "@/components/Header";
import CityFooter from "@/components/CityFooter";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Shield, Users, Clock, MapPin, Filter, Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

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
  },
  {
    id: 4,
    title: "Smart Water Grid",
    description: "IoT-enabled water distribution system with encrypted sensors and AI-powered leak detection for urban areas.",
    location: "Miami - Orlando",
    fundingGoal: 8500000,
    currentFunding: 2100000,
    contributors: 421,
    timeLeft: "38 days",
    status: "Active",
    category: "Utilities"
  },
  {
    id: 5,
    title: "Hyperloop Transit Pod",
    description: "Next-generation transportation system using magnetic levitation and encrypted passenger data protection.",
    location: "Chicago - Detroit",
    fundingGoal: 45000000,
    currentFunding: 12300000,
    contributors: 2156,
    timeLeft: "67 days",
    status: "Active",
    category: "Transportation"
  },
  {
    id: 6,
    title: "Blockchain Energy Exchange",
    description: "Decentralized energy trading platform with encrypted smart contracts for renewable energy distribution.",
    location: "Phoenix Metro",
    fundingGoal: 6800000,
    currentFunding: 6650000,
    contributors: 743,
    timeLeft: "2 days",
    status: "Nearly Funded",
    category: "Energy"
  }
];

const Projects = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-20 gradient-hero">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="text-foreground">Infrastructure </span>
              <span className="gradient-encrypted bg-clip-text text-transparent">Projects</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Discover and fund tomorrow's infrastructure with complete privacy and transparency.
            </p>
          </div>
          
          {/* Search and Filter */}
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row gap-4 mb-8">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                <Input 
                  placeholder="Search projects..." 
                  className="pl-10 bg-card/80 backdrop-blur-md border-border"
                />
              </div>
              <Select>
                <SelectTrigger className="w-full md:w-48 bg-card/80 backdrop-blur-md border-border">
                  <SelectValue placeholder="Category" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Categories</SelectItem>
                  <SelectItem value="transportation">Transportation</SelectItem>
                  <SelectItem value="energy">Energy</SelectItem>
                  <SelectItem value="digital">Digital</SelectItem>
                  <SelectItem value="utilities">Utilities</SelectItem>
                </SelectContent>
              </Select>
              <Select>
                <SelectTrigger className="w-full md:w-48 bg-card/80 backdrop-blur-md border-border">
                  <SelectValue placeholder="Status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Status</SelectItem>
                  <SelectItem value="active">Active</SelectItem>
                  <SelectItem value="nearly-funded">Nearly Funded</SelectItem>
                  <SelectItem value="completed">Completed</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20 gradient-city">
        <div className="container mx-auto px-4">
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
                    <Button 
                      className="w-full encrypted-glow hover-glow gradient-encrypted text-primary-foreground"
                    >
                      Contribute Privately
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <CityFooter />
    </div>
  );
};

export default Projects;