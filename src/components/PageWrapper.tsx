type PageWrapperProps = {
  children: string | JSX.Element | JSX.Element[];
};

export const PageWrapperProps = ({ children }: PageWrapperProps) => {
  return <div className="p-6 md:w-3/4 ml-auto mr-auto">{children}</div>;
};

export default PageWrapperProps;
