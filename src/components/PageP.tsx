type PagePProps = {
  children: string | JSX.Element | JSX.Element[] | any;
};

export const PageP = ({ children }: PagePProps) => {
  return <p className="text-md md:text-lg text-justify">{children}</p>;
};

export default PageP;
