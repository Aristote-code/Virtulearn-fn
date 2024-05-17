import { Link } from "react-router-dom";

export default function Mental() {
  return (
    <article className="bg-light-200 px-[5%] py-12 text-dark-200 flex justify-between gap-16 items-center md:flex-col">
      <section>
        <p className="font-semibold text-5xl md:text-4xl sm:text-3xl ">
          {`There's`} No One Face To
          <br />
          Mental Health
          <br />
          Condition
        </p>
        <p className="my-6 w-4/5 md:w-full">
          We combine the latest information and evidence based information with
          compassion and understanding to help our users journey to healthy
          mental wellbeing
        </p>
        <Link
          className="bg-dark-200 px-10 py-2 text-light-200 text-xl font-semibold rounded-lg mt-16 "
          to="/learn"
        >
          Learn More
        </Link>
      </section>
      <img
        className="w-1/3 md:w-4/5"
        src="./public/mental.png"
        alt="mental health"
      />
    </article>
  );
}
