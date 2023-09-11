type ExterLinkProps = {
  href: string;
  children: any;
};

export const ExterLink = ({ href, children }: ExterLinkProps) => {
  return (
    <a className="text-blue-500 underline" href={href} target="_blank">
      {children}
    </a>
  );
};

export default ExterLink;
