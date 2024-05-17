import Faq from "./Faq";

export default function Inspiring() {
  return (
    <article className="mt-28">
      <section className="px-[5%] text-dark-200 bg-[url('./public/faq.jpg')] bg-cover bg-center pt-12 pb-40 relative ">
        <section className="flex justify-between gap-6 sm:flex-col">
          <p className="font-bold text-4xl md:text-3xl w-fit whitespace-nowrap z-10">
            Inspiring Stories
          </p>
          <div className="w-3/5 sm:w-full flex flex-col gap-6 z-10">
            <p className="text-justify text-lg font-medium">
              {`
            "MindWave has been my anchor through the storm of mental health challenges. The community's warmth and the insightful resources gave me the courage to confront my struggles head-on. Connecting with others who shared their journeys inspired me to seek professional help. Today, I stand not just as a survivor but as someone who thrives. MindWave, to me, is more than a website; it's a lifeline that leads to a brighter future."
          `}
            </p>
            <section className="flex justify-between">
              <div className="flex items-center gap-4">
                <img
                  className="w-12 h-12 rounded-full object-cover"
                  src="sample.jpg"
                  alt=""
                />
                <div>
                  <p className="font-serif font-bold">Aristide Isingizwe</p>
                  <p className="text-sm">Mind Wave user</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <img
                  className="w-12 h-12 rounded-full object-cover"
                  src="sample.jpg"
                  alt=""
                />
                <div>
                  <p className="font-serif font-bold">Aristide Isingizwe</p>
                  <p className="text-sm">Mind Wave user</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <img
                  className="w-12 h-12 rounded-full object-cover"
                  src="sample.jpg"
                  alt=""
                />
                <div>
                  <p className="font-serif font-bold">Aristide Isingizwe</p>
                  <p className="text-sm">Mind Wave user</p>
                </div>
              </div>
            </section>
          </div>
        </section>
        <div className="w-full h-full bg-dark-100/70 absolute top-0 left-0 z-0"></div>
      </section>
      <section
        id="faq"
        className="mx-auto rounded-2xl z-2 text-dark-200 w-3/5 bg-light-200 sm:w-4/5"
      >
        <Faq />
      </section>
    </article>
  );
}
