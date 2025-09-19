import { BookOpen, Users, Video, FileText, ExternalLink, Clock, Eye } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

export const KnowledgeSection = () => {
  const articles = [
    {
      title: "Advanced Persistent Threats: Detection and Mitigation Strategies",
      type: "Technical Article",
      date: "2024-01-15",
      readTime: "8 min read",
      views: "2.5k",
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=400&h=300&fit=crop",
      excerpt: "Comprehensive guide on identifying and defending against sophisticated APT campaigns targeting enterprise networks.",
      tags: ["APT", "Threat Detection", "Enterprise Security", "SIEM"]
    },
    {
      title: "Zero-Day Vulnerability Research: A Practical Approach",
      type: "Research Paper",
      date: "2023-11-22",
      readTime: "12 min read",
      views: "3.1k",
      image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=400&h=300&fit=crop",
      excerpt: "Methodology for discovering and responsibly disclosing zero-day vulnerabilities in web applications.",
      tags: ["Zero-Day", "Vulnerability Research", "Bug Bounty", "Responsible Disclosure"]
    },
    {
      title: "Building a Security Operations Center from Scratch",
      type: "Tutorial Series",
      date: "2023-09-10",
      readTime: "15 min read",
      views: "4.2k",
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=400&h=300&fit=crop",
      excerpt: "Complete guide to establishing an effective SOC including tool selection, team structure, and processes.",
      tags: ["SOC", "Security Operations", "SIEM", "Incident Response"]
    }
  ];

  const videos = [
    {
      title: "Web Application Penetration Testing Masterclass",
      duration: "2h 45m",
      views: "15.3k",
      date: "2024-02-01",
      thumbnail: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400&h=300&fit=crop",
      description: "Complete walkthrough of web application security testing methodologies and tools."
    },
    {
      title: "Network Security Fundamentals Workshop",
      duration: "1h 30m",
      views: "8.7k",
      date: "2023-12-15",
      thumbnail: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=400&h=300&fit=crop",
      description: "Interactive workshop covering network security principles and practical implementation."
    },
    {
      title: "Incident Response Best Practices",
      duration: "45m",
      views: "6.2k",
      date: "2023-10-20",
      thumbnail: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=400&h=300&fit=crop",
      description: "Essential incident response procedures and crisis management strategies."
    }
  ];

  const presentations = [
    {
      title: "AI in Cybersecurity: Opportunities and Challenges",
      event: "BlackHat Conference 2024",
      date: "2024-08-08",
      audience: "1,200 attendees",
      image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=400&h=300&fit=crop"
    },
    {
      title: "Cloud Security Architecture at Scale",
      event: "RSA Conference 2024",
      date: "2024-05-06",
      audience: "800 attendees",
      image: "https://images.unsplash.com/photo-1559523161-0fc0d8b38a7a?w=400&h=300&fit=crop"
    },
    {
      title: "The Future of Penetration Testing",
      event: "DEF CON 31",
      date: "2023-08-12",
      audience: "600 attendees",
      image: "https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?w=400&h=300&fit=crop"
    }
  ];

  return (
    <section id="knowledge" className="py-20 matrix-bg">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            <span className="gradient-cyber bg-clip-text text-transparent">Knowledge</span> Sharing
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Contributing to the cybersecurity community through research, education, and thought leadership.
          </p>
        </div>

        {/* Articles & Blog Posts */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
            <FileText className="w-6 h-6 text-primary" />
            Technical Articles & Research
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.map((article, index) => (
              <Card key={index} className="cyber-card hover:cyber-glow-purple transition-all duration-500 group">
                <div className="relative overflow-hidden rounded-t-lg">
                  <img 
                    src={article.image}
                    alt={article.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-primary/90 text-primary-foreground">
                      {article.type}
                    </Badge>
                  </div>
                </div>
                
                <CardHeader>
                  <CardTitle className="text-lg leading-tight line-clamp-2">
                    {article.title}
                  </CardTitle>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {article.readTime}
                    </div>
                    <div className="flex items-center gap-1">
                      <Eye className="w-4 h-4" />
                      {article.views}
                    </div>
                  </div>
                </CardHeader>
                
                <CardContent className="space-y-4">
                  <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3">
                    {article.excerpt}
                  </p>
                  
                  <div className="flex flex-wrap gap-2">
                    {article.tags.map((tag, tagIndex) => (
                      <Badge 
                        key={tagIndex} 
                        variant="outline" 
                        className="text-xs cyber-border"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  
                  <Button variant="outline" className="w-full cyber-border hover:cyber-glow">
                    <BookOpen className="w-4 h-4 mr-2" />
                    Read Article
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Video Content */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
            <Video className="w-6 h-6 text-cyber-purple" />
            Educational Videos & Tutorials
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {videos.map((video, index) => (
              <Card key={index} className="cyber-card hover:cyber-glow transition-all duration-500 group">
                <div className="relative overflow-hidden rounded-t-lg">
                  <img 
                    src={video.thumbnail}
                    alt={video.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-16 h-16 bg-primary/90 rounded-full flex items-center justify-center">
                      <Video className="w-8 h-8 text-primary-foreground" />
                    </div>
                  </div>
                  <div className="absolute bottom-4 right-4">
                    <Badge className="bg-black/80 text-white">
                      {video.duration}
                    </Badge>
                  </div>
                </div>
                
                <CardContent className="p-6">
                  <h4 className="font-semibold mb-2 line-clamp-2">{video.title}</h4>
                  <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                    {video.description}
                  </p>
                  <div className="flex items-center justify-between text-sm text-muted-foreground">
                    <span>{video.views} views</span>
                    <span>{video.date}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Conference Presentations */}
        <div>
          <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
            <Users className="w-6 h-6 text-cyber-green" />
            Conference Presentations & Speaking
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {presentations.map((presentation, index) => (
              <Card key={index} className="cyber-card hover:cyber-glow-purple transition-all duration-500">
                <div className="relative overflow-hidden rounded-t-lg">
                  <img 
                    src={presentation.image}
                    alt={presentation.title}
                    className="w-full h-48 object-cover"
                  />
                </div>
                
                <CardContent className="p-6">
                  <h4 className="font-semibold mb-2">{presentation.title}</h4>
                  <p className="text-primary font-medium mb-2">{presentation.event}</p>
                  <div className="flex items-center justify-between text-sm text-muted-foreground">
                    <span>{presentation.audience}</span>
                    <span>{presentation.date}</span>
                  </div>
                  <Button variant="outline" className="w-full mt-4 cyber-border hover:cyber-glow">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    View Slides
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};