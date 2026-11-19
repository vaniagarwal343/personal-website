import * as React from 'react';

import SiteFooter from '@components/site/SiteFooter';
import SiteNav from '@components/site/SiteNav';
import {
  CaseStudyFooterNav,
  CaseStudyHeader,
  FullSection,
} from '@components/work/shared';

export const metadata = {
  title: 'snapp ai — vani agarwal',
  description: 'agentic betting pipeline. tool whitelisting as accountability infrastructure.',
};

export default function SnappAiCaseStudy() {
  return (
    <>
      <SiteNav />
      <main>
        <CaseStudyHeader
          eyebrow="04 — case study"
          title="snapp ai"
          tagline="tool whitelisting as accountability infrastructure"
          description="Calibrated and shipped the LLM-judge evaluation infrastructure running in production, scoring agent-response quality across a platform handling 2,000+ user messages a day from 765 users. Also built an outbound SMS pick-delivery service end to end, the user-facing Strategies surface, and the strategy-to-sportsbook delivery pipeline."
          meta="mar–jun 2026  ·  snapp ai  ·  san francisco"
        />
        <FullSection label="status">
          <p>
            Long-form case study coming soon. The short version: agents that pull from too many
            tools produce outputs you can&rsquo;t reconstruct. The fix was not better logging — it
            was tighter scopes. Each sport-specialized analyst gets a whitelist of tools relevant
            to its domain, so a generated take can always be traced back to the same small set of
            inputs. Whitelisting is not a security feature here; it&rsquo;s an accountability one.
          </p>
        </FullSection>
        <CaseStudyFooterNav nextLabel="back to index" nextHref="/" />
      </main>
      <SiteFooter />
    </>
  );
}
