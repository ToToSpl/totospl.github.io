import { Link, useLocation } from "react-router-dom";
import { AppPathType } from "../App";

type MenuProps = {
  paths: AppPathType[];
};

const Menu = ({ paths }: MenuProps) => {
  const location = useLocation();

  return (
    <div className="border-r-2 px-2 py-2 border-my-soft-bg grid-cols-1 gap-2">
      {paths.map((p, i) => {
        return (
          <Link
            to={p.path}
            className="flex items-center justify-items-center font-bold text-lg my-2"
            key={i.toString()}
          >
            <div className="m-2">{p.icon}</div>
            <span
              className={
                "flex-1 px-2 hidden md:block " +
                (location.pathname === p.path ? "underline" : "")
              }
            >
              {p.name}
            </span>
          </Link>
        );
      })}
    </div>
  );
};

export default Menu;
