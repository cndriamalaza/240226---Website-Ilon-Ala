
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Order = () => {
    return (
        <div className="min-h-screen flex items-center justify-center bg-muted/20">
            <div className="text-center space-y-6 max-w-lg px-4">
                <h1 className="font-serif text-3xl font-bold">How to Order</h1>
                <p className="text-muted-foreground">
                    We currently process orders manually to ensure stock availability and personalized shipping quotes, especially for international orders.
                </p>
                <div className="flex flex-col gap-3">
                    <Link to="/contact">
                        <Button className="w-full h-12 text-lg">Contact Sales Team</Button>
                    </Link>
                    <Link to="/catalogue">
                        <Button variant="outline" className="w-full h-12 text-lg">Browse Catalogue</Button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Order;
