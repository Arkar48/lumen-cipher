import { Shield, Terminal, Globe, Github, Linkedin, Mail } from 'lucide-react';
import { ThemeToggle } from '@/components/ThemeToggle';
import { Button } from '@/components/ui/button';

export const Header = () => {
  return (
    <header className="sticky top-0 z-50 matrix-bg backdrop-blur-lg border-b cyber-border">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="p-2 cyber-glow rounded-lg bg-primary/10">
              <Shield className="w-8 h-8 text-primary" />
            </div>
            <div>
              <h1 className="text-2xl font-bold gradient-cyber bg-clip-text text-transparent">
                CyberSec Portfolio
              </h1>
              <p className="text-sm text-muted-foreground font-mono">Penetration Tester & Security Analyst</p>
            </div>
          </div>
          
          <nav className="hidden md:flex items-center gap-6">
            <a href="#about" className="text-foreground hover:text-primary transition-colors">About</a>
            <a href="#skills" className="text-foreground hover:text-primary transition-colors">Skills</a>
            <a href="#certificates" className="text-foreground hover:text-primary transition-colors">Certificates</a>
            <a href="#education" className="text-foreground hover:text-primary transition-colors">Education</a>
            <a href="#knowledge" className="text-foreground hover:text-primary transition-colors">Knowledge</a>
          </nav>

          <div className="flex items-center gap-3">
            <div className="hidden sm:flex items-center gap-2">
              <Button variant="ghost" size="icon" className="hover:cyber-glow-purple">
                <Github className="w-4 h-4" />
              </Button>
              <Button variant="ghost" size="icon" className="hover:cyber-glow">
                <Linkedin className="w-4 h-4" />
              </Button>
              <Button variant="ghost" size="icon" className="hover:text-cyber-green">
                <Mail className="w-4 h-4" />
              </Button>
            </div>
            <ThemeToggle />
          </div>
        </div>
      </div>
    </header>
  );
};