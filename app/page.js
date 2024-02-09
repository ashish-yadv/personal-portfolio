import SECTION_HEADING from "./components/SECTION_HEADING";
import READ_MORE from "./components/buttons/READ_MORE";
import ABOUT_ME_SECTION from "./components/sections/ABOUT_ME_SECTION";
import CONTACTS_SECTION from "./components/sections/CONTACTS_SECTION";
import FOOTER from "./components/FOOTER";
import HERO_SECTION from "./components/sections/HERO_SECTION";
import PROJECTS_SECTION from "./components/sections/PROJECTS_SECTION";
import SKILLS_SECTION from "./components/sections/SKILLS_SECTION";
import VECTOR from "./components/VECTOR";
import HERO_IMAGE_2 from "./components/HERO_IMAGE_2";

export default function Home() {

  return (
    <>
      {/* Hero Section */}
      <main className={`px-4 py-8 md:flex md:justify-between`}>
        <HERO_SECTION />
      </main>

      {/* Projects Section */}
      <section className={`my-20 px-4`}>
        <SECTION_HEADING headingText={`projects`} />
        <PROJECTS_SECTION />
      </section>

      {/* Skills Section */}
      <section className={`my-20 px-4`}>
        <SECTION_HEADING headingText={`skills`} />
        <div className={`flex`}>
          <VECTOR />
          <SKILLS_SECTION />
        </div>
      </section>

      {/* About me Section */}
      <section className={`my-20 px-4 `}>
        <SECTION_HEADING headingText={`about-me`} />
        <div className={`md:flex`}>
          <div className={`md:w-5/6`}>
            <ABOUT_ME_SECTION />
            <button className={`mt-3`}>
              <READ_MORE />
            </button>
          </div>
          <div className={`hidden md:block`}>
            <HERO_IMAGE_2 />
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className={`my-20 px-4`}>
        <SECTION_HEADING headingText={`contact`} />
        <CONTACTS_SECTION />
      </section>

      {/* Footer */}
      <footer className={`mt-20 px-4 md:mt-16`}>
        <FOOTER />
      </footer>
    </>
  );
}
