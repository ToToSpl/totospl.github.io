function Home() {
  return (
    <div className="p-6 md:w-3/4 ml-auto mr-auto">
      <h1 className="font-bold font-special text-4xl">Greetings!</h1>
      <p className="mt-4 text-xl md:text-2xl text-justify">
        I am software developer who brings eight years of programming experience
        to the table, with a solid three-year stint in professional roles. My
        professional journey has included pivotal roles in R&D projects that
        span IoT sensors, Fullstack SaaS systems, and data aggregation servers.
        In addition to my technical prowess, I possess knowledge and interest in
        the fields of robotics, Unmanned Aerial Vehicles, and aerospace.
      </p>
      <div className="p-4">
        <img
          className="w-max md:w-8/12 rounded-md border-my-soft-bg border-2 ml-auto mr-auto"
          src="/plane_crash.jpg"
          alt="profile with rc plane"
        />
      </div>
      <h1 className="my-4 font-bold font-special text-4xl">
        My passion lies in...
      </h1>
      <p className="text-xl md:text-2xl text-justify">
        Designing web applications and crafting robust backend software to
        optimize and streamline systems. Beyond that, I'm deeply committed to
        developing software for Unmanned Aerial Vehicles. In my leisure hours,
        you'll often find me engrossed in the worlds of robotics and conducting
        in-depth research in the field of physics. Let's embark on a journey
        through the exciting realms of technology together! 🚀🤖🔬
      </p>
      <div className="p-4">
        <img
          className="w-max md:w-8/12 rounded-md border-my-soft-bg border-2 ml-auto mr-auto"
          src="/profile_gimbal.jpg"
          alt="profile photo by the window"
        />
      </div>
    </div>
  );
}

export default Home;
