type ProfilePicProps = {
  url: string;
};

export const ProfilePic = ({ url }: ProfilePicProps) => {
  return (
    <img
      className="w-32 h-32 rounded-full border-my-soft-bg border-2 ml-auto mr-auto"
      alt="profile picture"
      src={url}
    />
  );
};

export default ProfilePic;
