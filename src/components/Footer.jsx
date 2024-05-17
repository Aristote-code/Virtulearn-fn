import { Link } from "react-router-dom";
import LogoIcon from "../assets/LogoIcon";

export default function Footer() {
  return (
    <article>
      <section className="w-full bg-dark-100 text-dark-200 flex flex-col items-center text-center py-4 gap-3">
        <p className="font-serif text-sm font-semibold">We are here to help!</p>
        <p className="font-semibold text-3xl">Ready to give us a TRY?</p>
        <p className="w-1/2 text-lg">
          Join MindWave today. Connect, share, and grow in our supportive mental
          health community. Your well-being matters – be part of the
          conversation and start your journey to a healthier mind.
        </p>
        <Link
          className="px-10 py-2 bg-dark-200 text-light-200 rounded-xl font-semibold"
          to="/signup"
        >
          Get Started
        </Link>
      </section>
      <section className="w-full py-6 px-12">
        <section className="flex justify-around border-b-2 border-light-200 pb-8">
          <div className="w-1/4 flex flex-col gap-4">
            <Link
              to="/"
              className="flex justify-start items-center gap-4 font-serif font-bold text-xl"
            >
              <LogoIcon classes="text-dark-100 w-8 h-8" />
              <p>Mind Wave</p>
            </Link>
            <p>
              Welcome to MindWave – where conversations on mental health thrive.
              Explore resources, connect with a supportive community, and begin
              your journey to a healthier mind. Join us in fostering
              understanding, empathy, and growth. Your well-being starts here
            </p>
          </div>
          <div className="flex flex-col">
            <p className="font-bold text-2xl mb-4">Links</p>
            <Link to="/login">Login</Link>
            <Link to="/login">Sign Up</Link>
            <Link to="/login">About</Link>
            <Link to="/login">Team</Link>
            <Link to="/login">Mental Health</Link>
          </div>
          <div className="flex flex-col gap-2">
            <p className="font-bold text-2xl mb-4">Contacts</p>
            <p>Location: Kigali, Rwanda</p>
            <p>Email: mind.wave@gmail.com</p>
            <p>Phone: +250785478021</p>
            <div className="flex justify-start gap-3">
              <img className="w-6" src="./public/twitter.png" alt="twitter" />
              <img className="w-6" src="./public/facebook.png" alt="twitter" />
              <img className="w-6" src="./public/linkedin.png" alt="twitter" />
              <img className="w-6" src="./public/instagram.png" alt="twitter" />
            </div>
          </div>
        </section>
        <p className="text-center pt-4">
          Copyright 2023 Mind Wave @All right reserved
        </p>
      </section>
    </article>
  );
}
