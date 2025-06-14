import { Button } from "@/components/ui/button";
import { Home, ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="text-center">
        <div className="mb-8">
          <h1 className="text-9xl font-black text-gray-300">404</h1>
          <h2 className="text-3xl font-black text-black mt-4">Page Not Found</h2>
          <p className="text-gray-600 mt-2">Sorry, we couldn't find the page you're looking for.</p>
        </div>
        
        <div className="space-x-4">
          <Button asChild className="bg-black text-white border-2 border-black hover:bg-orange-500">
            <a href="/">
              <Home className="mr-2" size={16} />
              Go Home
            </a>
          </Button>
          <Button 
            onClick={() => window.history.back()}
            className="bg-white text-black border-2 border-black hover:bg-gray-800 hover:text-white"
          >
            <ArrowLeft className="mr-2" size={16} />
            Go Back
          </Button>
        </div>
      </div>
    </div>
  );
}