import * as React from 'react';

import AboutSection from '@components/site/AboutSection';
import ContactBlock from '@components/site/ContactBlock';
import Hero from '@components/site/Hero';
import ProjectsList from '@components/site/ProjectsList';
import SiteFooter from '@components/site/SiteFooter';
import SiteNav from '@components/site/SiteNav';
import WritingList from '@components/site/WritingList';

export default function HomePage() {
  return (
    <>
      <SiteNav />
      <main>
        <Hero />
        <AboutSection />
        <ProjectsList />
        <WritingList />
        <ContactBlock />
      </main>
      <SiteFooter />
    </>
  );
}
