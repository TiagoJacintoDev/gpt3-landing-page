import possibility from "../assets/possibility.png";

export const Features = () => {
  return (
    <div
      id="features"
      className="container mx-auto mt-8 flex flex-col gap-8 px-5 lg:flex-row"
    >
      <div className="flex flex-1 items-center justify-center max-sm:mt-2">
        <img loading="lazy" src={possibility} alt="possibility" />
      </div>
      <div className="gap-13 mt-4 flex flex-[1.5] flex-col items-start justify-center sm:mt-12">
        <h4 className="cursor-pointer text-[#71e5ff]">
          Request Early Access to Get Started
        </h4>
        <h1 className="mt-5 bg-gradient-text bg-clip-text text-4xl font-bold leading-snug text-transparent">
          The possibilities are beyond your imagination
        </h1>
        <p className="mt-4 text-[#81AFDD]">
          Yet bed any for traveling assistance indulgence unpleasing. Not
          thoughts all exercise blessing. Indulgence way everything joy
          alteration boisterous the attachment. Party we years to order allow
          asked of.
        </p>
        <h4 className="mt-4 cursor-pointer text-[#ff8a71]">
          Request Early Access to Get Started
        </h4>
      </div>
    </div>
  );
};
