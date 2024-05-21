import { Link } from "react-router-dom";

export default function MoreAbout() {
  return (
    <article className="px-16 md:px-6 sm:px-3 my-20 flex justify-between items-center">
      <section className="flex flex-col gap-5 w-1/2">
        <p className="font-bold text-4xl font-serif">
          On our platform you will find a wide range of onlune courses
        </p>
        <p>
          Experience the future of education with our cutting-edge e-learning
          solutions. We harness the power of technology to deliver dynamic and
          interactive learning experiences anytime, anywhere.
        </p>
        <Link
          to="courses"
          className="font-bold text-xl bg-bergeL w-fit text-black px-8 py-2 rounded-xl"
        >
          View Courses
        </Link>
      </section>
      <img
        className="w-1/2 h-96 object-cover rounded-xl"
        src="/patt.jpg"
        alt=""
      />
    </article>
  );
}
