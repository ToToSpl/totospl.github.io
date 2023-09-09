import { RxHamburgerMenu } from "react-icons/rx";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <>
      <h1 className="text-4xl sm:hidden m-1 absolute">
        <RxHamburgerMenu />
      </h1>
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
