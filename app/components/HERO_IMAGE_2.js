import Image from "next/image";
import heroImage from "../public/imageAssets/hero-image-2.png";
import dots from "../public/shapes/dots.svg";


const HERO_IMAGE_2 = () => {
    return (
        <div className={`relative`}>
            <Image
                src={heroImage}
                alt="hero image"
            />
            <Image
                src={dots}
                alt="dots"
                className={`absolute right-1.5 bottom-32`}
            />
            <Image
                src={dots}
                alt="dots"
                className={`absolute inset-3`}
            />
        </div>
    )
}

export default HERO_IMAGE_2;