import * as React from 'react';

import SiteFooter from '@components/site/SiteFooter';
import SiteNav from '@components/site/SiteNav';
import {
  CaseStudyFooterNav,
  CaseStudyHeader,
  DecisionBlock,
  DesignedCultivatedBlock,
  FullSection,
  ImagePlaceholder,
  SplitSection,
} from '@components/work/shared';
import ResearchAfter from '@components/work/diagrams/ResearchAfter';
import ResearchBlind from '@components/work/diagrams/ResearchBlind';
import ResearchSideBySide from '@components/work/diagrams/ResearchSideBySide';
import ResearchTransparent from '@components/work/diagrams/ResearchTransparent';

export const metadata = {
  title: 'research.site — vani agarwal',
  description:
    'deep research API comparison platform. transparency architecture as autonomy infrastructure. 162+ blind battles.',
};

export default function ResearchSiteCaseStudy() {
  return (
    <>
      <SiteNav />
      <main>
        <CaseStudyHeader
          eyebrow="02 — case study"
          title="research.site"
          tagline="transparency architecture as autonomy infrastructure"
          description="A developer platform comparing 8 deep research API providers across 10+ evaluation metrics. 162+ blind battles, real international users. Live at research.site."
          meta="2025–present  ·  next.js · typescript · supabase · postgresql · stripe  ·  live at research.site"
        />

        <SplitSection
          label="the problem"
          left={
            <>
              <p>
                When developers pick a deep research API, they pick on brand. OpenAI feels safe.
                Perplexity has the search story. Gemini has the reach. The actual quality of the
                research output for a specific use case rarely enters the decision.
              </p>
              <p>
                This is a problem of compromised autonomy. Users want to make a real choice but the
                surrounding information environment makes the brand-default decision the path of
                least resistance.
              </p>
              <p>
                I wanted to build an environment that made evaluating the actual output the path of
                least resistance instead.
              </p>
            </>
          }
          right={
            /* TODO: vani to add screenshot — blind battle in progress */
            <ImagePlaceholder caption="blind battle in progress" />
          }
        />

        <FullSection label="key decisions">
          <DecisionBlock
            number="1"
            title="blind battles, not leaderboards"
            visual={<ResearchBlind />}
            body={
              <>
                <p>
                  A leaderboard would have been the obvious choice and the fundamentally wrong one.
                  Leaderboards optimize for the brand heuristic; users would scan, see OpenAI on
                  top, and pick OpenAI. The judgment never happens.
                </p>
                <p>
                  Blind battles force the reading. You see two outputs, you read them both, you
                  vote on which actually answered your query — and only then do you find out which
                  model wrote which. The friction of not knowing is what makes the autonomous
                  judgment possible.
                </p>
              </>
            }
          />
          <DecisionBlock
            number="2"
            title="side-by-side, not stacked"
            visual={<ResearchSideBySide />}
            body={
              <>
                <p>
                  Stacked outputs create order bias — people read the top one first and treat it as
                  the reference. Side-by-side forces parallel evaluation. It also makes the
                  comparison itself the unit of attention rather than either output alone.
                </p>
              </>
            }
          />
          <DecisionBlock
            number="3"
            title="transparent cost and latency"
            visual={<ResearchTransparent />}
            body={
              <>
                <p>
                  Every battle shows what each query cost on each provider and how long it took.
                  This is part of the autonomy infrastructure. You&rsquo;re not just judging
                  quality in the abstract; you&rsquo;re judging whether the quality difference is
                  worth the price difference for your use case.
                </p>
              </>
            }
          />
          <DecisionBlock
            number="4"
            title="public leaderboard, after"
            visual={<ResearchAfter />}
            body={
              <>
                <p>
                  After enough blind battles, the aggregate results become a public leaderboard.
                  The order matters: judgment first, then data. The leaderboard doesn&rsquo;t
                  compromise autonomy because users have already done their own evaluations before
                  consulting it.
                </p>
              </>
            }
          />
        </FullSection>

        <SplitSection
          label="what the framework makes visible"
          left={
            <DesignedCultivatedBlock
              designed={{
                label: 'transparency',
                body: 'Encoded in the side-by-side structure, the blind protocol, and the cost and latency surfacing. A property of the evaluation environment.',
              }}
              cultivated={{
                label: 'autonomy',
                body: 'Invited by the transparency infrastructure but emerging only when users actually engage with the comparison instead of reaching for the brand heuristic.',
              }}
              closing={
                <>
                  The leaderboard is a useful test case for the framework. The same artifact (a
                  leaderboard) compromises autonomy when shown first and supports it when shown
                  after. The value isn&rsquo;t in the artifact; it&rsquo;s in the structural
                  relationship between artifacts.
                </>
              }
            />
          }
          right={
            /* TODO: vani to add screenshot — leaderboard with battle count threshold */
            <ImagePlaceholder caption="leaderboard with battle count threshold" />
          }
        />

        <FullSection label="what I'd change">
          <p>
            I want to add a &ldquo;use case match&rdquo; layer. Right now battles are generic —
            users pick which output is better overall. But &ldquo;better&rdquo; is contextual. A
            research output good for a literature review isn&rsquo;t the same as one good for
            competitive analysis. I&rsquo;d let users tag their query with a use case and surface
            aggregate results filtered by that tag.
          </p>
          <p>
            I&rsquo;d also study whether the blind structure actually changes provider selection in
            the wild — i.e. do users who use research.site go on to choose differently than they
            would have, or do they revert to the brand default? That&rsquo;s the cultivated-value
            question and I haven&rsquo;t answered it yet.
          </p>
        </FullSection>

        <CaseStudyFooterNav
          liveLabel="visit research.site"
          liveHref="https://research.site"
          nextLabel="microsoft ai"
          nextHref="/work/microsoft-ai"
        />
      </main>
      <SiteFooter />
    </>
  );
}
