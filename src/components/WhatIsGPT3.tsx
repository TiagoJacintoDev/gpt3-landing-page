import { Feature } from "./Feature";

export const WhatIsGPT3 = () => {
  return (
    <div className="container mx-auto mt-8 px-5 sm:mt-16">
      <div
        id="wgpt3"
        className="gradient-bg flex flex-col gap-10 rounded p-8 text-white sm:gap-16 sm:p-14"
      >
        <Feature
          direction="flex-row"
          title="What is GPT-3?"
          text="We so opinion friends me message as delight. Whole front do of plate heard oh ought. His defective nor convinced residence own. Connection has put impossible own apartments boisterous. At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by."
        />
        <div className="flex w-full flex-col items-center justify-between gap-3 sm:gap-6 md:flex-row">
          <h1 className="flex-1 bg-gradient-text bg-clip-text text-3xl font-bold text-transparent">
            The possibilities are beyond your imagination
          </h1>
          <p className="flex w-full flex-1 cursor-pointer items-center justify-start text-[#ff8a71] md:justify-end">
            Explore the library
          </p>
        </div>
        <div className="flex flex-wrap gap-6">
          <Feature
            direction="flex-col"
            title="Chatbots"
            text="We so opinion friends me message as delight. Whole front do of plate heard oh ought."
          />
          <Feature
            direction="flex-col"
            title="Knowledgebase"
            text="At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments b"
          />
          <Feature
            direction="flex-col"
            title="Education"
            text="At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments b"
          />
        </div>
      </div>
    </div>
  );
};
