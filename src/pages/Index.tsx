
import { Container } from "@/components/ui-components/Container";
import { Button } from "@/components/ui-components/Button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui-components/Card";
import { Badge } from "@/components/ui-components/Badge";
import { MainLayout } from "@/components/layout/MainLayout";
import { ArrowRight, TrendingUp, Zap, Shield, BarChart3, Newspaper } from "lucide-react";
import { Link } from "react-router-dom";

export default function Index() {
  const featuredInsights = [
    {
      category: "Blockchain",
      title: "The Future of DeFi: Yield Farming Strategies for 2023",
      description: "Discover the latest strategies for maximizing your DeFi yield farming returns in the current market environment.",
      image: "https://images.unsplash.com/photo-1639152201720-5e536d254d81?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
      href: "/blockchain-crypto/defi"
    },
    {
      category: "Fintech",
      title: "How AI is Revolutionizing Fraud Detection in Financial Services",
      description: "Exploring the cutting-edge AI technologies that are transforming how financial institutions detect and prevent fraud.",
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2034&q=80",
      href: "/fintech-insights/ai-big-data"
    },
    {
      category: "Crypto",
      title: "Central Bank Digital Currencies: Implications for the Future of Money",
      description: "Examining how CBDCs are being developed globally and what they mean for traditional cryptocurrencies and financial systems.",
      image: "https://images.unsplash.com/photo-1621416894569-0f39ed31d247?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1676&q=80",
      href: "/blockchain-crypto/cryptocurrencies"
    }
  ];

  const services = [
    {
      icon: <TrendingUp className="h-10 w-10 text-primary icon-glow" />,
      title: "Market Analysis",
      description: "Real-time insights and expert analysis on market trends across fintech and blockchain sectors."
    },
    {
      icon: <Zap className="h-10 w-10 text-primary icon-glow" />,
      title: "Innovation Spotlight",
      description: "Highlighting groundbreaking technologies and startups disrupting the financial landscape."
    },
    {
      icon: <Shield className="h-10 w-10 text-primary icon-glow" />,
      title: "Regulatory Updates",
      description: "Stay compliant with our comprehensive coverage of evolving regulatory frameworks worldwide."
    },
    {
      icon: <BarChart3 className="h-10 w-10 text-primary icon-glow" />,
      title: "Investment Insights",
      description: "Strategic investment perspectives on emerging opportunities in fintech and blockchain."
    }
  ];

  const latestNews = [
    {
      title: "SEC Approves Bitcoin ETF Applications in Historic Decision",
      date: "Today",
      href: "/news/sec-bitcoin-etf"
    },
    {
      title: "Major Bank Launches Blockchain-Based Cross-Border Payment System",
      date: "Yesterday",
      href: "/news/bank-blockchain-payments"
    },
    {
      title: "New Regulatory Framework for Stablecoins Announced in EU",
      date: "2 days ago",
      href: "/news/eu-stablecoin-regulation"
    },
    {
      title: "AI-Powered Trading Platform Reports 40% Increase in Accuracy",
      date: "3 days ago",
      href: "/news/ai-trading-accuracy"
    }
  ];

  return (
    <MainLayout>
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-radial from-primary/10 via-background to-background z-0" />
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1620321023374-d1a68fbc720d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2074&q=80')] opacity-10 bg-cover bg-center mix-blend-overlay" />
        
        <Container className="relative z-10 pt-20 pb-24 md:pt-32 md:pb-36">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <Badge variant="glass" className="mb-4 animate-fade-in">Insights for the Digital Economy</Badge>
            <h1 className="heading-xl animate-fade-in [animation-delay:200ms]">
              Navigate the Future of <span className="text-gradient">Finance</span> & <span className="text-gradient">Blockchain</span>
            </h1>
            <p className="text-lg text-muted-foreground animate-fade-in [animation-delay:400ms]">
              Expert analysis, market insights, and educational resources to help you stay ahead in the rapidly evolving world of fintech and blockchain technology.
            </p>
            <div className="flex flex-wrap justify-center gap-4 pt-4 animate-fade-in [animation-delay:600ms]">
              <Button size="lg" asChild>
                <Link to="/blockchain-crypto">
                  Explore Insights
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link to="/guides">
                  Learning Resources
                </Link>
              </Button>
            </div>
          </div>
        </Container>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-card/50">
        <Container>
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="heading-lg">Comprehensive Insights</h2>
            <p className="mt-4 text-muted-foreground">
              Navigating the complex world of fintech and blockchain with clarity and precision
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <Card 
                key={index} 
                variant="glass" 
                className="border border-border/40 hover:border-primary/40 transition-all duration-300 h-full"
              >
                <CardContent className="pt-6">
                  <div className="mb-4">{service.icon}</div>
                  <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                  <p className="text-muted-foreground">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      {/* Featured Insights */}
      <section className="py-20">
        <Container>
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12">
            <h2 className="heading-lg">Featured Insights</h2>
            <Link to="/fintech-insights" className="group flex items-center mt-4 md:mt-0 text-primary">
              View all insights
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredInsights.map((article, index) => (
              <Card 
                key={index} 
                variant="neo" 
                className="overflow-hidden border-0 p-0 hover:translate-y-[-5px] transition-all duration-300"
              >
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={article.image} 
                    alt={article.title} 
                    className="w-full h-full object-cover transition-transform hover:scale-105 duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge>{article.category}</Badge>
                  </div>
                </div>
                <CardHeader>
                  <CardTitle>{article.title}</CardTitle>
                  <CardDescription className="line-clamp-3 mt-2">
                    {article.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button variant="ghost" className="px-0 text-primary group" asChild>
                    <Link to={article.href}>
                      Read more 
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      {/* Latest News */}
      <section className="py-20 bg-card/50">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-1">
              <div className="sticky top-24">
                <div className="flex items-center gap-2 mb-6">
                  <Newspaper className="h-6 w-6 text-primary" />
                  <h2 className="heading-md">Latest News</h2>
                </div>
                <p className="text-muted-foreground mb-6">
                  Stay up-to-date with the most recent developments in the world of fintech and blockchain.
                </p>
                <Button asChild>
                  <Link to="/news">View All News</Link>
                </Button>
              </div>
            </div>
            
            <div className="lg:col-span-2">
              <div className="space-y-6">
                {latestNews.map((news, index) => (
                  <Card 
                    key={index} 
                    variant="glass" 
                    className="hover:bg-card/70 transition-all duration-300"
                  >
                    <CardContent className="flex justify-between items-center p-4">
                      <div>
                        <p className="text-sm text-muted-foreground">{news.date}</p>
                        <h3 className="text-base font-medium mt-1">{news.title}</h3>
                      </div>
                      <Button variant="ghost" size="icon" asChild>
                        <Link to={news.href}>
                          <ArrowRight className="h-5 w-5" />
                        </Link>
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="py-24">
        <Container>
          <div className="glass rounded-2xl relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-radial from-primary/20 via-transparent to-transparent z-0" />
            
            <div className="relative z-10 px-6 py-12 md:p-12 lg:p-16 text-center max-w-3xl mx-auto">
              <h2 className="heading-lg mb-6">Stay Ahead of the Curve</h2>
              <p className="text-lg text-muted-foreground mb-8">
                Subscribe to our newsletter and receive weekly insights, market analysis, and educational resources directly to your inbox.
              </p>
              
              <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="flex-grow px-4 py-3 rounded-md border border-input bg-secondary/50 focus:ring-1 focus:ring-primary focus:outline-none"
                  required
                />
                <Button type="submit" size="lg">
                  Subscribe
                </Button>
              </form>
              <p className="text-xs text-muted-foreground mt-4">
                By subscribing, you agree to our Privacy Policy and consent to receive updates from our company.
              </p>
            </div>
          </div>
        </Container>
      </section>
    </MainLayout>
  );
}
