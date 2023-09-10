type PagePProps = {
  children: string | JSX.Element | JSX.Element[];
};

export const PageP = ({ children }: PagePProps) => {
  return <p className="text-lg md:text-xl text-justify">{children}</p>;
};

export default PageP;
