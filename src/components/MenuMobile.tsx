import { useRef } from "react";
import { RxCross2 } from "react-icons/rx";
import useOutsideAlerter from "../utils/useOutsideAlerter";
import ProfilePic from "./ProfilePic";
import { AppPathType } from "../App";
import Socials from "./Socials";
import PathList from "./PathList";

type MenuMobileProps = {
  onClose: () => void;
  paths: AppPathType[];
};

export const MenuMobile = ({ onClose, paths }: MenuMobileProps) => {
  const wrapperRef = useRef(null);
  useOutsideAlerter(wrapperRef, () => onClose());

  return (
    <div className="fixed left-0 top-0 w-full h-full bg-opacity-50 bg-black z-[1055] overflow-y-auto overflow-x-hidden outline-none flex items-center">
      <div
        ref={wrapperRef}
        className="relative bg-opacity-100 bg-my-bg w-full md:w-1/2 xl:w-2/5 m-4 md:m-auto border-my-soft-bg border-2 rounded-xl p-2"
      >
        <button className="absolute right-2 text-2xl" onClick={() => onClose()}>
          <RxCross2 />
        </button>
        <ProfilePic url="/profile.jpg" />
        <div className="ml-auto mr-auto w-min" onClick={() => onClose()}>
          <PathList paths={paths} />
        </div>
        <div className="ml-auto mr-auto w-min my-4">
          <Socials />
        </div>
      </div>
    </div>
  );
};

export default MenuMobile;
