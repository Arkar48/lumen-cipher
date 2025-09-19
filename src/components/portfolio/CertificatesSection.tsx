import { Award, Calendar, ExternalLink, Verified } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

export const CertificatesSection = () => {
  const certificates = [
    {
      title: "Certified Information Systems Security Professional",
      abbreviation: "CISSP",
      issuer: "(ISC)²",
      date: "2023",
      status: "Active",
      image: "https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=400&h=300&fit=crop",
      description: "Advanced security professional certification covering 8 domains of cybersecurity.",
      skills: ["Risk Management", "Security Architecture", "Asset Security", "Communication"]
    },
    {
      title: "Certified Ethical Hacker",
      abbreviation: "CEH",
      issuer: "EC-Council",
      date: "2022",
      status: "Active",
      image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=400&h=300&fit=crop",
      description: "Ethical hacking and penetration testing methodologies certification.",
      skills: ["Penetration Testing", "Vulnerability Assessment", "Network Security", "Web Security"]
    },
    {
      title: "Offensive Security Certified Professional",
      abbreviation: "OSCP",
      issuer: "Offensive Security",
      date: "2023",
      status: "Active",
      image: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=400&h=300&fit=crop",
      description: "Hands-on penetration testing certification with 24-hour practical exam.",
      skills: ["Manual Exploitation", "Buffer Overflows", "Privilege Escalation", "Report Writing"]
    },
    {
      title: "CompTIA Security+",
      abbreviation: "Security+",
      issuer: "CompTIA",
      date: "2021",
      status: "Active",
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=400&h=300&fit=crop",
      description: "Foundation-level cybersecurity certification covering core security concepts.",
      skills: ["Network Security", "Compliance", "Threats & Vulnerabilities", "Identity Management"]
    },
    {
      title: "GIAC Penetration Tester",
      abbreviation: "GPEN",
      issuer: "SANS/GIAC",
      date: "2023",
      status: "Active",
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=400&h=300&fit=crop",
      description: "Advanced penetration testing techniques and methodologies.",
      skills: ["Advanced Exploitation", "Post-Exploitation", "Reporting", "Reconnaissance"]
    },
    {
      title: "Certified Information Security Manager",
      abbreviation: "CISM",
      issuer: "ISACA",
      date: "2022",
      status: "Active",
      image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=400&h=300&fit=crop",
      description: "Information security management and governance certification.",
      skills: ["Security Governance", "Risk Management", "Incident Response", "Security Program"]
    }
  ];

  return (
    <section id="certificates" className="py-20 matrix-bg">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            <span className="gradient-neon bg-clip-text text-transparent">Certifications</span> & Credentials
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Industry-recognized certifications demonstrating expertise across multiple cybersecurity domains 
            and practical hands-on experience.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certificates.map((cert, index) => (
            <Card key={index} className="cyber-card hover:cyber-glow-purple transition-all duration-500 group">
              <div className="relative overflow-hidden rounded-t-lg">
                <img 
                  src={cert.image}
                  alt={cert.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4">
                  <Badge className="bg-cyber-green/90 text-white">
                    <Verified className="w-3 h-3 mr-1" />
                    {cert.status}
                  </Badge>
                </div>
              </div>
              
              <CardHeader>
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <CardTitle className="text-lg mb-1">{cert.abbreviation}</CardTitle>
                    <p className="text-sm text-muted-foreground">{cert.issuer}</p>
                  </div>
                  <div className="flex items-center gap-1 text-sm text-muted-foreground">
                    <Calendar className="w-4 h-4" />
                    {cert.date}
                  </div>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {cert.description}
                </p>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <div className="flex flex-wrap gap-2">
                  {cert.skills.map((skill, skillIndex) => (
                    <Badge 
                      key={skillIndex} 
                      variant="outline" 
                      className="text-xs cyber-border"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
                
                <div className="flex gap-2">
                  <Button variant="outline" size="sm" className="flex-1 cyber-border hover:cyber-glow">
                    <Award className="w-4 h-4 mr-2" />
                    View Certificate
                  </Button>
                  <Button variant="ghost" size="sm">
                    <ExternalLink className="w-4 h-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};