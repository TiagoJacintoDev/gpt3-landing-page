export const CTA = () => {
  return (
    <div className="container my-20 mx-auto flex flex-col items-center justify-between gap-8 rounded bg-gradient-bar p-8 text-white md:flex-row">
      <div className="flex flex-1 flex-col items-start justify-center gap-2">
        <h4 className="text-sm">Request Early Access to Get Started</h4>
        <p className="text-2xl font-bold leading-normal">
          Register Today & start exploring the endless possibilities.
        </p>
      </div>
      <div className="flex items-center justify-center">
        <button className="rounded-3xl bg-black py-3 px-6 font-primary font-bold shadow transition duration-200 hover:scale-105">
          Get Started
        </button>
      </div>
    </div>
  );
};
