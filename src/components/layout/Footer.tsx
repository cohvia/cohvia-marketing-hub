import { Link } from "react-router-dom";
import cohviaLogo from "@/assets/cohvia-wordmark-white.svg";

const Footer = () => {
  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="col-span-2 md:col-span-1">
            <img src={cohviaLogo} alt="Cohvia" className="h-5 mb-4" />
            <p className="text-sm text-secondary-foreground leading-relaxed">
              AI-native Customer Success for B2B SaaS teams.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-foreground mb-4">Product</h4>
            <ul className="space-y-2.5">
              <li><Link to="/features" className="text-sm text-secondary-foreground hover:text-foreground transition-colors">Features</Link></li>
              <li><Link to="/pricing" className="text-sm text-secondary-foreground hover:text-foreground transition-colors">Pricing</Link></li>
              <li><span className="text-sm text-muted-foreground">Changelog</span></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-foreground mb-4">Company</h4>
            <ul className="space-y-2.5">
              <li><Link to="/about" className="text-sm text-secondary-foreground hover:text-foreground transition-colors">About</Link></li>
              <li><Link to="/blog" className="text-sm text-secondary-foreground hover:text-foreground transition-colors">Blog</Link></li>
              <li><span className="text-sm text-muted-foreground">Careers</span></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-foreground mb-4">Legal</h4>
            <ul className="space-y-2.5">
              <li><span className="text-sm text-muted-foreground">Privacy</span></li>
              <li><span className="text-sm text-muted-foreground">Terms</span></li>
              <li><span className="text-sm text-muted-foreground">Security</span></li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Cohvia. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors text-xs">
              Twitter
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors text-xs">
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
