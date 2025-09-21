import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Zap, MessageCircle, BarChart3 } from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: Zap,
      title: "Instant AI-Powered Demos",
      description: "Generate dynamic, conversational video demos from a simple text script. No coding required."
    },
    {
      icon: MessageCircle,
      title: "Real-Time Q&A",
      description: "Your AI demo can answer user questions on the fly, providing a truly interactive experience."
    },
    {
      icon: BarChart3,
      title: "Engagement Analytics",
      description: "Track user interactions, questions, and conversion points to understand what resonates most."
    }
  ];

  return (
    <section id="features" className="py-24 bg-gradient-to-b from-navy-deep to-navy-medium relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-purple-bright/10 to-transparent"></div>
        <div className="absolute top-1/2 right-10 w-64 h-64 bg-pink-bright/10 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center max-w-7xl mx-auto">
          {/* Left content */}
          <div>
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
              We specialize in
              <span className="block">
                <span className="text-purple-bright">Core </span>
                <span className="text-pink-bright">Features </span>
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
              <div key={index} className="flex items-start space-x-4 group">
                <div className="flex-shrink-0 w-16 h-16 bg-glass-bg backdrop-blur-glass border border-glass-border rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="h-8 w-8 text-blue-electric" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
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