import SolutionPage from "@/components/solutions/SolutionPage";
import {
  CustomerPortalOverview,
  CustomerSharedPlan,
  CustomerMagicLink,
} from "@/components/solutions/visuals";

const ForCustomers = () => (
  <SolutionPage
    chip="For Customers"
    headline="A vendor that actually shows you where things stand."
    subheadline="Your success plan, your goals, your progress, all in one place. Branded to your vendor, kept current as the relationship evolves."
    pain={{
      headline: "You've been on this side of the table before.",
      body: (
        <>
          <p>
            You bought the product, someone from Customer Success introduced themselves, and there was a kickoff call and maybe an onboarding checklist in a Google Doc. After that it became status update emails, QBR slides you didn't ask for, and the occasional "just checking in."
          </p>
          <p>
            You don't really know whether you're on track, or what the goals were supposed to be, and you definitely don't remember what was agreed three months ago. And when your CSM moved on, the relationship started over from scratch.
          </p>
        </>
      ),
    }}
    blocks={[
      {
        title: "Your own branded portal",
        body: (
          <p>
            A clean workspace on your vendor's subdomain, with their logo and their colors. No generic SaaS interface, and no logging into their internal tool. Just the relationship, presented clearly to you.
          </p>
        ),
        visual: <CustomerPortalOverview />,
      },
      {
        title: "See the success plan you're part of",
        body: (
          <p>
            Your goals, milestones, and action items live in one place, and you can check things off, edit the goals you share with your CSM, and see what's coming next. The "where are we at?" email becomes unnecessary because the answer is already in front of you.
          </p>
        ),
        visual: <CustomerSharedPlan />,
      },
      {
        title: "Manage your own access",
        body: (
          <p>
            Invite colleagues to see specific plans and control who in your organization has visibility. Your CSM shares the plan with you, and you decide who else gets in.
          </p>
        ),
      },
      {
        title: "Magic link access",
        body: (
          <p>
            No password to remember and no account to create. The link arrives in your email, you click it, you're in. Come back anytime through the same URL.
          </p>
        ),
        visual: <CustomerMagicLink />,
      },
      {
        title: "Your data stays private",
        body: (
          <p>
            You never see the vendor's internal Narrative, their health scores, revenue figures, or anything about other customers. Just your relationship, your plans, and your progress.
          </p>
        ),
      },
    ]}
    cta={{ headline: "Customer Success should feel mutual." }}
  />
);

export default ForCustomers;
