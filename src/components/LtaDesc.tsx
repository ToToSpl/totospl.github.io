import ExpandCard from "./ExpandCard";
import ExterLink from "./ExterLink";
import PageImg from "./PageImg";
import PageP from "./PageP";

export const LtaDesc = () => {
  return (
    <ExpandCard
      title="Fullstack developer and Drone programmer"
      desc="2020 - 2023 LTA Design"
      imgSrc="/career/lta/logo.jpg"
    >
      <PageP>
        During my three years at{" "}
        <ExterLink href="https://ltadesign.pl">LTA Design</ExterLink>, I had the
        opportunity to work on the{" "}
        <ExterLink href="https://mapair.pl">MapAir project</ExterLink>. Its goal
        was to create a swarm of drones capable of measuring air pollution using
        mounted sensors. This task required developing an algorithm for
        collision avoidance between drones and a communication system to collect
        data from the sensors. These sensors sent data to a server, which had to
        be processed later. For instance, on the map, it wouldn't be feasible to
        display all measurements if they were in the same place, so they
        appeared as a single dot. Furthermore, these sensors were mounted on the
        public transport system to record data from a larger area and over a
        longer timespan. The collected data was later displayed on a web
        application which could display data in real time and from set periods.
      </PageP>
      <PageImg src="/career/lta/mapair_map.jpg" alt="mapair map" />
      <PageP>
        I developed all of these systems, which demanded knowledge in UAVs,
        backend systems, databases, and frontend development. I learned a lot
        during this project and hope to apply what I've learned in my future
        career.
      </PageP>
      <PageImg src="/career/lta/drones_swarm.jpg" alt="drones swarm" />
    </ExpandCard>
  );
};

export default LtaDesc;
