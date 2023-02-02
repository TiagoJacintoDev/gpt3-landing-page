import { Navbar } from "./components/Navbar";
import { Header } from "./components/Header";
import { Brand } from "./components/Brand";
import { WhatIsGPT3 } from "./components/WhatIsGPT3";
import { Possibility } from "./components/Possibility";
import { Features } from "./components/Features";
import { CTA } from "./components/CTA";

export const App = () => {
  return (
    <div className="bg-[#040C18] font-primary">
      <div className="gradient-bg-2">
        <Navbar />
        <Header />
      </div>
      <Brand />
      <WhatIsGPT3 />
      <Possibility />
      <Features />
      <CTA />
    </div>
  );
};
