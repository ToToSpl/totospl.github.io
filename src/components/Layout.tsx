import Menu from "./Menu";
import { appPaths } from "../App";
import { Outlet } from "react-router-dom";
import { Navbar } from "./Navbar";

const Layout = () => {
  return (
    <div className="text-white bg-my-bg font-basic">
      <div className="flex flex-row">
        <div className="flex-none">
          <Menu paths={appPaths} />
        </div>
        <div className="grow overflow-auto h-screen">
          <Navbar />
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Layout;
