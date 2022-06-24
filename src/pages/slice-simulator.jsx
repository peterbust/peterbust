import { SliceSimulator } from "@prismicio/slice-simulator-react";
import { SliceZone } from "@prismicio/react";
import Head from "next/head";

import { components } from "../../slices/index";
import state from "../../.slicemachine/libraries-state.json";

const SliceSimulatorPage = () => (
  <>
    <Head>
      <title>Primic Slice Simulator</title>
      <meta name="robots" content="noindex" />
    </Head>
    <SliceSimulator
      sliceZone={({ slices }) => (
        <SliceZone slices={slices} components={components} />
      )}
      state={state}
    />
  </>
);

export default SliceSimulatorPage;
