import GridCard from "./GridCard";

export default function BlogGrid() {
  return (
    <article className="mb-16 grid grid-cols-3 gap-6">
      <div className="h-96 col-span-2 flex flex-col justify-center gap-6">
        <p className="font-bold text-4xl font-serif">Our Popular Blogs</p>
        <p>
          Explore our popular courses handpicked by learners like you. From
          in-demand skills to cutting-edge topics, our popular courses section
          offers a curated selection of learning opportunities. Join thousands
          of learners and take the first step towards your personal and
          professional growth with VirtuLearn's popular courses.
        </p>
        <button className="bg-bergeL font-bold px-14 py-2 rounded-xl w-fit text-black text-xl">
          Subscribe
        </button>
      </div>
      <GridCard />
      <GridCard />
      <GridCard />
      <GridCard />
      <GridCard />
      <div className="h-96 bg-greenL col-span-2 rounded-2xl flex justify-between">
        <img className="h-full w-2/3 rounded-2xl" src="/revo.jpg" alt="" />
        <div className="h-full w-1/3 p-4 flex flex-col justify-around">
          <p className="font-bold font-serif text-2xl">
            What is Virtual reality and why is it so important?
          </p>
          <p>
            Explore our popular courses handpicked by learners like you. From
            in-demand skills to cutting-edge topics.
          </p>
          <button className="font-bold text-xl px-4 py-1 bg-black text-white rounded-2xl">
            Read More
          </button>
        </div>
      </div>
    </article>
  );
}
