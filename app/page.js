import Image from "next/image";
import SchemesAndPolicies from "./components/SchemesAndPolicies";
import DPIIT from './DPIIT/page'
export default function Home() {
  return (
    <>
    <SchemesAndPolicies/>
    <DPIIT />
    </>
  );
}
