import BaseLayout from '../layouts/base.layout'
import { HeroSection } from '../components/sections/home/HeroSection'
import { AboutUs } from '../components/sections/home/AboutUs'
import { HowItWorks } from '../components/sections/home/HowItWorks'
import { Contact } from '../components/sections/home/Contact'

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
