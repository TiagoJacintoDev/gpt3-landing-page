import ai from "../assets/ai.png";
import people from "../assets/people.png";

export const Header = () => {
  return (
    <div
      id="home"
      className="container mx-auto flex flex-col gap-8 px-5 sm:py-8 lg:flex-row"
    >
      <div className="flex flex-1 flex-col items-start justify-start gap-8 sm:mt-8 lg:mt-16">
        <h1 className="bg-gradient-text bg-clip-text text-5xl font-black leading-snug text-transparent lg:text-6xl lg:leading-tight">
          Let's Build Something amazing with GPT-3 OpenAI
        </h1>
        <p className="text-lg text-[#81AFDD]">
          Yet bed any for travelling assistance indulgence unpleasing. Not
          thoughts all exercise blessing. Indulgence way everything joy
          alteration boisterous the attachment. Party we years to order allow
          asked of.
        </p>
        <div className="flex w-full lg:w-11/12">
          <input
            type="email"
            className="flex-1 rounded rounded-r-none border-none bg-gray-800 py-3 px-4 text-lg text-white outline-none"
            placeholder="Your Email Address"
          />
          <button
            className="w-32 rounded rounded-l-none bg-orange-500 font-semibold text-white transition duration-200 hover:bg-orange-600"
            type="button"
          >
            Get Started
          </button>
        </div>
        <div className="flex items-center justify-start gap-6 text-white">
          <img loading="lazy" src={people} alt="people" />
          <p className="">
            1,600 people requested access a visit in last 24 hours
          </p>
        </div>
      </div>
      <div className="mt-8 flex-1 lg:mt-0">
        <img loading="lazy" src={ai} className="h-full w-full" alt="ai" />
      </div>
    </div>
  );
};
