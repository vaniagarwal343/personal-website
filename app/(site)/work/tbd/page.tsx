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
import TbdFreeform from '@components/work/diagrams/TbdFreeform';
import TbdProfile from '@components/work/diagrams/TbdProfile';
import TbdSeparation from '@components/work/diagrams/TbdSeparation';
import TbdVoice from '@components/work/diagrams/TbdVoice';

export const metadata = {
  title: 'tbd.chat — vani agarwal',
  description:
    'voice-first compatibility agent. privacy architecture as honesty infrastructure. 640+ AI-powered interviews.',
};

export default function TbdCaseStudy() {
  return (
    <>
      <SiteNav />
      <main>
        <CaseStudyHeader
          eyebrow="01 — case study"
          title="tbd.chat"
          tagline="privacy architecture as honesty infrastructure"
          description="A voice-first AI agent that interviews two people separately and generates a compatibility report. 640+ interviews to date. Built with Garimaa as co-founder. Live at tbd.chat."
          meta="2025–present  ·  next.js · typescript · supabase · claude · elevenlabs  ·  live at tbd.chat"
        />

        <SplitSection
          label="the problem"
          left={
            <>
              <p>
                Existing compatibility tools are completion machines. Quizzes, sliders, dropdowns.
                They produce output, not honesty. People optimize for a presentable answer, not a
                true one.
              </p>
              <p>
                I wanted a tool where two people would separately say things to an AI that they
                wouldn&rsquo;t yet say to each other — and where the structural conditions of that
                conversation would make truth-telling more likely than performance.
              </p>
              <p>
                This is a value sensitive design problem of a particular kind. Honesty isn&rsquo;t a
                property of a system the way privacy is. You can encode privacy directly: separate
                databases, access controls, information flow constraints. Honesty you can only
                invite. The design work is building the architecture that makes the invitation
                likely to land.
              </p>
            </>
          }
          right={
            /* TODO: vani to add screenshot — voice interview mid-question */
            <ImagePlaceholder caption="voice interview mid-question" />
          }
        />

        <FullSection label="key decisions">
          <DecisionBlock
            number="1"
            title="voice, not text"
            visual={<TbdVoice />}
            body={
              <>
                <p>
                  Typed answers get edited. People backspace, rewrite, perform. Voice has less of
                  that shield — once you say it, you&rsquo;ve said it, and the AI heard it. The
                  interview format started producing qualitatively different answers as soon as we
                  shipped voice. Reports got messier in a way that read as more real.
                </p>
                <p>
                  I considered text-first because it&rsquo;s faster to build and a more familiar
                  pattern. The argument against won was: the familiar pattern is what produces the
                  inauthentic answers. Friction is the point.
                </p>
              </>
            }
          />
          <DecisionBlock
            number="2"
            title="separate interviews, never joint"
            visual={<TbdSeparation />}
            body={
              <>
                <p>
                  The two people being matched never see each other&rsquo;s raw answers. Each one
                  talks privately to the agent; the agent synthesizes a compatibility report that
                  abstracts the actual content.
                </p>
                <p>
                  This isn&rsquo;t a feature; it&rsquo;s the infrastructure. If person A knows
                  person B will read their answers verbatim, the answers change. Separation creates
                  the conditions under which the honest version of the answer is the easiest one to
                  give.
                </p>
              </>
            }
          />
          <DecisionBlock
            number="3"
            title="freeform protocol, not fixed dimensions"
            visual={<TbdFreeform />}
            body={
              <>
                <p>
                  We shipped a structured 7-dimension interview first (communication style,
                  conflict style, family values, etc.). It produced clean, navigable reports and
                  shallow answers. The agent was on rails; the user noticed.
                </p>
                <p>
                  We rebuilt as freeform — the agent follows threads instead of a script, asking
                  what surfaces, ignoring what doesn&rsquo;t. The reports got messier and harder to
                  navigate. The answers got deeper. We chose depth.
                </p>
              </>
            }
          />
          <DecisionBlock
            number="4"
            title="persistent, shareable profiles"
            visual={<TbdProfile />}
            body={
              <>
                <p>
                  Each user gets a public profile at /p/[nickname] they can share. This wasn&rsquo;t
                  in the original spec. We added it because users kept asking to be able to send
                  their profile to a friend.
                </p>
                <p>
                  The shareability changes what users say in the interview — they&rsquo;re now
                  answering for an audience that includes people who know them. That&rsquo;s a
                  value tradeoff: it likely reduces some honesty (audience effect) but increases
                  stakes (the report becomes a thing that exists in the world). On balance we think
                  this is a good trade. I&rsquo;d want to study it more.
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
                label: 'privacy',
                body: 'Encoded in the database structure and the information flow constraints between users. A property the system has, not a property it produces.',
              }}
              cultivated={{
                label: 'honesty',
                body: 'Invited by the privacy structure but never guaranteed by it. A property of the conversation that emerges only when the invitation lands.',
              }}
              closing={
                <>
                  This distinction is most of the actual design work on tbd. Every decision was
                  either about strengthening the privacy infrastructure (so honesty becomes
                  possible) or about probing whether the cultivated value was actually showing up
                  (so we could iterate).
                </>
              }
            />
          }
          right={
            /* TODO: vani to add screenshot — report excerpt */
            <ImagePlaceholder caption="compatibility report excerpt" />
          }
        />

        <FullSection label="what I'd change">
          <p>
            The audience effect from public profiles needs more study. We shipped on instinct; I
            don&rsquo;t have data on whether it meaningfully reduced interview honesty.
          </p>
          <p>
            The compatibility report itself is the layer where the most emergent behavior happens —
            the agent decides what to surface and how to frame it. We have less design grip on that
            layer than on the interview itself. I&rsquo;d add behavioral auditing of the
            report-generation pass: sample reports, look for patterns in what gets surfaced and
            what gets glossed, and feed that back into the prompt design.
          </p>
        </FullSection>

        <CaseStudyFooterNav
          liveLabel="visit tbd.chat"
          liveHref="https://tbd.chat"
          nextLabel="research.site"
          nextHref="/work/research-site"
        />
      </main>
      <SiteFooter />
    </>
  );
}
