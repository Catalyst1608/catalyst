import Image from "next/image";
import SchemesAndPolicies from "./components/SchemesAndPolicies";

import DPIIT from './DPIIT/page'

import Carousel from "./components/Carousel";

export default function Home() {
  return (
    <>
    <Carousel/>
    <SchemesAndPolicies/>
    <DPIIT />
    </>
  );
}
