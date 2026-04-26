import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { ChevronDown, Menu, X } from "lucide-react";
import cohviaLogo from "@/assets/cohvia-wordmark-white.svg";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const navLinks = [
  { label: "Product", to: "/product" },
  { label: "Pricing", to: "/pricing" },
  { label: "About", to: "/about" },
  { label: "Blog", to: "/blog" },
];

const solutionsByRole = [
  {
    label: "For CS Leaders",
    to: "/solutions/cs-leaders",
    description: "Visibility across the book of business through understanding, not spreadsheets.",
  },
  {
    label: "For CSMs",
    to: "/solutions/csms",
    description: "Know every account like it's your only one.",
  },
  {
    label: "For AEs",
    to: "/solutions/aes",
    description: "Make sure your handover context actually lands.",
  },
  {
    label: "For Customers",
    to: "/solutions/customers",
    description: "A branded portal where you can finally see progress.",
  },
];

const solutionsByUseCase = [
  {
    label: "Relationship Intelligence",
    to: "/solutions/relationship-intelligence",
    description: "Understand the why behind every customer relationship.",
  },
  {
    label: "Handovers",
    to: "/solutions/handovers",
    description: "Sales to CS, CSM to CSM, context that transfers completely.",
  },
  {
    label: "Planning & Execution",
    to: "/solutions/planning-execution",
    description: "Shared plans for every stage of the relationship.",
  },
  {
    label: "Book Health",
    to: "/solutions/book-health",
    description: "See across the book. Act before things break.",
  },
  {
    label: "Scaling & Leverage",
    to: "/solutions/scaling-leverage",
    description: "Do more with fewer people without losing quality.",
  },
];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileSolutionsOpen, setMobileSolutionsOpen] = useState(false);
  const location = useLocation();
  const isSolutionsActive = location.pathname.startsWith("/solutions");

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border/50 bg-background/80 backdrop-blur-xl">
      <div className="mx-auto max-w-6xl px-6 flex items-center justify-between h-16">
        <Link to="/" className="flex items-center gap-2">
          <img src={cohviaLogo} alt="Cohvia" className="h-6" />
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          <Link
            to="/product"
            className={`text-sm font-medium transition-colors hover:text-foreground ${
              location.pathname === "/product" ? "text-foreground" : "text-muted-foreground"
            }`}
          >
            Product
          </Link>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button
                className={`inline-flex items-center gap-1 text-sm font-medium transition-colors hover:text-foreground focus:outline-none ${
                  isSolutionsActive ? "text-foreground" : "text-muted-foreground"
                }`}
              >
                Solutions
                <ChevronDown size={14} />
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent
              align="start"
              sideOffset={12}
              className="w-[620px] p-0 surface-card"
            >
              <div className="grid grid-cols-2 gap-0">
                <div className="p-5 border-r border-border">
                  <p className="text-xs font-semibold text-primary uppercase tracking-[0.18em] mb-3">
                    By Role
                  </p>
                  <div className="space-y-1">
                    {solutionsByRole.map((item) => (
                      <Link
                        key={item.to}
                        to={item.to}
                        className="block rounded-md px-3 py-2.5 hover:bg-secondary/60 transition-colors"
                      >
                        <p className="text-sm font-medium text-foreground">{item.label}</p>
                        <p className="text-xs text-muted-foreground mt-0.5 leading-relaxed">
                          {item.description}
                        </p>
                      </Link>
                    ))}
                  </div>
                </div>
                <div className="p-5">
                  <p className="text-xs font-semibold text-primary uppercase tracking-[0.18em] mb-3">
                    By Use Case
                  </p>
                  <div className="space-y-1">
                    {solutionsByUseCase.map((item) => (
                      <Link
                        key={item.to}
                        to={item.to}
                        className="block rounded-md px-3 py-2.5 hover:bg-secondary/60 transition-colors"
                      >
                        <p className="text-sm font-medium text-foreground">{item.label}</p>
                        <p className="text-xs text-muted-foreground mt-0.5 leading-relaxed">
                          {item.description}
                        </p>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </DropdownMenuContent>
          </DropdownMenu>

          {navLinks.slice(1).map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={`text-sm font-medium transition-colors hover:text-foreground ${
                location.pathname === link.to ? "text-foreground" : "text-muted-foreground"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-3">
          <a
            href="#waitlist"
            className="inline-flex items-center justify-center rounded-lg gradient-brand-bg px-4 py-2 text-sm font-semibold text-foreground transition-all hover:brightness-110"
          >
            Request Early Access
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden text-foreground"
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden border-t border-border bg-background px-6 py-4 space-y-3">
          <Link
            to="/product"
            onClick={() => setMobileOpen(false)}
            className="block text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            Product
          </Link>

          <div>
            <button
              onClick={() => setMobileSolutionsOpen(!mobileSolutionsOpen)}
              className="flex items-center gap-1 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              Solutions
              <ChevronDown
                size={14}
                className={`transition-transform ${mobileSolutionsOpen ? "rotate-180" : ""}`}
              />
            </button>
            {mobileSolutionsOpen && (
              <div className="mt-3 ml-3 space-y-3 border-l border-border pl-4">
                <p className="text-xs font-semibold text-primary uppercase tracking-[0.18em]">
                  By Role
                </p>
                {solutionsByRole.map((item) => (
                  <Link
                    key={item.to}
                    to={item.to}
                    onClick={() => setMobileOpen(false)}
                    className="block text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {item.label}
                  </Link>
                ))}
                <p className="text-xs font-semibold text-primary uppercase tracking-[0.18em] pt-1">
                  By Use Case
                </p>
                {solutionsByUseCase.map((item) => (
                  <Link
                    key={item.to}
                    to={item.to}
                    onClick={() => setMobileOpen(false)}
                    className="block text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            )}
          </div>

          {navLinks.slice(1).map((link) => (
            <Link
              key={link.to}
              to={link.to}
              onClick={() => setMobileOpen(false)}
              className="block text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              {link.label}
            </Link>
          ))}
          <a
            href="#waitlist"
            className="block w-full text-center rounded-lg gradient-brand-bg px-4 py-2 text-sm font-semibold text-foreground"
          >
            Request Early Access
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
