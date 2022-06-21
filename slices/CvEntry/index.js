import { CvEntrySlice } from "../../src/slices/index";

const CvEntry = ({ slice }) => (
  <section>
    <CvEntrySlice slice={slice} />
    <style jsx>{`
      section {
        max-width: 800px;
        margin: 4em auto;
      }
    `}</style>
  </section>
);

export default CvEntry;
