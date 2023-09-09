import { Link, useLocation } from "react-router-dom";
import { AppPathType } from "../App";
import ProfilePic from "./ProfilePic";
import Socials from "./Socials";

type MenuProps = {
  paths: AppPathType[];
};

const Menu = ({ paths }: MenuProps) => {
  const location = useLocation();

  return (
    <div className="hidden sm:flex flex-col border-r-2 px-2 py-2 border-my-soft-bg h-screen overflow-auto">
      <ProfilePic url="/profile.jpg" />
      <div className="h-4" />
      {paths.map((p, i) => {
        return (
          <Link
            to={p.path}
            className="flex items-center justify-items-center font-bold text-lg "
            key={i.toString()}
          >
            <div className="m-2">{p.icon}</div>
            <span
              className={
                "px-2 block " +
                (location.pathname === p.path ? "underline" : "")
              }
            >
              {p.name}
            </span>
          </Link>
        );
      })}
      <div className="mt-auto mb-2 ml-auto mr-auto">
        <Socials />
      </div>
    </div>
  );
};

export default Menu;
