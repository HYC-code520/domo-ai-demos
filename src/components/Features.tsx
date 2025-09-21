import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
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
    <section id="features" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">Core Features</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Everything you need for engaging product demos
          </p>
          <p className="text-muted-foreground mt-2 max-w-3xl mx-auto">
            Domo A.I. provides a powerful suite of tools to create, deploy, and analyze interactive demos that drive results.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="bg-gradient-card border-border hover:shadow-glow transition-all duration-300 group">
              <CardHeader className="text-center pb-4">
                <div className="mx-auto w-16 h-16 bg-gradient-accent rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="h-8 w-8 text-primary-foreground" />
                </div>
                <CardTitle className="text-xl font-semibold text-foreground">
                  {feature.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground text-center leading-relaxed">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;