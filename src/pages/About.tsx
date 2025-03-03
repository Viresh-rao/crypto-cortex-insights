
import { Container } from "@/components/ui-components/Container";
import { Button } from "@/components/ui-components/Button";
import { Card } from "@/components/ui-components/Card";
import { Badge } from "@/components/ui-components/Badge";
import { MainLayout } from "@/components/layout/MainLayout";
import { Mail, Twitter, Linkedin, Github } from "lucide-react";

export default function About() {
  const teamMembers = [
    {
      name: "Alex Chen",
      role: "Founder & CEO",
      bio: "Former fintech executive with 15+ years of experience in digital banking and blockchain integration.",
      image: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
      social: {
        twitter: "#",
        linkedin: "#",
        github: "#"
      }
    },
    {
      name: "Maya Johnson",
      role: "Chief Research Officer",
      bio: "Blockchain researcher and economist specializing in cryptocurrency market analysis and regulatory frameworks.",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80",
      social: {
        twitter: "#",
        linkedin: "#"
      }
    },
    {
      name: "David Park",
      role: "Head of Technology",
      bio: "Former senior developer at a major crypto exchange with expertise in DeFi protocols and smart contracts.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80",
      social: {
        twitter: "#",
        linkedin: "#",
        github: "#"
      }
    },
    {
      name: "Sarah Williams",
      role: "Content Director",
      bio: "Award-winning financial journalist with a decade of experience covering emerging technologies in finance.",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1961&q=80",
      social: {
        twitter: "#",
        linkedin: "#"
      }
    }
  ];

  const values = [
    {
      title: "Accuracy",
      description: "We are committed to providing accurate, well-researched information that our readers can trust and rely on."
    },
    {
      title: "Independence",
      description: "Our insights and analysis remain independent and unbiased, free from external influence or financial incentives."
    },
    {
      title: "Accessibility",
      description: "We believe in making complex financial concepts and technologies accessible to everyone, regardless of their background."
    },
    {
      title: "Innovation",
      description: "We constantly explore and embrace new ideas, technologies, and approaches in the ever-evolving financial landscape."
    }
  ];

  return (
    <MainLayout>
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-radial from-primary/10 via-background to-background z-0" />
        
        <Container className="relative z-10 pt-20 pb-24 md:pt-32 md:pb-36">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <Badge variant="glass" className="mb-4 animate-fade-in">Our Story</Badge>
            <h1 className="heading-xl animate-fade-in [animation-delay:200ms]">
              About <span className="text-gradient">CryptoInsight</span>
            </h1>
            <p className="text-lg text-muted-foreground animate-fade-in [animation-delay:400ms]">
              We are a team of fintech experts, blockchain enthusiasts, and financial analysts dedicated to providing you with the most valuable insights in the digital economy.
            </p>
          </div>
        </Container>
      </section>

      {/* Mission Section */}
      <section className="py-20">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <div className="relative rounded-lg overflow-hidden h-[500px] neo">
                <img 
                  src="https://images.unsplash.com/photo-1523961131990-5ea7c61b2107?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80" 
                  alt="Our mission" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
              </div>
            </div>
            
            <div className="order-1 lg:order-2">
              <Badge variant="secondary" className="mb-6">Our Mission</Badge>
              <h2 className="heading-lg mb-6">Empowering Informed Decisions in the Digital Economy</h2>
              <div className="space-y-6 text-lg">
                <p>
                  Founded in 2022, CryptoInsight emerged from a vision to bridge the knowledge gap in the rapidly evolving fintech and blockchain space. We recognized that as these technologies transform our financial systems, there was a critical need for clear, accurate, and accessible information.
                </p>
                <p>
                  Our mission is to demystify complex financial technologies and provide actionable insights that empower individuals and organizations to navigate the digital economy confidently. We believe that understanding these innovations is key to harnessing their potential.
                </p>
                <p>
                  Through rigorous research, expert analysis, and educational content, we strive to be your trusted companion in exploring the frontiers of financial technology and blockchain innovation.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-card/50">
        <Container>
          <div className="text-center max-w-2xl mx-auto mb-16">
            <Badge variant="glass" className="mb-4">What We Stand For</Badge>
            <h2 className="heading-lg">Our Core Values</h2>
            <p className="mt-4 text-muted-foreground">
              The principles that guide our work and shape our content
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <Card 
                key={index} 
                variant="glass" 
                className="border border-border/40 hover:border-primary/40 transition-all duration-300"
              >
                <div className="p-8">
                  <h3 className="text-xl font-semibold mb-4">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </div>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      {/* Team Section */}
      <section className="py-20" id="team">
        <Container>
          <div className="text-center max-w-2xl mx-auto mb-16">
            <Badge variant="secondary" className="mb-4">Meet The Team</Badge>
            <h2 className="heading-lg">The Experts Behind CryptoInsight</h2>
            <p className="mt-4 text-muted-foreground">
              Our diverse team brings together expertise from finance, technology, and media
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div 
                key={index} 
                className="group"
              >
                <div className="relative overflow-hidden rounded-lg neo aspect-square mb-6">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <div className="flex justify-center space-x-3">
                      {member.social.twitter && (
                        <a href={member.social.twitter} className="bg-secondary/80 p-2 rounded-full hover:bg-primary/80 transition-colors">
                          <Twitter className="h-4 w-4" />
                        </a>
                      )}
                      {member.social.linkedin && (
                        <a href={member.social.linkedin} className="bg-secondary/80 p-2 rounded-full hover:bg-primary/80 transition-colors">
                          <Linkedin className="h-4 w-4" />
                        </a>
                      )}
                      {member.social.github && (
                        <a href={member.social.github} className="bg-secondary/80 p-2 rounded-full hover:bg-primary/80 transition-colors">
                          <Github className="h-4 w-4" />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
                
                <h3 className="text-xl font-semibold">{member.name}</h3>
                <p className="text-primary text-sm mb-2">{member.role}</p>
                <p className="text-muted-foreground text-sm">{member.bio}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-card/50">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <Badge variant="glass" className="mb-6">Get In Touch</Badge>
              <h2 className="heading-lg mb-6">Contact Us</h2>
              <p className="text-muted-foreground mb-8">
                Have questions, feedback, or partnership inquiries? We'd love to hear from you. Reach out to our team using any of the methods below.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <Mail className="h-6 w-6 text-primary mr-4 mt-1" />
                  <div>
                    <h3 className="font-medium">Email Us</h3>
                    <p className="text-muted-foreground">info@cryptoinsight.com</p>
                    <p className="text-muted-foreground">support@cryptoinsight.com</p>
                  </div>
                </div>
                
                <div>
                  <h3 className="font-medium mb-3">Follow Us</h3>
                  <div className="flex space-x-4">
                    <a href="#" className="bg-secondary p-3 rounded-full hover:bg-primary/80 transition-colors">
                      <Twitter className="h-5 w-5" />
                    </a>
                    <a href="#" className="bg-secondary p-3 rounded-full hover:bg-primary/80 transition-colors">
                      <Linkedin className="h-5 w-5" />
                    </a>
                    <a href="#" className="bg-secondary p-3 rounded-full hover:bg-primary/80 transition-colors">
                      <Github className="h-5 w-5" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <form className="glass p-8 rounded-lg">
                <div className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium mb-2">Name</label>
                      <input
                        id="name"
                        type="text"
                        className="w-full px-4 py-3 rounded-md border border-input bg-secondary/50 focus:ring-1 focus:ring-primary focus:outline-none"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium mb-2">Email</label>
                      <input
                        id="email"
                        type="email"
                        className="w-full px-4 py-3 rounded-md border border-input bg-secondary/50 focus:ring-1 focus:ring-primary focus:outline-none"
                        placeholder="Your email"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium mb-2">Subject</label>
                    <input
                      id="subject"
                      type="text"
                      className="w-full px-4 py-3 rounded-md border border-input bg-secondary/50 focus:ring-1 focus:ring-primary focus:outline-none"
                      placeholder="What is this regarding?"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2">Message</label>
                    <textarea
                      id="message"
                      rows={6}
                      className="w-full px-4 py-3 rounded-md border border-input bg-secondary/50 focus:ring-1 focus:ring-primary focus:outline-none"
                      placeholder="Your message..."
                    />
                  </div>
                  
                  <Button type="submit" className="w-full">
                    Send Message
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </Container>
      </section>
    </MainLayout>
  );
}
