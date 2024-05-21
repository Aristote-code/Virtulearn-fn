import Testimonials from "../components/Testimonials";
import AboutSection from "../components/about/AboutSection";
import AboutHero from "../components/about/Hero";
import MoreAbout from "../components/about/MoreAbout";

export default function AboutPage() {
  return (
    <article>
      <AboutHero />
      <AboutSection />
      <MoreAbout />
      <Testimonials />
    </article>
  );
}
