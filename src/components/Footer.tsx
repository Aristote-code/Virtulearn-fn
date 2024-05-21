import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <article>
      <section className="w-full bg-bergeD text-black flex flex-col items-center text-center py-4 gap-3">
        <p className="font-serif text-sm font-semibold">We are here to help!</p>
        <p className="font-semibold text-3xl">Ready to give us a Try?</p>
        <p className="w-1/2 text-lg md:w-full">
          Ready to embark on a transformative learning journey? Join VirtuLearn
          now and unlock a world of possibilities. Elevate your skills, connect
          with a vibrant community, and embrace a future filled with knowledge.
          Seize the opportunity – your learning adventure begins here. Join us,
          learn more, and grow together!
        </p>
        <Link
          className="px-10 py-2 bg-black text-white rounded-xl font-semibold"
          to="/signup"
        >
          Get Started
        </Link>
      </section>
      <section className="w-full py-6 px-12 bg-mainDark text-mainLight md:px-10 sm:px-6">
        <section className="flex justify-around border-b-2 pb-8 md:flex-col gap-8">
          <div className="w-1/4 flex flex-col gap-4 md:w-full">
            <Link
              to="/"
              className="flex justify-start items-center gap-4 font-serif font-bold text-xl"
            >
              <img className="w-52" src="/logo.png" alt="" />
            </Link>
            <p>
              Empowering minds, one click at a time. VirtuLearn is your gateway
              to accessible and interactive learning. We believe in the
              transformative power of education to shape a better future. Dive
              into a world of knowledge, connect with mentors, and embrace a new
              way of learning. Join VirtuLearn – where curiosity meets
              opportunity.
            </p>
          </div>
          <div className="flex justify-between w-1/3 md:w-full">
            <div className="flex flex-col">
              <p className="font-bold text-2xl mb-4">Links</p>
              <Link
                className="hover:text-mainYellow hover:underline"
                to="/portal"
              >
                Login/Signup
              </Link>
              <Link
                className="hover:text-mainYellow hover:underline"
                to="/about"
              >
                About
              </Link>
              <Link
                className="hover:text-mainYellow hover:underline"
                to="/courses"
              >
                Courses
              </Link>
              <Link
                className="hover:text-mainYellow hover:underline"
                to="/blogs"
              >
                Blogs
              </Link>
              <Link
                className="hover:text-mainYellow hover:underline"
                to="/courses"
              >
                Courses
              </Link>
              <Link
                className="hover:text-mainYellow hover:underline"
                to="/privacy"
              >
                Privacy Policy
              </Link>
              <Link
                className="hover:text-mainYellow hover:underline"
                to="/contact"
              >
                Contact
              </Link>
              <Link
                className="hover:text-mainYellow hover:underline"
                to="/contacts"
              >
                FAQs
              </Link>
            </div>
            <div className="flex flex-col gap-2">
              <p className="font-bold text-2xl mb-4">Contacts</p>
              <p>Location: Kigali, Rwanda</p>
              <p>Email: i.aristide08@gmail.com</p>
              <p>Phone: +250785478021</p>
              <div className="flex justify-start gap-3">
                <img className="w-6" src="/twitter.png" alt="twitter" />
                <img className="w-6" src="/facebook.png" alt="twitter" />
                <img className="w-6" src="/linkedin.png" alt="twitter" />
                <img className="w-6" src="/instagram.png" alt="twitter" />
              </div>
            </div>
          </div>
        </section>
        <p className="text-center pt-4">
          Copyright 2023 Virtulearn @All right reserved
        </p>
      </section>
    </article>
  );
}
