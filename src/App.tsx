import { Navbar } from "./components/Navbar";
import { Header } from "./components/Header";
import { Brand } from "./components/Brand";

export const App = () => {
  return (
    <div className="bg-[#040C18] font-primary">
      <div className="gradient-bg-2">
        <Navbar />
        <Header />
      </div>
      <Brand />
    </div>
  );
};
