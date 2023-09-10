import ExpandCard from "../components/ExpandCard";
import PageImg from "../components/PageImg";
import PageP from "../components/PageP";
import { PageWrapper } from "../components/PageWrapper";
import PageH1 from "../components/PaheH1";

function Career() {
  return (
    <PageWrapper>
      <PageH1>My Career</PageH1>
      <PageP>
        Over the years, I've had the privilege of gaining valuable experience
        through my work and internships, with a particular focus on cutting-edge
        fields like AI, web development, computer vision and unmanned aerial
        vehicles.
      </PageP>
      <PageImg src="/career/hf_droniada.jpg" alt="High Flyers team" />
      <ExpandCard
        title="Fullstack developer and Drone programmer"
        desc="2020 - 2023 LTA Design"
        imgSrc="/career/lta/logo.jpg"
      >
        <PageP>
          Over the years, I've had the privilege of gaining valuable experience
          through my work and internships, with a particular focus on
          cutting-edge fields like AI, web development, computer vision and
          unmanned aerial vehicles.
        </PageP>
        <PageImg src="/career/hf_droniada.jpg" alt="High Flyers team" />
      </ExpandCard>
    </PageWrapper>
  );
}

export default Career;
