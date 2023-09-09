import { useState } from "react";
import { RxHamburgerMenu, RxCross2 } from "react-icons/rx";
import { Link } from "react-router-dom";
import { appPaths } from "../App";
import MenuMobile from "./MenuMobile";

export const Navbar = () => {
  const [menu, setMenu] = useState(false);
  return (
    <>
      <h1
        className="bg-black bg-opacity-50 rounded-md text-4xl sm:hidden m-1 absolute"
        onClick={() => setMenu(true)}
      >
        {menu ? <RxCross2 /> : <RxHamburgerMenu />}
      </h1>
      {menu && <MenuMobile onClose={() => setMenu(false)} paths={appPaths} />}
      <div className="h-12 w-full flex justify-center border-b-2 border-my-soft-bg bg-my-contrast">
        <Link to="/" className="mt-auto mb-auto">
          <h1 className="font-special text-2xl sm:text-4xl">
            Jacek Grzybowski
          </h1>
        </Link>
      </div>
    </>
  );
};
