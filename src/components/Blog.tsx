import { Article } from "./Article";
import blog01 from "../assets/blog01.png";
import blog02 from "../assets/blog02.png";
import blog03 from "../assets/blog03.png";
import blog04 from "../assets/blog04.png";
import blog05 from "../assets/blog05.png";

export const Blog = () => {
  return (
    <div
      id="blog"
      className="container mx-auto mt-10 mb-4 flex flex-col items-start justify-start gap-4 px-5 sm:mt-16 sm:mb-8 sm:gap-12"
    >
      <h1 className="mb-4 bg-gradient-text bg-clip-text py-2 text-4xl font-bold text-transparent md:text-5xl lg:text-6xl">
        A lot is happening, <br /> We are blogging about it.
      </h1>
      <div className="flex h-full w-full flex-col-reverse gap-6 lg:flex-row">
        <div className="flex flex-1 items-center justify-center">
          <Article
            image={blog01}
            title="GPT-3 and Open AI is the future. Let us exlore how it is?"
            date="Sep 26, 2022"
          />
        </div>
        <div className="grid flex-[1.5] grid-cols-1 gap-6 md:grid-cols-2">
          <Article
            image={blog02}
            title="GPT-3 and Open AI is the future. Let us exlore how it is?"
            date="Sep 26, 2022"
          />
          <Article
            image={blog03}
            title="GPT-3 and Open AI is the future. Let us exlore how it is?"
            date="Sep 26, 2022"
          />
          <Article
            image={blog04}
            title="GPT-3 and Open AI is the future. Let us exlore how it is?"
            date="Sep 26, 2022"
          />
          <Article
            image={blog05}
            title="GPT-3 and Open AI is the future. Let us exlore how it is?"
            date="Sep 26, 2022"
          />
        </div>
      </div>
    </div>
  );
};
