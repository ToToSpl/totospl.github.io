import Menu from "./Menu";
import { appPaths } from "../App";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="flex flex-col text-white bg-my-bg">
      <div className="grow flex">
        <Menu paths={appPaths} />
        <div className="grow h-screen overflow-auto">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Layout;
