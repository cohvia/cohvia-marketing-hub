import { useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { BrandButton } from "@/components/ui-kit";

type Status = "idle" | "loading" | "success" | "error";

const SubprocessorSubscribeForm = () => {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [message, setMessage] = useState<string>("");

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setMessage("");
    try {
      const { data, error } = await supabase.functions.invoke(
        "subscribe-subprocessors",
        { body: { email } },
      );
      if (error || (data as any)?.error) {
        setStatus("error");
        setMessage(
          (data as any)?.error ||
            error?.message ||
            "Could not subscribe. Please try again later.",
        );
        return;
      }
      setStatus("success");
      setMessage("You're subscribed. We'll email you before any subprocessor changes.");
      setEmail("");
    } catch (err) {
      setStatus("error");
      setMessage("Could not subscribe. Please try again later.");
    }
  };

  return (
    <aside className="not-prose my-10 rounded-xl border border-border bg-secondary/30 p-6 md:p-8">
      <h3 className="text-lg font-semibold text-foreground mb-1">
        Get subprocessor change notifications
      </h3>
      <p className="text-sm text-secondary-foreground mb-5 max-w-prose">
        Per Section 6.2 of our DPA, we give at least 30 days' notice before
        adding or replacing a subprocessor. Subscribe to receive those notices
        by email.
      </p>
      <form
        onSubmit={onSubmit}
        className="flex flex-col sm:flex-row gap-3 max-w-md"
      >
        <input
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="you@company.com"
          disabled={status === "loading"}
          className="w-full rounded-lg border border-border bg-card px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 disabled:opacity-60"
        />
        <BrandButton type="submit" disabled={status === "loading"} className="w-full sm:w-auto">
          {status === "loading" ? "Subscribing…" : "Subscribe"}
        </BrandButton>
      </form>
      {message && (
        <p
          role="status"
          className={`mt-3 text-sm ${
            status === "success" ? "text-primary" : "text-destructive"
          }`}
        >
          {message}
        </p>
      )}
    </aside>
  );
};

export default SubprocessorSubscribeForm;
