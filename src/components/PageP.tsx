type PagePProps = {
  children: string | JSX.Element | JSX.Element[];
};

export const PageP = ({ children }: PagePProps) => {
  return <p className="mt-4 text-xl md:text-2xl text-justify">{children}</p>;
};

export default PageP;
