export default function Revol() {
  return (
    <article className="px-16 md:px-6 sm:px-3 mt-20">
      <section className="flex justify-between gap-4">
        <div className="w-8/12 flex flex-col justify-between gap-4 text-7xl md:text-6xl sm:text-4xl items-start md:w-full">
          <p className="self-end">REVOLUTIONIZE</p>
          <p>
            LEARNING{" "}
            <span className="text-3xl border border-white px-4 rounded-full">
              WITH
            </span>
          </p>
          <p className="self-center">E-DRIVEN</p>
          <p className="self-end">EDUCATION</p>
        </div>
        <div className="w-4/12 bg-purpleL rounded-xl p-4 flex flex-col justify-around md:hidden">
          <p className="font-bold border border-white px-6 py-1 w-fit rounded-xl">
            Welcome
          </p>
          <p className="text-xl">
            Discover a new way of learning with our Full-Powered online
            platform. Achieve your goals and succeed with us 🚀
          </p>
        </div>
      </section>
      <section className="flex justify-between gap-4 mt-20 md:flex-col">
        <section className="w-5/12 h-96 rounded-2xl flex flex-col gap-4 md:w-full">
          <div className="h-1/2 w-full bg-yellowL rounded-2xl overflow-hidden">
            <img
              src="/revo.jpg"
              className="w-full h-full object-cover object-bottom"
              alt=""
            />
          </div>
          <div className="h-1/2 w-full rounded-2xl flex gap-4 text-black font-bold text-3xl">
            <div className="h-full w-1/2 bg-greenL rounded-2xl flex flex-col justify-center items-center">
              <p>125+</p>
              <p>Courses</p>
            </div>
            <div className="h-full w-1/2 bg-white rounded-2xl flex flex-col justify-center items-center">
              <p>200+</p>
              <p>Learners</p>
            </div>
          </div>
        </section>
        <section className="w-7/12 h-96 bg-bergeL rounded-2xl flex justify-between gap-4 p-4 md:w-full">
          <section className="w-8/12 flex flex-col justify-around sm:w-full">
            <div className="flex gap-2">
              <p className="font-bold bg-black w-fit px-6 rounded-2xl py-1 whitespace-nowrap md:text-sm sm:text-xs">
                Online education
              </p>
              <p className="font-bold bg-black w-fit px-6 rounded-2xl py-1 whitespace-nowrap md:text-sm sm:text-xs">
                Discussions
              </p>
              <p className="font-bold bg-black w-fit px-6 rounded-2xl py-1 whitespace-nowrap md:text-sm sm:text-xs">
                Chatting
              </p>
            </div>
            <div className="flex flex-col gap-4 text-black">
              <p className="font-bold text-5xl border-b-2 pb-6">Flexible</p>
              <p>
                Dive into the latest and greatest! Our "Most Popular Courses"
                feature the trending topics everyone is talking about. Elevate
                your skills with the hottest picks on VirtuLearn. Stay in the
                know, stay ahead.
              </p>
            </div>
          </section>
          <section className="w-4/12 bg-bergeD rounded-2xl p-4 flex flex-col justify-around sm:hidden">
            <img
              className="w-full h-40 object-cover rounded-2xl"
              src="/learn.jpg"
              alt=""
            />
            <div className="flex justify-between text-black text-2xl font-bold font-serif items-center">
              <p>View Courses</p>
              <img className="w-20" src="/right.png" alt="" />
            </div>
          </section>
        </section>
      </section>
    </article>
  );
}
