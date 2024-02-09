import PROJECT from "../PROJECT";

const PROJECTS_SECTION = () => {

    const projects = [
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

    return (
        <div>
            <div className={`flex align-base overflow-auto`}>
                {
                    projects.map((projectInformation, index) => (
                        <PROJECT projectInformation={projectInformation} key={index} />
                    ))
                }
            </div>
        </div>
    )
}

export default PROJECTS_SECTION;