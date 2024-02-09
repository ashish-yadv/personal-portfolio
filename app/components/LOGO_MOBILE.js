import Link from "next/link"
import Image from "next/image"
import logoSolid from "../public/logos/logo-solid.svg";

const LOGO_MOBILE = () => {
    return (
        <>
            <Link className="flex" href="/">
                <Image
                    src={logoSolid}
                    width={16}
                    height={16}
                    alt="logo"
                    className={`mr-1.5`}
                />
                Ashish
            </Link>
        </>
    )
}

export default LOGO_MOBILE;