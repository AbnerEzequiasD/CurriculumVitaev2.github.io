import { Shield } from "lucide-react";

const Footer = () => (
  <footer className="border-t border-border py-8">
    <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
      <div className="flex items-center gap-2 text-muted-foreground font-mono text-sm">
        <Shield className="w-4 h-4 text-primary" />
        <span>© 2026 CyberSec Portfolio. All rights reserved.</span>
      </div>
      <div className="text-muted-foreground font-mono text-xs">
        Built with 🔒 security in mind
      </div>
    </div>
  </footer>
);

export default Footer;
