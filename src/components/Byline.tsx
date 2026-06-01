interface BylineProps {
  author?: string;
  updated: string; // ISO date
}

const formatDate = (iso: string) =>
  new Date(iso).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

export const Byline = ({ author = "The Cohvia Team", updated }: BylineProps) => (
  <div className="text-sm text-muted-foreground flex flex-wrap items-center gap-x-3 gap-y-1">
    <span>
      By <span className="text-foreground font-medium">{author}</span>
    </span>
    <span aria-hidden>·</span>
    <span>
      Last updated <time dateTime={updated}>{formatDate(updated)}</time>
    </span>
  </div>
);

export default Byline;
