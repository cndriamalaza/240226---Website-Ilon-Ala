
import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background">
      <div className="text-center space-y-6 px-4">
        <h1 className="font-serif text-6xl font-bold text-primary">404</h1>
        <p className="text-xl text-muted-foreground font-serif">Oops! The page you are looking for has vanished into the forest.</p>
        <Link to="/">
          <Button size="lg" className="bg-primary text-white hover:bg-primary/90">
            Return to Home
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
