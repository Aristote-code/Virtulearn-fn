import { Link } from "react-router-dom";

export default function Meet() {
  return (
    <article className="flex flex-col justify-between my-16 mx-[5%]">
      <section className="w-full flex justify-between gap-8 items-center">
        <div className="w-1/4 md:w-full h-full">
          <h1 className="font-serif font-bold">Meet The Team</h1>
          <p className="font-semibold text-4xl">
            Our Team Is The Difference, Our Chemistry Is The Spark.
          </p>
        </div>
        <div className="w-1/4 h-full flex flex-col items-center gap-4 md:hidden border border-light-200 py-2 rounded-xl">
          <img
            className="h-52 w-10/12 object-cover"
            src="./public/meet.jpg"
            alt="team member photo"
          />
          <div className="flex flex-col items-center">
            <p className="font-semibold text-xl">Aristide Isingizwe</p>
            <p className="text-sm">FullStack developer</p>
          </div>
        </div>
        <div className="w-1/4 h-full flex flex-col items-center gap-4 md:hidden border border-light-200 py-2 rounded-xl">
          <img
            className="h-52 w-10/12 object-cover"
            src="./public/meet.jpg"
            alt="team member photo"
          />
          <div className="flex flex-col items-center">
            <p className="font-semibold text-xl">Aristide Isingizwe</p>
            <p className="text-sm">FullStack developer</p>
          </div>
        </div>
        <div className="w-1/4 h-full flex flex-col items-center gap-4 md:hidden border border-light-200 py-2 rounded-xl">
          <img
            className="h-52 w-10/12 object-cover"
            src="./public/meet.jpg"
            alt="team member photo"
          />
          <div className="flex flex-col items-center">
            <p className="font-semibold text-xl">Aristide Isingizwe</p>
            <p className="text-sm">FullStack developer</p>
          </div>
        </div>
      </section>
      <section className="flex justify-between mt-10 items-center gap-8">
        <div className="w-1/4 h-full flex flex-col items-center gap-4 md:hidden border border-light-200 py-2 rounded-xl">
          <img
            className="h-52 w-10/12 object-cover"
            src="./public/meet.jpg"
            alt="team member photo"
          />
          <div className="flex flex-col items-center">
            <p className="font-semibold text-xl">Aristide Isingizwe</p>
            <p className="text-sm">FullStack developer</p>
          </div>
        </div>
        <div className="w-1/4 h-full flex flex-col items-center gap-4 md:hidden border border-light-200 py-2 rounded-xl">
          <img
            className="h-52 w-10/12 object-cover"
            src="./public/meet.jpg"
            alt="team member photo"
          />
          <div className="flex flex-col items-center">
            <p className="font-semibold text-xl">Aristide Isingizwe</p>
            <p className="text-sm">FullStack developer</p>
          </div>
        </div>
        <div className="w-1/4 h-full flex flex-col items-center gap-4 md:hidden border border-light-200 py-2 rounded-xl">
          <img
            className="h-52 w-10/12 object-cover"
            src="./public/meet.jpg"
            alt="team member photo"
          />
          <div className="flex flex-col items-center">
            <p className="font-semibold text-xl">Aristide Isingizwe</p>
            <p className="text-sm">FullStack developer</p>
          </div>
        </div>
        <div className="w-1/4 md:w-full h-full flex flex-col gap-6">
          <h1 className="font-serif font-bold">Mind Wave Team</h1>
          <Link
            to="#"
            className="bg-dark-100 px-8 py-2 rounded-lg text-dark-200 font-semibold text-xl text-center"
          >
            View More
          </Link>
        </div>
      </section>
    </article>
  );
}
