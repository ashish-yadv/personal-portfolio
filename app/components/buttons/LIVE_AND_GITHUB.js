import styles from "../global.module.css"

const LIVE_AND_GITHUB = ({ text }) => {
    return (
        <>
            <span className={`${styles.border_1} px-2 py-0.5`} >{text} &lt;&#126;&gt;</span>
        </>
    )
}

export default LIVE_AND_GITHUB;
// style = {{ borderColor: 'var{--primary }' }}