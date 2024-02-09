import FOOTER from "../components/FOOTER";
import HERO_IMAGE_2 from "../components/HERO_IMAGE_2";
import SECTION_HEADING from "../components/SECTION_HEADING";
import styles from "../components/global.module.css";
import ABOUT_ME_SECTION from "../components/sections/ABOUT_ME_SECTION";
import SKILLS_SECTION from "../components/sections/SKILLS_SECTION";

const page = () => {
  return (
    <>
      <h2 className={`text-xl relative m-2`}>
        <span className={`${styles.oblique} mr-1.5`}>/</span>
        about-me
      </h2>

      <section className={`px-4`}>
        <div className={`md:flex`}>
          <div className={`md:w-5/6`}>
            <ABOUT_ME_SECTION />
          </div>
          <div className={`hidden md:block`}>
            <HERO_IMAGE_2 />
          </div>
        </div>
      </section>

      <section className={`mt-12 px-4`}>
        <SECTION_HEADING headingText={`skills`} />
        <SKILLS_SECTION />
      </section>

      <footer className={`mt-12 px-4`}>
        <FOOTER />
      </footer>
    </>
  )
}

export default page