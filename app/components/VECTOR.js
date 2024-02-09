import Image from "next/image";
import logoOutline from "../public/logos/logo-outline.svg";
import dots from "../public/shapes/dots.svg";
import rectangle from "../public/shapes/rectangle.svg";

const VECTOR = () => {
    return (
        <div className={`hidden inline-block relative w-1/2 md:block`}>
            <Image
                src={dots}
                width={63}
                height={63}
                alt='dots image'
                className={`absolute top-2 left-8`}
            />
            <Image
                src={dots}
                width={63}
                height={63}
                alt='dots image'
                className={`absolute bottom-16 right-20`}
            />
            <Image
                src={rectangle}
                width={86}
                height={86}
                alt='dots image'
                className={`absolute top-0 right-4`}
            />
            <Image
                src={rectangle}
                width={52}
                height={52}
                alt='dots image'
                className={`absolute right-0 bottom-8`}
            />
            <Image
                src={logoOutline}
                width={63}
                height={63}
                alt='dots image'
                className={`absolute left-4 bottom-0`}
            />
        </div>
    )
}

export default VECTOR;