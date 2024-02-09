import FOOTER from "../components/FOOTER";
import PROJECT from "../components/PROJECT";
import SMALL_PROJECT from "../components/SMALL_PROJECT";
import styles from "../components/global.module.css";

const page = () => {

  // Complete Apps:
  const completeApps = [
    {
      heading: "ChertNodes",
      imageUrl: "",
      technologies: ["HTML", "SCSS", "Python", "Flask"],
      description: "Minecraft servers hosting",
      isChached: true,
    },
    {
      heading: "ProjectX",
      imageUrl: "",
      technologies: ["React", "Express", "Discord.js", "Node.js", "HTML", "SCSS", "Python", "Flask"],
      description: "Discord anti-crash bot",
      isChached: false,
    },
    {
      heading: "Kahoot Answers Viewer",
      imageUrl: "",
      technologies: ["CSS", "Express", "Node.js"],
      description: "Get answers to you kahoot quiz",
      isChached: false,
    },
  ];

  // Small projects:
  const smallProjects = [
    {
      technologies: ['Discord.js', 'TS', 'JS'],
      heading: 'Bot boilerplate',
      description: 'Start creating scalable discord.js bot with typescript in seconds',
      buttonText: 'Github',
    },
    {
      technologies: ['Next.js', 'Tailwind css'],
      heading: 'My blog',
      description: 'Front-end of my future blog website is written in Next.js',
      buttonText: 'Github',
    },
    {
      technologies: ['Figma'],
      heading: 'Chess pro',
      description: 'Figma landing page about service for viewing chess tournaments',
      buttonText: 'Figma',
    },
    {
      technologies: ['Figma'],
      heading: 'Crash protect website',
      description: 'Figma template for website about anti-raid, anti-crash discord bot',
      buttonText: 'Figma',
    },
    {
      technologies: ['HTML', 'CSS'],
      heading: 'CSS experiments',
      description: 'Collection of my different little projects in css',
      buttonText: 'Live',
    },
    {
      technologies: ['Lua', 'NeoVim'],
      heading: 'Web Dev nvim config',
      description: 'Config for neovim perfect for web developer',
      buttonText: 'Github',
    },
    {
      technologies: ['Python', 'Quartz', 'HTML'],
      heading: 'Ooku',
      description: 'Simple link shortener with auth',
      buttonText: 'Live',
    },
    {
      technologies: ['Figma'],
      heading: 'School website',
      description: 'Figma template website for my school',
      buttonText: 'Figma',
    },
  ];

  return (
    <>
      <h2 className={`text-xl relative m-2`}>
        <span className={`${styles.oblique} mr-1.5`}>/</span>
        projects
      </h2>

      {/* Complete apps section */}
      <div className={`m-2`}>
        <h2 className={`text-3xl mt-6 mb-3 relative`}>
          <span className={`${styles.pound} mr-1.5`}>#</span>
          complete-apps
        </h2>

        <section className={`flex overflow-scroll`}>
          {
            completeApps.map((projectInformation, index) => (
              <PROJECT projectInformation={projectInformation} key={index} />
            ))
          }
        </section>
      </div>

      {/* small-projects section */}
      <div className={`m-2 md:mt-20`}>
        <h2 className={`text-3xl mt-6 mb-3 relative`}>
          <span className={`${styles.pound} mr-1.5`}>#</span>
          small-projects
        </h2>

        <section className={`flex items-center items-baseline overflow-scroll`}>
          {
            smallProjects.map((projectInformation, index) => (
              <SMALL_PROJECT projectInformation={projectInformation} key={index} />
            ))
          }
        </section>
      </div>

      <footer className={`mt-12 px-4`}>
        <FOOTER />
      </footer>
    </>
  )
}

export default page;