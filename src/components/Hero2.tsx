export default function Hero2() {
  return (
    <article className="px-16 md:px-6 sm:px-3">
      <section>
        <div
          className="text-9xl font-bold flex items-end gap-6 object-contain md:text-7xl sm:text-4xl md:gap-4 sm:gap-3
        "
        >
          <p>Build</p>
          <img
            className="w-96 md:w-60 sm:w-40"
            src="/purple.png"
            alt="purple"
          />
          <p>Your</p>
        </div>
        <div className="flex items-end text-9xl font-bold gap-6 md:gap-4 sm:gap-3 justify-end md:text-6xl sm:text-4xl">
          <img src="/green.png" className="md:w-20 sm:w-14" alt="" />
          <p>Skills</p>
          <img src="/yellow.png" className="md:w-20 sm:w-14" alt="" />
          <p>Online</p>
        </div>
      </section>
      <section className="flex flex-col gap-5 mt-12">
        <section className="flex justify-between gap-5">
          <div className="h-60 w-4/12 bg-bergeL rounded-xl flex flex-col justify-between text-black p-4 md:w-1/3 sm:hidden">
            <p className="font-bold">Comprehensive Learning Materials</p>
            <p className="font-bold text-2xl md:text-base">
              Explore a vast <span className="bg-bergeD px-4">library</span> of
              curated content aligned with industry standards
            </p>
            <p>ensuring a thorough understanding of your chosen subjects.</p>
          </div>
          <div className="h-60 w-2/12 bg-purpleL rounded-xl flex flex-col text-white justify-around p-4 md:hidden">
            <img className="w-3/5 object-contain" src="/people.png" alt="" />
            <div className="flex flex-col">
              <p className="font-bold text-3xl">100K+</p>
              <p>Active Learners</p>
            </div>
          </div>
          <div className="h-60 w-3/12 bg-bergeD rounded-xl overflow-hidden md:w-1/3 sm:w-1/2">
            <img
              className="w-full h-full object-cover"
              src="/learn.jpg"
              alt=""
            />
          </div>
          <div className="h-60 w-3/12 bg-greenL rounded-xl text-black overflow-hidden flex flex-col justify-around px-4 md:w-1/3 sm:w-1/2">
            <p className="font-bold">Real-Time Chat Features</p>
            <p className="font-bold text-3xl md:text-2xl">Discussion Forums</p>
            <p className="text-lg md:text-base">
              Peer-To-Peer and Student-To-Mentors direct communication
            </p>
          </div>
        </section>
        <section className="flex justify-between gap-5">
          <div className="h-60 w-5/12 bg-yellowL rounded-xl relative overflow-hidden flex flex-col justify-around px-4 text-black md:hidden">
            <p className="font-bold text-5xl z-10">
              Competitive <br />
              Advantage
            </p>
            <p className="z-10 text-xl">
              Explore a vast library of curated content <br /> aligned with
              industry standards
            </p>
            <img
              className="absolute top-0 left-0 w-full h-full object-cover object-bottom"
              src="/rubix.jpg"
              alt=""
            />
            <div className="absolute top-0 left-0 w-full h-full bg-yellowL/35"></div>
          </div>
          <div className="h-60 w-7/12 border-2 border-white rounded-xl md:w-full">
            <iframe
              className="w-full h-full"
              src="/embed/embed.html"
            ></iframe>
          </div>
        </section>
      </section>
    </article>
  );
}
