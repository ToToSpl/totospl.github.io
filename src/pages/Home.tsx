import PageImg from "../components/PageImg";
import PageP from "../components/PageP";
import { PageWrapperProps } from "../components/PageWrapper";
import PageH1 from "../components/PaheH1";

function Home() {
  return (
    <PageWrapperProps>
      <PageH1>Greetings!</PageH1>
      <PageP>
        I am software developer who brings eight years of programming experience
        to the table, with a solid three-year stint in professional roles. My
        professional journey has included pivotal roles in R&D projects that
        span IoT sensors, Fullstack SaaS systems, and data aggregation servers.
        In addition to my technical prowess, I possess knowledge and interest in
        the fields of robotics, Unmanned Aerial Vehicles, and aerospace.
      </PageP>
      <PageImg src="/home/plane_crash.jpg" alt="profile with rc plane" />
      <PageH1>My passion lies in...</PageH1>
      <PageP>
        Designing web applications and crafting robust backend software to
        optimize and streamline systems. Beyond that, I'm deeply committed to
        developing software for Unmanned Aerial Vehicles. In my leisure hours,
        you'll often find me engrossed in the worlds of robotics and conducting
        in-depth research in the field of physics. Let's embark on a journey
        through the exciting realms of technology together! 🚀🤖🔬
      </PageP>
      <PageImg
        src="/home/profile_gimbal.jpg"
        alt="profile photo by the window"
      />
    </PageWrapperProps>
  );
}

export default Home;
