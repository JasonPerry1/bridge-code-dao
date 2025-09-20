import Header from "@/components/Header";
import CityFooter from "@/components/CityFooter";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Shield, Lock, Eye, EyeOff, Wallet, Users, Clock, MapPin, AlertCircle } from "lucide-react";
import { useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const Contribute = () => {
  const [selectedProject, setSelectedProject] = useState("");
  const [contributionAmount, setContributionAmount] = useState("");
  const [isEncrypted, setIsEncrypted] = useState(true);

  const featuredProject = {
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
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-20 gradient-hero">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="text-foreground">Contribute </span>
              <span className="gradient-encrypted bg-clip-text text-transparent">Privately</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Fund infrastructure projects with complete privacy. Your contribution amounts remain encrypted 
              until project funding goals are achieved.
            </p>
          </div>
        </div>
      </section>

      {/* Privacy Features */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              <Card className="bg-card/80 backdrop-blur-md border-border hover-glow transition-all duration-300">
                <CardHeader className="text-center">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center encrypted-glow">
                    <Lock className="w-8 h-8 text-primary" />
                  </div>
                  <CardTitle className="text-xl font-bold text-foreground">Encrypted Contributions</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-center">
                    Your contribution amounts are encrypted using military-grade cryptography and only revealed when funding goals are met.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-card/80 backdrop-blur-md border-border hover-glow transition-all duration-300">
                <CardHeader className="text-center">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-secondary/10 flex items-center justify-center infrastructure-glow">
                    <Shield className="w-8 h-8 text-secondary" />
                  </div>
                  <CardTitle className="text-xl font-bold text-foreground">Anonymous Identity</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-center">
                    Contribute without revealing your identity. Only your wallet address is recorded, ensuring complete anonymity.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-card/80 backdrop-blur-md border-border hover-glow transition-all duration-300">
                <CardHeader className="text-center">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-accent/10 flex items-center justify-center pulse-glow">
                    <Eye className="w-8 h-8 text-accent" />
                  </div>
                  <CardTitle className="text-xl font-bold text-foreground">Transparent Progress</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-center">
                    Track project progress and milestones while maintaining your contribution privacy until completion.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Contribution Form */}
      <section className="py-20 gradient-city">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Featured Project */}
              <Card className="bg-card/80 backdrop-blur-md border-border">
                <CardHeader>
                  <div className="flex items-start justify-between mb-4">
                    <Badge className="gradient-infrastructure text-secondary-foreground">
                      Featured Project
                    </Badge>
                    <Shield className="w-5 h-5 text-primary encrypted-glow" />
                  </div>
                  <CardTitle className="text-xl font-bold text-foreground mb-2">
                    {featuredProject.title}
                  </CardTitle>
                  <p className="text-sm text-muted-foreground mb-4">
                    {featuredProject.description}
                  </p>
                  <div className="flex items-center text-sm text-muted-foreground mb-4">
                    <MapPin className="w-4 h-4 mr-2" />
                    {featuredProject.location}
                  </div>
                </CardHeader>

                <CardContent>
                  <div className="space-y-4">
                    {/* Funding Progress */}
                    <div>
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm text-muted-foreground">Encrypted Funding</span>
                        <span className="text-sm font-medium text-foreground">
                          {Math.round((featuredProject.currentFunding / featuredProject.fundingGoal) * 100)}%
                        </span>
                      </div>
                      <Progress 
                        value={Math.round((featuredProject.currentFunding / featuredProject.fundingGoal) * 100)} 
                        className="h-2"
                      />
                      <div className="flex justify-between items-center mt-2">
                        <span className="text-xs binary-text">
                          ████████ ENCRYPTED ████████
                        </span>
                        <span className="text-sm font-bold text-primary">
                          ${(featuredProject.fundingGoal / 1000000).toFixed(1)}M Goal
                        </span>
                      </div>
                    </div>

                    {/* Stats */}
                    <div className="grid grid-cols-2 gap-4">
                      <div className="flex items-center space-x-2">
                        <Users className="w-4 h-4 text-accent" />
                        <span className="text-sm text-foreground">{featuredProject.contributors} contributors</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Clock className="w-4 h-4 text-secondary" />
                        <span className="text-sm text-foreground">{featuredProject.timeLeft}</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Contribution Form */}
              <Card className="bg-card/80 backdrop-blur-md border-border">
                <CardHeader>
                  <CardTitle className="text-xl font-bold text-foreground">
                    Make Private Contribution
                  </CardTitle>
                  <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                    <Lock className="w-4 h-4" />
                    <span>Your contribution will be encrypted</span>
                  </div>
                </CardHeader>

                <CardContent>
                  <div className="space-y-6">
                    {/* Project Selection */}
                    <div>
                      <Label htmlFor="project">Select Project</Label>
                      <Select value={selectedProject} onValueChange={setSelectedProject}>
                        <SelectTrigger className="w-full">
                          <SelectValue placeholder="Choose a project to fund" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="quantum-bridge">Quantum Bridge Network</SelectItem>
                          <SelectItem value="neural-grid">Neural Grid Infrastructure</SelectItem>
                          <SelectItem value="data-tunnels">Encrypted Data Tunnels</SelectItem>
                          <SelectItem value="smart-water">Smart Water Grid</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    {/* Contribution Amount */}
                    <div>
                      <Label htmlFor="amount">Contribution Amount (ETH)</Label>
                      <div className="relative">
                        <Input
                          id="amount"
                          type="number"
                          placeholder="0.00"
                          value={contributionAmount}
                          onChange={(e) => setContributionAmount(e.target.value)}
                          className="pr-20"
                        />
                        <div className="absolute right-3 top-1/2 transform -translate-y-1/2 text-sm text-muted-foreground">
                          ETH
                        </div>
                      </div>
                      <div className="flex justify-between text-xs text-muted-foreground mt-1">
                        <span>Min: 0.01 ETH</span>
                        <span>≈ $2,847 USD</span>
                      </div>
                    </div>

                    {/* Privacy Toggle */}
                    <div className="flex items-center justify-between p-4 bg-primary/5 rounded-lg border border-primary/10">
                      <div className="flex items-center space-x-3">
                        {isEncrypted ? (
                          <Lock className="w-5 h-5 text-primary" />
                        ) : (
                          <Eye className="w-5 h-5 text-muted-foreground" />
                        )}
                        <div>
                          <div className="text-sm font-medium text-foreground">
                            {isEncrypted ? "Encrypted Contribution" : "Public Contribution"}
                          </div>
                          <div className="text-xs text-muted-foreground">
                            {isEncrypted 
                              ? "Amount hidden until funding complete" 
                              : "Amount visible to all users"
                            }
                          </div>
                        </div>
                      </div>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => setIsEncrypted(!isEncrypted)}
                        className={isEncrypted ? "encrypted-glow" : ""}
                      >
                        {isEncrypted ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                      </Button>
                    </div>

                    {/* Warning */}
                    <div className="flex items-start space-x-3 p-4 bg-secondary/5 rounded-lg border border-secondary/10">
                      <AlertCircle className="w-5 h-5 text-secondary mt-0.5" />
                      <div className="text-sm">
                        <div className="font-medium text-foreground mb-1">Important Notice</div>
                        <div className="text-muted-foreground">
                          Contributions are locked until project funding goals are met. 
                          Refunds are only available if projects fail to reach their targets.
                        </div>
                      </div>
                    </div>

                    {/* Submit Button */}
                    <Button 
                      className="w-full gradient-encrypted hover-glow text-primary-foreground py-6 text-lg font-semibold"
                      disabled={!selectedProject || !contributionAmount}
                    >
                      <Wallet className="w-5 h-5 mr-2" />
                      Connect Wallet & Contribute
                    </Button>

                    <div className="text-center text-xs text-muted-foreground">
                      By contributing, you agree to our Terms of Service and Privacy Policy
                    </div>
                  </div>
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
                <span className="text-foreground">How Private </span>
                <span className="gradient-encrypted bg-clip-text text-transparent">Contributions</span>
                <span className="text-foreground"> Work</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center encrypted-glow">
                  <span className="text-2xl font-bold text-primary">1</span>
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">Choose Project</h3>
                <p className="text-muted-foreground">
                  Select an infrastructure project that aligns with your investment goals.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-secondary/10 flex items-center justify-center infrastructure-glow">
                  <span className="text-2xl font-bold text-secondary">2</span>
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">Encrypt Contribution</h3>
                <p className="text-muted-foreground">
                  Your contribution amount is encrypted and stored securely on-chain.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-accent/10 flex items-center justify-center pulse-glow">
                  <span className="text-2xl font-bold text-accent">3</span>
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">Monitor Progress</h3>
                <p className="text-muted-foreground">
                  Track project milestones while your contribution remains private.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center encrypted-glow">
                  <span className="text-2xl font-bold text-primary">4</span>
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">Reveal & Deploy</h3>
                <p className="text-muted-foreground">
                  When funding goals are met, contributions are revealed and deployed.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CityFooter />
    </div>
  );
};

export default Contribute;