import { useState } from "react";
import { RxDoubleArrowDown, RxDoubleArrowUp } from "react-icons/rx";

type ExpandCardProps = {
  title: string;
  imgSrc?: string;
  desc: string;
  children: string | JSX.Element | JSX.Element[];
};

export const ExpandCard = ({
  title,
  imgSrc,
  desc,
  children,
}: ExpandCardProps) => {
  const [open, setOpen] = useState(false);
  return (
    <div className="rounded-md border-2 border-my-soft-bg ">
      <div className="flex flex-row bg-my-second p-2 rounded-md gap-2">
        {imgSrc ? (
          <img
            src={imgSrc}
            alt="logo"
            className="w-12 h-12 rounded-full border-2 border-my-soft-bg my-auto"
          />
        ) : null}
        <div>
          <h1 className="text-lg md:text-xl">{title}</h1>
          <p className="text-md md:text-lg ">{desc}</p>
        </div>
        <button
          name="expand"
          className="bg-opacity-30 rounded-md  bg-black ml-auto mr-0 text-4xl p-1 my-auto"
          onClick={() => {
            setOpen((prev) => !prev);
          }}
        >
          {!open ? <RxDoubleArrowDown /> : <RxDoubleArrowUp />}
        </button>
      </div>
      {open ? <div className="p-2">{children}</div> : null}
    </div>
  );
};

export default ExpandCard;
