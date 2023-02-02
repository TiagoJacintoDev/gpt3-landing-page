interface Props {
  title: string;
  text: string;
  direction?: string;
}

export const Feature = ({ title, text, direction }: Props) => {
  return (
    <div
      className={`flex min-w-[240px] flex-1 flex-col items-start justify-between gap-2 text-white md:${direction}`}
    >
      <div className="flex flex-1 flex-col items-start justify-start">
        <div className="h-1 w-10 bg-gradient-bar" />
        <div>
          <h1 className="color-white mt-2 text-xl font-bold">{title}</h1>
        </div>
      </div>
      <div className="flex flex-[2] items-start justify-start">
        <p className="text-[#81AFDD]">{text}</p>
      </div>
    </div>
  );
};
