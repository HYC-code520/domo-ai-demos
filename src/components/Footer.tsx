const Footer = () => {
  return (
    <footer className="relative py-12 border-t border-white/10">
      {/* Make footer transparent to allow wave to show through */}
      <div className="container mx-auto px-6 relative z-20">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-2 mb-4 md:mb-0">
            <div className="w-8 h-8 bg-gradient-accent rounded-md flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-lg">D</span>
            </div>
            <span className="text-xl font-bold text-foreground">Domo A.I.</span>
          </div>
          
          <div className="text-center md:text-right">
            <p className="text-muted-foreground text-sm mb-2">
              © 2025 Domo A.I. All rights reserved.
            </p>
            <p className="text-muted-foreground text-sm">
              AI-Powered Product Demos.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;