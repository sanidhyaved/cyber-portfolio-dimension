const Footer = () => {
  return (
    <footer className="py-8 border-t border-border/50">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <span className="text-lg font-bold text-foreground">
          SV<span className="text-gradient">.</span>
        </span>
        <p className="font-mono text-xs text-muted-foreground tracking-wider">
          © {new Date().getFullYear()} Sanidhya Ved — All rights reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
