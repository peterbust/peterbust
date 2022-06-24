import { CvEntry as CvEntryComponent } from "../../src/components/index";

const CvEntry = ({ slice }) => (
  <section>
    <CvEntryComponent slice={slice} />
    <style jsx>{`
      section {
        margin: 4rem auto;
        max-width: 800px;
        padding: 1rem;
      }
    `}</style>
  </section>
);

export default CvEntry;
