export default function Contact() {
  return (
    <article className="h-[80vh] flex justify-between gap-20">
      <section className="w-1/2 h-full flex flex-col justify-around items-end">
        <form className="w-4/5 h-4/5 flex flex-col justify-around">
          <input
            className="bg-bergeL/0 border-b-2 border-white/50 text-xl outline-none py-2 placeholder:text-white/50"
            type="text"
            name="names"
            placeholder="Your Names"
          />
          <input
            className="bg-bergeL/0 border-b-2 border-white/50 text-xl outline-none py-2 placeholder:text-white/50"
            type="email"
            name="email"
            placeholder="Your Email"
          />
          <input
            className="bg-bergeL/0 border-b-2 border-white/50 text-xl outline-none py-2 placeholder:text-white/50"
            type="text"
            name="phone"
            placeholder="Your Phone Number"
          />
          <textarea
            className="bg-bergeL/0 border-b-2 border-white/50 text-xl outline-none py-2 placeholder:text-white/50 h-32"
            name="message"
            placeholder="Share your thoughts"
          ></textarea>
          <button className="bg-bergeL py-2 text-black font-bold text-xl rounded-xl">
            Share Your Feedback
          </button>
        </form>
      </section>
      <section className="w-1/2 h-full flex flex-col justify-around relative">
        <div className="font-bold font-serif text-8xl">
          <p>Contact</p>
          <p className="flex items-end">
            <div className="w-60 h-2 bg-white"></div>Us
          </p>
        </div>
        <p className="text-lg w-4/5">
          It is very important for us to keep in touch with you, so we are
          always ready to receive any question that interestss you. Shoot!
        </p>
        <img
          src="/cont.png"
          className="w-4/5 h-4/5 object-contain absolute top-0 left-0 opacity-20"
          alt=""
        />
      </section>
    </article>
  );
}
