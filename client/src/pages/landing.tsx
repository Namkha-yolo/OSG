import { Button } from "@/components/ui/button";
import { Github, Chrome, Apple } from "lucide-react";
import { useState } from "react";

export default function Landing() {
  const [isLoading, setIsLoading] = useState<string | null>(null);

  const handleOAuthLogin = async (provider: string) => {
    try {
      setIsLoading(provider);
      // Redirect to Replit Auth login endpoint
      window.location.href = "/api/login";
    } catch (err) {
      console.error("Auth error:", err);
    } finally {
      setIsLoading(null);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 p-8 bg-gray-50 z-50 border-b-2 border-black">
        <nav className="flex justify-between items-center">
          <div className="text-2xl font-black tracking-tight bg-black text-white px-4 py-2 transform -skew-x-12">
            OSG
          </div>
          <div className="hidden md:flex gap-8">
            <a href="#" className="text-black font-medium hover:text-orange-500 transition-colors relative group">
              About
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-orange-500 transition-all group-hover:w-full"></span>
            </a>
            <a href="#" className="text-black font-medium hover:text-orange-500 transition-colors relative group">
              Features
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-orange-500 transition-all group-hover:w-full"></span>
            </a>
            <a href="#" className="text-black font-medium hover:text-orange-500 transition-colors relative group">
              Contact
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-orange-500 transition-all group-hover:w-full"></span>
            </a>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-8">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="absolute -top-4 right-4 bg-orange-500 text-white px-3 py-1 text-sm font-bold uppercase transform rotate-3 shadow-lg">
              Beta 2025
            </div>
            
            <h1 className="text-6xl md:text-8xl font-black leading-none mb-8">
              <span className="block text-black stroke-text">OPEN</span>
              <span className="block bg-gradient-to-r from-orange-500 to-yellow-500 bg-clip-text text-transparent">SOURCE</span>
              <span className="block text-black stroke-text">GAMING</span>
            </h1>
            
            <p className="text-xl text-gray-700 mb-8 max-w-lg">
              Turn your code commits into achievements. Make open source contribution as addictive as your favorite game.
            </p>

            {/* OAuth Login Section */}
            <div className="space-y-4">
              <p className="text-sm font-bold uppercase tracking-wide text-gray-800 mb-4">
                Start Your Gaming Journey →
              </p>
              
              {/* GitHub OAuth Button */}
              <Button
                onClick={() => handleOAuthLogin("github")}
                disabled={isLoading === "github"}
                className="w-full h-14 bg-white border-2 border-black text-black hover:bg-gray-900 hover:text-white hover:shadow-lg hover:-translate-y-1 transition-all duration-200 font-bold text-base"
              >
                <Github className="mr-3" size={20} />
                {isLoading === "github" ? "Connecting..." : "Continue with GitHub"}
                {isLoading === "github" && (
                  <div className="ml-auto animate-spin rounded-full h-4 w-4 border-2 border-gray-900 border-t-transparent"></div>
                )}
              </Button>

              {/* Google OAuth Button */}
              <Button
                onClick={() => handleOAuthLogin("google")}
                disabled={isLoading === "google"}
                className="w-full h-14 bg-white border-2 border-black text-black hover:bg-blue-600 hover:text-white hover:shadow-lg hover:-translate-y-1 transition-all duration-200 font-bold text-base"
              >
                <Chrome className="mr-3" size={20} />
                {isLoading === "google" ? "Connecting..." : "Continue with Google"}
                {isLoading === "google" && (
                  <div className="ml-auto animate-spin rounded-full h-4 w-4 border-2 border-blue-600 border-t-transparent"></div>
                )}
              </Button>

              {/* Apple OAuth Button */}
              <Button
                onClick={() => handleOAuthLogin("apple")}
                disabled={isLoading === "apple"}
                className="w-full h-14 bg-white border-2 border-black text-black hover:bg-black hover:text-white hover:shadow-lg hover:-translate-y-1 transition-all duration-200 font-bold text-base"
              >
                <Apple className="mr-3" size={20} />
                {isLoading === "apple" ? "Connecting..." : "Continue with Apple"}
                {isLoading === "apple" && (
                  <div className="ml-auto animate-spin rounded-full h-4 w-4 border-2 border-black border-t-transparent"></div>
                )}
              </Button>
            </div>

            <p className="text-xs text-gray-500 mt-6 leading-relaxed">
              By signing up, you agree to our{" "}
              <a href="#" className="text-blue-600 hover:text-blue-500 underline">Terms of Service</a>{" "}
              and{" "}
              <a href="#" className="text-blue-600 hover:text-blue-500 underline">Privacy Policy</a>
            </p>
          </div>

          {/* Visual Grid */}
          <div className="flex items-center justify-center">
            <div className="grid grid-cols-3 gap-6 transform rotate-3">
              <div className="w-24 h-24 bg-yellow-500 border-2 border-black flex items-center justify-center text-2xl font-black hover:shadow-lg hover:-translate-y-2 transition-all cursor-pointer">
                lol
              </div>
              <div className="w-24 h-24 bg-orange-500 border-2 border-black flex items-center justify-center text-2xl font-black hover:shadow-lg hover:-translate-y-2 transition-all cursor-pointer">
                ^.^
              </div>
              <div className="w-24 h-24 bg-black text-white border-2 border-black flex items-center justify-center text-2xl font-black hover:shadow-lg hover:-translate-y-2 transition-all cursor-pointer">
                { }
              </div>
              <div className="w-24 h-24 bg-white border-2 border-black flex items-center justify-center text-2xl font-black hover:shadow-lg hover:-translate-y-2 transition-all cursor-pointer">
                0_0
              </div>
              <div className="w-24 h-24 bg-green-400 border-2 border-black flex items-center justify-center text-2xl font-black hover:shadow-lg hover:-translate-y-2 transition-all cursor-pointer">
                $
              </div>
              <div className="w-24 h-24 bg-yellow-500 border-2 border-black flex items-center justify-center text-2xl font-black hover:shadow-lg hover:-translate-y-2 transition-all cursor-pointer">
                : )
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-black text-white py-16 px-8">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
          <div className="p-8 border-2 border-white bg-black hover:bg-orange-500 hover:shadow-lg hover:-translate-y-2 transition-all">
            <div className="text-4xl font-black text-yellow-500 mb-4">01</div>
            <h3 className="text-2xl font-bold mb-4">Level System</h3>
            <p className="text-gray-300">Every commit, PR, and review earns XP. Watch your developer level grow with each contribution.</p>
          </div>
          <div className="p-8 border-2 border-white bg-black hover:bg-orange-500 hover:shadow-lg hover:-translate-y-2 transition-all">
            <div className="text-4xl font-black text-yellow-500 mb-4">02</div>
            <h3 className="text-2xl font-bold mb-4">Achievements</h3>
            <p className="text-gray-300">Unlock rare badges for mastering languages, maintaining streaks, and helping others.</p>
          </div>
          <div className="p-8 border-2 border-white bg-black hover:bg-orange-500 hover:shadow-lg hover:-translate-y-2 transition-all">
            <div className="text-4xl font-black text-yellow-500 mb-4">03</div>
            <h3 className="text-2xl font-bold mb-4">Leaderboards</h3>
            <p className="text-gray-300">Compete globally or within your team. See who's crushing it this week.</p>
          </div>
        </div>
      </section>
    </div>
  );
}