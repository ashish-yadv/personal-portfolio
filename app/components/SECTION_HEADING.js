import styles from "./global.module.css"

const SECTION_HEADING = ({ headingText }) => {
    return (
        <h2 className={`inline-block text-3xl mb-3 relative`}>
            <span className={`${styles.pound} mr-1.5`}>#</span>
            {headingText}
        </h2>
    )
}

export default SECTION_HEADING;