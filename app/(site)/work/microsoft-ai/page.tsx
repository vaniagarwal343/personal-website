import * as React from 'react';

import SiteFooter from '@components/site/SiteFooter';
import SiteNav from '@components/site/SiteNav';
import {
  CaseStudyFooterNav,
  CaseStudyHeader,
  FullSection,
} from '@components/work/shared';

export const metadata = {
  title: 'microsoft ai — vani agarwal',
  description: 'copilot monetization. credit systems and the ethics of nudging.',
};

export default function MicrosoftAiCaseStudy() {
  return (
    <>
      <SiteNav />
      <main>
        <CaseStudyHeader
          eyebrow="03 — case study"
          title="microsoft ai capstone"
          tagline="credit systems and the ethics of nudging"
          description="Copilot monetization for student users. Designed pay-as-you-go credit allocation, tiered usage gating, and a nudge engine. Presented monetization recommendations to MS product leadership."
          meta="jan–jun 2026  ·  microsoft ai  ·  seattle"
        />
        <FullSection label="status">
          <p>
            Long-form case study coming soon. The short version: when a product&rsquo;s revenue
            comes from how often people use it, the design problem is no longer &ldquo;does the
            user understand the feature.&rdquo; It is &ldquo;under what conditions is a usage nudge
            a service to the user, and under what conditions is it a tax on their attention?&rdquo;
            That distinction shaped the credit allocation, the tier thresholds, and which
            interactions did or did not get nudged.
          </p>
        </FullSection>
        <CaseStudyFooterNav nextLabel="snapp ai" nextHref="/work/snapp-ai" />
      </main>
      <SiteFooter />
    </>
  );
}
