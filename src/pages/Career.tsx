import PageImg from "../components/PageImg";
import PageP from "../components/PageP";
import PageH1 from "../components/PageH1";
import PageWrapper from "../components/PageWrapper";
import LtaDesc from "../components/LtaDesc";
import HfDesc from "../components/HfDesc";

export function Career() {
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
      <LtaDesc />
      <div className="h-4" />
      <HfDesc />
    </PageWrapper>
  );
}

export default Career;
