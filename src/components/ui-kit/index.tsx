/**
 * Cohvia UI Kit
 * Shared primitives used across every page for consistent spacing,
 * typography, and brand styling. Build new sections with these.
 */
import { ReactNode, ButtonHTMLAttributes, AnchorHTMLAttributes, forwardRef } from "react";
import { Link, LinkProps } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

/* ------------------------------------------------------------------ */
/* Section — page-level vertical rhythm + optional background          */
/* ------------------------------------------------------------------ */

type SectionTone = "plain" | "tinted" | "glow" | "hero" | "bordered";
type SectionPad = "sm" | "md" | "lg";
type SectionWidth = "prose" | "narrow" | "default" | "wide";

const padMap: Record<SectionPad, string> = {
  sm: "pt-8 pb-10 md:pt-10 md:pb-12",
  md: "py-10 md:py-14",
  lg: "py-12 md:py-16",
};

const widthMap: Record<SectionWidth, string> = {
  prose: "max-w-[680px]",
  narrow: "max-w-3xl",
  default: "max-w-4xl",
  wide: "max-w-6xl",
};

interface SectionProps {
  children: ReactNode;
  tone?: SectionTone;
  pad?: SectionPad;
  width?: SectionWidth;
  id?: string;
  className?: string;
  innerClassName?: string;
}

export const Section = ({
  children,
  tone = "plain",
  pad = "md",
  width = "wide",
  id,
  className,
  innerClassName,
}: SectionProps) => {
  const toneClass =
    tone === "tinted"
      ? "bg-secondary/20"
      : tone === "bordered"
        ? "border-y border-border bg-secondary/20"
        : "";

  return (
    <section
      id={id}
      className={cn("relative overflow-hidden", padMap[pad], toneClass, className)}
    >
      {tone === "glow" && (
        <div className="gradient-teal-glow absolute inset-0 pointer-events-none" />
      )}
      {tone === "hero" && (
        <div className="gradient-hero absolute inset-0 pointer-events-none" />
      )}
      <div className={cn("relative mx-auto px-6", widthMap[width], innerClassName)}>
        {children}
      </div>
    </section>
  );
};

/* ------------------------------------------------------------------ */
/* Typography primitives                                               */
/* ------------------------------------------------------------------ */

export const Eyebrow = ({
  children,
  className,
  align = "center",
}: {
  children: ReactNode;
  className?: string;
  align?: "left" | "center";
}) => (
  <p
    className={cn(
      "text-xs font-semibold text-primary uppercase tracking-[0.2em] mb-4",
      align === "center" && "text-center",
      className,
    )}
  >
    {children}
  </p>
);

interface SectionHeaderProps {
  eyebrow?: ReactNode;
  title: ReactNode;
  subtitle?: ReactNode;
  align?: "left" | "center";
  size?: "md" | "lg";
  className?: string;
}

export const SectionHeader = ({
  eyebrow,
  title,
  subtitle,
  align = "center",
  size = "md",
  className,
}: SectionHeaderProps) => (
  <div
    className={cn(
      "mb-10 md:mb-12",
      align === "center" ? "text-center" : "text-left",
      align === "center" && "mx-auto max-w-3xl",
      className,
    )}
  >
    {eyebrow && <Eyebrow align={align}>{eyebrow}</Eyebrow>}
    <h2
      className={cn(
        "font-bold tracking-tight leading-tight",
        size === "lg"
          ? "text-3xl md:text-5xl"
          : "text-3xl md:text-4xl",
      )}
    >
      {title}
    </h2>
    {subtitle && (
      <p
        className={cn(
          "mt-5 text-lg text-secondary-foreground leading-relaxed",
          align === "center" ? "mx-auto max-w-2xl" : "max-w-2xl",
        )}
      >
        {subtitle}
      </p>
    )}
  </div>
);

/** Long-form body copy. Always left-aligned, prose width. */
export const Prose = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => (
  <div
    className={cn(
      "max-w-[680px] text-lg text-secondary-foreground leading-relaxed space-y-4",
      className,
    )}
  >
    {children}
  </div>
);

/* ------------------------------------------------------------------ */
/* Buttons / CTAs — single source of truth for brand styling           */
/* ------------------------------------------------------------------ */

type ButtonVariant = "brand" | "ghost" | "outline";
type ButtonSize = "sm" | "md";

const buttonBase =
  "inline-flex items-center justify-center gap-2 rounded-lg font-semibold transition-all whitespace-nowrap";

