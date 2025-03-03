
import { Container } from "@/components/ui-components/Container";
import { Button } from "@/components/ui-components/Button";
import { MainLayout } from "@/components/layout/MainLayout";
import { Home } from "lucide-react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";

export default function NotFound() {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <MainLayout>
      <section className="py-20 md:py-32">
        <Container>
          <div className="max-w-lg mx-auto text-center">
            <h1 className="text-9xl font-bold text-primary mb-6">404</h1>
            <h2 className="heading-lg mb-4">Page Not Found</h2>
            <p className="text-muted-foreground mb-8">
              The page you are looking for doesn't exist or has been moved. Please check the URL or return to the homepage.
            </p>
            <Button size="lg" asChild>
              <Link to="/">
                <Home className="mr-2 h-5 w-5" />
                Back to Home
              </Link>
            </Button>
          </div>
        </Container>
      </section>
    </MainLayout>
  );
}
