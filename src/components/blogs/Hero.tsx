import { Link } from "react-router-dom";

export default function BlogsHero() {
  return (
    <section className="flex flex-col gap-8">
      <div className="flex justify-between items-center">
        <div className="w-1/2 flex flex-col gap-4">
          <p className="font-bold font-serif text-4xl">
            Discover nice blogs here
          </p>
          <p>
            Dive into our collection of{" "}
            <span className="font-bold text-bergeL">
              thought-provoking blogs
            </span>
            , where knowledge meets inspiration. Discover industry insights,
            expert opinions, and valuable tips to{" "}
            <span className="font-bold text-bergeL">
              fuel your learning journey
            </span>
            . Stay informed, stay inspired, and explore the world of VirtuLearn
            blogs today.
          </p>
        </div>
        <Link
          to="/blogs/add"
          className="bg-greenD font-bold text-xl px-8 py-1 rounded-xl"
        >
          Add Blog
        </Link>
      </div>
      <section className="flex justify-between gap-2">
        <button className="px-4 rounded-xl py-2 font-semibold bg-greenL text-base">
          All
        </button>
        <button className="px-4 rounded-xl py-2 font-semibold text-base text-white/45">
          Technology
        </button>
        <button className="px-4 rounded-xl py-2 font-semibold text-base text-white/45">
          Sports
        </button>
        <button className="px-4 rounded-xl py-2 font-semibold text-base text-white/45">
          Design
        </button>
        <button className="px-4 rounded-xl py-2 font-semibold text-base text-white/45">
          Machine Learning
        </button>
        <button className="px-4 rounded-xl py-2 font-semibold text-base text-white/45">
          Artificial Intelligence
        </button>
        <button className="px-4 rounded-xl py-2 font-semibold text-base text-white/45">
          Programming
        </button>
        <button className="px-4 rounded-xl py-2 font-semibold text-base text-white/45">
          Business
        </button>
        <button className="px-4 rounded-xl py-2 font-semibold text-base text-white/45">
          Economics
        </button>
        <button className="px-4 rounded-xl py-2 font-semibold text-base text-white/45">
          Health
        </button>
      </section>
    </section>
  );
}
