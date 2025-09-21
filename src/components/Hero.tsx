import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-hero overflow-hidden">
      {/* Background gradient elements */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-96 h-96 bg-purple-bright/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-pink-bright/15 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-electric/10 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-6 pt-20 pb-16 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center max-w-7xl mx-auto">
          {/* Left content */}
          <div>
            <h1 className="text-5xl lg:text-7xl font-bold text-foreground mb-6 leading-tight">
              Create AI-Powered
              <span className="bg-gradient-accent bg-clip-text text-transparent block mt-2"> Product Demos </span>
              in Minutes
            </h1>
            
            <p className="text-xl lg:text-2xl text-muted-foreground mb-12 leading-relaxed">
              Engage your customers with interactive, personalized video demos that answer questions in real-time. 
              Boost conversions and shorten your sales cycle.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 mb-16">
              <Button size="lg" className="bg-gradient-accent hover:opacity-90 text-white shadow-glow px-8 py-4 text-lg font-semibold rounded-full">
                Get Started Free
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" size="lg" className="border-2 border-foreground/20 bg-transparent backdrop-blur-glass hover:bg-foreground/5 px-8 py-4 text-lg rounded-full">
                <Play className="mr-2 h-5 w-5" />
                Watch Demo
              </Button>
            </div>
            
            {/* Feature badges */}
            <div className="flex flex-wrap gap-6">
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
          
          {/* Right 3D element */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              {/* 3D Cube */}
              <div className="relative w-80 h-80 lg:w-96 lg:h-96">
                {/* Cube faces */}
                <div className="absolute inset-0 transform-gpu">
                  {/* Front face */}
                  <div className="absolute inset-0 bg-gradient-cube rounded-3xl shadow-cube transform rotate-12 scale-90 opacity-90"></div>
                  {/* Back face */}
                  <div className="absolute inset-0 bg-gradient-cube rounded-3xl shadow-cube transform -rotate-6 scale-95 opacity-60"></div>
                  {/* Main face */}
                  <div className="absolute inset-0 bg-gradient-cube rounded-3xl shadow-cube backdrop-blur-sm border border-white/20 flex items-center justify-center">
                    <div className="text-6xl font-bold text-white">D</div>
                  </div>
                </div>
                
                {/* Glow effects */}
                <div className="absolute -inset-8 bg-gradient-cube rounded-full blur-3xl opacity-30 animate-pulse"></div>
                <div className="absolute -inset-4 bg-gradient-accent rounded-full blur-xl opacity-40"></div>
                
                {/* Floating particles */}
                <div className="absolute -top-8 -right-8 w-4 h-4 bg-pink-bright rounded-full animate-pulse opacity-80"></div>
                <div className="absolute -bottom-4 -left-4 w-3 h-3 bg-blue-electric rounded-full animate-pulse delay-500 opacity-70"></div>
                <div className="absolute top-1/2 -left-8 w-2 h-2 bg-purple-bright rounded-full animate-pulse delay-1000 opacity-60"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;