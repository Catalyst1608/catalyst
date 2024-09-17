import Image from "next/image";
import SchemesAndPolicies from "./components/SchemesAndPolicies";

import DPIIT from './DPIIT/page'
import UserType from './components/UserType'

import Carousel from "./components/Carousel";
import KeyInitiatives from "./components/KeyInitiatives";

export default function Home() {
  return (
    <>
    <Carousel/>
    <KeyInitiatives/>
    <SchemesAndPolicies/>
    <DPIIT />
    </>
  );
}
