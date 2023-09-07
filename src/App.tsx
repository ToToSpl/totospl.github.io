import { RxPerson, RxBackpack, RxRocket, RxIdCard } from "react-icons/rx";
import Home from "./pages/Home";
import Career from "./pages/Career";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import Layout from "./components/Layout";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

export type AppPathType = {
  path: string;
  name: string;
  icon: JSX.Element;
  page: JSX.Element;
};

export const appPaths: AppPathType[] = [
  {
    path: "/",
    name: "About",
    icon: <RxPerson />,
    page: <Home />,
  },
  {
    path: "/career",
    name: "Career",
    icon: <RxBackpack />,
    page: <Career />,
  },
  {
    path: "/projects",
    name: "Projects",
    icon: <RxRocket />,
    page: <Projects />,
  },
  {
    path: "/contact",
    name: "Contact",
    icon: <RxIdCard />,
    page: <Contact />,
  },
];

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        ...appPaths.map((p) => {
          return {
            path: p.path,
            element: p.page,
          };
        }),
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
