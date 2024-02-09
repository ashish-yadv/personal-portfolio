import HERO_IMAGE from "../HERO_IMAGE";
import styles from "../global.module.css";

const HERO_SECTION = () => {
    return (
        <>
            <div className={`md:w-3/6`}>
                <span className={`hero_text text-3xl font-semibold`}>
                    Ashish is a&nbsp;
                    {/* <p className={`${styles.text_primary} inline`}>web designer&nbsp;</p>
                    and */}
                    <p className={`${styles.text_primary}`}>front-end developer</p>
                </span>

                <p className={`${styles.text_gray} text-base my-8`}>He crafts responsive websites where technologies meet creativity</p>
            </div>

            <HERO_IMAGE />
        </>
    )
}

export default HERO_SECTION;