export default function How() {
  return (
    <article className="text-light-200 my-16">
      <p className="text-center font-semibold text-lg font-serif">
        How it Works
      </p>
      <p className="text-center font-semibold text-4xl">
        Get started in only 4 <br /> simple steps.
      </p>
      <article className="mt-12 flex flex-col gap-20">
        <section className="flex justify-around items-center relative md:flex-col gap-6">
          <div className="w-1/4 h-64 bg-dark-100 p-6 rounded-lg md:order-2 md:w-4/5">
            <img
              src="./public/step1.svg"
              className="w-full h-full object-cover"
              alt=""
            />
          </div>
          <div className="w-1/2 flex flex-col gap-6 md:order-1 md:w-4/5">
            <div className="text-right">
              <p className="font-serif font-semibold">Step 1</p>
              <p className="font-semibold text-2xl">Understanding MindWave</p>
            </div>
            <p className="text-justify">
              Begin by researching and gathering information about MindWave.
              Explore its mission, features, and how it contributes to mental
              health awareness. This step lays the foundation for your
              engagement with the platform.
            </p>
          </div>
          <img
            className="absolute w-1/3 top-52 md:hidden"
            src="../public/left.svg"
            alt=""
          />
        </section>
        <section className="flex justify-around items-center relative md:flex-col gap-6">
          <div className="w-1/2 flex flex-col gap-6 md:w-4/5">
            <div>
              <p className="font-serif font-semibold">Step 2</p>
              <p className="font-semibold text-2xl">
                Exploring Mental Health Resources
              </p>
            </div>
            <p className="text-justify">
              Navigate to the MindWave website and delve into the wealth of
              mental health resources it offers. Familiarize yourself with
              articles, tools, and support networks available to users. Gain
              insights into the {`platform's`} approach to promoting mental
              well-being.
            </p>
          </div>
          <div className="w-1/4 h-64 bg-light-200 p-6 rounded-lg md:w-4/5">
            <img
              src="./public/step2.svg"
              className="w-full h-full object-cover"
              alt=""
            />
          </div>
          <img
            className="absolute w-1/3 top-52 md:hidden"
            src="../public/right.svg"
            alt=""
          />
        </section>
        <section className="flex justify-around items-center relative md:flex-col gap-6">
          <div className="w-1/4 h-64 bg-dark-100 p-6 rounded-lg md:order-2 md:w-4/5">
            <img
              src="./public/step3.svg"
              className="w-full h-full object-cover"
              alt=""
            />
          </div>
          <div className="w-1/2 flex flex-col gap-6 md:order-1 md:w-4/5">
            <div className="text-right">
              <p className="font-serif font-semibold">Step 3</p>
              <p className="font-semibold text-2xl">Becoming a Member</p>
            </div>
            <p className="text-justify">
              Take the next step by creating an account and logging in to become
              a member of MindWave. Explore the registration process, understand
              the benefits of membership, and ensure you have access to the
              features needed for active participation in the community.
            </p>
          </div>
          <img
            className="absolute w-1/3 top-52 md:hidden"
            src="../public/left.svg"
            alt=""
          />
        </section>
        <section className="flex justify-around items-center relative md:flex-col gap-6">
          <div className="w-1/2 flex flex-col gap-6 md:w-4/5">
            <div>
              <p className="font-serif font-semibold">Step 4</p>
              <p className="font-semibold text-2xl">Sharing Your Thoughts</p>
            </div>
            <p className="text-justify">
              Engage with the MindWave community by sharing your thoughts and
              experiences. Participate in forums, discussions, or blog posts to
              contribute to the {`platform's`} collective knowledge. Embrace the
              opportunity to connect with like-minded individuals and contribute
              positively to the mental health community.
            </p>
          </div>
          <div className="w-1/4 h-64 bg-light-200 p-6 rounded-lg md:w-4/5">
            <img
              src="./public/step4.svg"
              className="w-full h-full object-cover"
              alt=""
            />
          </div>
        </section>
      </article>
    </article>
  );
}
