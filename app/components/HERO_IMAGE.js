import Image from "next/image";
import logoOutline from "../public/logos/logo-outline.svg";
import heroImage from "../public/imageAssets/hero-image-mobile.png";
import dots from "../public/shapes/dots.svg";


const HERO_IMAGE = () => {
    return (
        <div className="w-80 h-64 relative flex justify-center">
            <Image 
                src={logoOutline}
                width={120}
                alt="Logo Outline"
                className="absolute left-0 top-9"
            />
            <Image 
                src={heroImage}
                alt="Hero Image"
                className="absolute h-full"
            />
            <Image 
                src={dots}
                alt="dots"
                className="absolute right-9 bottom-9"
            />
            <div className="absolute -bottom-3 border-gray-400">
                Currently working on portfolio
            </div>
        </div>
    )
}

export default HERO_IMAGE;