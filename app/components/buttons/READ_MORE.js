import Link from "next/link";
import styles from "../global.module.css"

const READ_MORE = () => {
    return (
        <Link href={`/about-me`} className={`${styles.border_1} inline px-2 py-0.5`}>
            Read more &#8594;
        </Link>
    )
}

export default READ_MORE;