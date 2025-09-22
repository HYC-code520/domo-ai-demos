import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Sticky Background image */}
      <div className="fixed inset-0 hero-background">
        {/* Dark overlay to ensure text readability */}
        <div className="absolute inset-0 bg-black/40"></div>
      </div>
      
      {/* Optional: Keep some subtle gradient overlays for visual enhancement */}
      <div className="absolute inset-0 z-10">
        <div className="absolute top-10 left-10 w-96 h-96 bg-blue-electric/15 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-blue-bright/12 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-deep/8 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-6 pt-20 pb-16 relative z-20">
        {/* Two-column layout */}
        <div className="grid lg:grid-cols-2 gap-16 items-center max-w-7xl mx-auto">
          {/* Left content */}
          <div className="text-center lg:text-left">
            <h1 className="text-5xl lg:text-7xl font-bold text-foreground mb-6 leading-tight">
              Create AI-Powered
              <span className="gradient-text-dramatic block mt-2 font-extrabold"> Product Demos </span>
              in Minutes
            </h1>
            
            <p className="text-xl lg:text-2xl text-muted-foreground mb-12 leading-relaxed">
              Engage your customers with interactive, personalized video demos that answer questions in real-time. 
              Boost conversions and shorten your sales cycle.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 mb-16 justify-center lg:justify-start">
              <Button size="lg" className="bg-gradient-accent hover:opacity-90 text-white shadow-glow px-8 py-4 text-lg font-semibold rounded-full transform hover:scale-105 transition-all duration-300">
                Get Started Free
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" size="lg" className="border-2 border-foreground/20 bg-transparent backdrop-blur-glass hover:bg-foreground/5 px-8 py-4 text-lg rounded-full">
                <Play className="mr-2 h-5 w-5" />
                Watch Demo
              </Button>
            </div>
            
            {/* Feature badges */}
            <div className="flex flex-wrap gap-6 justify-center lg:justify-start">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-gradient-accent rounded-full"></div>
                <span className="text-sm text-muted-foreground">No coding required</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-gradient-accent rounded-full"></div>
                <span className="text-sm text-muted-foreground">Setup in minutes</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-gradient-accent rounded-full"></div>
                <span className="text-sm text-muted-foreground">AI-powered</span>
              </div>
            </div>
          </div>
          
          {/* Right side - Glass D-Shape */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              {/* Glass D-Shape Logo */}
              <div className="relative w-96 h-96 lg:w-[500px] lg:h-[500px]">
                <img 
                  src="/glass-D-shape.png" 
                  alt="Glass D-Shape Logo"
                  className="w-full h-full object-contain animate-float-gentle"
                  onError={(e) => {
                    console.error('Image failed to load:', e.target.src);
                  }}
                />
                
                {/* Enhanced glow effects for the glass D-shape */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-bright/25 via-blue-electric/30 to-blue-deep/25 rounded-full blur-3xl animate-pulse opacity-50"></div>
                <div className="absolute inset-0 bg-gradient-accent rounded-full blur-xl opacity-20 animate-ping"></div>
                
                {/* Subtle reflection effect */}
                <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent rounded-full opacity-30"></div>
                
                {/* Floating light particles around the D-shape */}
                <div className="absolute -top-6 -right-6 w-3 h-3 bg-blue-bright rounded-full animate-pulse opacity-70"></div>
                <div className="absolute -bottom-8 -left-6 w-2 h-2 bg-blue-electric rounded-full animate-pulse delay-500 opacity-60"></div>
                <div className="absolute top-1/3 -left-10 w-2 h-2 bg-blue-light rounded-full animate-pulse delay-1000 opacity-55"></div>
                <div className="absolute top-1/4 -right-8 w-3 h-3 bg-blue-soft rounded-full animate-pulse delay-700 opacity-65"></div>
                <div className="absolute bottom-1/3 -right-4 w-2 h-2 bg-blue-medium rounded-full animate-pulse delay-300 opacity-50"></div>
                <div className="absolute bottom-1/4 -left-8 w-1 h-1 bg-blue-deep rounded-full animate-pulse delay-900 opacity-45"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;