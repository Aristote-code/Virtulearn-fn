import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section className="flex md:flex-col justify-between items-center gap-20 py-20 px-20 md:px-[5%]">
      <section className="w-2/5 md:w-full md:items-center flex flex-col gap-10">
        <p className="text-8xl font-semibold text-light-100 whitespace-nowrap">
          Mind Wave
        </p>
        <p className="text-xl text-justify">
          Discover MindWave, your daily retreat for mental wellness. Kickstart
          each day with uplifting affirmations, combatting stress and
          negativity. Journal your thoughts for personal growth through text,
          photos. Connect with a supportive community, sharing and fostering
          understanding.
        </p>
        <div className="flex gap-6">
          <Link
            className="bg-dark-100 text-dark-200 font-medium px-8 py-2"
            to="signup"
          >
            Join Now
          </Link>
          <Link
            className="bg-dark-100 text-dark-200 font-medium px-8 py-2"
            to="login"
          >
            Log In
          </Link>
        </div>
      </section>
      <img className="w-2/5 md:w-full" src="/hero.png" alt="hero image" />
    </section>
  );
}
