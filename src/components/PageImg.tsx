type PageImgProps = {
  src: string;
  alt: string;
};

export const PageImg = ({ src, alt }: PageImgProps) => {
  return (
    <div className="p-4">
      <img
        className="w-max md:w-8/12 rounded-md border-my-soft-bg border-2 ml-auto mr-auto"
        src={src}
        alt={alt}
      />
    </div>
  );
};

export default PageImg;
