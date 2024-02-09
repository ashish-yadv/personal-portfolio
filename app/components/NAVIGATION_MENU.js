"use client"
import Link from "next/link";
import HAMBURGER_OPEN from "./menu/HAMBURGER_OPEN";
import HAMBURGER_CLOSE from "./menu/HAMBURGER_CLOSE";
import LOGO_MOBILE from "./LOGO_MOBILE";
import { useState } from "react";

// Styles
import styles from "../components/global.module.css";

const NAVIGATION_MENU = () => {
    let flag = true;

    const [isMenuOpen, setMenuOpen] = useState(true);

    const handleMenu = () => {
        setMenuOpen(!isMenuOpen);
    };

    // All routes:
    const routes = [
        {
            href: '/',
            text: 'home'
        },
        {
            href: '../projects',
            text: 'projects',
        },
        {
            href: '../about-me',
            text: 'about-me',
        },
        {
            href: '../contact',
            text: 'contact',
        },
    ];

    return (
        <div className={`flex justify-center items-center`}>
            {
                isMenuOpen ?
                    (
                        <button onClick={handleMenu}>
                            <HAMBURGER_OPEN />
                        </button>
                    )
                    :
                    (
                        <div className={`${styles.navigation_container} w-full h-full p-4 flex flex-col fixed left-0 top-0 xl:px-72`}>
                            <div className={`flex justify-between pb-4`}>
                                <LOGO_MOBILE />
                                <button onClick={handleMenu}>
                                    <HAMBURGER_CLOSE />
                                </button>
                            </div>
                            {
                                routes.map((route, index) => (
                                    <Link onClick={handleMenu} href={route.href} key={index} className={`${styles.text_gray} text-3xl my-6 hover:text-white`}>
                                        <span className={`${styles.pound} mr-1.5`}>#</span>
                                        {route.text}
                                    </Link>
                                ))
                            }
                        </div>
                    )
            }
        </div>
    )
}

export default NAVIGATION_MENU;