import BaseLayout from '../layouts/base.layout';
import { HeroSection } from '../components/sections/HeroSection';
import { AboutUs } from '../components/sections/AboutUs';
import { HowItWorks } from '../components/sections/HowItWorks';
import { Contact } from '../components/sections/Contact';

export default function Home() {
  return (
    <BaseLayout>
      <HeroSection />
      <AboutUs />
      <HowItWorks />
      <Contact />
    </BaseLayout>
  )
}
