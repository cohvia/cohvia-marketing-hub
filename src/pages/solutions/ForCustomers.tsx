import SolutionPage from "@/components/solutions/SolutionPage";
import {
  CustomerPortalOverview,
  CustomerSharedPlan,
  CustomerMagicLink,
} from "@/components/solutions/visuals";

const ForCustomers = () => (
  <SolutionPage
    chip="For Customers"
    headline="Finally, a vendor who shows you what's actually happening."
    subheadline="No more wondering where things stand. Your success plan, your goals, your progress: all in one place, branded to your vendor, updated in real time."
    pain={{
      headline: "You've been here before.",
      body: (
        <>
          <p>
            You signed up for a product. Someone from Customer Success introduced themselves. There was a kickoff call. Maybe an onboarding checklist in a Google Doc. Then... status update emails. QBR slides you didn't ask for. The occasional "just checking in."
          </p>
          <p>
            You have no idea whether you're on track. You don't know what your goals are supposed to be. You definitely don't remember what was agreed three months ago. And when your CSM changed, you started from scratch. Again.
          </p>
        </>
      ),
    }}
    blocks={[
      {
        title: "Your own branded portal",
        body: (
          <p>
            A clean, branded workspace on your vendor's subdomain. Their logo, their colors. No generic SaaS interface. No logging into their internal tool. Just your relationship, presented clearly.
          </p>
        ),
        visual: <CustomerPortalOverview />,
      },
      {
        title: "See your success plan",
        body: (
          <p>
            Your goals, your milestones, your action items. Check things off. Edit shared goals. See what's coming next. No more emailing your CSM to ask "where are we at?"
          </p>
        ),
        visual: <CustomerSharedPlan />,
      },
      {
        title: "Manage your own access",
        body: (
          <p>
            Invite colleagues to see specific plans. Control who in your org has visibility. Your CSM shares the plan with you; you decide who else sees it.
          </p>
        ),
      },
      {
        title: "Magic link access",
        body: (
          <p>
            No password to remember. No account to create. Click the link in your email, you're in. Come back anytime through the same URL.
          </p>
        ),
        visual: <CustomerMagicLink />,
      },
      {
        title: "Your data stays private",
        body: (
          <p>
            You never see the vendor's internal Narrative, health scores, revenue data, or anything about other customers. Just your relationship, your plans, your progress.
          </p>
        ),
      },
    ]}
    cta={{ headline: "Customer Success should feel mutual." }}
  />
);

export default ForCustomers;
