import CONTACT_INFORMATION from "../components/CONTACT_INFORMATION";
import styles from "../components/global.module.css";
import FOOTER from "../components/FOOTER";

const page = () => {

  return (
    <>
      <h2 className={`text-xl relative m-2`}>
        <span className={`${styles.oblique} mr-1.5`}>/</span>
        contact
      </h2>

      <div className={`md:flex justify-between`}>
        <div className={`w-full p-4 lg:w-1/2`}>
          <p className={`${styles.text_gray} inline mr-1.5 text-xs`}>
            Hello, I’m Elias!
            <br />
            <br />
            I’m interested in freelance opportunities. However, if you have other request or question, don’t hesitate to contact me
          </p>
          <br />
        </div>

        <div className={`m-4 justify-end md:w-1/2 lg:w-1/2`}>
          <CONTACT_INFORMATION />
        </div>
      </div>

      <footer className={`mt-12 px-4 w-full relative -bottom-20 md:-bottom-40 lg:-bottom-52 xl:-bottom-52`}>
        <FOOTER />
      </footer>
    </>
  )
}

export default page;