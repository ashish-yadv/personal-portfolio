import styles from "../global.module.css"

const ABOUT_ME_SECTION = () => {
    return (
        <div>
            <p className={`${styles.text_gray} inline mr-1.5 text-xs`}>
                Hello, I’m Elias!
                <br />
                <br />
                I’m a self-taught front-end developer based in Kyiv, Ukraine. I can develop responsive websites from scratch and raise them into modern user-friendly web experiences.
                <br />
                <br />
                Transforming my creativity and knowledge into a websites has been my passion for over a year. I have been helping various clients to establish their presence online. I always strive to learn about the newest technologies and frameworks.
            </p>
            <br />
        </div>
    )
}

export default ABOUT_ME_SECTION;