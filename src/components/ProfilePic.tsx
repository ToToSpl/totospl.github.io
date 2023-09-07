type ProfilePicProps = {
  url: string;
};

export const ProfilePic = ({ url }: ProfilePicProps) => {
  return (
    <>
      <img
        className="w-40 h-40 rounded-full border-my-soft-bg border-2"
        alt="profile picture"
        src={url}
      />
      <h1 className="font-special text-xl text-center">Jacek Grzybowski</h1>
    </>
  );
};

export default ProfilePic;
