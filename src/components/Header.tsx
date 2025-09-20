import { Button } from "@/components/ui/button";
import { Shield } from "lucide-react";
import { Link } from "react-router-dom";
import { ConnectButton } from '@rainbow-me/rainbowkit';
import bridgeLogo from "@/assets/bridge-logo.jpg";

const Header = () => {
  return (
    <header className="relative z-50 border-b border-border bg-card/80 backdrop-blur-md">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 hover-glow transition-all">
            <div className="w-10 h-10 rounded-lg overflow-hidden encrypted-glow">
              <img 
                src={bridgeLogo} 
                alt="Bridge Code DAO" 
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h1 className="text-xl font-bold text-foreground">Bridge Code DAO</h1>
              <p className="text-xs binary-text">01100101 01101110 01100011</p>
            </div>
          </Link>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/projects" className="text-muted-foreground hover:text-primary transition-colors">
              Projects
            </Link>
            <Link to="/about" className="text-muted-foreground hover:text-primary transition-colors">
              About
            </Link>
            <Link to="/dao" className="text-muted-foreground hover:text-primary transition-colors">
              DAO
            </Link>
          </nav>

          {/* Wallet Connection */}
          <div className="flex items-center space-x-4">
            <div className="hidden sm:flex items-center space-x-2 text-sm">
              <Shield className="w-4 h-4 text-primary" />
              <span className="text-muted-foreground">Encrypted</span>
            </div>
            <ConnectButton />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;