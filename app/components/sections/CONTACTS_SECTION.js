import CONTACT_INFORMATION from "../CONTACT_INFORMATION.js";
import styles from "../global.module.css";

const CONTACTS_SECTION = () => {
    return (
        <div className={`md:flex md:justify-between`}>
            <p className={`${styles.text_gray} inline mr-1.5 text-xs md:w-1/2`}>
                I’m interested in freelance opportunities. However, if you have other request or question, don’t hesitate to contact me
            </p>
            <br />
            <br />
            <div className={`md:w-1/4 md:flex justify-end`}>
                <CONTACT_INFORMATION />
            </div>
        </div>
    )
}

export default CONTACTS_SECTION;