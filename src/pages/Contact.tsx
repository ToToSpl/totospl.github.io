import ExterLink from "../components/ExterLink";
import PageH1 from "../components/PageH1";
import PageP from "../components/PageP";
import PageWrapper from "../components/PageWrapper";
import Socials from "../components/Socials";

function Contact() {
  return (
    <PageWrapper>
      <PageH1>Contact Me</PageH1>
      <PageP>
        Please don't hesitate to reach out to me by{" "}
        <ExterLink href="mailto: totospl99@gmail.com">email</ExterLink> if you'd
        like to get in touch. I also encourage you to visit my various social
        media profiles to stay updated with my latest projects and insights. I
        genuinely appreciate and welcome any questions or inquiries you may
        have!
      </PageP>
      <div className="h-4" />
      <Socials />
    </PageWrapper>
  );
}

export default Contact;
