import Header from "@/components/Header";
import CityFooter from "@/components/CityFooter";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Vote, Users, Clock, CheckCircle, XCircle, AlertCircle } from "lucide-react";

const proposals = [
  {
    id: 1,
    title: "Increase Project Funding Threshold",
    description: "Proposal to increase minimum project funding requirement from $1M to $2.5M to ensure higher quality infrastructure projects.",
    status: "Active",
    votesFor: 8247,
    votesAgainst: 2156,
    totalVotes: 10403,
    timeLeft: "5 days",
    category: "Platform Governance"
  },
  {
    id: 2,
    title: "New Encryption Protocol Implementation",
    description: "Upgrade to quantum-resistant encryption protocol to enhance contribution privacy and security.",
    status: "Passed",
    votesFor: 9834,
    votesAgainst: 1245,
    totalVotes: 11079,
    timeLeft: "Completed",
    category: "Security"
  },
  {
    id: 3,
    title: "Community Treasury Allocation",
    description: "Allocate 15% of platform fees to community development fund for educational initiatives and developer grants.",
    status: "Active",
    votesFor: 5672,
    votesAgainst: 3891,
    totalVotes: 9563,
    timeLeft: "12 days",
    category: "Treasury"
  }
];

const DAO = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-20 gradient-hero">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="gradient-encrypted bg-clip-text text-transparent">DAO</span>
              <span className="text-foreground"> Governance</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Shape the future of encrypted infrastructure funding through decentralized governance. 
              Every token holder has a voice in platform decisions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="gradient-encrypted hover-glow text-primary-foreground px-8 py-6 text-lg font-semibold"
              >
                Connect Wallet to Vote
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="px-8 py-6 text-lg font-semibold encrypted-glow hover-glow"
              >
                View Governance Docs
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* DAO Stats */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-16">
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center encrypted-glow">
                  <Users className="w-8 h-8 text-primary" />
                </div>
                <div className="text-3xl font-bold text-foreground mb-2">12,847</div>
                <div className="text-muted-foreground">Active Members</div>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-secondary/10 flex items-center justify-center infrastructure-glow">
                  <Vote className="w-8 h-8 text-secondary" />
                </div>
                <div className="text-3xl font-bold text-foreground mb-2">847</div>
                <div className="text-muted-foreground">Total Proposals</div>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-accent/10 flex items-center justify-center pulse-glow">
                  <CheckCircle className="w-8 h-8 text-accent" />
                </div>
                <div className="text-3xl font-bold text-foreground mb-2">743</div>
                <div className="text-muted-foreground">Passed Proposals</div>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center encrypted-glow">
                  <AlertCircle className="w-8 h-8 text-primary" />
                </div>
                <div className="text-3xl font-bold text-foreground mb-2">23</div>
                <div className="text-muted-foreground">Active Votes</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Active Proposals */}
      <section className="py-20 gradient-city">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                <span className="text-foreground">Active </span>
                <span className="gradient-infrastructure bg-clip-text text-transparent">Proposals</span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Vote on important decisions that shape the future of our encrypted infrastructure platform.
              </p>
            </div>

            <div className="space-y-8">
              {proposals.map((proposal) => (
                <Card key={proposal.id} className="bg-card/80 backdrop-blur-md border-border hover-glow transition-all duration-300">
                  <CardHeader>
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center space-x-3">
                        <Badge 
                          variant={proposal.status === "Active" ? "default" : proposal.status === "Passed" ? "secondary" : "destructive"}
                          className={
                            proposal.status === "Active" 
                              ? "gradient-encrypted text-primary-foreground" 
                              : proposal.status === "Passed"
                              ? "gradient-infrastructure text-secondary-foreground"
                              : "bg-destructive text-destructive-foreground"
                          }
                        >
                          {proposal.status}
                        </Badge>
                        <Badge variant="outline" className="text-muted-foreground">
                          {proposal.category}
                        </Badge>
                      </div>
                      <div className="flex items-center text-sm text-muted-foreground">
                        <Clock className="w-4 h-4 mr-2" />
                        {proposal.timeLeft}
                      </div>
                    </div>
                    <CardTitle className="text-xl font-bold text-foreground mb-2">
                      {proposal.title}
                    </CardTitle>
                    <p className="text-muted-foreground">
                      {proposal.description}
                    </p>
                  </CardHeader>

                  <CardContent>
                    <div className="space-y-6">
                      {/* Voting Progress */}
                      <div>
                        <div className="flex justify-between items-center mb-2">
                          <span className="text-sm font-medium text-foreground">Voting Progress</span>
                          <span className="text-sm text-muted-foreground">
                            {proposal.totalVotes.toLocaleString()} votes
                          </span>
                        </div>
                        
                        {/* For Votes */}
                        <div className="mb-2">
                          <div className="flex justify-between items-center mb-1">
                            <span className="text-sm text-accent">For</span>
                            <span className="text-sm font-medium text-accent">
                              {proposal.votesFor.toLocaleString()} ({Math.round((proposal.votesFor / proposal.totalVotes) * 100)}%)
                            </span>
                          </div>
                          <Progress 
                            value={(proposal.votesFor / proposal.totalVotes) * 100} 
                            className="h-2"
                          />
                        </div>

                        {/* Against Votes */}
                        <div>
                          <div className="flex justify-between items-center mb-1">
                            <span className="text-sm text-destructive">Against</span>
                            <span className="text-sm font-medium text-destructive">
                              {proposal.votesAgainst.toLocaleString()} ({Math.round((proposal.votesAgainst / proposal.totalVotes) * 100)}%)
                            </span>
                          </div>
                          <Progress 
                            value={(proposal.votesAgainst / proposal.totalVotes) * 100} 
                            className="h-2 [&>div]:bg-destructive"
                          />
                        </div>
                      </div>

                      {/* Action Buttons */}
                      {proposal.status === "Active" && (
                        <div className="flex flex-col sm:flex-row gap-4">
                          <Button 
                            className="flex-1 gradient-encrypted hover-glow text-primary-foreground"
                          >
                            <CheckCircle className="w-4 h-4 mr-2" />
                            Vote For
                          </Button>
                          <Button 
                            variant="outline" 
                            className="flex-1 border-destructive text-destructive hover:bg-destructive hover:text-destructive-foreground"
                          >
                            <XCircle className="w-4 h-4 mr-2" />
                            Vote Against
                          </Button>
                        </div>
                      )}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="text-center mt-12">
              <Button 
                variant="outline" 
                size="lg" 
                className="px-8 py-6 text-lg font-semibold encrypted-glow hover-glow"
              >
                View All Proposals
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* How to Participate */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                <span className="text-foreground">How to </span>
                <span className="gradient-encrypted bg-clip-text text-transparent">Participate</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center encrypted-glow">
                  <span className="text-2xl font-bold text-primary">1</span>
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">Hold INFRA Tokens</h3>
                <p className="text-muted-foreground">
                  Acquire INFRA governance tokens through participation in projects or token swaps.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-secondary/10 flex items-center justify-center infrastructure-glow">
                  <span className="text-2xl font-bold text-secondary">2</span>
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">Review Proposals</h3>
                <p className="text-muted-foreground">
                  Study active proposals and their potential impact on the platform and community.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-accent/10 flex items-center justify-center pulse-glow">
                  <span className="text-2xl font-bold text-accent">3</span>
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">Cast Your Vote</h3>
                <p className="text-muted-foreground">
                  Use your voting power to influence decisions on governance, security, and platform development.
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

export default DAO;