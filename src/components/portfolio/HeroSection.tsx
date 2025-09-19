import { Download, MapPin, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

export const HeroSection = () => {
  return (
    <section id="about" className="py-20 matrix-bg">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 cyber-glow text-primary text-sm font-mono">
                <div className="w-2 h-2 bg-cyber-green rounded-full animate-pulse"></div>
                Available for opportunities
              </div>
              
              <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                <span className="gradient-cyber bg-clip-text text-transparent">Cyber</span>
                <br />
                <span className="text-foreground">Security</span>
                <br />
                <span className="gradient-neon bg-clip-text text-transparent">Expert</span>
              </h1>
              
              <p className="text-xl text-muted-foreground leading-relaxed">
                Passionate cybersecurity professional specializing in penetration testing, vulnerability assessment, 
                and security architecture. Protecting digital assets through advanced threat detection and mitigation.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="gradient-cyber hover:cyber-glow text-primary-foreground font-semibold">
                <Download className="w-4 h-4 mr-2" />
                Download Resume
              </Button>
              <Button variant="outline" className="cyber-border hover:cyber-glow-purple">
                View My Work
              </Button>
            </div>

            <div className="flex items-center gap-6 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-cyber-blue" />
                <span>Remote / Global</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4 text-cyber-purple" />
                <span>5+ Years Experience</span>
              </div>
            </div>
          </div>

          <div className="relative">
            <Card className="cyber-card p-8 cyber-glow">
              <div className="aspect-square rounded-lg bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                <img 
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face"
                  alt="Professional headshot"
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
              <div className="absolute -inset-4 gradient-cyber opacity-20 rounded-lg blur-xl"></div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};