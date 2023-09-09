import { RxGithubLogo, RxLinkedinLogo, RxInstagramLogo } from "react-icons/rx";
import { SiResearchgate } from "react-icons/si";

export const Socials = () => {
  return (
    <div className="flex gap-2 text-xl">
      <a href="https://github.com/ToToSpl" target="_blank">
        <RxGithubLogo />
      </a>
      <a
        href="https://www.linkedin.com/in/jacek-grzybowski-49057b19a"
        target="_blank"
      >
        <RxLinkedinLogo />
      </a>
      <a
        href="https://www.researchgate.net/profile/Jacek-Grzybowski-2"
        target="_blank"
      >
        <SiResearchgate className="text-lg" />
      </a>
      <a href="https://www.instagram.com/grzybnia_jacek/" target="_blank">
        <RxInstagramLogo />
      </a>
    </div>
  );
};

export default Socials;
