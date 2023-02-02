import { Feature } from "./Feature";

export const Possibility = () => {
  return (
    <div
      id="possibility"
      className="container mx-auto mt-28 flex flex-col gap-12 px-5 text-white md:flex-row"
    >
      <div className="flex flex-1 flex-col items-start justify-start gap-8">
        <h1 className="bg-gradient-text bg-clip-text text-4xl font-bold leading-snug text-transparent">
          The Future is Now and You Just Need to Realize It. Step into Future
          Today. & Make it Happen.
        </h1>
        <p className="cursor-pointer text-[#ff8a71]">
          Request Early Access to Get Started
        </p>
      </div>
      <div className="flex flex-[1.5] flex-col gap-12">
        <Feature
          text="From they fine john he give of rich he. They age and draw mrs like. Improving end distrusts may instantly was household applauded."
          title="Improving end distrusts instantly"
        />
        <Feature
          text="Considered sympathize ten uncommonly occasional assistance sufficient not. Letter of on become he tended active enable to."
          title="Become the tended active"
        />
        <Feature
          text="Led ask possible mistress relation elegance eat likewise debating. By message or am nothing amongst chiefly address."
          title="Message or am nothing"
        />
        <Feature
          text="Really boy law county she unable her sister. Feet you off its like like six. Among sex are leave law built now. In built table in an rapid blush.."
          title="Really boy law county"
        />
      </div>
    </div>
  );
};
