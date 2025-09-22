import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const CTA = () => {
  return (
    <section className="pt-24 pb-0 relative overflow-visible">
      {/* SVG wave with feathered edges - Updated to pure blue gradient */}
      <div className="absolute bottom-0 left-0 w-full h-32 z-10">
        <svg viewBox="0 0 1200 120" className="w-full h-full" preserveAspectRatio="none">
          <defs>
            {/* Updated main gradient for the wave - pure blue theme */}
            <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="hsl(var(--blue-bright))" />
              <stop offset="50%" stopColor="hsl(var(--blue-electric))" />
              <stop offset="100%" stopColor="hsl(var(--blue-soft))" />
            </linearGradient>
            
            {/* Mask for feathered edges */}
            <linearGradient id="waveFeatherMask" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="black" stopOpacity="0" />
              <stop offset="15%" stopColor="black" stopOpacity="1" />
              <stop offset="85%" stopColor="black" stopOpacity="1" />
              <stop offset="100%" stopColor="black" stopOpacity="0" />
            </linearGradient>
            
            {/* Side feathering mask */}
            <linearGradient id="waveSideFeatherMask" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="black" stopOpacity="0" />
              <stop offset="5%" stopColor="black" stopOpacity="1" />
              <stop offset="95%" stopColor="black" stopOpacity="1" />
              <stop offset="100%" stopColor="black" stopOpacity="0" />
            </linearGradient>
            
            {/* Combined mask */}
            <mask id="featheredWaveMask">
              <rect width="100%" height="100%" fill="url(#waveFeatherMask)" />
              <rect width="100%" height="100%" fill="url(#waveSideFeatherMask)" style={{ mixBlendMode: 'multiply' }} />
            </mask>
          </defs>
          
          <path
            d="M0,50 C300,120 500,0 800,50 C1000,80 1100,20 1200,50 L1200,120 L0,120 Z"
            fill="url(#gradient)"
            className="opacity-20"
            mask="url(#featheredWaveMask)"
          />
        </svg>
      </div>
      
      {/* Other background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-10 right-10 w-96 h-96 bg-gradient-accent rounded-full blur-3xl opacity-10"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-20 pb-16">
        {/* Glassmorphism Container */}
        <div className="max-w-4xl mx-auto">
          <div className="glass-container backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-12 shadow-2xl">
            {/* Glass overlay for extra depth */}
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-white/10 via-transparent to-white/5 pointer-events-none"></div>
            
            <div className="relative z-10">
              <h2 className="text-4xl lg:text-6xl font-bold text-foreground mb-6 text-center">
                Ready to achieve new heights of success through the{" "}
                <span className="bg-gradient-accent bg-clip-text text-transparent">
                  power of Domo A.I.?
                </span>
              </h2>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-md mx-auto mt-12">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-6 py-4 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-blue-electric/50 focus:border-white/30 transition-all duration-300"
                />
                <Button 
                  size="lg" 
                  className="bg-gradient-accent hover:opacity-90 text-white shadow-glow px-8 py-4 rounded-full font-semibold hover:shadow-xl transition-all duration-300"
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
        </div>
      </div>
    </section>
  );
};

export default CTA;