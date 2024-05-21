export default function GridCard() {
  return (
    <article className="h-96 bg-bergeL text-black rounded-2xl flex flex-col justify-between relative">
      <div className="h-1/3 p-4">
        <p className="font-bold font-serif text-2xl">
          What is Virtual reality and why is it so important?
        </p>
        <p>
          Explore our popular courses handpicked by learners like you. From
          in-demand skills to cutting-edge topics.
        </p>
      </div>
      <img
        className="h-[60%] rounded-2xl object-cover"
        src="/revo.jpg"
        alt=""
      />
      <button className="absolute bottom-4 right-4 bg-black text-white font-semibold text-xl px-4 py-1 rounded-xl">Learn More</button>
    </article>
  );
}
