import { Link } from "react-router-dom";

export default function AboutSection() {
  return (
    <article className="px-16 md:px-6 sm:px-3 mb-12 flex flex-col justify-between gap-8 items-center relative">
      <p className="font-bold font-serif text-2xl text-center">
        About VirtuLearn
      </p>
      <p
        className="text-center w-2/3 font-semibold texlxl
      "
      >
        At VirtuLearn, we're on a mission to revolutionize education. Founded
        with a vision to make learning accessible, engaging, and impactful, we
        believe in the transformative power of knowledge. Our platform offers a
        seamless blend of simplicity and innovation, providing learners with a
        powerful e-learning solution tailored to their needs. Join us as we
        embark on a journey to empower minds, inspire growth, and shape the
        future of education together.
      </p>
      <Link
        to="/courses"
        className="font-bold bg-bergeL text-black px-8 py-2 rounded-3xl"
      >
        Go to courses
      </Link>
      <img
        className="absolute bottom-0 left-16 md:left-6 sm:left-3 w-40 h-20 rounded-2xl object-cover"
        src="/1.jpg"
        alt=""
      />
      <img
        className="absolute top-0 right-16 md:right-6 sm:right-3 w-40 h-20 rounded-2xl object-cover"
        src="/revo.jpg"
        alt=""
      />
    </article>
  );
}
