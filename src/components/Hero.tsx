import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-navy-deep via-navy-medium to-navy-deep overflow-hidden">
      {/* Glassmorphism background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-96 h-96 bg-blue-electric/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-blue-electric/8 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-electric/5 rounded-full blur-3xl"></div>
      </div>
      
      {/* Animated particles */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-blue-electric/40 rounded-full animate-pulse"></div>
        <div className="absolute top-3/4 left-3/4 w-1 h-1 bg-blue-soft/30 rounded-full animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 right-1/4 w-1.5 h-1.5 bg-blue-electric/50 rounded-full animate-pulse delay-500"></div>
      </div>
      
      <div className="container mx-auto px-6 pt-20 pb-16 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl lg:text-7xl font-bold text-foreground mb-6 leading-tight">
            Create AI-Powered
            <span className="bg-gradient-accent bg-clip-text text-transparent block mt-2"> Product Demos </span>
            in Minutes
          </h1>
          
          <p className="text-xl lg:text-2xl text-muted-foreground mb-12 leading-relaxed max-w-3xl mx-auto">
            Engage your customers with interactive, personalized video demos that answer questions in real-time. 
            Boost conversions and shorten your sales cycle.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-glow px-8 py-4 text-lg">
              Get Started Free
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button variant="outline" size="lg" className="border-glass-border bg-glass-bg backdrop-blur-glass hover:bg-glass-bg/80 px-8 py-4 text-lg">
              <Play className="mr-2 h-5 w-5" />
              Watch Demo
            </Button>
          </div>
          
          {/* Glassmorphism feature cards */}
          <div className="grid sm:grid-cols-3 gap-6 max-w-3xl mx-auto">
            <div className="bg-glass-bg backdrop-blur-glass border border-glass-border rounded-2xl p-6 shadow-glass">
              <div className="w-2 h-2 bg-primary rounded-full mb-3 mx-auto"></div>
              <span className="text-sm text-muted-foreground">No coding required</span>
            </div>
            <div className="bg-glass-bg backdrop-blur-glass border border-glass-border rounded-2xl p-6 shadow-glass">
              <div className="w-2 h-2 bg-primary rounded-full mb-3 mx-auto"></div>
              <span className="text-sm text-muted-foreground">Setup in minutes</span>
            </div>
            <div className="bg-glass-bg backdrop-blur-glass border border-glass-border rounded-2xl p-6 shadow-glass">
              <div className="w-2 h-2 bg-primary rounded-full mb-3 mx-auto"></div>
              <span className="text-sm text-muted-foreground">AI-powered</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;