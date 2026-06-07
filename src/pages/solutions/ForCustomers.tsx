import SolutionPage from "@/components/solutions/SolutionPage";
import {
  CustomerPortalOverview,
  CustomerSharedPlan,
  CustomerMagicLink,
} from "@/components/solutions/visuals";

const ForCustomers = () => (
  <SolutionPage
    chip="For Customers"
    headline="Hit the goals you bought the product for."
    subheadline="See what you're working toward, what's been done, and what's next — so you actually get the ROI you signed up for, instead of wondering where things stand."
    seoPath="/solutions/customers"
    pain={{
      headline: "You bought this to solve a problem. Where are you on that?",
      body: (
        <>
          <p>
            There was a kickoff, maybe a checklist in a Google Doc, and a CSM who introduced themselves. Since then it's been status emails, QBR slides you didn't ask for, and the occasional "just checking in." Meanwhile your team is the one expected to show the business case worked.
          </p>
          <p>
            You don't really know whether you're on track against the goals you set, what's been delivered against what was promised, or what you should be doing next to get value faster. And when your CSM moves on, the answers go with them.
          </p>
        </>
      ),
    }}
    blocks={[
      {
        title: "Your goals and your ROI, in one place",
        body: (
          <p>
            The outcomes you bought the product for, the milestones that get you there, and where you are against each one. No more reconstructing the business case from email threads when leadership asks what you're getting for the spend.
          </p>
        ),
        visual: <CustomerSharedPlan />,
      },
      {
        title: "Always know where things stand",
        body: (
          <p>
            Open the portal and see exactly what's been done, what's owed by your CSM, what's owed by your team, and what's coming next. The "where are we at?" email becomes unnecessary because the answer is already in front of you — and it stays current even when your CSM changes.
          </p>
        ),
        visual: <CustomerPortalOverview />,
      },
      {
        title: "A workspace that feels like yours",
        body: (
          <p>
            A clean view on your vendor's subdomain, with their logo and their colors — but built around your goals, not their internal process. No generic SaaS interface, no logging into someone else's tool.
          </p>
        ),
      },
      {
        title: "Bring in the people who need to see it",
        body: (
          <p>
            Invite colleagues to the plans that matter to them and control who in your organization has visibility. The execs who want a progress view, the operators doing the work, the new hire who needs to catch up — all on the same page.
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
    cta={{ headline: "You bought an outcome. See how close you are to it." }}
  />
);

export default ForCustomers;
