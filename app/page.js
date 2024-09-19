import SchemesAndPolicies from "./components/SchemesAndPolicies";
import DPIIT from "./DPIIT/page";
// import UserType from "./components/UserType";
import Carousel from "./components/Carousel";
// import Header from "./components/Header";
import KeyInitiatives from './components/KeyInitiatives'
import App from './components/bar'

export default function Home() {
  return (
    <>
      <App/>
      <Carousel />
      <KeyInitiatives/>
      <SchemesAndPolicies />
      <DPIIT />
    </>
  );
}
