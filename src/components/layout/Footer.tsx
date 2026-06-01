import { Link } from "react-router-dom";
import cohviaLogo from "@/assets/cohvia-wordmark-white.svg";

const linkClass =
  "text-sm text-secondary-foreground hover:text-foreground transition-colors";

const Footer = () => {
  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid grid-cols-2 md:grid-cols-6 gap-8">
          <div className="col-span-2">
            <img src={cohviaLogo} alt="Cohvia" className="h-5 mb-3" />
            <p className="text-sm text-secondary-foreground leading-relaxed">
              Customer Context Platform
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-foreground mb-4">Product</h4>
            <ul className="space-y-2.5">
              <li><Link to="/product" className={linkClass}>Overview</Link></li>
              <li><Link to="/solutions/relationship-intelligence" className={linkClass}>Relationship intelligence</Link></li>
              <li><Link to="/solutions/handovers" className={linkClass}>Handovers</Link></li>
              <li><Link to="/solutions/planning-execution" className={linkClass}>Planning & execution</Link></li>
              <li><Link to="/solutions/book-health" className={linkClass}>Book health</Link></li>
              <li><Link to="/solutions/scaling-leverage" className={linkClass}>Scaling & leverage</Link></li>
              <li><Link to="/pricing" className={linkClass}>Pricing</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-foreground mb-4">Solutions</h4>
            <ul className="space-y-2.5">
              <li><Link to="/solutions/cs-leaders" className={linkClass}>CS leaders</Link></li>
              <li><Link to="/solutions/csms" className={linkClass}>CSMs</Link></li>
              <li><Link to="/solutions/aes" className={linkClass}>Account executives</Link></li>
              <li><Link to="/solutions/team-of-one" className={linkClass}>Team of one</Link></li>
              <li><Link to="/solutions/customers" className={linkClass}>For customers</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-foreground mb-4">Company</h4>
            <ul className="space-y-2.5">
              <li><Link to="/about" className={linkClass}>About</Link></li>
              <li><Link to="/blog" className={linkClass}>Blog</Link></li>
              <li><a href="mailto:hello@cohvia.com" className={linkClass}>Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-foreground mb-4">Legal</h4>
            <ul className="space-y-2.5">
              <li><Link to="/security" className={linkClass}>Security</Link></li>
              <li><Link to="/legal/privacy" className={linkClass}>Privacy</Link></li>
              <li><Link to="/legal/terms" className={linkClass}>Terms</Link></li>
              <li><Link to="/legal/dpa" className={linkClass}>DPA</Link></li>
              <li><Link to="/legal/subprocessors" className={linkClass}>Subprocessors</Link></li>
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
