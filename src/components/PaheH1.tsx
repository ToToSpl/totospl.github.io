type PageH1Props = {
  children: string | JSX.Element | JSX.Element[];
};

export const PageH1 = ({ children }: PageH1Props) => {
  return <h1 className="font-bold font-special text-4xl">{children}</h1>;
};

export default PageH1;
