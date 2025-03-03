
import { Link } from "react-router-dom";
import { Container } from "../ui-components/Container";
import { Button } from "../ui-components/Button";
import { Mail } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    {
      title: "Explore",
      links: [
        { label: "Home", href: "/" },
        { label: "About Us", href: "/about" },
        { label: "Fintech Insights", href: "/fintech-insights" },
        { label: "Blockchain & Crypto", href: "/blockchain-crypto" },
        { label: "News", href: "/news" },
      ],
    },
    {
      title: "Resources",
      links: [
        { label: "Learning Guides", href: "/guides" },
        { label: "Reviews", href: "/reviews" },
        { label: "Community", href: "/community" },
        { label: "Events", href: "/events" },
        { label: "Glossary", href: "/glossary" },
      ],
    },
    {
      title: "Company",
      links: [
        { label: "Team", href: "/about#team" },
        { label: "Partnerships", href: "/partnerships" },
        { label: "Advertise", href: "/advertise" },
        { label: "Contact", href: "/contact" },
        { label: "Privacy Policy", href: "/privacy" },
      ],
    },
  ];

  return (
    <footer className="bg-background border-t border-border">
      <Container className="py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand & Newsletter */}
          <div className="space-y-6">
            <Link to="/" className="text-2xl font-bold tracking-tight">
              <span className="text-gradient">CryptoInsight</span>
            </Link>
            <p className="text-muted-foreground">
              Stay ahead in the rapidly evolving world of fintech and blockchain
              with our expert insights and analysis.
            </p>
            <div className="flex gap-4">
              <form className="flex flex-col space-y-3 w-full">
                <h3 className="text-sm font-medium">Subscribe to our newsletter</h3>
                <div className="relative">
                  <input
                    type="email"
                    placeholder="Your email"
                    className="w-full rounded-md border border-input bg-secondary py-2 pl-3 pr-10 text-sm focus:ring-1 focus:ring-primary"
                  />
                  <Button
                    size="icon"
                    className="absolute right-0 top-0 h-full aspect-square rounded-l-none"
                  >
                    <Mail size={16} />
                  </Button>
                </div>
              </form>
            </div>
          </div>

          {/* Footer Links */}
          {footerLinks.map((section) => (
            <div key={section.title} className="space-y-6">
              <h3 className="text-sm font-medium tracking-wide opacity-80">
                {section.title}
              </h3>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.href}
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center border-t border-border mt-12 pt-8 text-sm text-muted-foreground">
          <p>© {currentYear} CryptoInsight. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <Link to="/terms" className="hover:text-primary transition-colors">
              Terms
            </Link>
            <Link to="/privacy" className="hover:text-primary transition-colors">
              Privacy
            </Link>
            <Link to="/cookies" className="hover:text-primary transition-colors">
              Cookies
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}
