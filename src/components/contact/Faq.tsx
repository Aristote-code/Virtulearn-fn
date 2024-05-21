import FaqCard from "./FaqCard";

export default function Faq() {
  return (
    <article>
      <div className="border-b-4 pb-4 border-yellowL w-fit flex">
        <p className="font-bold font-serif text-5xl">FAQ's</p>
        <div className="w-32"></div>
      </div>
      <section className="px-12 mt-12 flex flex-col w-4/5">
        <FaqCard />
        <FaqCard />
        <FaqCard />
        <FaqCard />
        <FaqCard />
        <FaqCard />
        <FaqCard />
      </section>
    </article>
  );
}
