import { Link } from "react-router-dom";
import { Shield } from "lucide-react";

const Security = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-3xl mx-auto px-6 py-16">
        <div className="mb-8">
          <Link
            to="/legal/terms"
            className="text-sm text-secondary-foreground hover:text-foreground transition-colors"
          >
            ← Back to Legal
          </Link>
        </div>

        <div className="flex items-center gap-3 mb-6">
          <Shield className="w-6 h-6 text-primary" />
          <h1 className="text-3xl font-bold text-foreground">Security</h1>
        </div>

        <div className="prose legal-prose text-foreground">
          <p>
            At Cohvia, security is foundational to everything we build. We are
            committed to protecting your data and maintaining the trust you
            place in us.
          </p>

          <h2>Data Protection</h2>
          <p>
            All data is encrypted in transit using TLS 1.2+ and at rest using
            AES-256. We use industry-standard cloud infrastructure with robust
            physical and environmental controls.
          </p>

          <h2>Access Controls</h2>
          <p>
            Role-based access control ensures users only see what they need.
            Multi-factor authentication is available and encouraged for all
            accounts.
          </p>

          <h2>Compliance</h2>
          <p>
            We align with SOC 2 Type II principles and are actively working
            toward formal certification. We regularly review and update our
            security practices.
          </p>

          <h2>Incident Response</h2>
          <p>
            We maintain a documented incident response plan and conduct regular
            training. In the unlikely event of a security issue, we will notify
            affected customers promptly.
          </p>

          <h2>Contact</h2>
          <p>
            For security inquiries or to report a vulnerability, please email us
            at{" "}
            <a
              href="mailto:security@cohvia.com"
              className="text-primary hover:underline"
            >
              security@cohvia.com
            </a>
            .
          </p>
        </div>
      </div>
    </div>
  );
};

export default Security;
