import { Link } from "react-router-dom";

export default function AboutHero() {
  return (
    <article className="my-12 mx-16 md:mx-6 sm:mx-3  rounded-2xl py-12 px-10 md:px-0 flex flex-col gap-6">
      <section className="flex justify-between items-center sm:flex-col">
        <div className="w-1/2 sm:w-full">
          <p className="bg-bergeL font-bold text-black w-fit px-8 rounded-lg">
            Streamlined Learning Experience
          </p>
          <p>
            Simplicity is at the heart of our platform. We strive to make
            learning effortless and intuitive, providing a user-friendly
            experience for learners of all levels.
          </p>
        </div>
        <p className="font-bold font-serif text-8xl md:text-6xl sm:text-7xl">
          Simple
        </p>
        <div className="bg-bergeL md:hidden rounded-full w-16 h-16 text-black font-bold grid place-content-center">
          Explore
        </div>
      </section>
      <section className="flex justify-between items-center sm:flex-col">
        <p className="font-bold font-serif text-8xl md:text-6xl sm:text-7xl">
          Powerful
        </p>
        <div className="w-1/2 sm:w-full bg-bergeL text-black px-6 py-2 rounded-xl">
          <p className="bg-black font-bold w-fit text-white px-8 mb-1 rounded-lg">
            Empowering Your Potential
          </p>
          <p className="text-sm">
            Unleash your full potential with our powerful learning tools and
            resources. From comprehensive courses to expert guidance, we empower
            learners to achieve their goals and surpass expectations.
          </p>
        </div>
      </section>
      <section className="flex justify-center items-center sm:flex-col">
        <div className="">
          <p className="bg-bergeL font-bold text-black w-fit px-8 py-1 text-xl md:text-lg rounded-lg">
            Transformative Digital Education
          </p>
        </div>
        <p className="font-bold font-serif text-8xl md:text-6xl">E~Learning</p>
      </section>
      <section className="flex justify-between items-center">
        <Link
          to="courses"
          className="w-24 h-24 md:w-20 md:h-20 sm:w-16 sm:h-16 rounded-full grid place-content-center border-2 text-bergeL font-bold  border-bergeL sm:text-sm"
        >
          Courses
        </Link>
        <p className="font-bold font-serif text-8xl md:text-6xl sm:text-5xl">
          Solutions
        </p>

        <p className="text-sm w-1/2 md:hidden">
          We understand that every learner is unique. That's why we offer
          customizable solutions to meet your specific learning objectives.
        </p>
      </section>
    </article>
  );
}
