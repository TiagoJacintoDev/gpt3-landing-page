export const CTA = () => {
  return (
    <div className="container mx-auto px-5">
      <div className="mt-14 flex flex-col items-center justify-between gap-6 rounded bg-gradient-bar p-6 text-white sm:mt-20 sm:gap-8 sm:p-8 md:flex-row">
        <div className="flex flex-1 flex-col items-start justify-center gap-2">
          <h4 className="w-full max-sm:text-center">
            Request Early Access to Get Started
          </h4>
          <p className="text-xl font-bold leading-normal max-sm:text-center sm:text-2xl">
            Register Today & start exploring the endless possibilities.
          </p>
        </div>
        <div className="flex items-center justify-center">
          <button className="rounded-3xl bg-black py-3 px-6 font-primary font-bold shadow transition duration-200 hover:scale-105">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};
