import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <article className="px-16 md:px-6 sm:px-3 flex justify-between mt-12 mb-20 items-center md:flex-col md:gap-8">
      <section className="w-1/2 flex flex-col gap-8 md:w-full">
        <p className="font-bold text-7xl md:text-6xl sm:text-5xl">
          <span className="text-bergeL">Take Your Time</span> <br /> And Learn
          From <br />
          Anywhere
        </p>
        <p>
          Empower yourself with VirtuLearn's online platform. Dive into a world
          of knowledge through interactive discussions, expert mentorship, and
          real-time chat features. Elevate your skills, connect with mentors,
          and thrive in today's dynamic landscape.
        </p>
        <Link
          to="signup"
          className="font-bold text-black text-3xl bg-bergeL w-fit px-10 rounded-xl py-2"
        >
          Join Now
        </Link>
      </section>
      <img
        className="w-[45%] md:w-full object-contain"
        src="/hero.png"
        alt=""
      />
    </article>
  );
}
