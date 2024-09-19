import SchemesAndPolicies from "./components/SchemesAndPolicies";

import DPIIT from './DPIIT/page'
import UserType from './components/UserType'
import App from './components/bar';
import Carousel from "./components/Carousel";
import Header from "./components/Header";

export default function Home() {
  return (
    <>
    <App/>
    <Carousel />
    <DPIIT />
    <SchemesAndPolicies/>
    </>
  );
}
