import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const CTA = () => {
  return (
    <section className="py-24 bg-gradient-to-t from-navy-light to-background relative overflow-hidden">
      {/* Flowing gradient background */}
      <div className="absolute inset-0">
        <div className="absolute bottom-0 left-0 w-full h-64">
          <svg viewBox="0 0 1200 120" className="w-full h-full">
            <path
              d="M0,50 C300,120 500,0 800,50 C1000,80 1100,20 1200,50 L1200,120 L0,120 Z"
              fill="url(#gradient)"
              className="opacity-30"
            />
            <defs>
              <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="hsl(var(--pink-bright))" />
                <stop offset="50%" stopColor="hsl(var(--purple-bright))" />
                <stop offset="100%" stopColor="hsl(var(--blue-electric))" />
              </linearGradient>
            </defs>
          </svg>
        </div>
        <div className="absolute top-10 right-10 w-96 h-96 bg-gradient-accent rounded-full blur-3xl opacity-20"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl lg:text-6xl font-bold text-foreground mb-6">
            Ready to achieve new heights of success through the{" "}
            <span className="bg-gradient-accent bg-clip-text text-transparent">
              power of Domo A.I.?
            </span>
          </h2>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-md mx-auto mt-12">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-6 py-4 bg-glass-bg backdrop-blur-glass border border-glass-border rounded-full text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-blue-electric/50"
            />
            <Button 
              size="lg" 
              className="bg-gradient-accent hover:opacity-90 text-white shadow-glow px-8 py-4 rounded-full font-semibold"
            >
              Signup →
            </Button>
          </div>
          
          <div className="mt-8">
            <div className="flex flex-wrap justify-center gap-8 text-sm text-muted-foreground">
              <div className="flex items-center space-x-2">
                <div className="w-1.5 h-1.5 bg-gradient-accent rounded-full"></div>
                <span>Free 14-day trial</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-1.5 h-1.5 bg-gradient-accent rounded-full"></div>
                <span>No credit card required</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-1.5 h-1.5 bg-gradient-accent rounded-full"></div>
                <span>Cancel anytime</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;