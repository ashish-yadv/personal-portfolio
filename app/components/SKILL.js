import styles from "./global.module.css";

const SKILL = ({ skillInformation }) => {
    // Structure:
    /* const skillInformation = {
        heading: 'Languages',
        technologies: ['JavaScript', 'TypeScript', 'Python'],
    } */

    return (
        <div className={`${styles.border_2} inline-block min-w-32 mr-3 md:w-16 md:m-1.5`}>
            <h3 className={`${styles.border_bottom} px-2`}>{skillInformation.heading}</h3>
            <div className={`flex flex-wrap m-1.5`}>
                {
                    skillInformation.technologies.map((skill, index) => (
                        <p key={index} className={`${styles.text_gray} inline mr-1.5 text-xs`}>
                            {skill}
                        </p>
                    ))
                }
            </div>
        </div>
    )
}

export default SKILL;