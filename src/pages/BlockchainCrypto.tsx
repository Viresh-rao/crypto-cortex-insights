
import { Container } from "@/components/ui-components/Container";
import { Button } from "@/components/ui-components/Button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui-components/Card";
import { Badge } from "@/components/ui-components/Badge";
import { MainLayout } from "@/components/layout/MainLayout";
import { ArrowRight, Bitcoin, Building, FileCode, Image, Search } from "lucide-react";
import { Link } from "react-router-dom";

export default function BlockchainCrypto() {
  const categories = [
    {
      title: "Cryptocurrencies",
      icon: <Bitcoin className="h-10 w-10 text-primary icon-glow" />,
      description: "Bitcoin, Ethereum, Stablecoins and the evolving landscape of digital currencies.",
      href: "/blockchain-crypto/cryptocurrencies",
      articles: 42
    },
    {
      title: "DeFi",
      icon: <Building className="h-10 w-10 text-primary icon-glow" />,
      description: "Lending platforms, staking, yield farming, and the future of decentralized finance.",
      href: "/blockchain-crypto/defi",
      articles: 38
    },
    {
      title: "Smart Contracts",
      icon: <FileCode className="h-10 w-10 text-primary icon-glow" />,
      description: "Exploring use cases in finance & automation through self-executing agreements on blockchain.",
      href: "/blockchain-crypto/smart-contracts",
      articles: 26
    },
    {
      title: "NFTs & Tokenization",
      icon: <Image className="h-10 w-10 text-primary icon-glow" />,
      description: "Real-world applications of non-fungible tokens and asset tokenization across industries.",
      href: "/blockchain-crypto/nfts-tokenization",
      articles: 31
    }
  ];

  const featuredArticles = [
    {
      category: "DeFi",
      title: "Liquid Staking Derivatives: The Next Evolution in DeFi Yield Generation",
      description: "How liquid staking derivatives are creating new opportunities for yield generation while maintaining liquidity for staked assets.",
      image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1932&q=80",
      href: "/blockchain-crypto/defi/liquid-staking"
    },
    {
      category: "Cryptocurrencies",
      title: "Layer 2 Solutions: Scaling Blockchain for Mass Adoption",
      description: "An in-depth look at how Layer 2 scaling solutions are addressing blockchain's throughput limitations and paving the way for mainstream adoption.",
      image: "https://images.unsplash.com/photo-1620321023374-d1a68fbc720d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",
      href: "/blockchain-crypto/cryptocurrencies/layer-2"
    },
    {
      category: "Smart Contracts",
      title: "Smart Contracts in Supply Chain: Enhancing Transparency and Efficiency",
      description: "How blockchain-based smart contracts are revolutionizing supply chain management with automated verification, tracking, and settlement processes.",
      image: "https://images.unsplash.com/photo-1493946740644-2d8a1f1a6aff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1748&q=80",
      href: "/blockchain-crypto/smart-contracts/supply-chain"
    }
  ];

  const marketData = [
    { name: "Bitcoin (BTC)", price: "$67,890.45", change: "+3.2%" },
    { name: "Ethereum (ETH)", price: "$3,456.78", change: "+2.7%" },
    { name: "Solana (SOL)", price: "$123.45", change: "+5.1%" },
    { name: "Cardano (ADA)", price: "$0.65", change: "-1.3%" },
    { name: "Polkadot (DOT)", price: "$9.32", change: "+0.8%" }
  ];

  return (
    <MainLayout>
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-radial from-primary/10 via-background to-background z-0" />
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1639762681057-408e52192e55?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2832&q=80')] opacity-10 bg-cover bg-center mix-blend-overlay" />
        
        <Container className="relative z-10 pt-20 pb-24 md:pt-32 md:pb-36">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <Badge variant="glass" className="mb-4 animate-fade-in">Decentralized Future</Badge>
            <h1 className="heading-xl animate-fade-in [animation-delay:200ms]">
              Blockchain & <span className="text-gradient">Crypto</span>
            </h1>
            <p className="text-lg text-muted-foreground animate-fade-in [animation-delay:400ms]">
              Deep dives into blockchain technology, cryptocurrencies, and the decentralized ecosystem reshaping our financial landscape.
            </p>
          </div>
        </Container>
      </section>

      {/* Market Data Section */}
      <section className="py-6 bg-card/30 border-y border-border/50">
        <Container>
          <div className="flex overflow-x-auto scrollbar-none py-2">
            <div className="flex gap-8 animate-[slide_25s_linear_infinite]">
              {[...marketData, ...marketData].map((coin, index) => (
                <div key={index} className="flex items-center gap-3 whitespace-nowrap">
                  <span className="font-medium">{coin.name}:</span>
                  <span>{coin.price}</span>
                  <span className={coin.change.startsWith('+') ? 'text-green-400' : 'text-red-400'}>
                    {coin.change}
                  </span>
                </div>
              ))}
            </div>
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
            <h2 className="heading-lg">Featured Research</h2>
            <div className="relative mt-4 md:mt-0">
              <Search className="h-5 w-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search research..."
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

      {/* Education Section */}
      <section className="py-20">
        <Container>
          <div className="glass rounded-lg overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="p-8 lg:p-12">
                <Badge variant="secondary" className="mb-6">Learn Blockchain</Badge>
                <h2 className="heading-lg mb-6">Blockchain Fundamentals: A Comprehensive Guide</h2>
                <p className="text-muted-foreground mb-8">
                  Start your journey into blockchain technology with our beginner-friendly guides, tutorials, and interactive resources designed to build a solid foundation of knowledge.
                </p>
                <Button asChild>
                  <Link to="/guides">
                    Explore Learning Resources
                  </Link>
                </Button>
              </div>

              <div className="relative h-60 lg:h-auto overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1569025690938-a00729c9e1f9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
                  alt="Blockchain Education" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-card at-20% to-transparent" />
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 bg-card/50">
        <Container>
          <div className="neo rounded-2xl p-8 md:p-12">
            <div className="max-w-3xl mx-auto text-center space-y-6">
              <Badge variant="glass" className="mb-2">Stay Updated</Badge>
              <h2 className="heading-lg">Subscribe to Our Crypto Newsletter</h2>
              <p className="text-muted-foreground">
                Get weekly insights on blockchain innovations, market analysis, and expert opinions delivered directly to your inbox.
              </p>
              
              <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto mt-8">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="flex-grow px-4 py-3 rounded-md border border-input bg-secondary/50 focus:ring-1 focus:ring-primary focus:outline-none"
                  required
                />
                <Button type="submit">
                  Subscribe
                </Button>
              </form>
            </div>
          </div>
        </Container>
      </section>
    </MainLayout>
  );
}
