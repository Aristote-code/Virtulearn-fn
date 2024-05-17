export default function About() {
  return (
    <section
      id="about"
      className="py-16 bg-light-200 text-dark-200 px-20 md:px-10"
    >
      <section className="flex justify-between items-center md:flex-col gap-10">
        <img className="w-2/5 md:w-full" src="/about.png" alt="about image" />
        <section className="w-2/5 md:w-full flex flex-col gap-8">
          <div className="flex items-center gap-10">
            <p className="font-bold text-3xl">About Mind Wave</p>
            <div className="w-12 h-px bg-dark-200 mt-1"></div>
          </div>
          <p className="text-justify">
            {`Welcome to MindWave – the empowering community for African youth.
          Share, connect, and engage on our user-driven platform, fostering
          understanding and support. Receive daily motivation with uplifting
          quotes and explore our educational homepage for valuable mental health
          insights. MindWave is more than a website; it's a movement dedicated
          to empowering African youth. Join us in riding the Mind Wave to
          brighter, empowered futures.`}
          </p>
          <a
            href="#meet"
            className="bg-dark-100 w-fit text-dark-200 font-semibold px-8 py-2"
          >
            Meet The Team
          </a>
        </section>
      </section>
      <section className="flex gap-6 mt-16 md:flex-col w-full">
        <div className="flex gap-6 w-full sm:flex-col">
          <div className="w-1/2 sm:w-full border-2 border-dark-200 p-4 rounded-lg">
            <p className="font-bold text-lg whitespace-nowrap truncate">
              User-Driven Support
            </p>
            <p className="text-sm mt-2">
              At MindWave, we believe in the strength of shared experiences. Our
              user-driven support system creates a space where individuals can
              openly share their feelings.
            </p>
          </div>
          <div className="w-1/2 sm:w-full border-2 border-dark-200 p-4 rounded-lg">
            <p className="font-bold text-lg whitespace-nowrap truncate">
              Interactive Discussion Platform
            </p>
            <p className="text-sm mt-2">
              Connect & Empower - Engage in conversations that matter. Our
              interactive discussion platform is a haven for meaningful
              exchanges.
            </p>
          </div>
        </div>
        <div className="flex gap-6 w-full sm:flex-col sm:hidden">
          <div className="w-1/2 sm:w-full border-2 border-dark-200 p-4 rounded-lg">
            <p className="font-bold text-lg whitespace-nowrap truncate">
              Daily Motivation Quotes
            </p>
            <p className="text-sm mt-2">
              {`
            Inspiration Every Day" - Elevate your spirits with a daily dose of
            motivation. Our carefully curated quotes are designed to uplift and
            encourage positive thinking
            `}
            </p>
          </div>
          <div className="w-1/2 sm:w-full border-2 border-dark-200 p-4 rounded-lg">
            <p className="font-bold text-lg whitespace-nowrap truncate">
              Educational Homepage
            </p>
            <p className="text-sm mt-2">
              {`
            Knowledge is Power - Dive into our educational homepage, a treasure
            trove of valuable resources, articles, and insights on mental
            health.
            `}
            </p>
          </div>
        </div>
      </section>
    </section>
  );
}
