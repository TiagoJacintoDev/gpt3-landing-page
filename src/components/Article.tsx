interface Props {
  image: string;
  title: string;
  date: string;
}

export const Article = ({ image, title, date }: Props) => {
  return (
    <div className="flex h-full w-full flex-col overflow-hidden rounded bg-footer text-white shadow">
      <div>
        <img className="h-full w-full" src={image} alt="thumbnail" />
      </div>
      <div className="flex h-full flex-col items-start justify-between p-4">
        <div className="flex flex-col gap-2">
          <h4 className="text-[12px] font-bold">{date}</h4>
          <h1 className="cursor-pointer text-xl font-bold">{title}</h1>
        </div>
        <p className="mt-20 cursor-pointer text-[12px] font-bold">
          Read full article
        </p>
      </div>
    </div>
  );
};
