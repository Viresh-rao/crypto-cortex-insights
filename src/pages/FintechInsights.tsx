
import { Container } from "@/components/ui-components/Container";
import { Button } from "@/components/ui-components/Button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui-components/Card";
import { Badge } from "@/components/ui-components/Badge";
import { MainLayout } from "@/components/layout/MainLayout";
import { ArrowRight, Wallet, Brain, FileCheck, Umbrella, Search } from "lucide-react";
import { Link } from "react-router-dom";

export default function FintechInsights() {
  const categories = [
    {
      title: "Digital Payments",
      icon: <Wallet className="h-10 w-10 text-primary icon-glow" />,
      description: "Mobile wallets, P2P transfers, and the evolution of neobanks redefining how we transact.",
      href: "/fintech-insights/digital-payments",
      articles: 24
    },
    {
      title: "AI & Big Data",
      icon: <Brain className="h-10 w-10 text-primary icon-glow" />,
      description: "How machine learning and data analytics are transforming fraud detection and predictive financial services.",
      href: "/fintech-insights/ai-big-data",
      articles: 36
    },
    {
      title: "RegTech",
      icon: <FileCheck className="h-10 w-10 text-primary icon-glow" />,
      description: "Compliance automation and KYC/AML solutions streamlining regulatory processes in finance.",
      href: "/fintech-insights/regtech",
      articles: 18
    },
    {
      title: "InsurTech",
      icon: <Umbrella className="h-10 w-10 text-primary icon-glow" />,
      description: "Blockchain-powered insurance models and digital solutions reshaping the insurance industry.",
      href: "/fintech-insights/insurtech",
      articles: 15
    }
  ];

  const featuredArticles = [
    {
      category: "Digital Payments",
      title: "The Rise of CBDCs: How Central Bank Digital Currencies Will Transform Payments",
      description: "Central banks worldwide are developing their own digital currencies. Learn how these CBDCs could revolutionize payment systems and what they mean for traditional banking.",
      image: "https://images.unsplash.com/photo-1616077168712-fc6c788eb2cb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
      href: "/fintech-insights/digital-payments/cbdcs"
    },
    {
      category: "AI & Big Data",
      title: "Predictive Analytics in Lending: The New Credit Score",
      description: "How lenders are moving beyond traditional credit scores to use AI-powered behavioral analytics for more accurate risk assessment and inclusive lending practices.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
      href: "/fintech-insights/ai-big-data/predictive-lending"
    },
    {
      category: "RegTech",
      title: "Global AML Regulations: Staying Compliant in a Complex Landscape",
      description: "Navigating the increasingly complex world of anti-money laundering regulations across jurisdictions, and how RegTech solutions are helping financial institutions adapt.",
      image: "https://images.unsplash.com/photo-1607944024060-0450380ddd33?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
      href: "/fintech-insights/regtech/global-aml"
    }
  ];

  const trendingTopics = [
    "Embedded Finance", 
    "BNPL Services", 
    "Open Banking APIs", 
    "Algorithmic Trading", 
    "Digital Identity", 
    "Quantum Computing in Finance", 
    "Green Fintech", 
    "Financial Inclusion"
  ];

  return (
    <MainLayout>
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-radial from-primary/10 via-background to-background z-0" />
        
        <Container className="relative z-10 pt-20 pb-24 md:pt-32 md:pb-36">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <Badge variant="glass" className="mb-4 animate-fade-in">Insights Hub</Badge>
            <h1 className="heading-xl animate-fade-in [animation-delay:200ms]">
              Fintech <span className="text-gradient">Insights</span>
            </h1>
            <p className="text-lg text-muted-foreground animate-fade-in [animation-delay:400ms]">
              Comprehensive analysis and expert perspectives on the latest innovations in financial technology and digital transformation.
            </p>
          </div>
        </Container>
      </section>

      {/* Categories Section */}
      <section className="py-20">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {categories.map((category, index) => (
              <Card 
                key={index} 
                variant="glass" 
                className="hover:border-primary/40 transition-all duration-300"
              >
                <CardHeader>
                  <div className="mb-4">{category.icon}</div>
                  <CardTitle>{category.title}</CardTitle>
                  <CardDescription className="mt-2">
                    {category.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex justify-between items-center">
                  <Badge variant="secondary">{category.articles} Articles</Badge>
                  <Button variant="ghost" size="sm" className="group" asChild>
                    <Link to={category.href}>
                      Explore
                      <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      {/* Featured Articles */}
      <section className="py-20 bg-card/50">
        <Container>
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12">
            <h2 className="heading-lg">Featured Articles</h2>
            <div className="relative mt-4 md:mt-0">
              <Search className="h-5 w-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search articles..."
                className="pl-10 pr-4 py-2 rounded-md border border-input bg-secondary/50 focus:ring-1 focus:ring-primary focus:outline-none w-full md:w-64"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {featuredArticles.map((article, index) => (
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

      {/* Trending Topics */}
      <section className="py-20">
        <Container>
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="heading-lg">Trending Topics</h2>
            <p className="mt-4 text-muted-foreground">
              Stay current with the most discussed subjects in financial technology
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-3">
            {trendingTopics.map((topic, index) => (
              <Badge 
                key={index} 
                variant="secondary" 
                className="text-sm py-2 px-4 cursor-pointer hover:bg-primary/20 transition-colors"
              >
                {topic}
              </Badge>
            ))}
          </div>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-card/50">
        <Container>
          <div className="glass rounded-2xl relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-radial from-primary/20 via-transparent to-transparent z-0" />
            
            <div className="relative z-10 px-6 py-12 md:p-12 lg:p-16 flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="text-center md:text-left max-w-lg">
                <h2 className="heading-lg mb-4">Join Our Expert Webinar Series</h2>
                <p className="text-muted-foreground">
                  Register for our upcoming webinars featuring industry leaders discussing the latest trends and innovations in fintech.
                </p>
              </div>
              
              <Button size="lg" className="whitespace-nowrap" asChild>
                <Link to="/events">
                  View Upcoming Events
                </Link>
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </MainLayout>
  );
}