const buttonSize: Record<ButtonSize, string> = {
  sm: "px-4 py-2 text-sm",
  md: "px-6 py-3 text-sm",
};

const buttonVariant: Record<ButtonVariant, string> = {
  brand: "gradient-brand-bg text-foreground hover:brightness-110",
  outline:
    "border border-border bg-transparent text-foreground hover:bg-secondary/60",
  ghost:
    "border border-border text-secondary-foreground hover:bg-secondary hover:text-foreground",
};

const buttonClass = (variant: ButtonVariant, size: ButtonSize, className?: string) =>
  cn(buttonBase, buttonSize[size], buttonVariant[variant], className);

interface BrandButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
}

export const BrandButton = forwardRef<HTMLButtonElement, BrandButtonProps>(
  ({ variant = "brand", size = "md", className, children, ...rest }, ref) => (
    <button
      ref={ref}
      className={buttonClass(variant, size, className)}
      {...rest}
    >
      {children}
    </button>
  ),
);
BrandButton.displayName = "BrandButton";

interface BrandLinkProps extends Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "href"> {
  href: string;
  variant?: ButtonVariant;
  size?: ButtonSize;
  withArrow?: boolean;
}

export const BrandLink = ({
  href,
  variant = "brand",
  size = "md",
  withArrow,
  className,
  children,
  ...rest
}: BrandLinkProps) => (
  <a href={href} className={buttonClass(variant, size, className)} {...rest}>
    {children}
    {withArrow && <ArrowRight size={16} />}
  </a>
);

interface BrandRouterLinkProps extends Omit<LinkProps, "className"> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  withArrow?: boolean;
  className?: string;
}

export const BrandRouterLink = ({
  variant = "brand",
  size = "md",
  withArrow,
  className,
  children,
  ...rest
}: BrandRouterLinkProps) => (
  <Link className={buttonClass(variant, size, className)} {...rest}>
    {children}
    {withArrow && <ArrowRight size={16} />}
  </Link>
);

/* ------------------------------------------------------------------ */
/* Card primitives                                                     */
/* ------------------------------------------------------------------ */

export const Card = ({
  children,
  className,
  interactive,
}: {
  children: ReactNode;
  className?: string;
  interactive?: boolean;
}) => (
  <div
    className={cn(
      "surface-card rounded-xl p-8",
      interactive && "transition-all hover:border-primary/30",
      className,
    )}
  >
    {children}
  </div>
);

interface IconBadgeProps {
  icon: React.ElementType;
  size?: "sm" | "md" | "lg";
  className?: string;
}

export const IconBadge = ({ icon: Icon, size = "md", className }: IconBadgeProps) => {
  const dims =
    size === "lg" ? "w-12 h-12" : size === "sm" ? "w-9 h-9" : "w-11 h-11";
  const iconSize = size === "lg" ? 22 : size === "sm" ? 16 : 20;
  return (
    <div
      className={cn(
        "rounded-xl flex items-center justify-center bg-primary/10 shrink-0",
        dims,
        className,
      )}
    >
      <Icon size={iconSize} className="text-primary" />
    </div>
  );
};

interface FeatureCardProps {
  icon: React.ElementType;
  label?: string;
  title: string;
  description: ReactNode;
  className?: string;
}

export const FeatureCard = ({
  icon,
  label,
  title,
  description,
  className,
}: FeatureCardProps) => (
  <Card interactive className={cn("p-8 md:p-10", className)}>
    <div className="flex flex-col md:flex-row items-start gap-6">
      <IconBadge icon={icon} size="lg" />
      <div className="flex-1">
        {label && (
          <p className="text-xs font-semibold text-primary uppercase tracking-[0.15em] mb-1">
            {label}
          </p>
        )}
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <div className="text-secondary-foreground leading-relaxed max-w-2xl">
          {description}
        </div>
      </div>
    </div>
  </Card>
);

interface StepCardProps {
  step: number;
  icon: React.ElementType;
  title: string;
  description: ReactNode;
}

export const StepCard = ({ step, icon, title, description }: StepCardProps) => (
  <Card className="relative">
    <div className="text-xs font-mono text-muted-foreground mb-4">
      0{step}
    </div>
    <IconBadge icon={icon} className="mb-5" />
    <h3 className="text-base font-semibold mb-2">{title}</h3>
    <p className="text-sm text-secondary-foreground leading-relaxed">
      {description}
    </p>
  </Card>
);

