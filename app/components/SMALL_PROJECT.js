import styles from "./global.module.css";
import LIVE_AND_GITHUB from "./buttons/LIVE_AND_GITHUB";
import Link from "next/link";

const SMALL_PROJECT = ({ projectInformation }) => {
    // Structure:
    /* const smallProject = {
        technologies: ['Discord.js', 'TS', 'JS'],
        heading: 'Bot boilerplate',
        description: 'Start creating scalable discord.js bot with typescript in seconds',
        buttonText: 'Github',
    } */

    return (
        <div className={`${styles.border_2} inline-block min-w-52 mr-2`}>
            <div className={`${styles.border_bottom} px-2`}>
                {
                    projectInformation.technologies.map((skill, index) => (
                        <p key={index} className={`${styles.text_gray} inline mr-1.5 text-xs`}>
                            {skill}
                        </p>
                    ))
                }
            </div>
            <div className={`m-2 flex flex-col`}>
                <h3 className={``}>{projectInformation.heading}</h3>
                <p className={`${styles.text_gray} text-xs my-2`}>
                    {projectInformation.description}
                </p>
                <Link href={`/`} className={`my-5`}>
                    <LIVE_AND_GITHUB text={projectInformation.buttonText} />
                </Link>
            </div>
        </div>
    )
}

export default SMALL_PROJECT;