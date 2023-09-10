import PageImg from "../components/PageImg";
import PageP from "../components/PageP";
import { PageWrapperProps } from "../components/PageWrapper";
import PageH1 from "../components/PaheH1";

function Career() {
  return (
    <PageWrapperProps>
      <PageH1>My Career</PageH1>
      <PageP>Something something</PageP>
      <PageImg
        src="/home/profile_gimbal.jpg"
        alt="profile photo by the window"
      />
    </PageWrapperProps>
  );
}

export default Career;
