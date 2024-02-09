import Image from "next/image";
import Link from "next/link";
import styles from "../components/global.module.css";
import LOGO_MOBILE from "./LOGO_MOBILE";

// Logo imports: 
import githubLogo from "../public/icons/github.png";
import figmaLogo from "../public/icons/figma.svg";
import discordLogo from "../public/icons/discord.svg";

const FOOTER = () => {
    return (
        <div className={`${styles.border_top}`}>
            <div className={`mt-1.5 flex justify-between items-center`}>
                <LOGO_MOBILE className={`inline`}></LOGO_MOBILE>
                <p className={`${styles.text_gray} inline mr-1.5 text-xs`}>ashishy0802@gmail.com</p>
            </div>
            <p className={`${styles.text_gray} inline mr-1.5 text-xs`}>Web designer and front-end developer</p>
            <div className={`flex items-center`}>
                Media
                <div className={`flex ml-7`}>
                    <Link href={`https://github.com/ashish-yadv`} className={`m-1.5`}>
                        <Image
                            src={githubLogo}
                            width={30}
                            height={30}
                            alt={`github logo`}
                        />
                    </Link>
                    <Link href={`/`} className={`m-1.5`}>
                        <Image
                            src={figmaLogo}
                            width={30}
                            height={30}
                            alt={`figma logo`}
                        />
                    </Link>
                    <Link href={`/`} className={`m-1.5`}>
                        <Image
                            src={discordLogo}
                            width={30}
                            height={30}
                            alt={`figma logo`}
                        />
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default FOOTER;