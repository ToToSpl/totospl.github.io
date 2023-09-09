import { Link, useLocation } from "react-router-dom";
import { AppPathType } from "../App";

type PathListProps = {
  paths: AppPathType[];
};

export const PathList = ({ paths }: PathListProps) => {
  const location = useLocation();

  return (
    <>
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
    </>
  );
};

export default PathList;
