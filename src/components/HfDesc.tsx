import ExpandCard from "./ExpandCard";
import ExterLink from "./ExterLink";
import PageImg from "./PageImg";
import PageP from "./PageP";

export const HfDesc = () => {
  return (
    <ExpandCard
      title="Leader and Member"
      desc="2018 - 2023 High Flyers"
      imgSrc="/career/hf/logo.jpg"
    >
      <PageP>
        For five years, I've had the pleasure of being part of the{" "}
        <ExterLink href="https://www.high-flyers.pl">High Flyers</ExterLink>{" "}
        scientific organization, a student group dedicated to advancing
        technology in unmanned aerial vehicles, including both planes and
        multirotors. In our work with multirotors, our primary focus has been on
        the development of computer vision algorithms and control systems. On
        the other hand, when it comes to planes, we specialize in creating
        innovative mechanical systems, such as vertical take-off and landing
        planes (VTOLs), which can take off and land like multirotors and then
        fly like traditional planes. Our approach involves the utilization of
        cutting-edge technologies, including simulation and convolutional
        networks for computer vision, all optimized to work on GPUs. This
        optimization ensures that our algorithms can operate in real-time on
        embedded computers or laptops.
      </PageP>
      <PageImg src="/career/hf/tesla.jpg" alt="mapair map" />
      <PageP>
        During my two-year tenure as the leader of High Flyers, we achieved
        significant milestones. Our team secured first place in the national
        competition "Droniada 2021," which centered on computer vision and
        drones. In addition to our success in the competition, we also developed
        an online application that enabled real-time result tracking.
        Subsequently, as a team member, I had the privilege of participating in
        the{" "}
        <ExterLink href="https://ri4rover.org">
          IEEE Purdue competition
        </ExterLink>
        , which required us to create a small drone capable of navigating
        complex terrain and tracking a remote-controlled car. Our solution had
        to perform flawlessly in both simulation and real-life scenarios.
      </PageP>
      <PageImg src="/career/hf/auav_sim.jpg" alt="mapair map" />
    </ExpandCard>
  );
};

export default HfDesc;
