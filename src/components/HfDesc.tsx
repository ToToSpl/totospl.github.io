import ExpandCard from "./ExpandCard";
import ExterLink from "./ExterLink";
import PageImg from "./PageImg";
import PageP from "./PageP";

export const HfDesc = () => {
  return (
    <ExpandCard
      title="Leader and member"
      desc="2018 - 2023 High Flyers"
      imgSrc="/career/hf/logo.jpg"
    >
      <PageP>
        <ExterLink href="https://www.high-flyers.pl">High Flyers</ExterLink>
      </PageP>
      <PageImg src="/career/lta/mapair_map.jpg" alt="mapair map" />
    </ExpandCard>
  );
};

export default HfDesc;
