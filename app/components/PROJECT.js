import Image from "next/image";
import styles from "@/app/components/global.module.css";
import LIVE_AND_GITHUB from "./buttons/LIVE_AND_GITHUB";
import CACHED from "./buttons/CACHED";
import coverImage from "../public/imageAssets/chert_nodes.jpg";
import Link from "next/link";

const PROJECT = ({ projectInformation }) => {

    // Structure:
    /*
        const projectInformation = {
            heading: "",
            imageUrl: "",
            technologies: [],
            description: "",
        }
    */

    return (
        <div className={`${styles.border_2} min-w-60 inline-block mr-3 lg:w-60`}>
            {/* Remove the image 'src' with respective coverImage url */}
            <Image
                src={coverImage}
                width={330}
                alt="Cover Image"
            />

            <ul className={`${styles.border_top_bottom} max-w-full flex flex-wrap p-2`}>
                {
                    projectInformation.technologies.map((technology, index) => (
                        <li key={index} className={`text-xs mr-3`}>{technology}</li>
                    ))
                }
            </ul>
            <div className={`p-2`}>
                <h3 className={`text-2xl font-medium my-2`}>{projectInformation.heading}</h3>
                <p className={`${styles.text_gray} text-xs mb-3`}>{projectInformation.description}</p>

                <div className={`flex gap-4`}>
                    <Link href={`/`}><LIVE_AND_GITHUB text="Live" className={`mr-3`} /></Link>
                    <Link href={`/`}><CACHED /></Link>
                </div>
            </div>
        </div>
    )
}

export default PROJECT;