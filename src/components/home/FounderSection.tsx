import { Section, SectionHeader } from "@/components/ui-kit";

const FounderSection = () => (
  <Section pad="md" width="narrow">
    <SectionHeader
      eyebrow="Founder"
      title="Built by someone who's lived this."
    />

    <figure className="relative">
      <div className="absolute left-0 top-2 bottom-2 w-px bg-gradient-to-b from-transparent via-primary/40 to-transparent" />

      <blockquote className="pl-8 text-xl md:text-2xl leading-relaxed text-foreground font-medium">
        "I've been the overwhelmed CS leader three times. Three companies, same
        problem every time: the deeper you scale, the more you lose the why
        behind your customer relationships. I built Cohvia because I got tired
        of watching it happen."
      </blockquote>

      <figcaption className="pl-8 mt-6 flex items-center gap-3">
        <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-sm font-semibold text-primary">
          S
        </div>
        <div>
          <div className="text-sm font-semibold text-foreground">Sarah</div>
          <div className="text-xs text-muted-foreground">Founder, Cohvia</div>
        </div>
      </figcaption>
    </figure>
  </Section>
);

export default FounderSection;
