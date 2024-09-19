import SchemesAndPolicies from "./components/SchemesAndPolicies";

import DPIIT from './DPIIT/page'
import UserType from './components/UserType'

import Carousel from "./components/Carousel";
import Header from "./components/Header";

export default function Home() {
  return (
    <>
    <Carousel />
    <DPIIT />
    <SchemesAndPolicies/>
    </>
  );
}
