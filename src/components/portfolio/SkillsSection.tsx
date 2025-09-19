import { Shield, Terminal, Globe, Lock, Eye, Zap, Database, Network } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';

export const SkillsSection = () => {
  const skillCategories = [
    {
      icon: Shield,
      title: "Penetration Testing",
      color: "cyber-blue",
      skills: [
        { name: "Web Application Testing", level: 95 },
        { name: "Network Penetration", level: 90 },
        { name: "Mobile App Security", level: 85 },
        { name: "Wireless Security", level: 88 }
      ]
    },
    {
      icon: Terminal,
      title: "Security Tools",
      color: "cyber-purple",
      skills: [
        { name: "Metasploit", level: 92 },
        { name: "Burp Suite", level: 95 },
        { name: "Nmap", level: 90 },
        { name: "OWASP ZAP", level: 88 }
      ]
    },
    {
      icon: Lock,
      title: "Vulnerability Management",
      color: "cyber-green",
      skills: [
        { name: "Risk Assessment", level: 93 },
        { name: "Threat Modeling", level: 87 },
        { name: "Security Audits", level: 90 },
        { name: "Compliance", level: 85 }
      ]
    },
    {
      icon: Database,
      title: "Forensics & Analysis",
      color: "cyber-orange",
      skills: [
        { name: "Digital Forensics", level: 85 },
        { name: "Malware Analysis", level: 82 },
        { name: "Incident Response", level: 88 },
        { name: "Log Analysis", level: 90 }
      ]
    }
  ];

  const certifications = [
    "CISSP", "CEH", "OSCP", "CISM", "CompTIA Security+", "GCIH", 
    "CISSP", "CISA", "GCFA", "GPEN", "CySA+"
  ];

  return (
    <section id="skills" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            <span className="gradient-cyber bg-clip-text text-transparent">Technical</span> Skills
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Comprehensive expertise across multiple cybersecurity domains with hands-on experience 
            in real-world threat scenarios.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {skillCategories.map((category, index) => (
            <Card key={index} className="cyber-card hover:cyber-glow transition-all duration-300">
              <CardHeader className="text-center pb-4">
                <div className={`inline-flex p-3 rounded-lg bg-${category.color}/10 mx-auto mb-4`}>
                  <category.icon className={`w-8 h-8 text-${category.color}`} />
                </div>
                <CardTitle className="text-lg">{category.title}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="font-medium">{skill.name}</span>
                      <span className="text-muted-foreground">{skill.level}%</span>
                    </div>
                    <Progress value={skill.level} className="h-2" />
                  </div>
                ))}
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="cyber-card">
          <CardHeader>
            <CardTitle className="flex items-center gap-3">
              <Eye className="w-6 h-6 text-primary" />
              Security Frameworks & Methodologies
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-3">
              {certifications.map((cert, index) => (
                <Badge 
                  key={index} 
                  variant="outline" 
                  className="cyber-border hover:cyber-glow-purple transition-all duration-300 cursor-pointer"
                >
                  {cert}
                </Badge>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};