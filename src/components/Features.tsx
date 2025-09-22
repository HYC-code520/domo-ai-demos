import { Zap, Shield, BarChart3 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

const Features = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.3 }
    );

    const featuresSection = document.getElementById('features');
    if (featuresSection) {
      observer.observe(featuresSection);
    }

    return () => {
      if (featuresSection) {
        observer.unobserve(featuresSection);
      }
    };
  }, []);

  const features = [
    {
      icon: Zap,
      title: "Lightning Fast",
      description: "Create interactive demos in minutes, not hours. Our AI does the heavy lifting."
    },
    {
      icon: Shield,
      title: "Enterprise Ready",
      description: "Bank-level security with SOC 2 compliance and enterprise SSO integration."
    },
    {
      icon: BarChart3,
      title: "Analytics Driven",
      description: "Track engagement, conversion rates, and user behavior with detailed analytics."
    }
  ];

  return (
    <section id="features" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background transition overlay */}
      <div 
        className={`fixed inset-0 features-background transition-opacity duration-1000 ${
          isVisible ? 'opacity-100' : 'opacity-0'
        }`}
      >
        {/* Dark overlay to ensure text readability */}
        <div className="absolute inset-0 bg-black/50"></div>
      </div>
      
      {/* Background effects */}
      <div className="absolute inset-0 z-10">
        <div className="absolute top-1/2 right-10 w-64 h-64 bg-blue-bright/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/4 left-10 w-96 h-96 bg-blue-electric/8 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center max-w-7xl mx-auto">
          {/* Left content */}
          <div className="space-y-8">
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
              We specialize in
              <span className="block">
                <span className="text-blue-electric">Core </span>
                <span className="text-blue-bright">Features </span>
                <span className="text-foreground">for</span>
              </span>
              <span className="text-foreground">engaging product demos.</span>
            </h2>
            
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Domo A.I. provides a powerful suite of tools to create, deploy, and analyze interactive demos that drive results.
            </p>
            
            <Button 
              variant="outline" 
              size="lg" 
              className="border-2 border-foreground/20 bg-transparent backdrop-blur-glass hover:bg-foreground/5 px-8 py-4 rounded-full"
            >
              Our Solutions →
            </Button>
          </div>
          
          {/* Right features list */}
          <div className="space-y-8">
            {features.map((feature, index) => (
              <div 
                key={index} 
                className={`flex items-start space-x-6 group transform transition-all duration-700 delay-${index * 200} ${
                  isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'
                }`}
              >
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-gradient-accent rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <feature.icon className="h-8 w-8 text-white" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;