export const Footer = () => {
  return (
    <div className="mt-20 bg-footer py-12 px-5 sm:mt-40">
      <div className="container mx-auto flex flex-col gap-4 text-white sm:gap-10">
        <div className="flex flex-col items-center justify-center gap-10">
          <h1 className="w-4/5 bg-gradient-text bg-clip-text text-center text-4xl font-bold text-transparent md:text-5xl lg:text-6xl">
            Do you want to step into the future before others?
          </h1>
          <button className="border-2 border-white py-4 px-6 font-primary text-lg transition duration-200 hover:border-gray-300 hover:text-gray-300">
            Request Early Access
          </button>
        </div>
        <div className="mt-10 flex flex-col justify-between gap-8 md:flex-row">
          <div className="flex flex-1 flex-col gap-4">
            <h1 className="text-4xl font-bold">GPT-3</h1>
            <p className="">
              Crechterwooord K12 182 DK Alknjcb, All Rights Reverved
            </p>
          </div>
          <div className="flex flex-[1.5] flex-col flex-wrap justify-between gap-8 sm:items-start md:flex-row">
            <div className="flex flex-col gap-4 sm:items-start">
              <h1 className="font-bold">Links</h1>
              <ul className="flex flex-col gap-4 ">
                <li>
                  <a href="#">Overons</a>
                </li>
                <li>
                  <a href="#">Social Media</a>
                </li>
                <li>
                  <a href="#">Counters</a>
                </li>
                <li>
                  <a href="#">Contact</a>
                </li>
              </ul>
            </div>
            <div className="flex flex-col gap-4 sm:items-start">
              <h1 className="font-bold">Company</h1>
              <ul className="flex flex-col gap-4 ">
                <li>
                  <a href="#">Terms & Condition</a>
                </li>
                <li>
                  <a href="#">Privacy & Policy</a>
                </li>
                <li>
                  <a href="#">Contact</a>
                </li>
              </ul>
            </div>

            <div className="flex flex-col gap-4 sm:items-start">
              <h1 className="font-bold">Get in Touch</h1>
              <ul className="flex flex-col gap-4 ">
                <li>
                  <a href="#">Crechterwoord K12 182 DK Alknjcb</a>
                </li>
                <li>
                  <a href="#">085-321321</a>
                </li>
                <li>
                  <a href="#">info@pay.me</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="mt-8">
          <h1 className="">
            © {new Date().getFullYear()} GPT-3. All rights reserved.
          </h1>
        </div>
      </div>
    </div>
  );
};
