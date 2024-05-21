export default function TopPicks() {
  return (
    <article className="my-16 overflow-hidden">
      <p className="text-center font-bold text-4xl mb-10">Top Picks</p>
      <article className="w-full flex -translate-x-[0%] transition-all duration-500 rounded-2xl">
        <section className="min-w-full h-96 bg-greenL rounded-2xl bg-[url('/1.jpg')] bg-cover relative overflow-hidden flex flex-col justify-center items-center gap-4 text-black font-semibold">
          <div className="w-fit z-20 flex gap-4 bg-bergeL text-black py-2 px-6 rounded-full">
            <img
              className="w-12 h-12 rounded-full object-cover"
              src="/rubix.jpg"
              alt=""
            />
            <div>
              <p className="font-bold text-lg">Aristide Isingizwe</p>
              <p>Aristide Isingizwe</p>
            </div>
          </div>
          <p className="z-20 font-bold text-3xl font-serif">
            Artificial Intelligence beyond imaginations
          </p>
          <p className="z-20 text-lg  w-2/3 text-center">
            Artificial intelligence has been advancing beyong what humans have
            imagined for decades and will dominate humans in the coming years,
            but the question is, How will it happen like?
          </p>
          <button className="z-20 bg-bergeL px-6 py-1 rounded-lg font-semibold text-xl">
            Read more
          </button>
          <div className="w-full h-full bg-greenL/60 absolute top-0 left-0 z-10"></div>
        </section>
        <section className="min-w-full h-96 bg-yellowL rounded-2xl"></section>
        <section className="min-w-full h-96 bg-purpleL rounded-2xl"></section>
        <section className="min-w-full h-96 bg-greenD rounded-2xl"></section>
        <section className="min-w-full h-96 bg-bergeD rounded-2xl"></section>
      </article>
    </article>
  );
}
