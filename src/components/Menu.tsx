import { Link } from "react-router-dom";
import { AppPathType } from "../App";
import ProfilePic from "./ProfilePic";
import Socials from "./Socials";
import PathList from "./PathList";

type MenuProps = {
  paths: AppPathType[];
};

const Menu = ({ paths }: MenuProps) => {
  return (
    <div className="hidden sm:flex flex-col border-r-2 px-2 py-2 border-my-soft-bg h-screen overflow-auto">
      <Link to="/">
        <ProfilePic url="/profile.jpg" />
      </Link>
      <div className="pt-4" />
      <PathList paths={paths} />
      <div className="mt-auto mb-2 pt-4 ml-auto mr-auto">
        <Socials />
      </div>
    </div>
  );
};

export default Menu;
