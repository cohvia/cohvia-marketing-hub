import { useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { BrandButton } from "@/components/ui-kit";
import { PRIVACY_CONTACT_EMAIL } from "@/lib/legal/privacy-contact";

type Status = "idle" | "loading" | "success" | "error";
type Locale = "en" | "fr";

const REQUEST_TYPES = [
  "access",
  "correction",
  "deletion",
  "portability",
  "objection",
  "other",
] as const;

type RequestType = (typeof REQUEST_TYPES)[number];

const RELATIONSHIPS = [
  "data_subject",
  "authorized_agent",
  "customer_admin",
  "other",
] as const;

type Relationship = (typeof RELATIONSHIPS)[number];

const copy = {
  en: {
    title: "Submit a privacy request",
    intro:
      "Use this form to exercise your data protection rights or ask a privacy question. You can also email us directly at",
    fullName: "Full name",
    email: "Email address",
    requestType: "Request type",
    relationship: "Your relationship to this request",
    organization: "Organization (optional)",
    details: "Describe your request",
    detailsPlaceholder:
      "Include any details that will help us locate your data and respond (e.g. account email, company name).",
    submit: "Submit request",
    submitting: "Submitting…",
    success:
      "Thank you. We received your request and will respond within the timeframe required by applicable law.",
    error: "Could not submit your request. Please try again or email us directly.",
    requestTypes: {
      access: "Access / copy of my data",
      correction: "Correct my data",
      deletion: "Delete my data",
      portability: "Data portability export",
      objection: "Object to processing",
      other: "Other privacy enquiry",
    },
    relationships: {
      data_subject: "I am the individual whose data this concerns",
      authorized_agent: "I am an authorized agent acting on someone's behalf",
      customer_admin: "I administer a Cohvia customer account",
      other: "Other",
    },
  },
  fr: {
    title: "Soumettre une demande relative à la vie privée",
    intro:
      "Utilisez ce formulaire pour exercer vos droits en matière de protection des renseignements personnels ou poser une question. Vous pouvez aussi nous écrire directement à",
    fullName: "Nom complet",
    email: "Adresse courriel",
    requestType: "Type de demande",
    relationship: "Votre lien avec cette demande",
    organization: "Organisation (facultatif)",
    details: "Décrivez votre demande",
    detailsPlaceholder:
      "Indiquez tout renseignement utile pour retrouver vos données et vous répondre (p. ex. courriel du compte, nom de l'entreprise).",
    submit: "Envoyer la demande",
    submitting: "Envoi en cours…",
    success:
      "Merci. Nous avons reçu votre demande et répondrons dans le délai exigé par la loi applicable.",
    error:
      "Impossible d'envoyer votre demande. Veuillez réessayer ou nous écrire directement.",
    requestTypes: {
      access: "Accès / copie de mes renseignements",
      correction: "Rectification de mes renseignements",
      deletion: "Suppression de mes renseignements",
      portability: "Export pour portabilité",
      objection: "Opposition au traitement",
      other: "Autre question relative à la confidentialité",
    },
    relationships: {
      data_subject:
        "Je suis la personne concernée par ces renseignements",
      authorized_agent:
        "Je suis un mandataire autorisé agissant pour le compte d'une autre personne",
      customer_admin: "J'administre un compte client Cohvia",
      other: "Autre",
    },
  },
} as const;

interface PrivacyRequestFormProps {
  locale?: Locale;
}

const PrivacyRequestForm = ({ locale = "en" }: PrivacyRequestFormProps) => {
  const t = copy[locale];
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [requestType, setRequestType] = useState<RequestType>("access");
  const [relationship, setRelationship] = useState<Relationship>("data_subject");
  const [organizationName, setOrganizationName] = useState("");
  const [details, setDetails] = useState("");
  const [companyWebsite, setCompanyWebsite] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [message, setMessage] = useState("");

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setMessage("");

    try {
      const { data, error } = await supabase.functions.invoke(
        "privacy-request-intake",
        {
          body: {
            fullName,
            email,
            requestType,
            relationship,
            organizationName,
            details,
            companyWebsite,
            locale,
          },
        },
      );

      if (error || (data as { error?: string })?.error) {
        setStatus("error");
        setMessage(
          (data as { error?: string })?.error || error?.message || t.error,
        );
        return;
      }

      setStatus("success");
      setMessage(t.success);
      setFullName("");
      setEmail("");
      setRequestType("access");
      setRelationship("data_subject");
      setOrganizationName("");
      setDetails("");
      setCompanyWebsite("");
    } catch {
      setStatus("error");
      setMessage(t.error);
    }
  };

  const inputClass =
    "w-full rounded-lg border border-border bg-card px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 disabled:opacity-60";

  return (
    <aside
      id="privacy-request-form"
      className="not-prose mt-10 mb-10 rounded-xl border border-border bg-secondary/30 pt-4 pb-6 px-6 md:pt-5 md:pb-8 md:px-8"
    >
      <h3 className="mt-0 mb-1 text-lg font-semibold text-foreground">
        {t.title}
      </h3>
      <p className="mb-5 max-w-prose text-sm text-secondary-foreground">
        {t.intro}{" "}
        <a
          href={`mailto:${PRIVACY_CONTACT_EMAIL}`}
          className="text-primary underline underline-offset-2"
        >
          {PRIVACY_CONTACT_EMAIL}
        </a>
        .
      </p>

      <form onSubmit={onSubmit} className="flex max-w-xl flex-col gap-4">
        <div className="absolute -left-[9999px]" aria-hidden="true">
          <label htmlFor="companyWebsite">Company website</label>
          <input
            id="companyWebsite"
            type="text"
            tabIndex={-1}
            autoComplete="off"
            value={companyWebsite}
            onChange={(e) => setCompanyWebsite(e.target.value)}
          />
        </div>

        <div>
          <label htmlFor="privacy-fullName" className="mb-1.5 block text-sm font-medium text-foreground">
            {t.fullName}
          </label>
          <input
            id="privacy-fullName"
            type="text"
            required
            maxLength={200}
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            disabled={status === "loading"}
            className={inputClass}
          />
        </div>

        <div>
          <label htmlFor="privacy-email" className="mb-1.5 block text-sm font-medium text-foreground">
            {t.email}
          </label>
          <input
            id="privacy-email"
            type="email"
            required
            maxLength={255}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            disabled={status === "loading"}
            className={inputClass}
          />
        </div>

        <div>
          <label htmlFor="privacy-requestType" className="mb-1.5 block text-sm font-medium text-foreground">
            {t.requestType}
          </label>
          <select
            id="privacy-requestType"
            required
            value={requestType}
            onChange={(e) => setRequestType(e.target.value as RequestType)}
            disabled={status === "loading"}
            className={inputClass}
          >
            {REQUEST_TYPES.map((value) => (
              <option key={value} value={value}>
                {t.requestTypes[value]}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor="privacy-relationship" className="mb-1.5 block text-sm font-medium text-foreground">
            {t.relationship}
          </label>
          <select
            id="privacy-relationship"
            required
            value={relationship}
            onChange={(e) => setRelationship(e.target.value as Relationship)}
            disabled={status === "loading"}
            className={inputClass}
          >
            {RELATIONSHIPS.map((value) => (
              <option key={value} value={value}>
                {t.relationships[value]}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor="privacy-organization" className="mb-1.5 block text-sm font-medium text-foreground">
            {t.organization}
          </label>
          <input
            id="privacy-organization"
            type="text"
            maxLength={200}
            value={organizationName}
            onChange={(e) => setOrganizationName(e.target.value)}
            disabled={status === "loading"}
            className={inputClass}
          />
        </div>

        <div>
          <label htmlFor="privacy-details" className="mb-1.5 block text-sm font-medium text-foreground">
            {t.details}
          </label>
          <textarea
            id="privacy-details"
            required
            rows={5}
            maxLength={4000}
            value={details}
            onChange={(e) => setDetails(e.target.value)}
            placeholder={t.detailsPlaceholder}
            disabled={status === "loading"}
            className={inputClass}
          />
        </div>

        <BrandButton
          type="submit"
          disabled={status === "loading"}
          className="w-full sm:w-auto"
        >
          {status === "loading" ? t.submitting : t.submit}
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

export default PrivacyRequestForm;