export const IntegrationPill = ({ name }: { name: string }) => (
  <span className="surface-card rounded-lg px-5 py-3 text-sm font-medium text-secondary-foreground">
    {name}
  </span>
);

/* ------------------------------------------------------------------ */
/* MockFrame — browser-chrome wrapper used for product visuals         */
/* ------------------------------------------------------------------ */

interface MockFrameProps {
  children: ReactNode;
  label?: string;
  className?: string;
}

export const MockFrame = ({ children, label, className }: MockFrameProps) => (
  <div className={cn("surface-card rounded-xl overflow-hidden shadow-lg", className)}>
    <div className="flex items-center gap-1.5 px-4 py-3 border-b border-border bg-secondary/40">
      <span className="w-2.5 h-2.5 rounded-full bg-muted-foreground/30" />
      <span className="w-2.5 h-2.5 rounded-full bg-muted-foreground/30" />
      <span className="w-2.5 h-2.5 rounded-full bg-muted-foreground/30" />
      {label && (
        <span className="ml-3 text-[10px] text-muted-foreground font-mono">
          {label}
        </span>
      )}
    </div>
    <div className="p-6">{children}</div>
  </div>
);

/* ------------------------------------------------------------------ */
/* PageHero — consistent page-top hero for sub-pages                   */
/* ------------------------------------------------------------------ */

interface PageHeroProps {
  eyebrow?: string;
  title: ReactNode;
  subtitle?: ReactNode;
  children?: ReactNode;
}

export const PageHero = ({ eyebrow, title, subtitle, children }: PageHeroProps) => (
  <section className="relative overflow-hidden">
    <div className="gradient-hero absolute inset-0 pointer-events-none" />
    <div className="relative mx-auto max-w-4xl px-6 pt-16 pb-10 md:pt-20 md:pb-12 text-center">
      {eyebrow && (
        <p className="text-xs font-semibold text-primary uppercase tracking-[0.2em] mb-4">
          {eyebrow}
        </p>
      )}
      <h1 className="text-4xl md:text-6xl font-bold tracking-tight leading-[1.1] mb-6">
        {title}
      </h1>
      {subtitle && (
        <p className="text-lg md:text-xl text-secondary-foreground max-w-2xl mx-auto leading-relaxed mb-8">
          {subtitle}
        </p>
      )}
      {children && (
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          {children}
        </div>
      )}
    </div>
  </section>
);

/* ------------------------------------------------------------------ */
/* CTA Section — final call to action used across pages                */
/* ------------------------------------------------------------------ */

interface CTASectionProps {
  title: ReactNode;
  subtitle?: ReactNode;
  primaryHref?: string;
  primaryLabel?: string;
  secondaryHref?: string;
  secondaryLabel?: string;
  id?: string;
}

export const CTASection = ({
  title,
  subtitle,
  primaryHref = "https://app.cohvia.com/signup",
  primaryLabel = "Sign Up Free",
  secondaryHref = "https://app.cohvia.com",
  secondaryLabel = "Sign In",
  id,
}: CTASectionProps) => (
  <Section id={id} tone="glow" pad="lg" width="narrow" className="border-t border-border/60">
    <div className="text-center">
      <h2 className="text-3xl md:text-5xl font-bold leading-tight mb-6">
        {title}
      </h2>
      {subtitle && (
        <p className="text-lg text-secondary-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
          {subtitle}
        </p>
      )}
      <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
        <BrandLink href={primaryHref} withArrow>
          {primaryLabel}
        </BrandLink>
        {secondaryHref && secondaryLabel && (
          <BrandLink href={secondaryHref} variant="ghost">
            {secondaryLabel}
          </BrandLink>
        )}
      </div>
    </div>
  </Section>
);

/* ------------------------------------------------------------------ */
/* Email capture form                                                   */
/* ------------------------------------------------------------------ */

export const EmailCaptureForm = ({
  buttonLabel = "Join Waitlist",
  placeholder = "you@company.com",
}: {
  buttonLabel?: string;
  placeholder?: string;
}) => (
  <form
    className="flex flex-col sm:flex-row items-center justify-center gap-3 max-w-md mx-auto"
    onSubmit={(e) => e.preventDefault()}
  >
    <input
      type="email"
      placeholder={placeholder}
      className="w-full rounded-lg border border-border bg-card px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
    />
    <BrandButton type="submit" className="w-full sm:w-auto">
      {buttonLabel}
    </BrandButton>
  </form>
);
