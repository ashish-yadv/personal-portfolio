import styles from "./global.module.css";
import Image from "next/image";
import Link from "next/link";

// Icons import:
import linkedInLogo from "../public/icons/linkedin.svg";
import emailLogo from "../public/icons/email.svg";
import twitterLogo from "../public/icons/twitter.svg";
import githubLogo from "../public/icons/github.png";

const CONTACT_INFORMATION = () => {

    const socials = [
        {
            // LinkedIn
            displayText: "ashish-yadv",
            href: "https://www.linkedin.com/in/ashish-yadv/",
            icon: linkedInLogo,
        },
        {
            // Twitter
            displayText: "ashishytwt",
            href: "https://twitter.com/ashishytwt",
            icon: twitterLogo,
        },
        {
            // Github
            displayText: "ashish-yadv",
            href: "https://github.com/ashish-yadv",
            icon: githubLogo,
        },
        {
            // E-Mail
            displayText: "email",
            href: "mailto:ashishy0802@gmail.com",
            icon: emailLogo,
        },
    ];

    return (
        <div className={`${styles.border_2} w-full mr-3 md:w-full`}>
            <h3 className={`px-2`}>reach me here</h3>
            <div className={`flex flex-wrap m-1.5`}>
                {
                    socials.map((social, index) => (
                        <Link href={social.href} key={index} className={`${styles.text_gray} hover:text-white flex justify-between items-center text-xs mx-4 my-1.5`}>
                            <Image
                                src={social.icon}
                                alt={social.icon}
                                width={20}
                                height={20}
                                className={`mr-1.5`}
                            />
                            {social.displayText}
                        </Link>
                    ))
                }
            </div>
        </div>
    )
}

export default CONTACT_INFORMATION;