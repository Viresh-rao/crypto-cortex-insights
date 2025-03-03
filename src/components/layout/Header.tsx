
import { useState, useEffect } from "react";
import { Container } from "../ui-components/Container";
import { Button } from "../ui-components/Button";
import { Link } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

type NavItemType = {
  label: string;
  href: string;
  children?: { label: string; href: string }[];
};

const navItems: NavItemType[] = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  {
    label: "Fintech Insights",
    href: "/fintech-insights",
    children: [
      { label: "Digital Payments", href: "/fintech-insights/digital-payments" },
      { label: "AI & Big Data", href: "/fintech-insights/ai-big-data" },
      { label: "RegTech", href: "/fintech-insights/regtech" },
      { label: "InsurTech", href: "/fintech-insights/insurtech" },
    ],
  },
  {
    label: "Blockchain & Crypto",
    href: "/blockchain-crypto",
    children: [
      { label: "Cryptocurrencies", href: "/blockchain-crypto/cryptocurrencies" },
      { label: "DeFi", href: "/blockchain-crypto/defi" },
      { label: "Smart Contracts", href: "/blockchain-crypto/smart-contracts" },
      { label: "NFTs & Tokenization", href: "/blockchain-crypto/nfts-tokenization" },
      { label: "Enterprise Blockchain", href: "/blockchain-crypto/enterprise" },
    ],
  },
  { label: "News", href: "/news" },
  { label: "Guides", href: "/guides" },
];

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  // Handle scroll for header background
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleDropdown = (label: string) => {
    if (openDropdown === label) {
      setOpenDropdown(null);
    } else {
      setOpenDropdown(label);
    }
  };

  return (
    <header
      className={cn(
        "fixed top-0 left-0 w-full z-50 transition-all duration-300",
        scrollY > 10 ? "glass py-3" : "bg-transparent py-5"
      )}
    >
      <Container className="flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="text-xl md:text-2xl font-bold tracking-tight">
          <span className="text-gradient">CryptoInsight</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-1">
          {navItems.map((item) => (
            <div key={item.label} className="relative group">
              {item.children ? (
                <button
                  onClick={() => toggleDropdown(item.label)}
                  className="px-3 py-2 text-sm flex items-center gap-1 hover:text-primary transition-colors"
                >
                  {item.label}
                  <ChevronDown size={16} />
                </button>
              ) : (
                <Link
                  to={item.href}
                  className="px-3 py-2 text-sm hover:text-primary transition-colors"
                >
                  {item.label}
                </Link>
              )}

              {/* Dropdown Menu */}
              {item.children && (
                <div
                  className={cn(
                    "absolute top-full left-0 mt-1 p-2 glass rounded-md min-w-40 transition-all transform opacity-0 translate-y-2 pointer-events-none",
                    openDropdown === item.label && "opacity-100 translate-y-0 pointer-events-auto"
                  )}
                >
                  <div className="flex flex-col">
                    {item.children.map((child) => (
                      <Link
                        key={child.label}
                        to={child.href}
                        className="px-3 py-2 text-sm hover:text-primary transition-colors rounded-sm hover:bg-secondary/50"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </nav>

        {/* CTA Button */}
        <div className="hidden md:flex">
          <Button>Subscribe</Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden text-foreground"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile Menu */}
        <div
          className={cn(
            "fixed inset-0 z-40 bg-background/95 backdrop-blur-md lg:hidden transition-transform transform",
            isMenuOpen ? "translate-x-0" : "translate-x-full"
          )}
        >
          <Container className="flex flex-col h-full py-20">
            <nav className="flex flex-col gap-4">
              {navItems.map((item) => (
                <div key={item.label} className="flex flex-col">
                  {item.children ? (
                    <>
                      <button
                        onClick={() => toggleDropdown(item.label)}
                        className="flex items-center justify-between px-3 py-2 text-lg font-medium"
                      >
                        {item.label}
                        <ChevronDown
                          size={20}
                          className={cn(
                            "transition-transform",
                            openDropdown === item.label && "rotate-180"
                          )}
                        />
                      </button>
                      <div
                        className={cn(
                          "overflow-hidden transition-all",
                          openDropdown === item.label
                            ? "max-h-80 opacity-100 mt-2"
                            : "max-h-0 opacity-0"
                        )}
                      >
                        <div className="bg-secondary/50 rounded-md py-2 pl-6">
                          {item.children.map((child) => (
                            <Link
                              key={child.label}
                              to={child.href}
                              className="block px-3 py-2 text-sm hover:text-primary"
                              onClick={() => setIsMenuOpen(false)}
                            >
                              {child.label}
                            </Link>
                          ))}
                        </div>
                      </div>
                    </>
                  ) : (
                    <Link
                      to={item.href}
                      className="px-3 py-2 text-lg font-medium hover:text-primary"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.label}
                    </Link>
                  )}
                </div>
              ))}
              <div className="mt-6">
                <Button className="w-full">Subscribe</Button>
              </div>
            </nav>
          </Container>
        </div>
      </Container>
    </header>
  );
}
