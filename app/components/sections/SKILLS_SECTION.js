import SKILL from "../SKILL";

const SKILLS_SECTION = () => {

    const skills = [
        {
            heading: 'Languages',
            technologies: ['JavaScript', 'TypeScript', 'Python'],
        },
        {
            heading: 'Databases',
            technologies: ['SQLite', 'PostgresSQL', 'Mongo'],
        },
        {
            heading: 'Tools',
            technologies: ['VSCode', 'Neovim', 'Linux', 'Figma', 'XFCE', 'Arch', 'Git', 'Font Awesome'],
        },
        {
            heading: 'Other',
            technologies: ['HTML', 'CSS', 'EJS', 'SCSS', 'REST', 'Jinja'],
        },
        {
            heading: 'Frameworks',
            technologies: ['React', 'Vue', 'Disnake', 'Discord.js', 'Flask', 'Express.js'],
        },
    ];

    return (
        <div className={`w-full flex overflow-auto md:flex-wrap md:justify-end`}>
            {
                skills.map((skill, index) => (
                    <SKILL key={index} skillInformation={skill} />
                ))
            }
        </div>
    )
}

export default SKILLS_SECTION;