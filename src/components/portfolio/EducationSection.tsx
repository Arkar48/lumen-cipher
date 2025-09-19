import { GraduationCap, Calendar, MapPin, Award, BookOpen } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

export const EducationSection = () => {
  const education = [
    {
      degree: "Master of Science in Cybersecurity",
      institution: "Stanford University",
      location: "Stanford, CA",
      period: "2019 - 2021",
      gpa: "3.9/4.0",
      image: "https://images.unsplash.com/photo-1562774053-701939374585?w=400&h=300&fit=crop",
      highlights: [
        "Specialized in Advanced Cryptography and Network Security",
        "Thesis: 'AI-Driven Threat Detection in IoT Networks'",
        "Teaching Assistant for Information Security course",
        "Dean's List for Academic Excellence"
      ],
      courses: ["Advanced Cryptography", "Network Security", "Digital Forensics", "Secure Software Development", "Risk Management"]
    },
    {
      degree: "Bachelor of Science in Computer Science",
      institution: "University of California, Berkeley",
      location: "Berkeley, CA",
      period: "2015 - 2019",
      gpa: "3.8/4.0",
      image: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=400&h=300&fit=crop",
      highlights: [
        "Concentration in Computer Security and Privacy",
        "Graduated Magna Cum Laude",
        "President of Cybersecurity Student Association",
        "Completed Security Research Internship at UC Berkeley Labs"
      ],
      courses: ["Computer Networks", "Operating Systems", "Database Security", "Software Engineering", "Algorithms"]
    },
    {
      degree: "Cybersecurity Bootcamp Certificate",
      institution: "SANS Institute",
      location: "Online",
      period: "2020",
      gpa: "Certificate",
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400&h=300&fit=crop",
      highlights: [
        "Intensive 6-month hands-on cybersecurity training",
        "Focus on Penetration Testing and Incident Response",
        "Capstone project: Enterprise Security Assessment",
        "Top 5% of cohort performance"
      ],
      courses: ["Penetration Testing", "Incident Response", "Malware Analysis", "Security Operations", "Threat Hunting"]
    }
  ];

  const achievements = [
    { title: "Academic Excellence Award", year: "2021", issuer: "Stanford University" },
    { title: "Best Research Paper Award", year: "2020", issuer: "IEEE Security Conference" },
    { title: "Cybersecurity Innovation Prize", year: "2019", issuer: "UC Berkeley" },
    { title: "Dean's List", year: "2018-2021", issuer: "Multiple Semesters" }
  ];

  return (
    <section id="education" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            <span className="gradient-matrix bg-clip-text text-transparent">Education</span> & Academic Background
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Strong academic foundation in computer science and cybersecurity with continuous learning 
            and professional development.
          </p>
        </div>

        <div className="space-y-8 mb-16">
          {education.map((edu, index) => (
            <Card key={index} className="cyber-card hover:cyber-glow transition-all duration-500">
              <div className="grid lg:grid-cols-3 gap-6">
                <div className="lg:col-span-1">
                  <img 
                    src={edu.image}
                    alt={edu.institution}
                    className="w-full h-48 lg:h-full object-cover rounded-lg"
                  />
                </div>
                
                <div className="lg:col-span-2">
                  <CardHeader>
                    <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4">
                      <div>
                        <CardTitle className="text-xl mb-2">{edu.degree}</CardTitle>
                        <p className="text-lg font-semibold text-primary">{edu.institution}</p>
                        <div className="flex items-center gap-4 mt-2 text-sm text-muted-foreground">
                          <div className="flex items-center gap-1">
                            <MapPin className="w-4 h-4" />
                            {edu.location}
                          </div>
                          <div className="flex items-center gap-1">
                            <Calendar className="w-4 h-4" />
                            {edu.period}
                          </div>
                          <div className="flex items-center gap-1">
                            <GraduationCap className="w-4 h-4" />
                            GPA: {edu.gpa}
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardHeader>
                  
                  <CardContent className="space-y-6">
                    <div>
                      <h4 className="font-semibold mb-3 flex items-center gap-2">
                        <Award className="w-4 h-4 text-cyber-orange" />
                        Key Highlights
                      </h4>
                      <ul className="space-y-2">
                        {edu.highlights.map((highlight, hlIndex) => (
                          <li key={hlIndex} className="text-sm text-muted-foreground flex items-start gap-2">
                            <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                            {highlight}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold mb-3 flex items-center gap-2">
                        <BookOpen className="w-4 h-4 text-cyber-blue" />
                        Relevant Coursework
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {edu.courses.map((course, courseIndex) => (
                          <Badge 
                            key={courseIndex} 
                            variant="outline" 
                            className="text-xs cyber-border"
                          >
                            {course}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <Card className="cyber-card">
          <CardHeader>
            <CardTitle className="flex items-center gap-3">
              <Award className="w-6 h-6 text-cyber-orange" />
              Academic Achievements & Awards
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-4">
              {achievements.map((achievement, index) => (
                <div 
                  key={index} 
                  className="flex items-center justify-between p-4 rounded-lg bg-muted/50 cyber-border"
                >
                  <div>
                    <h4 className="font-semibold">{achievement.title}</h4>
                    <p className="text-sm text-muted-foreground">{achievement.issuer}</p>
                  </div>
                  <Badge variant="outline" className="cyber-border">
                    {achievement.year}
                  </Badge>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};