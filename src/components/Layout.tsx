import Menu from "./Menu";
import { appPaths } from "../App";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="h-screen flex flex-col text-white bg-my-bg">
      <div className="grow flex">
        <Menu paths={appPaths} />
        <div className="grow">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Layout;
