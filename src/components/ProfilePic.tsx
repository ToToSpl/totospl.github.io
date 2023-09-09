import { Link } from "react-router-dom";

type ProfilePicProps = {
  url: string;
};

export const ProfilePic = ({ url }: ProfilePicProps) => {
  return (
    <Link to="/">
      <img
        className="w-32 h-32 rounded-full border-my-soft-bg border-2 ml-auto mr-auto"
        alt="profile picture"
        src={url}
      />
    </Link>
  );
};

export default ProfilePic;
