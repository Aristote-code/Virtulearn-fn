import Contact from "../components/contact/Contact";
import Faq from "../components/contact/Faq";

export default function ContactPage() {
  return (
    <article className="px-16 md:px-6 sm:px-3 my-16">
      <Contact />
      <Faq />
    </article>
  );
}
