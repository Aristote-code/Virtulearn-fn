import { Link } from "react-router-dom";
export default function NotFound() {
  return (
    <article className="w-full flex flex-col items-center gap-8 text-center px-6">
      <img
        src="https://cdn.rawgit.com/ahmedhosna95/upload/1731955f/sad404.svg"
        alt="404"
      />
      <span className="font-bold text-5xl md:text-4xl sm:text-3xl">
        404 PAGE
      </span>
      <p className="">The page you were looking for could not be found</p>
      <Link
        className="font-bold bg-black text-white px-10 py-2 rounded-full mb-8"
        to="/"
      >
        Go Back Home
      </Link>
    </article>
  );
}
